# AluraGeek 🎮🤖

## Descripción del Proyecto

AluraGeek es una aplicación web para gestionar y mostrar productos. Permite a los usuarios agregar, visualizar y eliminar productos de manera sencilla e intuitiva.

## Características Principales

- 🛍️ Gestión de productos
- 📝 Formulario de alta de productos
- 🗑️ Eliminación de productos
- 📱 Diseño responsivo
- 🎮 Interfaz inspirada en estética de videojuegos

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Diseño responsive
- Fuente personalizada: Press Start 2P

## Estructura del Proyecto

```
alurageek/
│
├── index.html        # Página principal
├── script.js         # Lógica de gestión de productos
├── styles.css        # Estilos de la aplicación
├── db.json           # Base de datos de productos (simple)
└── package.json      # Configuración del proyecto
```

## Funcionalidades

### Agregar Productos
- Formulario con campos para:
  - Nombre del producto
  - Precio
  - URL de imagen

### Gestión de Productos
- Visualización de productos en cuadrícula
- Eliminación individual de productos
- Mensaje cuando no hay productos

## Instalación

1. Clonar el repositorio
```bash
git clone https://github.com/sergiokinc/AluraGeek.git
```

2. Abrir `index.html` en un navegador

## Personalización

### Variables CSS
En `styles.css` puedes modificar los colores:
```css
:root {
  --primary-color: #000000;
  --secondary-color: #5300c8;
  --background-light: #f5f5f5;
}
```

## Mejoras Futuras
- [ ] Persistencia de datos con localStorage
- [ ] Validación de formularios
- [ ] Edición de productos existentes
- [ ] Integración con backend

## Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:
1. Haz un fork del proyecto
2. Crea tu rama de características
3. Confirma tus cambios
4. Haz un push a la rama
5. Abre un Pull Request

## Autor

Desarrollado por Sergio Aguiar

https://sergiokinc.github.io/AluraGeek/
