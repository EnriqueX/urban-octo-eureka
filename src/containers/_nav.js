import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Artículos']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Medicamentos',
    to: '/medicamentos',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Productos',
    to: '/productos',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Operaciones']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Compras',
    route: '/compras',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Administrar',
        to: '/compras',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Reportes',
        to: '/reportes/compras',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Ventas',
    route: '/ventas',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Administrar',
        to: '/ventas',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Reportes',
        to: '/reportes/ventas',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDivider'
  },
]

export default _nav
