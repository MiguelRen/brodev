import type { ExcelExporter, ExcelReportOptions } from './excelExporter.interface'

export class ExcelJSExporterAdapter implements ExcelExporter {
  async exportToExcel<T>(options: ExcelReportOptions<T>): Promise<void> {
    // Dynamic import to prevent SSR and build-time problems in Nuxt
    const ExcelJS = (await import('exceljs')).default || await import('exceljs')

    const workbook = new ExcelJS.Workbook()
    const sheetName = options.sheetName || 'Reporte'
    const worksheet = workbook.addWorksheet(sheetName, {
      views: [{ showGridLines: true }]
    })

    // 1. Configurar Columnas (sin headers automáticos en fila 1)
    worksheet.columns = options.columns.map(col => ({
      key: col.key,
      width: col.width || 20
    }))

    // 2. Membrete / Cabecera del Reporte
    // Fila 1: Margen superior vacío
    worksheet.getRow(1).height = 10

    // Fila 2: Título del Reporte
    worksheet.mergeCells('A2:H2')
    const titleCell = worksheet.getCell('A2')
    titleCell.value = options.title.toUpperCase()
    titleCell.font = { name: 'Arial', size: 15, bold: true, color: { argb: 'FFFFFFFF' } }
    titleCell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF00214F' } // Azul oscuro corporativo #00214f
    }
    titleCell.alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getRow(2).height = 35

    // Fila 3: Información adicional (Total de registros)
    worksheet.mergeCells('A3:H3')
    const statsCell = worksheet.getCell('A3')
    statsCell.value = `Total de Leads Registrados: ${options.data.length}`
    statsCell.font = { name: 'Arial', size: 10, bold: true, color: { argb: 'FF2A2A2A' } }
    statsCell.alignment = { vertical: 'middle', horizontal: 'left' }
    worksheet.getRow(3).height = 20

    // Fila 4: Fecha y hora de generación
    worksheet.mergeCells('A4:H4')
    const dateCell = worksheet.getCell('A4')
    const formattedDate = new Date().toLocaleString('es-UY', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
    dateCell.value = `Fecha de Generación: ${formattedDate}`
    dateCell.font = { name: 'Arial', size: 9, italic: true, color: { argb: 'FF555555' } }
    dateCell.alignment = { vertical: 'middle', horizontal: 'left' }
    worksheet.getRow(4).height = 20

    // Fila 5: Fila vacía de separación
    worksheet.getRow(5).height = 10

    // 3. Fila de Cabeceras de la Tabla (Fila 6)
    const headerRowNumber = 6
    const headerRow = worksheet.getRow(headerRowNumber)
    headerRow.height = 25
    headerRow.values = options.columns.map(col => col.header)

    headerRow.eachCell((cell) => {
      cell.font = { name: 'Arial', size: 10, bold: true, color: { argb: 'FFFFFFFF' } }
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF00214F' } // Azul corporativo
      }
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true }
      cell.border = {
        top: { style: 'thin', color: { argb: 'FFCCCCCC' } },
        left: { style: 'thin', color: { argb: 'FFCCCCCC' } },
        bottom: { style: 'medium', color: { argb: 'FF000000' } },
        right: { style: 'thin', color: { argb: 'FFCCCCCC' } }
      }
    })

    // 4. Rellenar Filas de Datos (Empezando en Fila 7)
    options.data.forEach((item: any, index) => {
      const currentRowNumber = headerRowNumber + 1 + index
      const row = worksheet.getRow(currentRowNumber)
      row.height = 20

      // Formatear la fila de datos
      const rowValues = options.columns.map(col => item[col.key] ?? '')
      row.values = rowValues

      // Estilos de filas
      const isEven = index % 2 === 0
      const rowBgColor = isEven ? 'FFFFFFFF' : 'FFF2F6FA' // Alternancia blanca y celeste suave

      row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
        cell.font = { name: 'Arial', size: 9.5, color: { argb: 'FF333333' } }
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: rowBgColor }
        }
        cell.border = {
          top: { style: 'thin', color: { argb: 'FFE5E5E5' } },
          left: { style: 'thin', color: { argb: 'FFE5E5E5' } },
          bottom: { style: 'thin', color: { argb: 'FFE5E5E5' } },
          right: { style: 'thin', color: { argb: 'FFE5E5E5' } }
        }

        const colKey = options.columns[colNumber - 1]?.key

        // Alineación según columna
        if (['createdAt', 'phone', 'status'].includes(colKey)) {
          cell.alignment = { vertical: 'middle', horizontal: 'center' }
        } else {
          cell.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true }
        }

        // Formato para Estado (status)
        if (colKey === 'status') {
          const statusValue = String(cell.value || '').toUpperCase()
          cell.font = { name: 'Arial', size: 9.5, bold: true }
          if (statusValue === 'PENDING') {
            cell.font = { name: 'Arial', size: 9.5, bold: true, color: { argb: 'FFA17A00' } } // Amarillo/Oro
          } else if (statusValue === 'CONTACTED') {
            cell.font = { name: 'Arial', size: 9.5, bold: true, color: { argb: 'FF005691' } } // Azul
          } else if (statusValue === 'RESOLVED') {
            cell.font = { name: 'Arial', size: 9.5, bold: true, color: { argb: 'FF1F6E43' } } // Verde
          }
        }
      })
    })

    // 5. Filtros Automáticos (En la Fila de Cabeceras)
    const totalColumns = options.columns.length
    const lastColLetter = String.fromCharCode(64 + totalColumns)
    const lastRowNumber = headerRowNumber + options.data.length
    worksheet.autoFilter = `A${headerRowNumber}:${lastColLetter}${lastRowNumber}`

    // 6. Auto-ajustar el Ancho de las Columnas según Contenido
    worksheet.columns.forEach((column) => {
      let maxCellLength = 0
      column.eachCell!({ includeEmpty: true }, (cell, rowNumber) => {
        // Ignorar las filas de membrete para no deformar el ancho de las columnas
        if (rowNumber >= headerRowNumber) {
          const cellVal = cell.value ? String(cell.value) : ''
          if (cellVal.length > maxCellLength) {
            maxCellLength = cellVal.length
          }
        }
      })
      column.width = Math.max(maxCellLength + 4, 12)
    })

    // 7. Descargar en el Cliente
    const buffer = await workbook.xlsx.writeBuffer()
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
    const downloadUrl = window.URL.createObjectURL(blob)
    const downloadLink = document.createElement('a')
    downloadLink.href = downloadUrl

    // Agregar fecha dinámica formateada al nombre de archivo
    const formattedFileDate = new Date().toISOString().split('T')[0].replace(/-/g, '_')
    const finalFilename = `${options.filename}_${formattedFileDate}.xlsx`

    downloadLink.download = finalFilename
    downloadLink.click()

    // Limpieza
    window.URL.revokeObjectURL(downloadUrl)
  }
}
