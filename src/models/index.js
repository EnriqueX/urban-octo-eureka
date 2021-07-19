// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Venta, VentaArticulo, Articulo, CompraArticulo, Compra } = initSchema(schema);

export {
  Venta,
  VentaArticulo,
  Articulo,
  CompraArticulo,
  Compra
};