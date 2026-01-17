# Proyect Planing by AI help
Aquí tienes un resumen estructurado, las herramientas clave y los conceptos que deberías investigar, basados en el video de Fazt "Usar IA para planificar antes de programar cambia todo".

📝 Resumen del Video
El video aborda un error muy común en los desarrolladores: empezar a escribir código sin una planificación clara, lo que lleva a preguntas existenciales a mitad del proyecto ("¿Por qué estoy haciendo esto?", "¿Esto realmente va aquí?") y a un "código espagueti".

La propuesta central es cambiar el flujo de trabajo: Pensar → Planificar con IA → Programar.

1. El Problema: Programar sin Plan
   El editor de código no resuelve problemas de diseño.

Crear archivos y carpetas sin rumbo solo hace más visible el desastre.

Sin plan, improvisas constantemente, olvidas por qué tomaste decisiones y la IA pierde contexto fácilmente.

2. La Solución: Preguntas antes de Código.  
   Antes de escribir una sola línea, debes responder:

+ ¿Qué voy a construir exactamente?

+ ¿Cuál es el resultado esperado?

+ ¿Qué pasos necesito?

+ ¿Qué puede fallar?

+ ¿Qué herramientas usaré?

3. El Método: De Notas a Planificación Estructurada  
   No necesitas diagramas complejos de ingeniería al inicio:

Notas Rápidas / Dibujos: Usa notas simples en el móvil o dibujos rápidos en herramientas como Excalidraw (listas de usuarios, roles, páginas).

Alimentar a la IA: Pasa esas notas "sucias" a la IA para que ella:

Organice las ideas.

Detecte huecos lógicos.

Proponga una estructura de proyecto.

Divida el problema en pasos pequeños.

4. El "Artefacto" Central: Archivos Markdown (.md)
   La planificación deja de ser algo mental y se convierte en un archivo físico en tu repositorio (ej. PLAN.md, AGENTS.md o un PRD).

Valor: Este archivo sirve como la "verdad absoluta" del proyecto.

Uso con IA: En lugar de explicarle el proyecto desde cero a cada nueva sesión de chat, simplemente le das este archivo como contexto.

Evolución: El archivo se actualiza conforme el código avanza. Sirve para generar documentación, onboarding de nuevos desarrolladores o refactorización futura.

5. Nivel Avanzado: Automatización con MCP
   Menciona el uso de MCP (Model Context Protocol) para conectar la IA con herramientas externas.

En lugar de pasar tareas manualmente a Notion o Jira, la IA puede leer tu archivo de planificación (.md) y crear los tickets/tareas automáticamente en esas plataformas usando MCP.

🛠 Herramientas Tecnológicas Adecuadas
Para implementar este flujo de trabajo, estas son las herramientas mencionadas o recomendadas implícitamente:

Cursor (Editor de Código):

Es el editor estrella para esto. Fazt menciona características como "Composer" o modos de planificación (Spec Mode) donde la IA puede crear múltiples archivos y planificar antes de editar código.

Excalidraw:

Para hacer los bocetos iniciales visuales y rápidos que luego le pasas a la IA para que los interprete.

Markdown (.md):

No es una herramienta per se, pero es el formato estándar obligatorio para tu documentación y planificación (leíble por humanos y por IAs).

Model Context Protocol (MCP):

Tecnología para conectar tu IA (como Claude o la de Cursor) con servidores de datos externos (bases de datos, Notion, Slack, GitHub).

Hostinger:

Mencionado como opción para desplegar (VPS) una vez tengas tu proyecto listo.

🧠 Conceptos, Frases y Temas a Investigar
Para sacar el máximo provecho a esta metodología, te recomiendo profundizar en estos términos:

PRD (Product Requirement Document):

Investiga: ¿Cómo escribir un PRD efectivo para software? Es el documento que describe qué hace el producto, no cómo (la IA agradece mucho tener un PRD claro).

Spec-Driven Development (Desarrollo guiado por especificaciones):

La idea de escribir primero las especificaciones (specs) y que el código sea una consecuencia de ellas. En Cursor, esto se llama a veces "Plan Mode".

Context Window (Ventana de Contexto):

Entender por qué darle un archivo .md bien resumido es mejor que pegarle 50 archivos de código desordenados.

Model Context Protocol (MCP):

Frase clave: "Cómo conectar Cursor con Notion usando MCP" o "Crear servidor MCP para leer archivos locales". Es el futuro de la integración de IA.

"Planning as Code" (Planificación como código):

El concepto de versionar tu planificación (Git) igual que versionas tu código fuente.

📌 Puntos Más Importantes (Resumen Ejecutivo)
La IA es mejor planificando que programando: Úsala primero para estructurar el proyecto antes de pedirle que genere funciones.

El archivo PLAN.md es tu jefe: Mantén un archivo Markdown actualizado en tu repo. Es la memoria de tu proyecto y el contexto perfecto para la IA.

No confíes en tu memoria: Escribir la planificación te ahorra estrés y evita que el proyecto se vuelva inmanejable.

Automatiza la burocracia: Usa protocolos como MCP para que la planificación se convierta en tareas de Jira/Notion sin esfuerzo manual.
