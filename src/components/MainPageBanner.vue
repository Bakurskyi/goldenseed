<template>
  <section class="main-banner" attr-dir="/">
    <div class="main-banner-wrapper" >
      <div class="container">
        <h1 class="main-banner-text">
          С нами вкуснее и полезнее. Уже более 25 лет!            			</h1>
      </div>
    </div>
<!--    <div class="main-banner-button">-->
<!--      <button class="btn-next-section">-->

<!--        <svg width="45px" height="26px" viewBox="0 0 45 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">-->
<!--          <defs></defs>-->
<!--          <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.153475996">-->
<!--            <g id="btn_Arrow_goDown" transform="translate(-6.000000, -14.000000)" fill="#0B1324" fill-rule="nonzero">-->
<!--              <polygon id="Shape-Copy" points="28.4142136 33.5857864 48 14 50.8284271 16.8284271 28.4142136 39.2426407 6 16.8284271 8.82842712 14"></polygon>-->
<!--            </g>-->
<!--          </g>-->
<!--        </svg>-->

<!--      </button>-->
<!--    </div>-->
  </section>
</template>

<script>
  export default {
    name: 'BannerMainPage'
  }
</script>

<style>
.main-banner {
  display: flex;
  flex-wrap: wrap;
  /*height: 100vh;*/
}
.main-banner-wrapper {
  background: url("../assets/images/bannermain.jpg");
  width: 1704px;
  margin: 0 auto;
  /*background-image: url(../images/banner.jpg);*/
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 68vh;
  margin-bottom: 30px;
}
.main-banner-text {
  font-family: "Museo Sans Cyrl 700", sans-serif;
  font-size: 54px;
  color: #FFFFFF;
  line-height: 72px;
  padding-top: 76px;
  width: 60%;
  position: relative;
  left: -15px;
}
</style>
