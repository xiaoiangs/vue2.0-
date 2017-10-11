import App from '../App'

const startIndex = r => require.ensure([], () => r(require('../pages/start/startIndex')), 'startIndex')
const second = r => require.ensure([], () => r(require('../pages/second/second')), 'second')
const me = r => require.ensure([], () => r(require('../pages/me/me')), 'me')

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
      path: '/me',
      name: 'ne',
      component: me
    },
    {
      path: '/second',
      name: 'second',
      component: second
    }
  ]
}
]

