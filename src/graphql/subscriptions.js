/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVenta = /* GraphQL */ `
  subscription OnCreateVenta {
    onCreateVenta {
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
export const onUpdateVenta = /* GraphQL */ `
  subscription OnUpdateVenta {
    onUpdateVenta {
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
export const onDeleteVenta = /* GraphQL */ `
  subscription OnDeleteVenta {
    onDeleteVenta {
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
export const onCreateCompra = /* GraphQL */ `
  subscription OnCreateCompra {
    onCreateCompra {
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
export const onUpdateCompra = /* GraphQL */ `
  subscription OnUpdateCompra {
    onUpdateCompra {
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
export const onDeleteCompra = /* GraphQL */ `
  subscription OnDeleteCompra {
    onDeleteCompra {
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
export const onCreateArticulo = /* GraphQL */ `
  subscription OnCreateArticulo {
    onCreateArticulo {
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
export const onUpdateArticulo = /* GraphQL */ `
  subscription OnUpdateArticulo {
    onUpdateArticulo {
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
export const onDeleteArticulo = /* GraphQL */ `
  subscription OnDeleteArticulo {
    onDeleteArticulo {
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
export const onCreateCompraArticulo = /* GraphQL */ `
  subscription OnCreateCompraArticulo {
    onCreateCompraArticulo {
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
export const onUpdateCompraArticulo = /* GraphQL */ `
  subscription OnUpdateCompraArticulo {
    onUpdateCompraArticulo {
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
export const onDeleteCompraArticulo = /* GraphQL */ `
  subscription OnDeleteCompraArticulo {
    onDeleteCompraArticulo {
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
export const onCreateVentaArticulo = /* GraphQL */ `
  subscription OnCreateVentaArticulo {
    onCreateVentaArticulo {
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
export const onUpdateVentaArticulo = /* GraphQL */ `
  subscription OnUpdateVentaArticulo {
    onUpdateVentaArticulo {
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
export const onDeleteVentaArticulo = /* GraphQL */ `
  subscription OnDeleteVentaArticulo {
    onDeleteVentaArticulo {
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
