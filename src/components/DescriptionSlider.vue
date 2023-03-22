<template>
  <div class="brands-block">
    <div class="container">
      <div class="brands-section-items">
        <div class="swiper2 mySwiperText production-section-items">
          <div class="swiper__block-wrap">
            <swiper
                :space-between="30"
                :loop="true"
                :speed="1000"
                effect="fade"
                :navigation="{
                    prevEl: prev,
                    nextEl: next,
                  }"
                :simulateTouch="false"
                :allowTouchMove="false"
                :modules="modules"
                :module="[EffectFade]"
            >
              <swiper-slide>
                <div class="swiper-slide slide-top">
                  <div class="text-slide">
                    <div class="production-section-pretitle">
                      НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ
                    </div>
                    <div class="production-section-title section-title">
                      Производство бутилированного растительного масла №1 в России
                    </div>
                    <div class="production-section-desc">
                      Производство фасованного растительного масла - одно из основных
                      направлений деятельности ГК «Юг Руси». На сегодняшний день «Юг Руси» —
                      бесспорный лидер российского рынка фасованного растительного масла.
                      Этого положения мы достигли благодаря неизменному качеству продуктов и
                      сбалансированному портфелю сильных брендов, среди которых каждый
                      потребитель найдет для себя продукт, подходящий ему по вкусу и цене.
                    </div>
<!--                    <a href="#" class="brand-button">-->
<!--                      Все направления-->
<!--                      <svg width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg">-->
<!--                        <title>Shape</title>-->
<!--                        <desc>Created with Sketch.</desc>-->
<!--                        <defs></defs>-->
<!--                        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">-->
<!--                          <g id="ButtonMain" transform="translate(-270.000000, -17.000000)" stroke="#4484D8" stroke-width="2">-->
<!--                            <g id="Blue">-->
<!--                              <polyline id="Shape" points="271 18 278 25 271 32"></polyline>-->
<!--                            </g>-->
<!--                          </g>-->
<!--                        </g>-->
<!--                      </svg>-->
<!--                    </a>-->
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="swiper-slide slide-top">
                  <div class="text-slide">
                    <div class="production-section-pretitle">
                      НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ
                    </div>
                    <div class="production-section-title section-title">
                      Производство масла наливом и продуктов переработки
                    </div>
                    <div class="production-section-desc">
                      ГК "Юг Руси" является крупным российским экспортером подсолнечного масла наливом.<br>
                      А так же крупным поставщиком как на внутреннем рынке, так на экспорт - продуктов переработки маслосемян, которые являются ценным белковым компонентом для корма&nbsp;сельскохозяйственных животных. <br>
                    </div>
<!--                    <a href="#" class="brand-button">-->
<!--                      Все направления-->
<!--                      <svg width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">-->
<!--                        &lt;!&ndash; Generator: Sketch 49.2 (51160) - http://www.bohemiancoding.com/sketch &ndash;&gt;-->
<!--                        <title>Shape</title>-->
<!--                        <desc>Created with Sketch.</desc>-->
<!--                        <defs></defs>-->
<!--                        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">-->
<!--                          <g id="ButtonMain" transform="translate(-270.000000, -17.000000)" stroke="#4484D8" stroke-width="2">-->
<!--                            <g id="Blue">-->
<!--                              <polyline id="Shape" points="271 18 278 25 271 32"></polyline>-->
<!--                            </g>-->
<!--                          </g>-->
<!--                        </g>-->
<!--                      </svg>-->
<!--                    </a>-->
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="swiper-slide slide-top">
                  <div class="text-slide">
                    <div class="production-section-pretitle">
                      НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ
                    </div>
                    <div class="production-section-title section-title">
                      Производство, продажа и закупка сельхозкультур
                    </div>
                    <div class="production-section-desc">
                      Группа компаний "Юг Руси" является крупным сельскохозяйственным производителем. В наш состав входят хозяйства в Ростовской и Волгоградской областях <br>
                      и Краснодарском крае с общей площадью сельхозземель около 200 тыс. га., площадь пахотных земель <br>
                      более 150 тыс. га.<br>
                      Так же мы осуществляем закупку сельхозкультур с быстрым расчетом и по высоким ценам!<br>
                    </div>
<!--                    <a href="#" class="brand-button">-->
<!--                      Все направления-->
<!--                      <svg width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">-->
<!--                        &lt;!&ndash; Generator: Sketch 49.2 (51160) - http://www.bohemiancoding.com/sketch &ndash;&gt;-->
<!--                        <title>Shape</title>-->
<!--                        <desc>Created with Sketch.</desc>-->
<!--                        <defs></defs>-->
<!--                        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">-->
<!--                          <g id="ButtonMain" transform="translate(-270.000000, -17.000000)" stroke="#4484D8" stroke-width="2">-->
<!--                            <g id="Blue">-->
<!--                              <polyline id="Shape" points="271 18 278 25 271 32"></polyline>-->
<!--                            </g>-->
<!--                          </g>-->
<!--                        </g>-->
<!--                      </svg>-->
<!--                    </a>-->
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="swiper-slide slide-top">
                  <div class="text-slide">
                    <div class="production-section-pretitle">
                      НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ
                    </div>
                    <div class="production-section-title section-title">
                      Производство хлебобулочных изделий
                    </div>
                    <div class="production-section-desc">
                      ООО "Хлебозавод Юг Руси" входит в структуру ГК "Юг Руси" и является крупнейшим производителем хлебобулочных изделий в &nbsp;Ростовской области. <br>
                      Группа компаний «Юг Руси» сама выращивает зерно в 20 хозяйствах, входящих в ее состав, сама его транспортирует, хранит и вырабатывает муку. Из этой муки ООО "Хлебозавод Юг Руси" производит свою продукцию. То есть, контроль качества осуществляется на всех этапах – от поля до прилавка. <br>
                    </div>
<!--                    <a href="#" class="brand-button">-->
<!--                      Все направления-->
<!--                      <svg width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">-->
<!--                        &lt;!&ndash; Generator: Sketch 49.2 (51160) - http://www.bohemiancoding.com/sketch &ndash;&gt;-->
<!--                        <title>Shape</title>-->
<!--                        <desc>Created with Sketch.</desc>-->
<!--                        <defs></defs>-->
<!--                        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">-->
<!--                          <g id="ButtonMain" transform="translate(-270.000000, -17.000000)" stroke="#4484D8" stroke-width="2">-->
<!--                            <g id="Blue">-->
<!--                              <polyline id="Shape" points="271 18 278 25 271 32"></polyline>-->
<!--                            </g>-->
<!--                          </g>-->
<!--                        </g>-->
<!--                      </svg>-->
<!--                    </a>-->
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="swiper-slide slide-top">
                  <div class="text-slide">
                    <div class="production-section-pretitle">
                      НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ
                    </div>
                    <div class="production-section-title section-title">
                      Производство муки
                    </div>
                    <div class="production-section-desc">
                      ОГК «Юг Руси» владеет несколькими мельничными комплексами в Ростовской области. Из зерна, выращенного сельхозпредприятиями компании, мы производим хлебопекарную муку для хлебозавода «Юг Руси» и для свободной продажи в фасованном виде под торговыми марками «Юг Руси» и «Сто рецептов».
                    </div>
<!--                    <a href="#" class="brand-button">-->
<!--                      Все направления-->
<!--                      <svg width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">-->
<!--                        &lt;!&ndash; Generator: Sketch 49.2 (51160) - http://www.bohemiancoding.com/sketch &ndash;&gt;-->
<!--                        <title>Shape</title>-->
<!--                        <desc>Created with Sketch.</desc>-->
<!--                        <defs></defs>-->
<!--                        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">-->
<!--                          <g id="ButtonMain" transform="translate(-270.000000, -17.000000)" stroke="#4484D8" stroke-width="2">-->
<!--                            <g id="Blue">-->
<!--                              <polyline id="Shape" points="271 18 278 25 271 32"></polyline>-->
<!--                            </g>-->
<!--                          </g>-->
<!--                        </g>-->
<!--                      </svg>-->
<!--                    </a>-->
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="swiper-slide slide-top">
                  <div class="text-slide">
                    <div class="production-section-pretitle">
                      НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ
                    </div>
                    <div class="production-section-title section-title">
                      Производство майонезов и соусов
                    </div>
                    <div class="production-section-desc">
                      Все майонезы и соусы ГК «Юг Руси» производятся <br>
                      в ОАО «МЖК «Краснодарский» из высококачественного растительного масла собственного производства. Созданные по сбалансирвоанной рецептуре <br>
                      и расфасованные в удобную упаковку, они идеально сочетаются с традиционными блюдами русской <br>
                      и европейской кухни.
                    </div>
<!--                    <a href="#" class="brand-button">-->
<!--                      Все направления-->
<!--                      <svg width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">-->
<!--                        &lt;!&ndash; Generator: Sketch 49.2 (51160) - http://www.bohemiancoding.com/sketch &ndash;&gt;-->
<!--                        <title>Shape</title>-->
<!--                        <desc>Created with Sketch.</desc>-->
<!--                        <defs></defs>-->
<!--                        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">-->
<!--                          <g id="ButtonMain" transform="translate(-270.000000, -17.000000)" stroke="#4484D8" stroke-width="2">-->
<!--                            <g id="Blue">-->
<!--                              <polyline id="Shape" points="271 18 278 25 271 32"></polyline>-->
<!--                            </g>-->
<!--                          </g>-->
<!--                        </g>-->
<!--                      </svg>-->
<!--                    </a>-->
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="swiper-slide slide-top">
                  <div class="text-slide">
                    <div class="production-section-pretitle">
                      НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ
                    </div>
                    <div class="production-section-title section-title">
                      Производство консервов
                    </div>
                    <div class="production-section-desc">
                      Комплекс консервного производства ГК «Юг Руси» <br>
                      в г. Лабинск (Краснодарский рай) — это более <br>
                      30 наименований натуральных, экологически чистых плодоовощных консервов под маркой «Сто рецептов». Сырье для продукции выращено на Кубанских черноземах, по праву считающихся «жемчужиной» агропромышленного комплекса России.
                    </div>

<!--                    <a href="#" class="brand-button">-->
<!--                      Все направления-->
<!--                      <svg width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">-->
<!--                        &lt;!&ndash; Generator: Sketch 49.2 (51160) - http://www.bohemiancoding.com/sketch &ndash;&gt;-->
<!--                        <title>Shape</title>-->
<!--                        <desc>Created with Sketch.</desc>-->
<!--                        <defs></defs>-->
<!--                        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">-->
<!--                          <g id="ButtonMain" transform="translate(-270.000000, -17.000000)" stroke="#4484D8" stroke-width="2">-->
<!--                            <g id="Blue">-->
<!--                              <polyline id="Shape" points="271 18 278 25 271 32"></polyline>-->
<!--                            </g>-->
<!--                          </g>-->
<!--                        </g>-->
<!--                      </svg>-->
<!--                    </a>-->
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="swiper-slide slide-top">
                  <div class="text-slide">
                    <div class="production-section-pretitle">
                      НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ
                    </div>
                    <div class="production-section-title section-title">
                      Дистрибьюция
                    </div>
                    <div class="production-section-desc">
                      Мы считаем исключительно важным, чтобы покупатели могли найти наш продукт в
                      любой точке России, в любом магазине – от гипермаркета до маленького
                      магазинчика у дома. Именно поэтому мы построили систему дистрибьюции,
                      которую мы считаем одной из лучших в стране.
                    </div>
<!--                    <a href="#" class="brand-button">-->
<!--                      Все направления-->
<!--                      <svg width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">-->
<!--                        &lt;!&ndash; Generator: Sketch 49.2 (51160) - http://www.bohemiancoding.com/sketch &ndash;&gt;-->
<!--                        <title>Shape</title>-->
<!--                        <desc>Created with Sketch.</desc>-->
<!--                        <defs></defs>-->
<!--                        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">-->
<!--                          <g id="ButtonMain" transform="translate(-270.000000, -17.000000)" stroke="#4484D8" stroke-width="2">-->
<!--                            <g id="Blue">-->
<!--                              <polyline id="Shape" points="271 18 278 25 271 32"></polyline>-->
<!--                            </g>-->
<!--                          </g>-->
<!--                        </g>-->
<!--                      </svg>-->
<!--                    </a>-->
                  </div>
                </div>
              </swiper-slide>

            </swiper>
          </div>
        </div>
        <div class="production-section-images">

          <div class="swiper mySwiper">
            <div class="swiper-wrapper">
              <swiper
                  :loop="true"
                  :speed="1000"
                  :navigation="{
                    prevEl: prev,
                    nextEl: next,
                  }"
                  :simulateTouch="false"
                  :allowTouchMove="false"
                  :modules="modules"
              >

                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="../assets/images/descriptionSlider/1_slide.jpg">
                  </div>
                </swiper-slide>

                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="../assets/images/descriptionSlider/2_slide.jpg">
                  </div>
                </swiper-slide>

                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="../assets/images/descriptionSlider/3_slide.jpg">
                  </div>
                </swiper-slide>

                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="../assets/images/descriptionSlider/4_slide.jpg">
                  </div>
                </swiper-slide>

                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="../assets/images/descriptionSlider/5_slide.jpg">
                  </div>
                </swiper-slide>

                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="../assets/images/descriptionSlider/6_slide.jpg">
                  </div>
                </swiper-slide>

                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="../assets/images/descriptionSlider/7_slide.jpg">
                  </div>
                </swiper-slide>

                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="../assets/images/descriptionSlider/8_slide.jpg">
                  </div>
                </swiper-slide>

              </swiper>

            </div>
          </div>
          <div class="slide_prev btn_prev swiper-button-prev1" ref="prev"></div>
          <div class="slide_next btn_next swiper-button-next2" ref="next"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import { EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { ref } from 'vue';

export default {
  name: "DescriptionSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    const prev = ref(null);
    const next = ref(null);
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation,EffectFade],
      prev,
      next,
    };
  },
}

</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 1224px;
}
.flexcontainer {
  display: flex;
  flex-direction: row;
}
.production-section-items {
  width: 450px;
  float: left;
}
/*стили картинки*/
img {
  max-width: 100%;
  min-height: 99%;
}
.slick-slide img {
  display: block;
}
.production-section-img img {
  height: 100%;
  width: 100%;
  -o-object-fit: contain;
  object-fit: contain;
}

.production-section-pretitle {
  font-family: "Museo Sans Cyrl 500", sans-serif;
  font-size: 14px;
  color: rgba(11, 19, 36, 0.4);
  letter-spacing: 0.5px;
  line-height: 20px;
  margin-bottom: 26px;
}
.section-title {
  font-family: "Museo Sans Cyrl 700", sans-serif;
  font-size: 44px;
  color: rgba(11, 19, 36, 0.95);
  text-align: center;
  line-height: 50px;
}
.production-section-title {
  text-align: left;
  margin-bottom: 28px;
  max-height: 200px;
  text-align: left;
}
.production-section-desc {
  font-family: "Museo Sans Cyrl 300", sans-serif;
  font-size: 16px;
  color: rgba(11, 19, 36, 0.95);
  line-height: 26px;
  margin-bottom: 38px;
  max-height: 240px;
}
.brand-button {
  width: 210px;
}
.brand-button {
  display: block;
  height: 54px;
  width: 263px;
  border: 1px solid #4484D8;
  text-align: left;
  padding-left: 21px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  font-family: "Museo Sans Cyrl 700", sans-serif;
  font-size: 16px;
  color: #4484D8;
  letter-spacing: 0.2px;
  line-height: 52px;
  position: relative;
  -webkit-transition: all .2s;
  -o-transition: all .2s;
  transition: all .2s;
  text-decoration: none;
}
.brand-button:hover {
  background-color: #4484D8;
  color: #FFFFFF;
  -webkit-transition: all .2s;
  -o-transition: all .2s;
  transition: all .2s;
}
.brand-button svg {
  position: absolute;
  top: 55%;
  right: 19px;
  margin-top: -9px;
  -webkit-transition: all .2s;
  -o-transition: all .2s;
  transition: all .2s;
}
.production-section-images {
  width: 944px;
  height: 560px;
  position: absolute;
  left: 45.2%;
}
@media screen and (max-width: 1024px) {
  .production-section-images {
    left: 75%;
  }
}
/*Стили кнопок навигации*/
.btn_next, .btn_prev {
  position: absolute;
  display: block;
  width: 56px;
  height: 56px;
  bottom: -4px;
  cursor: pointer;
  padding: 0;
  border: none;
  outline: none;
  z-index: 1000;

}
.btn_prev {
  left: -85px;
  background-image: url(../assets/images/descriptionSlider/slick-btn.svg);
}
.btn_next {
  left: -23px;
  background-image: url(../assets/images/descriptionSlider/slick-btn-next.svg);
}
.slick-prev {
  left: -25px;
}

.production-section-images .slick-prev {
  left: -67px;
  /*background-image: url(img/slick-btn.svg);*/
  -webkit-transition: .3s;
  -o-transition: .3s;
  transition: .3s;
}
.production-section-images .slick-prev, .production-section-images .slick-next {
  top: unset;
  width: 44px;
  height: 44px;
  bottom: -4px;
  -webkit-background-size: contain;
  background-size: contain;
}
.slick-next {
  right: -25px;
}
.production-section-images .slick-next {
  left: -17px;
  right: 0px;
  /*background-image: url(img/slick-btn-next.svg);*/
  -webkit-transition: .3s;
  -o-transition: .3s;
  transition: .3s;
}
.production-section-images .slick-prev, .production-section-images .slick-next {
  top: unset;
  width: 44px;
  height: 44px;
  bottom: -4px;
  -webkit-background-size: contain;
  background-size: contain;
}
.slick-prev:before, .slick-next:before {
  font-family: "slick";
  font-size: 20px;
  line-height: 1;
  color: white;
  opacity: 0.75;

}
.text-slide {
  background: white;
}
.brands-block {
  padding-top: 150px;
}
.slide-top{
  height: 620px;
  background: #fff;
}
</style>
