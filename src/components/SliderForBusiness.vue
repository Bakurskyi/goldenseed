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
                      ДЛЯ БИЗНЕСА
                    </div>
                    <div class="production-section-title section-title">
                      Поставляем нашу продукцию  на выгодных условиях
                    </div>
                    <div class="production-section-desc">
                      Уже более 25 лет покупатели выбирают продукцию группы компаний «Юг Руси» на полках магазинов. Именно <br>
                      поэтому ГК «Юг Руси» является лидером рынка <br>
                      в своем сегменте. Мы считаем торговые компании своими партнерами в выполнении миссии по снабжению потребителей качественной, вкусной и полезной продукцией<br>
                      и всегда рады взаимовыгодному сотрудничеству.
                    </div>
                    <!--                    <a href="#" class="brand-button">-->
                    <!--                      Подробнее-->
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
                      ДЛЯ БИЗНЕСА
                    </div>
                    <div class="production-section-title section-title">
                      Закупаем сельхозпродукцию
                    </div>
                    <div class="production-section-desc">
                      ГК "Юг Руси" на рынке сельхозпродукции уже более четверти века.&nbsp; Мы всегда даем высокую цену, развитый сервис, осуществляем быстрый расчет.<br>
                      Заводы и элеваторы компании расположены в основных зонах производства подсолнечника в России. Это, плюс наличие собственного автотранспортного парка, позволяет добиваться максимальной эффективности <br>
                      с точки зрения логистики закупки.
                    </div>
                    <!--                    <a href="#" class="brand-button">-->
                    <!--                      Подробнее-->
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
                      ДЛЯ БИЗНЕСА
                    </div>
                    <div class="production-section-title section-title">
                      Организуем тендеры
                    </div>
                    <div class="production-section-desc">
                      Ежегодно мы организуем более 100 тендеров на услуги, поставку оборудования, продукции для нужд группы компаний «Юг Руси». Мы всегда рады новым ответственным подрядчикам.
                    </div>
                    <!--                    <a href="#" class="brand-button">-->
                    <!--                      Подробнее-->
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
                      ДЛЯ БИЗНЕСА
                    </div>
                    <div class="production-section-title section-title">
                      Развиваем рынок сельского хозяйства
                    </div>
                    <div class="production-section-desc">
                      <a href="http://agro2b.ru/ru">Agro2b.ru</a> — информационно-аналитический портал <br>
                      в сфере сельского хозяйства. На нем мы освещаем события аграрного сектора по всему миру, публикуем аналитические материалы, транслируем вещание телеканала «Агро-ТВ». Мы также разработали электронную торговую площадку Agro2b.com, которая позволяет проводить полноценные тендеры и аукционы с проверенными контрагентами и заключать юридически значимые договоры по результатам торгов.&nbsp;
                    </div>

                    <!--                    <a href="#" class="brand-button">-->
                    <!--                      Подробнее-->
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
                    <img src="../assets/images/sliderForBusiness/01.jpg">
                  </div>
                </swiper-slide>

                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="../assets/images/sliderForBusiness/02.jpg">
                  </div>
                </swiper-slide>

                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="../assets/images/sliderForBusiness/03.jpg">
                  </div>
                </swiper-slide>

                <swiper-slide>
                  <div class="swiper-slide">
                    <img src="../assets/images/sliderForBusiness/04.jpg">
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
<!--<template>-->
<!--  <div class="brands-block">-->
<!--    <div class="container">-->
<!--      <div class="brands-section-items">-->
<!--        <div class="swiper2 mySwiperText production-section-items">-->
<!--          <div class="swiper__block-wrap">-->
<!--            <swiper-->
<!--                :space-between="30"-->
<!--                :loop="true"-->
<!--                :speed="1000"-->
<!--                :modules="[EffectFade]"-->
<!--                effect="fade"-->
<!--                navigation-->
<!--            >-->
<!--              <swiper-slide >-->
<!--                <div class="swiper-slide">-->
<!--                  <div class="text-slide">-->
<!--                    <div class="production-section-pretitle">-->
<!--                      ДЛЯ БИЗНЕСА-->
<!--                    </div>-->
<!--                    <div class="production-section-title section-title">-->
<!--                      Поставляем нашу продукцию  на выгодных условиях-->
<!--                    </div>-->
<!--                    <div class="production-section-desc">-->
<!--                      Уже более 25 лет покупатели выбирают продукцию группы компаний «Юг Руси» на полках магазинов. Именно <br>-->
<!--                      поэтому ГК «Юг Руси» является лидером рынка <br>-->
<!--                      в своем сегменте. Мы считаем торговые компании своими партнерами в выполнении миссии по снабжению потребителей качественной, вкусной и полезной продукцией<br>-->
<!--                      и всегда рады взаимовыгодному сотрудничеству.-->
<!--                    </div>-->
<!--                    <a href="#" class="brand-button">-->
<!--                      Подробнее-->
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
<!--                  </div>-->
<!--                </div>-->
<!--              </swiper-slide>-->

<!--              <swiper-slide>-->
<!--                <div class="swiper-slide">-->
<!--                  <div class="text-slide">-->
<!--                    <div class="production-section-pretitle">-->
<!--                      ДЛЯ БИЗНЕСА-->
<!--                    </div>-->
<!--                    <div class="production-section-title section-title">-->
<!--                      Закупаем сельхозпродукцию					</div>-->
<!--                    <div class="production-section-desc">-->
<!--                      ГК "Юг Руси" на рынке сельхозпродукции уже более четверти века.&nbsp; Мы всегда даем высокую цену, развитый сервис, осуществляем быстрый расчет.<br>-->
<!--                      Заводы и элеваторы компании расположены в основных зонах производства подсолнечника в России. Это, плюс наличие собственного автотранспортного парка, позволяет добиваться максимальной эффективности <br>-->
<!--                      с точки зрения логистики закупки.					</div>-->
<!--                    <a href="#" class="brand-button">-->
<!--                      Подробнее-->

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
<!--                    <div style="height: 50px; background: white"></div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </swiper-slide>-->

<!--              <swiper-slide>-->
<!--                <div class="swiper-slide">-->
<!--                  <div class="text-slide">-->
<!--                    <div class="production-section-pretitle">-->
<!--                      ДЛЯ БИЗНЕСА-->
<!--                    </div>-->
<!--                    <div class="production-section-title section-title">-->
<!--                      Организуем тендеры					</div>-->
<!--                    <div class="production-section-desc">-->
<!--                      Ежегодно мы организуем более 100 тендеров на услуги, поставку оборудования, продукции для нужд группы компаний «Юг Руси». Мы всегда рады новым ответственным подрядчикам.					</div>-->
<!--                    <a href="#" class="brand-button">-->
<!--                      Подробнее-->

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
<!--                    <div style="height: 160px; background: white"></div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </swiper-slide>-->

<!--              <swiper-slide>-->
<!--                <div class="swiper-slide">-->
<!--                  <div class="text-slide">-->
<!--                    <div class="production-section-pretitle">-->
<!--                      ДЛЯ БИЗНЕСА-->
<!--                    </div>-->
<!--                    <div class="production-section-title section-title">-->
<!--                      Развиваем рынок сельского хозяйства					</div>-->
<!--                    <div class="production-section-desc">-->
<!--                      <a href="http://agro2b.ru/ru">Agro2b.ru</a> — информационно-аналитический портал <br>-->
<!--                      в сфере сельского хозяйства. На нем мы освещаем события аграрного сектора по всему миру, публикуем аналитические материалы, транслируем вещание телеканала «Агро-ТВ». Мы также разработали электронную торговую площадку Agro2b.com, которая позволяет проводить полноценные тендеры и аукционы с проверенными контрагентами и заключать юридически значимые договоры по результатам торгов.&nbsp;					</div>-->
<!--                    <a href="#" class="brand-button">-->
<!--                      Подробнее-->

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
<!--                    <div style="height: 50px; background: white"></div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </swiper-slide>-->

<!--            </swiper>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="production-section-images">-->

<!--          <div class="swiper mySwiper">-->
<!--            <div class="swiper-wrapper">-->
<!--              <swiper-->
<!--                  :loop="true"-->
<!--                  :speed="1000"-->
<!--                  navigation-->
<!--              >-->
<!--                <swiper-slide>-->
<!--                  <div class="swiper-slide">-->
<!--                    <img src="../assets/images/sliderForBusiness/01.jpg">-->
<!--                  </div>-->
<!--                </swiper-slide>-->

<!--                <swiper-slide>-->
<!--                  <div class="swiper-slide">-->
<!--                    <img src="../assets/images/sliderForBusiness/02.jpg">-->
<!--                  </div>-->
<!--                </swiper-slide>-->

<!--                <swiper-slide>-->
<!--                  <div class="swiper-slide">-->
<!--                    <img src="../assets/images/sliderForBusiness/03.jpg">-->
<!--                  </div>-->
<!--                </swiper-slide>-->

<!--                <swiper-slide>-->
<!--                  <div class="swiper-slide">-->
<!--                    <img src="../assets/images/sliderForBusiness/04.jpg">-->
<!--                  </div>-->
<!--                </swiper-slide>-->

<!--              </swiper>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="slide_prev slick-prev"></div>-->
<!--          <div class="slide_next slick-next"></div>-->

<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->

<!--import { Swiper, SwiperSlide } from 'swiper/vue';-->
<!--import { Navigation } from 'swiper';-->
<!--import { EffectFade } from 'swiper';-->
<!--import 'swiper/css';-->
<!--import 'swiper/css/navigation';-->
<!--import 'swiper/css/effect-fade';-->

<!--export default {-->
<!--  name: "SliderForBusiness",-->
<!--  components: {-->
<!--    Swiper,-->
<!--    SwiperSlide,-->
<!--  },-->
<!--  setup() {-->
<!--    const onSwiper = (swiper) => {-->
<!--      console.log(swiper);-->
<!--    };-->
<!--    const onSlideChange = () => {-->
<!--      console.log('slide change');-->
<!--    };-->
<!--    return {-->
<!--      onSwiper,-->
<!--      onSlideChange,-->
<!--      EffectFade,-->
<!--      modules: [Navigation],-->
<!--    };-->
<!--  },-->
<!--}-->

<!--</script>-->

<!--<style scoped>-->
<!--* {-->
<!--  margin: 0px;-->
<!--  padding: 0px;-->
<!--  box-sizing: border-box;-->
<!--}-->
<!--.container {-->
<!--  width: 100%;-->
<!--  margin-right: auto;-->
<!--  margin-left: auto;-->
<!--  max-width: 1224px;-->
<!--}-->
<!--.flexcontainer {-->
<!--  display: flex;-->
<!--  flex-direction: row;-->
<!--}-->
<!--.production-section-items {-->
<!--  width: 450px;-->
<!--  float: left;-->
<!--}-->
<!--/*стили картинки*/-->
<!--img {-->
<!--  max-width: 100%;-->
<!--  height: auto;-->
<!--}-->
<!--.slick-slide img {-->
<!--  display: block;-->
<!--}-->
<!--.production-section-img img {-->
<!--  height: 100%;-->
<!--  width: 100%;-->
<!--  -o-object-fit: contain;-->
<!--  object-fit: contain;-->
<!--}-->

<!--.production-section-pretitle {-->
<!--  font-family: "Museo Sans Cyrl 500", sans-serif;-->
<!--  font-size: 14px;-->
<!--  color: rgba(11, 19, 36, 0.4);-->
<!--  letter-spacing: 0.5px;-->
<!--  line-height: 20px;-->
<!--  margin-bottom: 26px;-->
<!--}-->
<!--.section-title {-->
<!--  font-family: "Museo Sans Cyrl 700", sans-serif;-->
<!--  font-size: 44px;-->
<!--  color: rgba(11, 19, 36, 0.95);-->
<!--  text-align: center;-->
<!--  line-height: 50px;-->
<!--}-->
<!--.production-section-title {-->
<!--  text-align: left;-->
<!--  margin-bottom: 28px;-->
<!--  max-height: 200px;-->
<!--  text-align: left;-->
<!--}-->
<!--.production-section-desc {-->
<!--  font-family: "Museo Sans Cyrl 300", sans-serif;-->
<!--  font-size: 16px;-->
<!--  color: rgba(11, 19, 36, 0.95);-->
<!--  line-height: 26px;-->
<!--  margin-bottom: 38px;-->
<!--  max-height: 240px;-->
<!--}-->
<!--.brand-button {-->
<!--  width: 210px;-->
<!--}-->
<!--.brand-button {-->
<!--  display: block;-->
<!--  height: 54px;-->
<!--  width: 263px;-->
<!--  border: 1px solid #4484D8;-->
<!--  text-align: left;-->
<!--  padding-left: 21px;-->
<!--  -webkit-border-radius: 4px;-->
<!--  border-radius: 4px;-->
<!--  font-family: "Museo Sans Cyrl 700", sans-serif;-->
<!--  font-size: 16px;-->
<!--  color: #4484D8;-->
<!--  letter-spacing: 0.2px;-->
<!--  line-height: 52px;-->
<!--  position: relative;-->
<!--  -webkit-transition: all .2s;-->
<!--  -o-transition: all .2s;-->
<!--  transition: all .2s;-->
<!--  text-decoration: none;-->
<!--}-->
<!--.brand-button:hover {-->
<!--  background-color: #4484D8;-->
<!--  color: #FFFFFF;-->
<!--  -webkit-transition: all .2s;-->
<!--  -o-transition: all .2s;-->
<!--  transition: all .2s;-->
<!--}-->
<!--.brand-button svg {-->
<!--  position: absolute;-->
<!--  top: 55%;-->
<!--  right: 19px;-->
<!--  margin-top: -9px;-->
<!--  -webkit-transition: all .2s;-->
<!--  -o-transition: all .2s;-->
<!--  transition: all .2s;-->
<!--}-->
<!--.production-section-images {-->
<!--  width: 944px;-->
<!--  height: 560px;-->
<!--  position: absolute;-->
<!--  left: 45.2%;-->
<!--}-->
<!--/*Стили кнопок навигации*/-->
<!--.slick-prev, .slick-next {-->
<!--  position: absolute;-->
<!--  display: block;-->
<!--  height: 20px;-->
<!--  width: 20px;-->
<!--  line-height: 0px;-->
<!--  font-size: 0px;-->
<!--  cursor: pointer;-->
<!--  background: transparent;-->
<!--  color: transparent;-->
<!--  top: 50%;-->
<!--  -webkit-transform: translate(0, -50%);-->
<!--  -ms-transform: translate(0, -50%);-->
<!--  transform: translate(0, -50%);-->
<!--  padding: 0;-->
<!--  border: none;-->
<!--  outline: none;-->
<!--  z-index: 3;-->
<!--}-->
<!--.slick-prev {-->
<!--  left: -25px;-->
<!--}-->
<!--.production-section-images .slick-prev {-->
<!--  left: -67px;-->
<!--  /*background-image: url(img/slick-btn.svg);*/-->
<!--  -webkit-transition: .3s;-->
<!--  -o-transition: .3s;-->
<!--  transition: .3s;-->
<!--}-->
<!--.production-section-images .slick-prev, .production-section-images .slick-next {-->
<!--  top: unset;-->
<!--  width: 44px;-->
<!--  height: 44px;-->
<!--  bottom: -4px;-->
<!--  -webkit-background-size: contain;-->
<!--  background-size: contain;-->
<!--}-->
<!--.slick-next {-->
<!--  right: -25px;-->
<!--}-->
<!--.production-section-images .slick-next {-->
<!--  left: -17px;-->
<!--  right: 0px;-->
<!--  /*background-image: url(img/slick-btn-next.svg);*/-->
<!--  -webkit-transition: .3s;-->
<!--  -o-transition: .3s;-->
<!--  transition: .3s;-->
<!--}-->
<!--.production-section-images .slick-prev, .production-section-images .slick-next {-->
<!--  top: unset;-->
<!--  width: 44px;-->
<!--  height: 44px;-->
<!--  bottom: -4px;-->
<!--  -webkit-background-size: contain;-->
<!--  background-size: contain;-->
<!--}-->
<!--.slick-prev:before, .slick-next:before {-->
<!--  font-family: "slick";-->
<!--  font-size: 20px;-->
<!--  line-height: 1;-->
<!--  color: white;-->
<!--  opacity: 0.75;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--}-->
<!--.text-slide {-->
<!--  background: white;-->
<!--}-->
<!--.brands-block {-->
<!--  padding-top: 150px;-->
<!--}-->

<!--</style>-->
