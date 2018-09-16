import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index'
import sorts from '@/pages/sorts'
import cart from '@/pages/cart'
import my from '@/pages/my'
import guang from '@/pages/guang'
import shequ from '@/pages/shequ'
import show from '@/pages/show'
import limitSale from '@/pages/limitSale'
import sale from '@/pages/sale'
import blk from '@/pages/blk'
import artsToys from '@/pages/artsToys'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/sorts',
      name: 'sorts',
      component: sorts
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/guang',
      name: 'guang',
      component: guang
    },
    {
      path: '/shequ',
      name: 'shequ',
      component: shequ
    },
    {
      path: '/show',
      name: 'show',
      component: show
    },
    {
      path: '/limitSale',
      name: 'limitSale',
      component: limitSale
    },
    {
      path: '/sale',
      name: 'sale',
      component: sale
    },
    {
      path: '/blk',
      name: 'blk',
      component: blk
    },
    {
      path: '/artsToys',
      name: 'artsToys',
      component: artsToys
    }
  ]
})
