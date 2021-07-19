import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type VentaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VentaArticuloMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ArticuloMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CompraArticuloMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CompraMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Venta {
  readonly id: string;
  readonly fecha?: string;
  readonly precio?: number;
  readonly cantidad?: number;
  readonly VentaArticulos?: (VentaArticulo | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Venta, VentaMetaData>);
  static copyOf(source: Venta, mutator: (draft: MutableModel<Venta, VentaMetaData>) => MutableModel<Venta, VentaMetaData> | void): Venta;
}

export declare class VentaArticulo {
  readonly id: string;
  readonly venta: Venta;
  readonly articulo: Articulo;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<VentaArticulo, VentaArticuloMetaData>);
  static copyOf(source: VentaArticulo, mutator: (draft: MutableModel<VentaArticulo, VentaArticuloMetaData>) => MutableModel<VentaArticulo, VentaArticuloMetaData> | void): VentaArticulo;
}

export declare class Articulo {
  readonly id: string;
  readonly nombre?: string;
  readonly descripcion?: string;
  readonly sustanciaActiva?: string;
  readonly compras?: (CompraArticulo | null)[];
  readonly ventas?: (VentaArticulo | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Articulo, ArticuloMetaData>);
  static copyOf(source: Articulo, mutator: (draft: MutableModel<Articulo, ArticuloMetaData>) => MutableModel<Articulo, ArticuloMetaData> | void): Articulo;
}

export declare class CompraArticulo {
  readonly id: string;
  readonly compra: Compra;
  readonly articulo: Articulo;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CompraArticulo, CompraArticuloMetaData>);
  static copyOf(source: CompraArticulo, mutator: (draft: MutableModel<CompraArticulo, CompraArticuloMetaData>) => MutableModel<CompraArticulo, CompraArticuloMetaData> | void): CompraArticulo;
}

export declare class Compra {
  readonly id: string;
  readonly fecha?: string;
  readonly cantidad?: number;
  readonly precio?: number;
  readonly CompraArticulos?: (CompraArticulo | null)[];
  readonly fechaCaducidad?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Compra, CompraMetaData>);
  static copyOf(source: Compra, mutator: (draft: MutableModel<Compra, CompraMetaData>) => MutableModel<Compra, CompraMetaData> | void): Compra;
}