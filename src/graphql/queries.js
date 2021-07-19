/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVenta = /* GraphQL */ `
  query GetVenta($id: ID!) {
    getVenta(id: $id) {
      id
      fecha
      precio
      cantidad
      createdAt
      updatedAt
      VentaArticulos {
        nextToken
      }
    }
  }
`;
export const listVentas = /* GraphQL */ `
  query ListVentas(
    $filter: ModelVentaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVentas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fecha
        precio
        cantidad
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCompra = /* GraphQL */ `
  query GetCompra($id: ID!) {
    getCompra(id: $id) {
      id
      fecha
      cantidad
      precio
      fechaCaducidad
      createdAt
      updatedAt
      CompraArticulos {
        nextToken
      }
    }
  }
`;
export const listCompras = /* GraphQL */ `
  query ListCompras(
    $filter: ModelCompraFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompras(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fecha
        cantidad
        precio
        fechaCaducidad
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArticulo = /* GraphQL */ `
  query GetArticulo($id: ID!) {
    getArticulo(id: $id) {
      id
      nombre
      descripcion
      sustanciaActiva
      createdAt
      updatedAt
      compras {
        nextToken
      }
      ventas {
        nextToken
      }
    }
  }
`;
export const listArticulos = /* GraphQL */ `
  query ListArticulos(
    $filter: ModelArticuloFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticulos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        descripcion
        sustanciaActiva
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
