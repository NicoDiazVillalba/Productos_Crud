# Productos_Crud

Este es un sistema de gestión de productos con operaciones CRUD (Crear, Leer, Actualizar y Eliminar), desarrollado en PHP con MySQL y JavaScript.

## Características
- Listado de productos con opciones para editar y eliminar.
- Formulario para agregar nuevos productos.
- Confirmación antes de eliminar un producto.

## 🛠️ Tecnologías utilizadas
- **Frontend:** HTML, CSS, JavaScript.
- **Backend:** PHP, MySQL.
- **Base de Datos:** MySQL (MariaDB en XAMPP).

## 📂 Estructura del proyecto
```
mi_crud_productos/
├── index.php        # Página principal: lista los productos
├── create.php       # Formulario para agregar productos
├── edit.php         # Formulario para editar productos
├── delete.php       # Eliminación de productos
├── conection.php    # Conexión a la base de datos
├── css/
│   └── styles.css   # Estilos de la aplicación
├── js/
│   └── script.js    # JavaScript para confirmaciones
├── sql/
│   └── database.sql  # Script para crear la base de datos
└── README.md        # Documentación del proyecto
```

## 🗄️ Base de Datos
Ejecuta el siguiente SQL en phpMyAdmin o en MySQL para crear la base de datos y la tabla:

```sql
CREATE DATABASE mi_crud;
USE mi_crud;

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    descripcion TEXT NOT NULL
);
```

## 🚀 Instalación y Configuración
1. Clona este repositorio o descarga los archivos.
2. Copia la carpeta `mi_crud_productos` en el directorio de XAMPP (`htdocs`).
3. Asegúrate de que MySQL y Apache estén corriendo en XAMPP.
4. Importa el archivo `base_datos.sql` en phpMyAdmin.
5. Modifica `conection.php` si usas credenciales diferentes:

```php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mi_crud";
```
6. Abre en tu navegador: `http://localhost/mi_crud_productos/index.php`


