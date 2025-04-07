const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // Puerto expuesto en el contenedor

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Bienvenido a la aplicación principal');
});

// Ruta /clientes con 3 clientes de ejemplo
app.get('/clientes', (req, res) => {
  const clientes = [
    { id: 1, nombre: 'Cliente 1' },
    { id: 2, nombre: 'Cliente 2' },
    { id: 3, nombre: 'Cliente 3' }
  ];
  res.json(clientes);
});

// Ruta /productos con 3 productos de ejemplo
app.get('/productos', (req, res) => {
  const productos = [
    { id: 1, nombre: 'Producto 1' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' }
  ];
  res.json(productos);
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});
