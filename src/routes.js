import List from './pages/list/List'
import Detail from './pages/detail/Detail'

export default [
  { id: 1, path: '/phones', breadcrumb: 'All', component: List },
  { id: 2, path: '/phones/:id', breadcrumb: 'Details', component: Detail },
]
