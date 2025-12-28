# NutriLife Club - Sistema Completo UI Kit

## 🎯 Total de Pantallas: 25 Pantallas

---

## ACTUALIZACIONES CRÍTICAS (RF-24 & RF-25)

### ✅ Flujo de Asistencia Corregido:

**Antes (Incorrecto):**
- Socio mostraba su QR al anfitrión
- Anfitrión escaneaba el QR del socio

**Ahora (Correcto según RF-24 & RF-25):**
- **Anfitrión muestra el QR del Club** (estático, permanente)
- **Socio escanea el QR del Club** para registrar su asistencia
- QR personal del socio es secundario (solo para identificación)

---

## 📱 NUEVAS PANTALLAS (6 Requerimientos Funcionales)

### **SCREEN 11: Host Registration Status** ✅
**RF-08 & RF-02 - Estado de Solicitud Pendiente**

- ✅ Ilustración de reloj/clipboard (amarillo/naranja)
- ✅ Título: "Solicitud en Evaluación"
- ✅ Texto: Menciona nombre del club y estado de revisión
- ✅ **Resumen de datos enviados:**
  - Nombre del Club: "Club Vida Activa"
  - Dirección con icono MapPin
  - Mini mapa con coordenadas GPS (-17.7833, -63.1821)
  - Thumbnails de fotos enviadas (4 fotos)
- ✅ **Timeline de proceso:**
  1. ✅ Solicitud Recibida (Verde, completado)
  2. 🟡 En Revisión (Amarillo, activo)
  3. ⚪ Notificación de Resultado (Gris, pendiente)
- ✅ Info card: "Recibirás correo con decisión"
- ✅ Botones: "Contactar Soporte" | "Volver al Inicio"

---

### **SCREEN 12: Host - Register New Member Form** ✅
**RF-12 & RF-13 - Registro Manual de Socio**

**Campos Obligatorios:**
- ✅ Nombre y Apellido * (Input text con icono User)
- ✅ Número de Teléfono * (Input tel con icono Phone) - ID Único
- ✅ Fecha de Nacimiento * (Date picker con icono Calendar)

**Campos Opcionales:**
- ✅ Correo Electrónico (Input email con icono Mail)
- ✅ Redes Sociales (Input text con icono Share2)
- ✅ Referido por (Dropdown con lista de socios)
- ✅ ¿Cómo nos conoció? (Dropdown: Referencia, Redes, Pasando, Evento, Otro)

**Botón de Acción:**
- ✅ "Registrar y Generar QR" (Verde #7AC142)

**Estado de Éxito:**
- ✅ Icono QR animado (bounce)
- ✅ Mensaje: "¡Socio Registrado!"
- ✅ Card del nuevo socio con:
  - Avatar con iniciales
  - Nombre completo
  - Número de socio generado (SC-2024-XXX)
  - QR Code generado
- ✅ Botones: "Registrar Otro Socio" | "Ver Lista de Socios"

---

### **SCREEN 13: Member - Advanced Gamification Profile** ✅
**RF-71, RF-81, RF-73 - Perfil de Gamificación**

**Header:**
- ✅ Badge de nivel dinámico: "Socio VIP" con icono Award
- ✅ Avatar circular con iniciales
- ✅ Mensaje celebratorio: "¡Felicitaciones! Eres parte del 15% de socios..."

**Metrics Row (3 columnas):**
- ✅ Estrellas de Asistencia: 24 ⭐ (fondo amarillo)
- ✅ Racha Actual: 3 Semanas ⚡ (fondo naranja)
- ✅ Puntos Acumulados: 485 pts 🎁 (fondo verde)

**Rewards Section (RF-75):**
- ✅ Título: "Cupones Disponibles"
- ✅ Scroll horizontal con 3 cupones:
  1. 🍓 Topping Gratis (expira en 5 días)
  2. 💚 10% Descuento (expira en 12 días)
  3. 🧇 Waffle Gratis (expira en 8 días)
- ✅ Botón "Usar Ahora" en cada cupón

**Próximo Nivel:**
- ✅ Barra de progreso: "Socio Legendario" 85/100
- ✅ Mensaje: "Solo 15 visitas más..."

**Logros Destacados:**
- ✅ Grid 3x1 con iconos: Socio del Mes 🏆 | Racha 7 días ⚡ | 100 Visitas ⭐
- ✅ Enlace: "Ver todos" → member-achievements

**History:**
- ✅ Lista de últimas 5 visitas con fecha, hora y puntos ganados

---

### **SCREEN 14: Support & Help Center** ✅
**RF-113 & RF-118 - Centro de Soporte**

**Tabs:**
- ✅ "Nueva Solicitud" | "Mis Tickets"

**Tab: Nueva Solicitud**
- ✅ Info card azul: Descripción del servicio (respuesta en 24h)
- ✅ **Formulario:**
  - Dropdown: "Tipo de Consulta *" (Técnica, Administrativa, Denuncia, Sugerencia, Otro)
  - Input: "Asunto *"
  - Textarea: "Describe tu problema *" (6 filas)
- ✅ Botón: "Enviar al Administrador" con icono Send
- ✅ **FAQ Quick Links:**
  - "¿Cómo escaneo el QR del club?"
  - "¿Cómo cambio mi información personal?"
  - "¿Cómo funcionan los logros?"

**Tab: Mis Tickets**
- ✅ Lista de tickets con:
  - ID del ticket (TKT-001)
  - Badge de estado:
    - 🟡 Pendiente (amarillo con Clock)
    - ✅ Resuelto (verde con CheckCircle)
  - Tipo y fecha
  - Respuesta del admin (si existe)
- ✅ Estado sin tickets: Icono HelpCircle gris + mensaje

---

### **SCREEN 15: Map View - Only Active Clubs** ✅
**RF-100 & RF-105 - Mapa con Clubes Activos**

**Actualizaciones:**
- ✅ **Chip destacado:** "Solo Activos" (verde, seleccionado)
- ✅ Otros chips: "Abierto ahora" | "Más cercanos" | "Con Wi-Fi"
- ✅ **Notice card verde:**
  - Punto verde pulsante
  - Texto: "Mostrando solo clubes aprobados y activos"
- ✅ Pins verdes en mapa (solo clubes verificados)
- ✅ **Bottom sheet con datos RF-02:**
  - Nombre del club
  - Dirección
  - Distancia (0.3 km)
  - Horario: "Abierto hasta 20:00"
  - Botón: "Ver detalles"
- ✅ **Navegación GPS (RF-103):**
  - Botón prominente "Cómo llegar"
  - Implica lanzamiento de Maps externo

---

### **SCREEN 16: Host Dashboard - Club Stats** ✅
**RF-90 - Estadísticas del Club**

**Quick Actions (3 botones):**
- ✅ "Validar Asistencia" (Verde, QR scan - RF-25)
- ✅ "Registrar Nuevo Socio" (Blanco, Users)
- ✅ "Editar Club" (Blanco, Edit - RF-67)

**Gráfico de Asistencia Semanal:**
- ✅ Bar chart con 7 barras (Lun-Dom)
- ✅ Datos: [38, 42, 35, 48, 52, 45, 27]
- ✅ Hover muestra valor exacto
- ✅ Promedio: "41 visitas/día"

**Socios Activos vs Inactivos:**
- ✅ **Donut chart:** 92% activos (verde) / 8% inactivos (gris)
- ✅ Cards de resumen:
  - 133 Activos (verde con UserCheck)
  - 12 Inactivos (gris con Users)
- ✅ Info card: "Socio inactivo = más de 14 días sin asistir"

**Tendencias del Mes:**
- ✅ Total de Asistencias: 1,245 (+15% 📈)
- ✅ Nuevos Socios: 28 (+23% 📈)
- ✅ Tasa de Retención: 87% (+5% 📈)

**Horarios Pico:**
- ✅ Mañana (8-12h): 45% (verde)
- ✅ Tarde (12-18h): 35% (morado)
- ✅ Noche (18-20h): 20% (azul)

---

## 🔄 PANTALLAS ACTUALIZADAS (2)

### **SCREEN 4: Registered Member Home** ✅ ACTUALIZADA
**Cambio Crítico (RF-24 & RF-25):**

**Antes:**
```
❌ Card con QR personal estático (para mostrar)
❌ Texto: "Muestra este QR al anfitrión"
```

**Ahora:**
```
✅ Card principal verde con icono QR grande
✅ Título: "Registrar Asistencia"
✅ Texto: "Escanea el código QR del club para marcar tu visita"
✅ Botón primario: "Escanear QR del Club" (Blanco sobre verde)
✅ Botón secundario: "Ver mi credencial/QR" (Link underline)
```

**Otros elementos:**
- ✅ Quick Stats Grid (4 cards):
  - 24 Visitas este mes
  - 12 Logros obtenidos
  - 7 Racha de días (enlace a gamification)
  - 3 Beneficios activos
- ✅ Mi Club info
- ✅ Actividad reciente

---

### **SCREEN 16: Host Dashboard** ✅ ACTUALIZADA
**Cambio Crítico (RF-24):**

**Ahora incluye:**
```
✅ Card destacada: "QR del Club para Asistencia"
✅ QR grande en verde (#7AC142) - 180x180px
✅ Bordes verdes de 4px
✅ Texto: "Los socios deben escanear este código para registrar su asistencia"
✅ Club ID: CLB-2024-001
```

**Quick Actions actualizadas:**
- ✅ "Validar QR" - Escanear QR del socio (secundario)
- ✅ "Nuevo Socio" - Registro manual → host-register-member

**Resto del dashboard:**
- ✅ Estadísticas de hoy (8 nuevos, 42 asistencias, +12%)
- ✅ Resumen semanal
- ✅ Nuevos socios (últimos 3)
- ✅ Socios destacados (Top 3 con emojis 🥇🥈🥉)

---

## 📊 NAVEGACIÓN Y FLUJOS

### Flujo de Asistencia (Correcto):
```
1. Socio abre app → Member Home
2. Presiona "Escanear QR del Club"
3. Cámara se activa
4. Escanea el QR del Club (mostrado por anfitrión)
5. Sistema registra asistencia automáticamente
6. Pantalla de éxito con puntos ganados
```

### Flujo de Anfitrión:
```
1. Host abre app → Host Dashboard
2. Ve su QR del Club en pantalla
3. Opciones:
   a) Mostrar QR a los socios
   b) "Validar QR" - escanear QR del socio manualmente
   c) "Nuevo Socio" - registro manual sin app
```

### Flujo de Registro de Club:
```
1. Usuario → "Quieres ser Anfitrión?" (UserProfile)
2. HostRegistration (formulario completo)
3. Envío → HostRegistrationStatus (pendiente)
4. Admin aprueba → Notificación por email
5. Host puede iniciar sesión
```

### Flujo de Soporte:
```
Disponible para todos los usuarios:
- Member Home → Profile → Support
- Host Settings → Soporte → Centro de Soporte
```

---

## 🎨 DISEÑO CONSISTENTE

### Colores:
- **Primary Green:** `#7AC142`
- **Secondary Green:** `#6BB032`
- **Background:** `#F5F5F5`
- **Text Dark:** `#333333`
- **White:** `#FFFFFF`
- **Accents:** Amarillo (logros), Naranja (alertas), Azul (info)

### Componentes Reutilizables:
- ✅ Status Bar (todos los screens)
- ✅ Rounded cards (`rounded-2xl`, `rounded-3xl`)
- ✅ Shadow levels (`shadow-md`, `shadow-lg`, `shadow-xl`)
- ✅ Gradient backgrounds (`from-[#7AC142] to-[#6BB032]`)
- ✅ Badges con colores contextuales
- ✅ Navigation bars (4-5 botones)
- ✅ QR Code SVG patterns (reutilizable)

### Tipografía:
- ✅ Jerarquía clara (h1, h2, h3, h4)
- ✅ Text sizes: xs (12px), sm (14px), base (16px), lg, xl, 2xl, 3xl
- ✅ Colors: text-[#333333], text-gray-500, text-gray-600
- ✅ No custom font-size/font-weight classes (sistema por defecto)

---

## 🗂️ ESTRUCTURA DE ARCHIVOS

```
/components/
├── BasicUserHomeScreen.tsx
├── ClubDetailEvents.tsx
├── ClubDetailInfo.tsx
├── ClubDetailMenu.tsx
├── GuestHomeScreen.tsx
├── HostClubSettings.tsx          [ACTUALIZADO]
├── HostDashboard.tsx              [ACTUALIZADO - RF-24]
├── HostDashboardStats.tsx         [NUEVO - RF-90]
├── HostMemberList.tsx
├── HostRegisterMember.tsx         [NUEVO - RF-12]
├── HostRegistration.tsx
├── HostRegistrationStatus.tsx     [NUEVO - RF-08]
├── HostScanQR.tsx
├── LoginScreen.tsx
├── MapScreen.tsx                  [ACTUALIZADO - RF-100]
├── MemberAchievements.tsx
├── MemberAttendance.tsx
├── MemberGamification.tsx         [NUEVO - RF-71, RF-81]
├── MemberHome.tsx                 [ACTUALIZADO - RF-25]
├── NutritionArticle.tsx
├── ScreenSelector.tsx
├── SplashScreen.tsx
├── SupportCenter.tsx              [NUEVO - RF-113]
└── UserProfile.tsx
```

---

## ✅ CHECKLIST DE REQUERIMIENTOS FUNCIONALES

### Registro y Autenticación:
- ✅ RF-08: Estado de solicitud de registro con timeline
- ✅ RF-02: Campos del club (nombre, dirección, GPS, fotos)

### Gestión de Socios:
- ✅ RF-12: Campos obligatorios (nombre, teléfono, fecha nacimiento)
- ✅ RF-13: Campos opcionales (email, redes, referido, cómo conoció)
- ✅ RF-24: QR del club mostrado por anfitrión
- ✅ RF-25: Socio escanea QR del club para asistencia

### Gamificación:
- ✅ RF-71: Estrellas de asistencia
- ✅ RF-73: Rachas semanales
- ✅ RF-75: Cupones y recompensas disponibles
- ✅ RF-81: Niveles de socio (Nuevo, Constante, VIP)

### Estadísticas y Reportes:
- ✅ RF-90: Dashboard con gráficos (asistencia semanal, activos/inactivos)
- ✅ RF-67: Editar club (botón presente, info crítica bloqueada)

### Mapa y Navegación:
- ✅ RF-100: Solo clubes activos/aprobados
- ✅ RF-103: Botón "Cómo llegar" (GPS)
- ✅ RF-105: Filtros y amenidades

### Soporte:
- ✅ RF-113: Sistema de tickets
- ✅ RF-118: Estado de tickets (Pendiente, Resuelto)

---

## 📱 TOTAL: 25 PANTALLAS FUNCIONALES

**Distribución:**
- 10 Pantallas base originales
- 3 Pantallas de Socio
- 5 Pantallas de Anfitrión
- 1 Selector de pantallas
- **6 Pantallas nuevas (RF)**

**Todas integradas con navegación completa y diseño consistente. ✅**
