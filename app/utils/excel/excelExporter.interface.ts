export interface ExcelColumn {
  header: string
  key: string
  width?: number
}

export interface ExcelReportOptions<T> {
  title: string
  subtitle?: string
  columns: ExcelColumn[]
  data: T[]
  filename: string
  sheetName?: string
}

export interface ExcelExporter {
  exportToExcel<T>(options: ExcelReportOptions<T>): Promise<void>
}
