import App from '../App'

const startIndex = r => require.ensure([], () => r(require('../pages/start/startIndex')), 'startIndex')
const listIndex = r => require.ensure([], () => r(require('../pages/list/listIndex')), 'listIndex')

export default [{
  path: '/',
  component: App,
  children: [
    {
      path: '/',
      name: 'startIndex',
      component: startIndex
    },
    {
      path: 'listIndex',
      name: 'listIndex',
      component: listIndex
    }
  ]
}
]

