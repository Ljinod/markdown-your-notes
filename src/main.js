import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


import App from './App.vue'


const router = new VueRouter({
    mode: 'history'

    , routes: [{
        path        : '/'
        , component : require('./components/Home.vue')
        , name      : 'home'
    }
    , {
        path        : '/note/:noteid?'
        , component : require('./components/Note.vue')
        , name      : 'note'
    }
    , {
        path: '*'
        , redirect: '/'
    }]
})

new Vue({
  el: '#app'
  , router
  , render: h => h(App)
})
