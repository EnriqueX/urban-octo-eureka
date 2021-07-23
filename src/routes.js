import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Medicamento = React.lazy(() => import('./views/articulos/medicamentos/Medicamento'));
const Medicamentos = React.lazy(() => import('./views/articulos/medicamentos/Medicamentos'));
const Producto = React.lazy(() => import('./views/articulos/productos/Producto'));
const Productos = React.lazy(() => import('./views/articulos/productos/Productos'));
const Compra = React.lazy(() => import('./views/compras/Compra'));
const Compras = React.lazy(() => import('./views/compras/Compras'));
const ReportesCompras = React.lazy(() => import('./views/compras/ReportesCompra'));
const Venta = React.lazy(() => import('./views/ventas/Venta'));
const Ventas = React.lazy(() => import('./views/ventas/Ventas'));
const ReportesVentas = React.lazy(() => import('./views/ventas/ReportesVentas'));
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/medicamentos', exact: true, name: 'Medicamentos', component: Medicamentos },
  { path: '/medicamentos/:id', exact: true, name: 'Medicamento', component: Medicamento },
  { path: '/productos', exact: true, name: 'Productos', component: Productos },
  { path: '/productos/:id', exact: true, name: 'Producto', component: Producto },
  { path: '/compras', exact: true, name: 'Compras', component: Compras },
  { path: '/compra', exact: true, name: 'Compra', component: Compra },
  { path: '/ventas', exact: true, name: 'Ventas', component: Ventas },
  { path: '/venta', exact: true, name: 'Venta', component: Venta },
  { path: '/reportes/compras', name: 'Reporte de compras', component: ReportesCompras },
  { path: '/reportes/ventas', name: 'Reportes de ventas', component: ReportesVentas},
];

export default routes;
