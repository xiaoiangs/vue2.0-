import App from '../App'

const index = r => require.ensure([], () => r(require('../pages/start/index')), 'index')

export default [{
  path: '/',
  component: App,
  children: [
    {
      path: '',
      name: 'index',
      component: index
    } ]
}
]
