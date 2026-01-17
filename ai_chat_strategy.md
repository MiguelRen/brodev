# Ai Chat Strategy



## 1. La Arquitectura de tus Conversaciones
    + A. Estrategia de "Silos" por Funcionalidad (No por Proyecto entero)  
         + Mal: "Proyecto CRM Completo"  
        + Bien: "Proyecto CRM - Módulo de Autenticación", "Proyecto CRM - Refactorización de Base de Datos", "Proyecto CRM - Frontend Dashboard".  

    + B. Nomenclatura Estricta
            [PROY-A] Backend API
            [PROY-B] Landing Page
            [TECNOLOGÍA] Dudas Generales React

## 2. El Poder de las Gemas (Gems): Tu equipo de expertos

    es una versión personalizada de Gemini con instrucciones pre-cargadas que no olvida.

### Cómo configurarlas (Ejemplos prácticos):

#### 1. Gema 1: "El Arquitecto General" (Tecnología Pura)

    + Instrucciones: "Eres un experto en Arquitectura de Software. Tu objetivo es responder dudas sobre patrones de diseño, Docker y SQL puro. No asumas reglas de negocio específicas, solo céntrate en la eficiencia técnica y seguridad. Stack preferido: Linux, Docker, PostgreSQL."

    Uso: Cuando tengas una duda técnica que aplica a ambos proyectos.

#### 2. Gema 2: "Dev Proyecto A (E-commerce)"

    + Instrucciones: "Actúa como desarrollador Senior del Proyecto A. El stack es PHP (Laravel) + Vue.js. La base de datos sigue la convención snake_case. Reglas críticas: Nunca sugerir eliminar registros (siempre soft-delete). El estilo de código debe seguir PSR-12."

    Uso: Desarrollo diario de ese proyecto específico.

#### 3. Gema 3: "Dev Proyecto B (App Móvil)"

    + Instrucciones: "Actúa como desarrollador de Flutter. Usamos Clean Architecture. El estado se maneja con BLoC. Prioriza el rendimiento en dispositivos gama baja."

    Resultado: Cuando cambias de proyecto, simplemente cambias de Gema. El contexto técnico y las reglas de negocio ya están "instaladas".

#### 4.  Gema 4: Super ejemplo
    Eres el Tech Lead y Desarrollador Senior del proyecto "PlusBienes".
     CONTEXTO:
    - Es una plataforma web (Landing + CRM personal) para una firma personal.
    - Stack Principal: Nuxt.js 3 (Vue 3 Composition API).
    - Despliegue: Hostinger (Node.js/VPS o Static).
    - Estilo: Tailwind CSS (recomendado para rapidez y estándares).

         TUS OBJETIVOS:
    1. Priorizar el SEO técnico (SSR/SSG) y la velocidad de carga (Core Web Vitals).
    2. Mantener el código modular usando 'Composables' para la lógica reutilizable.
    3. Asegurar que el diseño sea "Mobile First" y totalmente responsivo.
    4. Implementar seguridad robusta para el área de administración (CRM).

     REGLAS DE CODIFICACIÓN:
    - Usa TypeScript estricto siempre que sea posible.
    - Estructura de carpetas estándar de Nuxt 3.
    - Nomenclatura de archivos: kebab-case. Nomenclatura de variables: camelCase.
    - Para el manejo de estado global usa Pinia.
    - Nunca sugieras soluciones jQuery o librerías obsoletas.

    TONO:
    Profesional, técnico, directo y orientado a la arquitectura limpia (Clean Architecture).

## 3. Manejo de Contexto y Archivos (La "Input" de datos)
    Sube los archivos directamente al chat.
    Documentación Viva: Crea un archivo de texto llamado CONTEXTO_PROYECTO.md en la raíz de tu proyecto local. 
        Debe contener:

                Estructura de carpetas (output del comando tree).
                    /plusbienes
    ├── /assets          # CSS global, fuentes
    ├── /components      # Componentes Vue
    │   ├── /App         # Componentes generales (Header, Footer)
    │   ├── /Landing     # Componentes solo de la vista pública
    │   └── /Crm         # Componentes del panel administrativo
    ├── /composables     # Lógica de negocio (Hooks) - AQUÍ va la magia de "no mezclar código"
    │   ├── useAuth.ts   # Lógica de login/logout
    │   └── useLeads.ts  # Lógica para enviar/traer leads
    ├── /layouts         # Plantillas
    │   ├── default.vue  # Para la landing pública
    │   └── admin.vue    # Para el CRM (con sidebar, dashboard, etc)
    ├── /middleware      # Protección de rutas
    │   └── auth.ts      # Si no está logueado, redirigir a login
    ├── /pages           # Rutas de la web
    │   ├── index.vue
    │   ├── login.vue
    │   └── /admin       # Todas las rutas privadas van aquí
    │       ├── dashboard.vue
    │       └── leads.vue
    ├── /server          # API propia de Nuxt (Nitro)
    │   └── /api
    │       └── submit-lead.post.ts # Endpoint para recibir leads seguros
    └── nuxt.config.ts
                Tecnologías y versiones exactas.
                Objetivos actuales.     

*Importabte Usa File Tree Generato (extension de VSC) o comando tree /a /f > estructura.txt y luego borras los node modules...*

    El Prompt Inicial: Cada vez que inicies un chat nuevo para una funcionalidad, sube ese archivo CONTEXTO_PROYECTO.md y dile: "Lee este contexto. Vamos a trabajar en el módulo X".

## 4. Extensiones y Conexiones Externas
    
    1. Úsa las  Extensiones (icono de puzzle o @) para conectar tu vida digital sin salir del chat.
    2. @Google Drive: Si tienes la documentación de tus proyectos, diagramas de arquitectura o especificaciones en Drive (PDFs o Docs), puedes invocarlos:
        Ejemplo: "@Google Drive busca el documento 'Especificaciones Técnicas Proyecto A' y resume los requisitos del módulo de pagos".
    3. Google AI Studio (Nivel Avanzado):(es gratuito con límites altos). Allí puedes crear "System Instructions" mucho más complejas y guardar prompts como plantillas.

## 5. Técnicas de Prompting para Desarrolladores
    1. usa la estructura Persona + Contexto + Tarea + Formato.

        Ejemplo Malo: "¿Cómo arreglo este error en el controlador?"
        Ejemplo Bueno (Prompt de Ingeniería):
                (Persona/Gema ya cargada) 
                Contexto: Estoy trabajando en el UserController.php. Te adjunto el código actual y el error que arroja el log de Laravel (ver imagen adjunta). 
                Tarea: Analiza el flujo de datos. Identifica por qué la validación falla cuando el usuario es 'Admin'. 
                Restricciones: No cambies la lógica del Request Form. 
                Formato: Explica la causa raíz primero, luego dame solo el bloque de código corregido.


# Resumen del Flujo de Trabajo Ideal
    Configura tus Gemas: Una por cada Proyecto (con reglas de negocio) y una por cada Tecnología pura (Stack tecnológico).
    Documentación en Drive: Mantén tus especificaciones en Docs o PDFs en Drive.

## Modelo de uso:
    
    1. Abre la Gema correspondiente.
    2. Sube el archivo CONTEXTO.md o invoca a @Google Drive para leer los requisitos.
    3. Pide código o soluciones.
    4. Cruce de Tecnologías: Si estás en el Proyecto A (PHP) y te surge una duda de SQL compleja que también te servirá para el Proyecto B, no la preguntes ahí. Abre tu Gema "Experto SQL", resuélvelo de forma agnóstica, y luego lleva la solución a tu proyecto. Así mantienes el conocimiento puro separado del conocimiento de negocio.

## Peticion Inicial empezando/continuando el proyecto
    Tu primera tarea con la Gema "nombre de la gema": Una vez creada la gema, sube un archivo de texto con el árbol de carpetas que tienes actualmente (o dile que es un proyecto nuevo) y dile: "Genera el código para nuxt.config.ts configurando Tailwind y la estructura base para el layout 'default' y 'admin' separando la landing del CRM".
