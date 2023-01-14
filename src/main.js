import Vue from 'vue'
import router from './router' // src/router의 index.js 모듈을 가져옴(index.js는 생략가능)

new Vue({
  el: '#app',
  router, //vue 인스턴스를 만들 때 라우터객체를 넘겨줌
  render: h => h({template: '<router-view></router-view>'})
})
