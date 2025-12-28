# NutriLife Club - Documentación de Pantallas

## Resumen del Sistema

NutriLife Club es una aplicación móvil completa para la gestión de clubes de nutrición estilo Herbalife. El sistema incluye **18 pantallas** organizadas por roles de usuario.

---

## 🎯 Pantallas Principales (10 Pantallas Originales)

### 1. **Splash Screen**
- Logo animado con degradado
- Botón "Comenzar" que lleva al selector de perfiles
- Diseño minimalista con identidad de marca

### 2. **Login / Welcome**
- Ilustración de persona con batido verde
- Formulario de login (teléfono y contraseña)
- Botón "Continuar como Invitado"
- **DEMO**: Selector de roles (Socio/Anfitrión)

### 3. **Guest User Home**
- Header con ubicación "Santa Cruz"
- Carrusel hero con imagen motivacional
- Grid bento con:
  - Nutrición al Día
  - Encuentra tu Club
  - Catálogo de Sabores
- Nav bar: Home, Explorar, Ingresar

### 4. **Registered Basic User Home**
- Saludo personalizado "Hola, Carlos"
- Card principal con:
  - Botón "Buscar Clubes Cercanos"
  - QR Code personal generado
- Card de Tips de Nutrición
- Nav bar: Home, Mapa, Perfil

### 5. **Explore / Map View**
- Barra de búsqueda con filtros
- Chips: "Abierto ahora", "Más cercanos", "Con Wi-Fi"
- Mapa con pins personalizados verdes
- Bottom sheet con info del club más cercano

### 6. **Club Detail - Info Tab**
- Header con foto del club
- Nombre, anfitrión, rating 5 estrellas
- Tabs: Información, Menú, Eventos
- Mini mapa
- Servicios con iconos (Wi-Fi, AC)
- Botón sticky "Cómo llegar (GPS)"

### 7. **Club Detail - Menu Tab**
- Mismo header que Info Tab
- Grid de productos con fotos:
  - Batido Choco-Avellana
  - Té Energizante
  - Waffles Proteicos
- Sin precios (política Herbalife)
- Botón GPS sticky

### 8. **Club Detail - Events Tab**
- Mismo header que Info/Menu Tab
- Lista vertical de eventos:
  - Card A: "HOY 18:00 - Fit Camp Grupal" + Botón "Apuntarme"
  - Card B: "MAÑANA 09:00 - Charla de Nutrición"
- Botón GPS sticky

### 9. **Nutrition Article**
- Header con imagen de frutas/avena
- Título: "5 Beneficios de desayunar proteína"
- Tags: Salud, Energía
- Artículo formateado con bloques de texto
- Card embebida "Receta de la semana"

### 10. **User Profile**
- Avatar circular con iniciales
- Nombre y teléfono
- Menú: "Editar mis datos", "Seguridad"
- **CTA destacado**: Card gradiente "¿Quieres ser Anfitrión?"
- Nav bar: Home, Mapa, Perfil (activo)

---

## 👥 Pantallas de SOCIO (3 Pantallas Nuevas)

### 11. **Member Home**
- **Header con nivel de socio**:
  - Avatar y nombre
  - Card de nivel VIP/Diamante
  - Barra de progreso al siguiente nivel
  - Puntos acumulados del mes
  
- **QR Code Personal**:
  - Código QR grande y escaneable
  - Número de socio (SC-2024-0156)
  - Instrucciones de uso

- **Quick Stats Grid**:
  - 24 Visitas este mes
  - 12 Logros obtenidos
  - 7 Días de racha
  - 3 Beneficios activos

- **Mi Club**:
  - Info del club al que pertenece
  - Fecha de membresía

- **Actividad Reciente**:
  - Últimas asistencias
  - Logros desbloqueados
  - Puntos ganados

- Nav bar: Inicio, Asistencias, Logros, Perfil

### 12. **Member Attendance**
- **Stats Cards**:
  - Visitas del mes actual
  - Racha de días consecutivos

- **Resumen Mensual**:
  - Diciembre: 24 visitas, 240 pts
  - Noviembre: 22 visitas, 220 pts
  - Octubre: 18 visitas, 180 pts

- **Historial Detallado**:
  - Lista de todas las asistencias
  - Fecha, hora y puntos ganados
  - Indicador visual de check

- **Info de Racha**:
  - Card motivacional
  - Progreso hacia logros

### 13. **Member Achievements**
- **Summary Card**:
  - 12/18 logros desbloqueados
  - Barra de progreso
  - Total de puntos: 1,275 pts

- **Logros Obtenidos** (Grid 2 columnas):
  - Primera Visita (50 pts)
  - Semana Completa (100 pts)
  - Socio del Mes (200 pts)
  - Madrugador (75 pts)
  - Fiel al Club (300 pts)
  - Mes Perfecto (250 pts)

- **Próximos Logros**:
  - Constante: 30 días seguidos (23/30)
  - Legendario: 500 visitas (128/500)
  - Con barras de progreso
  - Icono de candado

---

## 🏪 Pantallas de ANFITRIÓN (5 Pantallas Nuevas)

### 14. **Host Dashboard**
- **Header del Club**:
  - Nombre del club
  - Estado: "Activo y Verificado"
  - Badge "Abierto"

- **Quick Actions**:
  - Escanear QR (grande, destacado)
  - Ver Socios (145 miembros)

- **Estadísticas de Hoy**:
  - 8 Nuevos socios
  - 42 Asistencias
  - +12% vs ayer

- **Resumen Semanal**:
  - Total asistencias: 287
  - Nuevos socios: 24
  - Promedio diario: 41
  - Socios activos: 92%

- **Nuevos Socios**:
  - Lista con avatares
  - Badge "Nuevo"

- **Socios Destacados**:
  - Top 3 del mes
  - Emojis de medallas 🥇🥈🥉

- Nav bar: Inicio, Escanear, Socios, Config

### 15. **Host Member List**
- **Barra de búsqueda**
- **Filtros**:
  - Todos (145)
  - VIP (23)
  - Activos (98)
  - Nuevos (24)

- **Cards de Socios** con:
  - Avatar con iniciales
  - Nombre y número de socio
  - Badge de nivel (VIP/Constante/Nuevo)
  - Stats: Visitas, Puntos, Logros
  - Teléfono y email
  - Última visita

### 16. **Host Scan QR**
- **Pantalla completa oscura** (fondo negro)
- **Frame de cámara**:
  - Esquinas verdes animadas
  - Línea de escaneo pulsante
  - Icono de cámara en centro

- **Controles**:
  - Botón de flash/linterna
  - Opción de entrada manual

- **Estado de Éxito**:
  - Animación de check
  - Info del socio:
    - Nombre: María González
    - Número: SC-2024-0156
    - Nivel: VIP
    - Visita #25
    - Puntos: +10 pts

- **Quick Stats Bar**:
  - 42 hoy
  - 287 esta semana
  - 1,245 este mes

### 17. **Host Club Settings**
- **Card de Info del Club**:
  - Logo/Avatar del club
  - Nombre y anfitrión
  - Badges: Verificado, Activo

- **Información del Club**:
  - Dirección con icono
  - Horario de atención
  - Fotos del club (5 fotos)

- **Gestión**:
  - Notificaciones (toggle ON/OFF)
  - Gestión de Socios
  - Estadísticas y Reportes

- **Soporte**:
  - Ayuda y Tutorial

- **Cerrar Sesión** (botón rojo)
- **Versión de la app**

### 18. **Host Registration**
- **Estado 1 - Formulario**:
  
  **Info Card**: Bienvenida al programa de anfitriones
  
  **Información Personal**:
  - Nombre del Anfitrión *
  - Teléfono *
  - Email *
  
  **Información del Club**:
  - Nombre del Club *
  - Dirección * (con icono de pin)
  - Horario de Atención *
  
  **Fotos del Club**:
  - Logo del Club (upload)
  - Fotos del Local (mínimo 3)
  
  Botón: "Enviar Solicitud"

- **Estado 2 - Pendiente**:
  - Icono de reloj
  - "Solicitud Enviada"
  - Mensaje de confirmación
  - Card de próximos pasos:
    1. ✅ Solicitud recibida
    2. Revisión (1-2 días)
    3. Notificación por email
  - Botón: "Volver al inicio"

---

## 📱 Pantalla Adicional

### Screen Selector (DEMO)
- **Selector de roles** para demostración:
  - Invitado (azul)
  - Usuario Básico (verde)
  - Socio de Club (amarillo)
  - Anfitrión (morado)
- Cada card con:
  - Icono característico
  - Título del rol
  - Descripción breve
  - Franja de color superior
- Botón: "Ir a Pantalla de Login"

---

## 🎨 Sistema de Diseño

### Colores
- **Primary Green**: `#7AC142`
- **Background White**: `#FFFFFF`
- **Text Dark Grey**: `#333333`
- **Light Grey**: `#F5F5F5`
- **Accents**: Yellow/Gold para ratings y logros

### Componentes
- **Rounded corners**: 16-24px (`rounded-2xl`, `rounded-3xl`)
- **Soft shadows**: `shadow-md`, `shadow-lg`
- **Pills**: `rounded-full`
- **Gradients**: Usados en headers y CTAs importantes

### Tipografía
- Sistema por defecto de Tailwind
- Jerarquía clara con `h1`, `h2`, `h3`, `h4`
- Pesos variables para distinguir información

---

## 🔄 Flujos de Navegación

### Flujo de Invitado
```
Splash → Selector → Guest Home → Map → Club Details → Nutrition
```

### Flujo de Usuario Básico
```
Splash → Selector → Login → Basic Home → Map → Profile → Host Registration
```

### Flujo de Socio
```
Splash → Selector → Login (Socio) → Member Home ⟷ Attendance ⟷ Achievements
```

### Flujo de Anfitrión
```
Splash → Selector → Login (Anfitrión) → Host Dashboard ⟷ Scan QR ⟷ Members ⟷ Settings
```

---

## 📊 Alineación con la Base de Datos

### Roles implementados:
- ✅ **Invitado** (sin registro)
- ✅ **Usuario Básico** (usuario registrado sin membresía)
- ✅ **Socio** (tabla `membresias`)
- ✅ **Anfitrión** (tabla `clubes.anfitrion_id`)

### Tablas cubiertas en UI:
- ✅ `usuarios`
- ✅ `roles`
- ✅ `clubes`
- ✅ `membresias`
- ✅ `niveles_socio` (VIP, Constante, Nuevo)
- ✅ `asistencias`
- ✅ `logros`
- ✅ `membresia_logros`
- ✅ `eventos`
- ⚠️ `notificaciones` (mencionado, no implementado completamente)
- ⚠️ `soporte_tickets` (mencionado en settings)

---

## 🎯 Funcionalidades Implementadas

### Gamificación ✅
- Sistema de niveles (Nuevo, Constante, VIP)
- Logros desbloqueables
- Sistema de puntos
- Rachas de días consecutivos
- Rankings de socios

### QR System ✅
- Generación de QR personal para socios
- Escaneo de QR por anfitriones
- Registro automático de asistencia

### Gestión de Club ✅
- Dashboard con estadísticas
- Lista de socios con filtros
- Configuración del club
- Proceso de registro y aprobación

### Contenido Educativo ✅
- Artículos de nutrición
- Tips de salud
- Recetas saludables
- Catálogo de productos

---

## 📱 Total de Pantallas: 18 + 1 Selector = 19 Pantallas

**Distribución:**
- 10 Pantallas base
- 3 Pantallas de Socio
- 5 Pantallas de Anfitrión
- 1 Pantalla de selector de demos

Todas las pantallas siguen el mismo sistema de diseño, son responsive para mobile, y mantienen la estética limpia y minimalista inspirada en Herbalife.
