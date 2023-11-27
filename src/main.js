// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router/index.js'
import './assets/css/tailwind.css'
import './assets/css/main.css'
import './myaxios.js'

Vue.config.productionTip = false;
// Vue.component('List',List);
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})











































































// var greet = new Vue({
//   el: '#app2',
//   data: {
//     message: 'Hello world!',
//     title: 'I love Vue JS',
//     displayStatus: 0,
//     number: 2,
//   }
// })

// var templates = new Vue({
//   el: '#app3',
//   data: {
//     template: 0,
//     isRed: 0,
//     isBlue: 1,
//     color: 'red',
//     border: '5px green solid'
//   }
// })

// var lists = new Vue({
//   el: '#app4_list',
//   data: {
//     numbers: ['one','two','three','four'],
//     presidents: [
//       {id: 1, turn: 1, name: 'Washington'},
//       {id: 2, turn: 5, name: 'Franklin'},
//       {id: 3, turn: 16, name: 'Linkoln'},
//       {id: 4, turn: 46, name: 'Trump'},
//     ]
//   }
// })


// var for_events = new Vue({
//   el: '#events',
//   methods: {
//     greetMe() {
//       alert('hello ' + this.name);
//     }
//   },
//   watch: {
//     name: function() {
//       this.lenghthOfName = this.name.length;
//       console.log(lenghthOfName);
//     }
//   },
//   created: function() {
//     this.greetMe();
//   },
//   data: {
//     name: 'Abubakr',
//     lenghthOfName: 45,
//   }
// })

// const greet =  new Vue({
//   el: '#app2',
//   template: '<h1 style="text-align: center; color: red;">Hello world</h1>'
// })

// createApp(App).mount('#app')



// Vue.component('button-counter', {
//   data: function () {
//     return {
//       count: 0
//     }
//   },
//   template: '<button id="my" v-on:click="count++">Счётчик кликов — {{ count }}</button>'
// })


// new Vue({ 
//   el: '#components-demo',
//   template: '<button-counter/>'
// })

// var app3 = new Vue({
//   el: '#app-3',
//   data: {
//     seen: true
//   }
// })


// var app4 = new Vue({
//   el: '#app-4',
//   data: {
//     todos: [
//       { text: 'Изучить JavaScript' },
//       { text: 'Изучить Vue' },
//       { text: 'Создать что-нибудь классное' },
//       { text: 'To meet new friends'}
//     ]
//   }
// })


// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
//   }
// })


// var app5 = new Vue({
//   el: '#app-5',
//   data: {
//     message: 'Привет, Vue.js!'
//   },
//   methods: {
//     reverseMessage: function () {
//       this.message = this.message.split('').reverse().join('')
//     }
//   }
// })


// var app6 = new Vue({
//   el: '#app-6',
//   data: {
//     message: 'Привет, Vue!'
//   }
// })


// Vue.component('Mycomp', {
//   data: function () {
//     return {
//       active: 0
//     }
//   },
//   template: '<h1>Active</h1>'
// })

// var app7 = new Vue({
//   el: '#app-7',
//   data: function() {
//     return {
//       active: true
//     }
//   },
//   template: '<Mycomp/>',
//   methods: {
//     myFunc: function () {
//       this.active = true;
//       alert('It is ' + this.active);
//     }
//   }
// })