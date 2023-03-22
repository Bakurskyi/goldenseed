<template>
  <div class="brands-block">
    <div class="container">
      <h2 class="section-title section-title-brands">Наши бренды</h2>
      <div class="brands-section-items">
        <div class="row">

          <div class="col">
            <div class="brands-section-item">
              <div class="brands-section-item-top">
                <div class="brands-section-item-wrapper">
                  <div class="brands-section-item-img">
                    <img src="../assets/images/zolsem.png" alt="" style="background-color: rgba(0, 0, 0, 0); visibility: visible;">
                  </div>
                </div>
              </div>
              <div class="brands-section-item-bottom">
                <div class="brands-section-item-bottom-wrapper">
                  <div class="brands-section-item-bottom-text">
                    3-кратный обладатель премии «Товар года»
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="brands-section-item">
              <div class="brands-section-item-top">
                <div class="brands-section-item-wrapper">
                  <div class="brands-section-item-img">
                    <img src="../assets/images/avedov.png" alt="" style="background-color: rgba(0, 0, 0, 0); visibility: visible;">
                  </div>
                </div>
              </div>
              <div class="brands-section-item-bottom">
                <div class="brands-section-item-bottom-wrapper">
                  <div class="brands-section-item-bottom-text">
                    Премиальная марка со столетней историей
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="brands-section-item">
              <div class="brands-section-item-top">
                <div class="brands-section-item-wrapper">
                  <div class="brands-section-item-img">
                    <img src="../assets/images/storeceptov.png" alt="" style="background-color: rgba(0, 0, 0, 0); visibility: visible;">
                  </div>
                </div>
              </div>
              <div class="brands-section-item-bottom">
                <div class="brands-section-item-bottom-wrapper">
                  <div class="brands-section-item-bottom-text">
                    Множество вкусных и полезных продуктов
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="brands-section-item-list">
              <div class="brands-section-item-list-title">
                Наша продукция:
              </div>
              <ul class="brands-section-item-list-products">
                <li><a href="#" @click.prevent="">Масло</a></li>
                <li><a href="#" @click.prevent="">Майонез</a></li>
                <li><a href="#" @click.prevent="">Кетчупы и соусы</a></li>
                <li><a href="#" @click.prevent="">Консервация</a></li>
                <li><a href="#" @click.prevent="">Кондитерские изделия и снэки</a></li>
                <li><a href="#" @click.prevent="">Протеины</a></li>
                <li><a href="#" @click.prevent="">Жареные семечки</a></li>
              </ul>
<!--              <a href="#" class="brand-button">-->
<!--                Все бренды <span>(9)</span>-->

<!--                <svg width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">-->
<!--                  <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">-->
<!--                    <g id="ButtonMain" transform="translate(-270.000000, -17.000000)" stroke="#4484D8" stroke-width="2">-->
<!--                      <g id="Blue">-->
<!--                        <polyline id="Shape" points="271 18 278 25 271 32"></polyline>-->
<!--                      </g>-->
<!--                    </g>-->
<!--                  </g>-->
<!--                </svg>-->
<!--              </a>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
  export default {
    name: 'BrandsDisplay'
  }
</script>


<style>
.brands-block {
  padding-top: 60px;
}
.brands-section-items {
  overflow: hidden;
}
.section-title {
  font-family: "Museo Sans Cyrl 700", sans-serif;
  font-size: 44px;
  color: rgba(11, 19, 36, 0.95);
  text-align: center;
  line-height: 50px;
}
.section-title-brands {
  margin-bottom: 46px;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -12px;
  margin-left: -12px;
  justify-content: center;
}
.col {
  flex-basis: 0;
  flex-grow: 1;
  min-width: 280px;
  max-width: 288px;
  margin: 0px 12px;
  max-height: 555px;
}
.brands-section-item {
  background: rgba(173, 186, 189, 0.2);
  border-radius: 4px;
}
.brands-section-item-top {
  padding: 10px 10px 0px 10px;
}
.brands-section-item-wrapper {
  background-color: #FFFFFF;
  -webkit-box-shadow: 0 1px 2px 0 rgb(0 0 0 / 8%);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 8%);
  -webkit-border-radius: 4px 4px 0 0;
  border-radius: 4px 4px 0 0;
  padding: 20px;
  padding-top: 33px;
  padding-bottom: 10px;
  position: relative;
  top: 0;
  transition: .2s;
}
.brands-section-item-img {
  max-width: 204px;
  min-height: 188px;
  max-height: 188px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.brands-section-item-wrapper:after {
  content: "";
  position: absolute;
  max-width: 100%;
  height: 0;
  left: 0;
  top: 231px;
  border-top: 76px solid #FFFFFF;
  border-left: 134px solid transparent;
  border-right: 134px solid transparent;
  -webkit-filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.08));
  filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.08));
}
.brands-section-item-bottom {
  padding: 10px 16px 16px 16px;
  padding-top: 0;
}
.brands-section-item-bottom-wrapper {
  padding: 117px 25px 63px 25px;
  border: 6px solid #FFFFFF;
  border-top: none;
}
.brands-section-item-bottom-text {
  font-family: "Museo Sans Cyrl 700", sans-serif;
  font-size: 24px;
  color: rgba(11, 19, 36, 0.95);
  text-align: center;
  line-height: 28px;
  word-break: break-word;
}
.brands-section-item-list {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-left: 24px;
  margin-top: 78px;
}
.brands-section-item-list-title {
  font-family: "Museo Sans Cyrl 700", sans-serif;
  font-size: 30px;
  color: rgba(11, 19, 36, 0.95);
  line-height: 34px;
  margin-bottom: 28px;
}
.brands-section-item-list-products {
  margin-bottom: 30px;
}
.brand-button {
  display: block;
  height: 54px;
  width: 263px;
  border: 1px solid #4484D8;
  text-align: left;
  padding-left: 21px;
  border-radius: 4px;
  font-family: "Museo Sans Cyrl 700", sans-serif;
  font-size: 16px;
  color: #4484D8;
  letter-spacing: 0.2px;
  line-height: 52px;
  position: relative;
  transition: all .2s;
  text-decoration: none;
}
.brands-section-item-list-products li a {
  font-family: "Museo Sans Cyrl 500", sans-serif;
  font-size: 18px;
  color: rgba(11, 19, 36, 0.95);
  line-height: 32px;
  border-bottom: 1px solid rgba(11, 19, 36, 0.4);
  transition: all .2s;
  text-decoration: none;
}
.brand-button svg {
  position: absolute;
  top: 55%;
  right: 19px;
  margin-top: -9px;
  transition: all .2s;
}
</style>
