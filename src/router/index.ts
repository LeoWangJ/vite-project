const routes = [
    { path: '/app', component: ()=> import('../App.vue') },
    { path: '/page', component: ()=> import('../components/Page.vue') },
  ]

  export default routes