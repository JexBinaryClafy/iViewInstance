const routers = [{
  path: '/',
  meta: {
    title: ''
  },
  component: (resolve) => require(['./view/Home.vue'], resolve)
}]

export default routers;
