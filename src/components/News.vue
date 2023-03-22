<template>
  <div class="news-section section-wrapper">
    <div class="container">
      <div class="news-top-content">
        <div class="news-title section-title">
          Новости
        </div>
<!--        <a href="/news/" class="brand-button">-->
<!--          Все новости-->

<!--          <svg width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">-->
<!--            <title>Shape</title>-->
<!--            <desc>Created with Sketch.</desc>-->
<!--            <defs></defs>-->
<!--            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">-->
<!--              <g id="ButtonMain" transform="translate(-270.000000, -17.000000)" stroke="#4484D8" stroke-width="2">-->
<!--                <g id="Blue">-->
<!--                  <polyline id="Shape" points="271 18 278 25 271 32"></polyline>-->
<!--                </g>-->
<!--              </g>-->
<!--            </g>-->
<!--          </svg>-->
<!--        </a>-->
      </div>

      <div class="swiper__block-wrap">
        <swiper
            :slides-per-view="3"
            :space-between="50"
            :loop="true"
            navigation
            :modules="modules"
            @swiper="onSwiper"
            @slideChange="onSlideChange"

        >
          <swiper-slide
              @click.prevent="openModalNew(newItem)"
              v-for="newItem in news"
              :key="newItem">
            <div class="news-item">
              <div class="news-item-image">
                <img :src="require(`../assets/images/${newItem.src}`)" alt="" style="background-color: rgba(0, 0, 0, 0); visibility: visible;">
              </div>
              <div class="news-item-content">
                <div class="news-item-title">
                  <span>{{ newItem.newsTitle }}</span>
                </div>
                <div class="news-item-date">
                  {{ newItem.data }}
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

<!--<ModalPop v-show="visible"></ModalPop>-->
        <modalNews v-show="visibleNew"
                  :body="newItem.body"
                  :title="newItem.title"
                  :date="newItem.date"
                  :src="newItem.src"
                  @closeNew="close">

        </modalNews>
      </div>

    </div>

  </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
// import ModalPop from "@/components/Modal";
import modalNews from "@/components/ModalNews";


  export default {
    name:'newsBlock',
    data() {
      return {
        visibleNew: false,
        visible: false,
        news: [
          {
            id: '1',
            src: 'alert.jpg',
            newsTitle: 'Внимание! Мошенники!',
            data: '14.06.2022'
          },
          {
            id: '2',
            src: '2.jpg',
            newsTitle: 'Сергей Кислов: У сотрудничества с Угандой есть большой потенциал',
            data: '21.07.2021'
          },
          {
            id: '3',
            src: '3.jpg',
            newsTitle: '"Золотая Семечка"- победитель премии "Товар года 2020"',
            data: '18.11.2020'
          },
          {
            id: '4',
            src: '4.jpg',
            newsTitle: 'На Ростовском ипподроме возобновлены испытания лошадей',
            data: '09.08.2020'
          },
          {
            id: '5',
            src: '5.jpg',
            newsTitle: 'Праздник франкофонии',
            data: '11.03.2020'
          },
        ],
        newsItems: {
          "1":{
            src: '7afa2597eeacc11860fe412d3e5fe4c2.jpg',
            title: 'Внимание! Мошенники!',
            date: "14.06.2022",
            body: 'Уважаемые посетители сайта ГК «Юг Руси»! Обращаем Ваше внимание, что появившийся в сети Интернет сайт zolotoezerno.com является мошенническим. Никакого отношения к предприятиям ГК «Юг Руси» он не имеет. Просим Вас проявлять осмотрительность!',
          },
          "2":{
            src: 'dfsdfsdfasdfasdf.jpg',
            title: 'Сергей Кислов: У сотрудничества с Угандой есть большой потенциал.',
            date: "21.07.2021",
            body: '<p>08 июля 2021 года в рамках визита в Ростовскую область терминальный комплекс «Юг Руси» посетил Чрезвычайный и Полномочный Посол Республики Уганда в Российской Федерации г-н Джонсон Агара Олва. Руководитель угандийской дипломатической миссии был ознакомлен с работой предприятия. В ходе состоявшегося диалога г-н Олва выразил заинтересованность в развитии сотрудничества угандийского бизнеса с ГК «Юг Руси» в области поставок в Уганду российского зерна и масла. Посол подчеркнул те особые возможности в логистике, которые открывает расположение ростовской производственной площадки ГК «Юг Руси» в акватории морского порта.</p><br> <p>Высокую оценку г-на Олвы получила культура производства предприятия.</p> <br><p>«Развитие сотрудничества с Африкой является важным приоритетом нашей стратегии развития – отметил основатель ГК «Юг Руси» Сергей Кислов. Во многом сегодня продолжает успешно реализовываться тот задел, который был создан в ходе состоявшегося в 2019 году саммита Россия-Африка. Сегодня «Юг Руси» сотрудничает с целым рядом африканских стран, и мы уверены, что у сотрудничества с Угандой существует также большой потенциал».</p><br><br><p>Sergey Kislov: Cooperation with Uganda is highly promising.</p><br><p>On July 08, 2021, while visiting the Rostov region His Excellency Johnson Agar Olwa, the Ambassador Extraordinary and Plenipotentiary of the Republic of Uganda in the Russian Federation, became a guest at the Yug Rusi terminal facilities. The Head of Uganda Diplomatic Mission became familiarized with the plant operations. In the course of the dialogue Mr. Olwa expressed interest in developing cooperation between the Ugandan business and Yug Rusi Group in terms of supplying Russian grains and oil to Uganda. The Ambassador emphasized the unique opportunities in logistics that are attributed to the location of Yug Rusi production site in the sea port water area.</p><br><p>The production practices at the plant were highly praised by Mr. Olwa.</p><br><p>“Development of cooperation with Africa is an important priority of our development strategy”, mentioned Sergey Kislov, the founder of Yug Rusi Group. “In many aspects today we see the on-going successful implementation of basic principles that were established during the Russia-Africa Summit held in 2019. Today Yug Rusi maintains business ties with a number of African countries and we are sure that cooperation with Uganda is also highly promising”.</p>',

          },
          "3":{
            src: '',
            title: '"Золотая Семечка"- победитель премии "Товар года 2020"',
            date: "18.11.2020",
            body: '<p>17 ноября состоялась XХII церемония награждения ежегодной национальной премии за успех &laquo;Товар года 2020&raquo;. На столичной площадке концертного зала &laquo;Известия-Hall&raquo; собрались крупнейшие российские и международные компании, а также звезды шоу-бизнеса. На церемонии премии &laquo;Товар года 2020&raquo; были вручены награды более 60 брендам, заслуживших признание российских потребителей. &laquo;Товар года&raquo; &mdash; это народный знак доверия &mdash; символ того, что из сотни товаров потребитель выбирает именно данные бренды.<br /><br />&laquo;Для &laquo;Золотой семечки&raquo; &laquo;Товар года&raquo; - особая награда, отметил комментируя получение основатель группы компаний &laquo;Юг Руси&raquo; Сергей Кислов. Наш бренд получает ее уже 8-й раз, подтверждая, что уже для нескольких поколений покупателей это главный помощник в том, чтобы готовить вкусно и полезно. Для коллектива &laquo;Юга Руси&raquo; это особенно важно, поскольку приготовленные с любовью блюда это то, что объединяет семьи. &laquo;Товар года 2020&raquo; для нас особенно символичен, так-как в 2020 году &laquo;Золотая семечка&raquo; отмечает свое двадцатилетие на рынке. За эти годы &laquo;Золотая семечка&raquo; стала не только любимым маслом в России, но и полюбилась миллионам покупателей во многих странах мира&raquo;.<br /><br />Двадцать лет на рынке &ndash; действительно впечатляющая дата. За эти годы &laquo;Юг Руси&raquo; произвел столько &laquo;Золотой Семечки&raquo;, что если бы все их выстроить в ряд, полученного расстояния хватило бы чтобы достичь Луны и вернуться обратно на землю, или 21 раз обогнуть экватор. И 8 раз достичь премии &laquo;Товар года&raquo;.</p>',

          },
          "4":{
            src: 'hor.jpg',
            title: 'На Ростовском ипподроме возобновлены испытания лошадей',
            date: "09.08.2020",
            body: '<p align="justify">9 августа 2020 года на Ростовском ипподроме возобновились испытания лошадей, прерванные в связи распространением коронавируса COVID-19.</p>\n' +
                '<p align="justify">В соответствии с рекомендациями Роспотребнадзора, в целях предотвращения распространения коронавирусной инфекции испытания проведены без участия зрителей.</p>\n' +
                '<p align="justify">Любители конного спорта имели возможность наблюдать за ходом испытаний на сервисе Youtube, где была организована онлайн-трансляция всех форкентеров и скачек. Видеотрансляцию всех последующих скаковых дней также можно будет увидеть перейдя по ссылке, которая размещена на сайте Ростовского ипподрома rosippo.ru.</p>\n' +
                '<p align="justify">В течение первого скаковго дня 118-го скакового сезона состоялось 17 скачек лошадей буденновской и высококровной группы, для участия было заявлено около 120 лошадей. Были разыграны приз &laquo;Рейса&raquo;, &laquo;Реки Кубань&raquo;, &laquo;Гранита II&rdquo;, &ldquo;Реки Дон&raquo;, &laquo;Жокей -Клуба&raquo; и др. Призовой фонд скакового дня был свыше шестисот тысяч рублей. Приз &laquo;Большой Летний&raquo; выиграл темно-гнедой жеребец Скай Бич частного владельца Орловского А.А.</p>\n' +
                '<p align="justify">На финише первой скачки сезона Гнедой жеребец Наш Фантастик (на заднем плане) ООО СХП &laquo;Марьевское&raquo; и рыжий жеребец Фактичный ООО КЗ &laquo;Донской&raquo; (на переднем плане под номером 7).</p>\n' +
                '<p align="justify">На фото: темно-рыжая кобыла Ламбада ООО &laquo;АгроСоюз Юг Руси&raquo; ФПКЗ им. С.М. Буденного. Лошадь дебютировала в скачке на приз &laquo;Реки Дон&raquo; для кобыл 2-х лет буденновской и высококровной группы на дистанции 1200 метров.</p>\n' +
                '<p align="justify">&nbsp;</p>\n' +
                '<p align="justify">Скаковые испытания продолжатся и будут традиционно проводиться по воскресеньям до конца сентября. Приглашаем всех желающих подписаться на канал ипподрома в Youtube и следить за ходом испытаний. 30 августа будут разыграны Приз &laquo;Первой Короны&raquo; для лошадей 2-х лет, Приз &laquo;Большой Ростовский&raquo; для лошадей 3-х лет с призовым фондом с 250 000 рублей, Приз &laquo;Большой приз Окс)&raquo; для кобыл 3-х лет с фондом 120 000 рублей.</p>',

          },
          "5":{
            src: 'dsfsdfd.jpg',
            title: 'Праздник франкофонии',
            date: "11.03.2020",
            body: '<p align="justify">При поддержке Почетного консула на Юге России Сергея Васильевича Кислова и Группы компаний &laquo;Юг Руси&raquo; начались Дни Франкофонии 2020.<br />11 марта 2020 года в Публичной библиотеке состоялся конкурс творческих номеров среди школьников в рамках фестиваля. В фестивале приняли участие около 70 человек. Свои яркие творческие номера показали учащиеся ростовских школ. Ребята пели песни, читали монологи, танцевали и разыгрывали театральные номера, посвященные Франкофонии. Из-за высокого уровня выступлений и французского языка жюри было сложно принять решение. По итогам конкурса обладателями первого места стали сразу 2 школы - школа №96 &laquo;Эврика-Развитие&raquo; с музыкально - литературной зарисовкой &laquo;Les lignes de nos mains&raquo; и гимназия № 45 с творческим проектом &laquo;Chez Mama Africa&raquo;.<br />Дни Франкофонии только начались, впереди еще много интересных событий. Фестиваль включает в себя конкурс &laquo;Золотое перо&raquo;, проведение тематических вечеров,&nbsp;&nbsp;фотовыставки &laquo;Сенегал - страна Теранга&raquo;. Состоятся показы франкофонного кино, будут представлены яркие картины, которые были сняты во франкоязычных странах за последние годы. И конечно же легендарный конкурс франкофонной песни &laquo;Ростофоли&raquo;, в этом году вновь пройдет только под живую музыку.</p>',
          }
        },
        newItem:{
          title:'',
          body:'',
          date: '',
          src: ''
        },
        newId:'',
      };
    },
    components: {
      Swiper,
      SwiperSlide,
      modalNews,
      // ModalPop
    },
    methods: {
      openModalNew(news) {
        this.newId=news.id
        this.newItem=this.newsItems[news.id]
        this.visibleNew = true;
      },
      close(){
        this.visibleNew=false;
      }
    },
    setup() {
      const onSwiper = () => {

      };
      const onSlideChange = () => {

      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation]
      };
    },
  }
</script>

<style>
.swiper-button-prev {
  left: -75px;
  z-index: 99;
  width: 44px;
}
.swiper-button-prev::after {
  content: '';
  background: url("../assets/images/arrow-btn.svg");
  background-size: cover;
  width: 44px;
  height: 44px;
}
.swiper-button-next {
  right: -75px;
  z-index: 99;
  width: 44px;
}
.swiper-button-next::after {
  content: '';
  background: url("../assets/images/arrow-btn.svg");
  background-size: cover;
  width: 44px;
  height: 44px;
  transform: rotate(180deg);
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
.news-item-wrapper .news-item:hover {
  top: 0;
}
.news-item:hover {
  transition: .2s;
  box-shadow: 0 0 5px 0 rgb(11 19 36 / 1%), 0 6px 5px 0 rgb(11 19 36 / 2%), 0 14px 20px 0 rgb(11 19 36 / 4%);
  top: -4px;
}
.news-section .container {
  max-width: 1324px;
  width: 100%;
  padding: 0 60px;
}
.swiper__block-wrap {
  position: relative;
}
.swiper {
  /*overflow: visible;*/
  position: static;
  overflow-y: visible;
  padding-top: 10px;
}
/*.swiper-button-prev:after {*/

/*}*/
.news-section {
  height: auto;
  padding: 95px 0;
  margin-top: 95px;
}
.news-top-content {
  display: flex;
  align-items: center;
  margin-bottom: 48px;
}
.news-section {
  background: rgba(173, 186, 189, 0.2);
  background-size: 800px 700px;
  background-repeat: no-repeat;

}
.news-item-wrapper .news-item {
  top: 4px;
}
.news-item-image {
  border-radius: 4px 4px 0 0;
  height: 280px;
}
.news-item-image img {
  width: 100%;
  height: 100%;
}
.news-item-content {
  padding: 23px 30px 26px 30px;
}
.news-item-image img {
  border-radius: 4px 4px 0 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.news-title {
  margin-right: 77px;
}
.news-item-title {
  height: 100px;
  margin-bottom: 72px;
}
.news-item-title span {
  font-family: "Museo Sans Cyrl 700", sans-serif;
  color: rgba(11, 19, 36, 0.95);
  font-size: 20px;
  line-height: 25px;
  -webkit-transition: all .2s;
  -o-transition: all .2s;
  transition: all .2s;
}
.news-item-date {
  font-family: "Museo Sans Cyrl 500", sans-serif;
  font-size: 14px;
  color: rgba(11, 19, 36, 0.4);
  letter-spacing: 0.5px;
  line-height: 20px;
}
.news-item {
  width: 372px;
  margin: 0 10px;
  display: inline-block;
  background: #FFFFFF;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 8%);
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  transition: .2s;
  top: 0;
}
.popup._show {
  visibility: visible;
  opacity: 1;
  transform: translateY(0px);
  transition: all 0.3s;
  z-index: 6;
  overflow-x: hidden;
}



</style>
