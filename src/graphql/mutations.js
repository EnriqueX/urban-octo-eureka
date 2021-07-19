/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVenta = /* GraphQL */ `
  mutation CreateVenta(
    $input: CreateVentaInput!
    $condition: ModelVentaConditionInput
  ) {
    createVenta(input: $input, condition: $condition) {
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
export const updateVenta = /* GraphQL */ `
  mutation UpdateVenta(
    $input: UpdateVentaInput!
    $condition: ModelVentaConditionInput
  ) {
    updateVenta(input: $input, condition: $condition) {
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
export const deleteVenta = /* GraphQL */ `
  mutation DeleteVenta(
    $input: DeleteVentaInput!
    $condition: ModelVentaConditionInput
  ) {
    deleteVenta(input: $input, condition: $condition) {
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
export const createCompra = /* GraphQL */ `
  mutation CreateCompra(
    $input: CreateCompraInput!
    $condition: ModelCompraConditionInput
  ) {
    createCompra(input: $input, condition: $condition) {
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
export const updateCompra = /* GraphQL */ `
  mutation UpdateCompra(
    $input: UpdateCompraInput!
    $condition: ModelCompraConditionInput
  ) {
    updateCompra(input: $input, condition: $condition) {
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
export const deleteCompra = /* GraphQL */ `
  mutation DeleteCompra(
    $input: DeleteCompraInput!
    $condition: ModelCompraConditionInput
  ) {
    deleteCompra(input: $input, condition: $condition) {
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
export const createArticulo = /* GraphQL */ `
  mutation CreateArticulo(
    $input: CreateArticuloInput!
    $condition: ModelArticuloConditionInput
  ) {
    createArticulo(input: $input, condition: $condition) {
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
export const updateArticulo = /* GraphQL */ `
  mutation UpdateArticulo(
    $input: UpdateArticuloInput!
    $condition: ModelArticuloConditionInput
  ) {
    updateArticulo(input: $input, condition: $condition) {
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
export const deleteArticulo = /* GraphQL */ `
  mutation DeleteArticulo(
    $input: DeleteArticuloInput!
    $condition: ModelArticuloConditionInput
  ) {
    deleteArticulo(input: $input, condition: $condition) {
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
export const createCompraArticulo = /* GraphQL */ `
  mutation CreateCompraArticulo(
    $input: CreateCompraArticuloInput!
    $condition: ModelCompraArticuloConditionInput
  ) {
    createCompraArticulo(input: $input, condition: $condition) {
      id
      compraID
      articuloID
      createdAt
      updatedAt
      compra {
        id
        fecha
        cantidad
        precio
        fechaCaducidad
        createdAt
        updatedAt
      }
      articulo {
        id
        nombre
        descripcion
        sustanciaActiva
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateCompraArticulo = /* GraphQL */ `
  mutation UpdateCompraArticulo(
    $input: UpdateCompraArticuloInput!
    $condition: ModelCompraArticuloConditionInput
  ) {
    updateCompraArticulo(input: $input, condition: $condition) {
      id
      compraID
      articuloID
      createdAt
      updatedAt
      compra {
        id
        fecha
        cantidad
        precio
        fechaCaducidad
        createdAt
        updatedAt
      }
      articulo {
        id
        nombre
        descripcion
        sustanciaActiva
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteCompraArticulo = /* GraphQL */ `
  mutation DeleteCompraArticulo(
    $input: DeleteCompraArticuloInput!
    $condition: ModelCompraArticuloConditionInput
  ) {
    deleteCompraArticulo(input: $input, condition: $condition) {
      id
      compraID
      articuloID
      createdAt
      updatedAt
      compra {
        id
        fecha
        cantidad
        precio
        fechaCaducidad
        createdAt
        updatedAt
      }
      articulo {
        id
        nombre
        descripcion
        sustanciaActiva
        createdAt
        updatedAt
      }
    }
  }
`;
export const createVentaArticulo = /* GraphQL */ `
  mutation CreateVentaArticulo(
    $input: CreateVentaArticuloInput!
    $condition: ModelVentaArticuloConditionInput
  ) {
    createVentaArticulo(input: $input, condition: $condition) {
      id
      ventaID
      articuloID
      createdAt
      updatedAt
      venta {
        id
        fecha
        precio
        cantidad
        createdAt
        updatedAt
      }
      articulo {
        id
        nombre
        descripcion
        sustanciaActiva
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateVentaArticulo = /* GraphQL */ `
  mutation UpdateVentaArticulo(
    $input: UpdateVentaArticuloInput!
    $condition: ModelVentaArticuloConditionInput
  ) {
    updateVentaArticulo(input: $input, condition: $condition) {
      id
      ventaID
      articuloID
      createdAt
      updatedAt
      venta {
        id
        fecha
        precio
        cantidad
        createdAt
        updatedAt
      }
      articulo {
        id
        nombre
        descripcion
        sustanciaActiva
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteVentaArticulo = /* GraphQL */ `
  mutation DeleteVentaArticulo(
    $input: DeleteVentaArticuloInput!
    $condition: ModelVentaArticuloConditionInput
  ) {
    deleteVentaArticulo(input: $input, condition: $condition) {
      id
      ventaID
      articuloID
      createdAt
      updatedAt
      venta {
        id
        fecha
        precio
        cantidad
        createdAt
        updatedAt
      }
      articulo {
        id
        nombre
        descripcion
        sustanciaActiva
        createdAt
        updatedAt
      }
    }
  }
`;
