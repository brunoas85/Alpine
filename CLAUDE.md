# 🌿 Alpine Garden & Lawn Services

Modelado de negocio basado en la optimización de servicios de paisajismo, mantenimiento estacional y diseño de exteriores para el mercado de EE.UU. No vendemos productos físicos; vendemos experiencias, orden y naturaleza.

## 🛠️ Comandos de Desarrollo Rápidos

- Frontend (React/Vite): `npm run dev` | `npm run build` | `npm run lint`
- Backend (Python/FastAPI): `uvicorn main:app --reload` | `pytest`
- Base de Datos / Migraciones: `alembic upgrade head`

## 📐 Filosofía del Diseño e Identidad (La Visión de la Paisajista)

"Un buen jardín respeta el entorno y busca la armonía visual. Nuestra app debe transmitir lo mismo: frescura, orden, colores orgánicos (verdes profundos, tierras, arenas) y una navegación que respire, sin sobrecargar al usuario."

### Reglas del Dominio

- **Enfoque en Servicios**: El core de la app es la cotización y agendamiento de servicios (Corte de césped, podas, diseño de canteros, preparación para el invierno, etc.).
- **Estacionalidad**: El backend y el frontend deben entender que las tareas cambian según la estación (Primavera/Verano = riego y corte; Otoño/Invierno = limpieza de hojas, poda estructural y nieve).
- **Internacionalización (i18n)**: La plataforma debe ser completamente bilingüe (Inglés / Español). Esto aplica para la interfaz de usuario, las cotizaciones, los correos electrónicos y las alertas.

## 🤖 Agentes Especializados

```
                    ┌────────────────────────┐
                    │       CLAUDE.MD        │
                    └───────────┬────────────┘
                                │
       ┌────────────────────────┴────────────────────────┐
       ▼                                                 ▼
┌──────────────────────────────┐                 ┌──────────────────────────────┐
│    AGENTE 1: FRONTEND        │                 │     AGENTE 2: BACKEND        │
│   "El Diseñador del Paisaje" │                 │    "La Raíz y el Nutriente"  │
├──────────────────────────────┤                 ├──────────────────────────────┤
│ • UI/UX limpia y orgánica    │                 │ • Motor de cotización m²     │
│ • Booking interactivo        │                 │ • Agenda inteligente         │
│ • i18n (React-i18next)       │                 │ • Notificaciones localizadas │
└──────────────────────────────┘                 └──────────────────────────────┘
```

### 1. Agente Frontend: "El Diseñador del Paisaje" (Frontend Specialist)

**Misión**: Crear una interfaz pulida, intuitiva y visualmente atractiva que convierta visitas en reservas de servicios.

**Directrices Estrictas de UI/UX e i18n:**

- **Soporte Multiidioma (EN/ES)**: Implementar traducción dinámica usando herramientas como `react-i18next` o el sistema nativo de Flet.
  - El selector de idioma debe estar visible y accesible en el encabezado (Header).
  - Todo el texto estático, placeholders, mensajes de error y etiquetas de botones deben provenir de archivos de traducción (ej. `en.json`, `es.json`).
- **Estilo Visual**: Paleta de colores tierra y verdes naturales (`#2D5A27` Forest Green, `#F5F2EB` Off-White, `#4A3B32` Earth Brown). Uso de espacios en blanco generosos (respiración visual).
- **Interactividad Clave**:
  - Formulario de cotización visual (el cliente selecciona el tamaño estimado de su jardín con sliders o tarjetas visuales).
  - Módulo de "Antes y Después" interactivo para mostrar trabajos realizados.
  - Calendario de reservas sumamente amigable e intuitivo.
- **Tecnología**: React.js, Tailwind CSS (o Flet si se escala a app de escritorio/móvil rápida). Componentes modulares, limpios y declarativos.

### 2. Agente Backend: "La Raíz y el Nutriente" (Backend & API Specialist)

**Misión**: Sostener la lógica del negocio, optimizar las rutas de los jardineros, procesar pagos/suscripciones y calcular cotizaciones de forma matemática e inteligente.

**Directrices Estrictas de Lógica e i18n:**

- **Localización en el Backend**:
  - El backend debe recibir el encabezado `Accept-Language` (o un parámetro de idioma del usuario) para responder con mensajes de validación y errores en el idioma correcto.
  - El sistema de plantillas de correo (ej. confirmación de turno, recibo de pago, alertas climáticas) debe enviar las comunicaciones en el idioma seleccionado por el usuario (`user.preferred_language`).
- **Motor de Cotizaciones**: Fórmulas basadas en metros cuadrados (o sq ft para EE.UU.), tipo de terreno y frecuencia del servicio (único, semanal, quincenal con descuentos).
- **Gestión de Agenda**: Algoritmo para evitar colisiones de horarios y optimizar zonas geográficas de los equipos de trabajo en el mapa.
- **Notificaciones Inteligentes**: Sistema que alerte al cliente si se reprograma un servicio debido a alertas climáticas (lluvia extrema, tormentas).
- **Tecnología**: Python (FastAPI/Django), PostgreSQL. Arquitectura limpia (Clean Architecture) con separación clara entre rutas, servicios y repositorios.

## ✍️ Estilo de Código y Buenas Prácticas

### Frontend

- Usar componentes funcionales y Hooks personalizados para la lógica de estado.
- Evitar "hardcodear" (escribir directamente) texto en los componentes; todo texto debe pasar por el sistema de traducción.
- Priorizar la carga rápida de imágenes (compresión WebP para fotos de jardines).

### Backend

- Tipado estricto con Pydantic/Type hints.
- Validación rigurosa de entradas de datos (especialmente medidas de terrenos y fechas).
- Manejo de errores centralizado con respuestas HTTP semánticas y localizadas.

## 📅 Hoja de Ruta de Desarrollo (Sprints)

1. **Fase de Siembra (MVP)**: Landing page informativa + Cotizador básico + Formulario de contacto (Frontend + Backend conectado) con traducción funcional EN/ES en el core de la UI.
2. **Fase de Crecimiento (Agendamiento)**: Autenticación de clientes, panel de usuario, pasarela de pago y calendario de reservas activo con notificaciones por mail localizadas.
3. **Fase de Florecimiento (Escala)**: Panel de administración para los trabajadores de Alpine, optimizador de rutas en mapa y alertas climáticas automatizadas.
