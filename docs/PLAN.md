# 📈 PlusBienes: Project Roadmap & Planning

## 🎯 Visión General
Transformar la landing page actual en un ecosistema inmobiliario integral que incluya una plataforma de captación (Landing) y un sistema de gestión (CRM) para Luis Rengel.

## 🏗️ Stack Tecnológico Confirmado
- **Frontend:** Nuxt 4 (App Directory) + Tailwind CSS 4.
- **Backend/Database:** Supabase (PostgreSQL + Auth + Storage).
- **State Management:** Pinia (Manager Pattern).
- **Despliegue:** Hostinger (VPS con Node.js).

## 🚀 Fases de Desarrollo

### Fase 1: Cimientos y Refactorización (Actual)
- [x] Implementar `PLAN.md` y `ARCH_RULES.md`.
- [x] Refactorizar `Bio.vue` en componentes atómicos.
- [x] Configurar el módulo `@nuxtjs/supabase`.

### Fase 2: Captación (Lead Generation)
- [ ] Conectar formulario "Valorar mi Propiedad" con Supabase.
- [ ] Sistema de notificaciones vía Email/WhatsApp al recibir leads.
- [ ] Implementar `@nuxt/image` para optimización de Core Web Vitals.

### Fase 3: CRM & Admin (Seguridad)
- [ ] Dashboard privado para gestión de contactos.
- [ ] CRUD de propiedades (Subida de fotos a Supabase Storage).
- [ ] Implementar Middleware de autenticación.