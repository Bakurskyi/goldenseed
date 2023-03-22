<template>
  <div class=" header-wrapper">
    <nav class="header-menu-list">
      <router-link to="/" class="disabled">
      <div>
        <div class="header-menu-burger-item-title ">
          <a href="/" >О ГРУППЕ КОМПАНИЙ</a>
          <svg class="svg-dropdown" xmlns="http://www.w3.org/2000/svg"  width="10px" height="5px" viewBox="0 0 10 5">
            <title>Shape Copy 2</title>
            <desc>Created with Sketch.</desc>
            <defs/>
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-opacity="0.6">
              <g id="TopBar" transform="translate(-516.000000, -126.000000)" stroke="#0B1324">
                <g id="TopMenu-Copy-2" transform="translate(347.000000, 121.000000)">
                  <polyline id="Shape-Copy-2" transform="translate(174.250000, 7.250000) rotate(-270.000000) translate(-174.250000, -7.250000) " points="172 3 176.5 7.25 172 11.5"/>
                </g>
              </g>
            </g>
          </svg>
        </div>
<!--        <ul class="header-menu-item-content">-->
<!--          <li><a href="/about/#info">ОБЩАЯ ИНФОРМАЦИЯ</a></li>-->
<!--          <li><a href="/about/#activities">НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ</a></li>-->
<!--          <li><a href="/about/#history">ИСТОРИЯ</a></li>-->
<!--          <li><a href="/about/#awards">НАГРАДЫ</a></li>-->
<!--          <li><a href="/about/#management">ОСНОВАТЕЛЬ</a></li>-->
<!--        </ul>-->
      </div>
      </router-link>
      <router-link to="/products#" class="disabled">ПРОДУКЦИЯ</router-link>
      <router-link to="/tenders">ТЕНДЕРЫ</router-link>
      <router-link to="/partners">ПАРТНЕРАМ</router-link>
      <router-link to="/pressCenter" class="disabled">ПРЕСС-ЦЕНТР</router-link>
      <router-link to="/career" class="disabled">КАРЬЕРА</router-link>
      <router-link to="/contacts" class="disabled">КОНТАКТЫ</router-link>
<!--      <router-link to="/">EN</router-link>-->
    </nav>
  </div>

</template>

<script>
export default {
  name: 'NavHeader'
}
</script>

<style>
a{
  font-family: "Museo Sans Cyrl 500", sans-serif;
  transition: all .2s;
}
/*a:visited{*/
/*  color: blue;*/
/*}*/
.disabled {
  color: #999;
  pointer-events: none;
}
.disabled a {
  color: #999;
}
a:hover {
  color: #336FC2;
  transition: all .2s;
}
.header-menu-list {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 17px;
  padding-bottom: 22px;
  flex-wrap: wrap;
}
.svg-dropdown {
  margin-left: 2px;
  display: inline-block;
  background-repeat: no-repeat;
  vertical-align: middle;
  width: 10px;
  height: 7px;
}
.header-wrapper {
  max-width: 1224px;
  margin: 0px auto;

}
</style>
