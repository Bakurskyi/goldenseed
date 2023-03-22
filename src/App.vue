<template>
  <div id="app">
    <headerPage/>
    <router-view/>
    <footerBlock></footerBlock>
  </div>

</template>

<script>
import headerPage from '@/components/headerPage.vue'
import footerBlock from '@/components/Footer'


export default {
  name: 'App',
  components: {
    headerPage,
    footerBlock,
  },
  mounted() {
    console.log("%cВерсия 0.1.0", "color: yellow;font-size: 24px;")
  }
}


</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@font-face {
  font-family: 'Museo Sans Cyrl 700';
  src:  url('assets/fonts/Museo Sans Cyrl 700.woff2') format('woff2'),
  url('assets/fonts/Museo Sans Cyrl 700.woff') format('woff');
}@font-face {
  font-family: 'Museo Sans Cyrl 500';
  src:  url('assets/fonts/Museo Sans Cyrl 500.woff2') format('woff2'),
  url('assets/fonts/Museo Sans Cyrl 500.woff') format('woff');
}
@font-face {
  font-family: 'Museo Sans Cyrl 300';
  src:  url('assets/fonts/Museo Sans Cyrl 300.woff2') format('woff2');
}

@font-face {
  font-family: 'Proxima-Nova-Bold';
  src:  url('assets/fonts/Proxima-Nova-Bold.woff2') format('woff2'),
  url('assets/fonts/Proxima-Nova-Bold.woff') format('woff');
}
body {
  font-family: "Museo Sans Cyrl 300", sans-serif;
}
.container {
  width: 100%;
  margin: 0px auto;
  max-width: 1224px;
}
a {
  text-decoration: none;
  color: #000;
}
a:visited{
  /*color: initial;*/
}

img {
  max-width: 100%;
  height: auto;
}
h1 {
  font-size: 42px;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 10px;
  /*line-height: 24px;*/
}
body {
  font-family: "Museo Sans Cyrl 300", sans-serif;
  max-width: 100%;
}


/*-----------*/
.popup-title-tender {
  text-align: left;
  font-family: "Museo Sans Cyrl 700", sans-serif;
  font-size: 36px;
  color: rgba(11, 19, 36, 0.95);
  margin-bottom: 15px;
  width: 100%;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}

.modal {
  width: 916px;
  height: 100vh;
  overflow-y: auto;
  top: 0;
  padding: 48px 54px;
  background: #fff;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid rgb(227, 231, 233);
  color: blue;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid rgb(227, 231, 233);
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.close-btn {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: red;
  background: transparent;
}

.btn-open-modal {
  color: white;
  background: green;
  border: 1px solid green;
  border-radius: 4px;
  margin: 20px auto;
  padding: 5px;
  width: 40%;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
.news-popup-close {
  width: 56px;
  height: 56px;
  right: -29px;
  top: -18px;

  border-radius: 50px;
  cursor: pointer;
  background-image: url("assets/images/close-btn.svg");

  transform: rotate(45deg);
  z-index: 20;
}
.popup-close {
  position: absolute;
  right: -29px;
  top: -18px;
  font-size: 14px;
  display: inline-block;
}
.news-popup-image img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.news-popup-image {
  height: 280px;
  margin-bottom: 40px;
}
.news-popup-content {
  padding-left: 50px;
}
.news-popup-title {
  text-align: left;
  font-family: "Museo Sans Cyrl 700", sans-serif;
  font-size: 36px;
  color: rgba(11, 19, 36, 0.95);
  margin-bottom: 15px;
  width: 75%;
}
.news-popup-date {
  text-align: left;
  font-family: "Museo Sans Cyrl 500", sans-serif;
  font-size: 14px;
  color: rgba(11, 19, 36, 0.5);
  letter-spacing: 0.5px;
  margin-bottom: 42px;
}
.news-popup-text {
  text-align: left;
  font-size: 16px;
  color: rgb(11 19 36 / 74%);
  line-height: 26px;
  width: 696px;
  margin-bottom: 44px;
  font-family: "Museo Sans Cyrl 500", sans-serif;
}
#app {
  display: flex;
  flex-direction: column;
  justify-items: center;
}

@media screen and (max-width: 1023px){
  #app {
    width: 110rem;
  }
}
@media screen and (max-width: 440px){
  #app {
    width: 95rem !important;
  }
}

</style>
