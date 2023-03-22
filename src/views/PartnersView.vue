<template>
  <div class="partners">
    <section class="inner-banner-partners inner-banner">
      <div class="container">
        <div class="inner-banner-text"></div>
      </div>
    </section>
    <section class="container">
      <div class="list-navigation-wrapper">
        <ol class="list-navigation">
          <li class="list-navigation-li active-navigation">
            <a href="#" class="a-navigation">Оптовым покупателям</a>
          </li>
<!--          <li class="list-navigation-li">-->
<!--            <a href="javascript:;" class="a-navigation">Поставщикам сельхозпродукции</a>-->
<!--          </li>-->
<!--          <li class="list-navigation-li">-->
<!--            <a href="javascript:;" class="a-navigation">Каталог продукции</a>-->
<!--          </li>-->
        </ol>
      </div>
      <div class="content-section">
        <div class="content-section-left">
<!--          <div class="info-pannel-block">-->
<!--            <div class="info-pannel-block-title">-->
<!--              Получить прайс-лист на продукцию-->
<!--            </div>-->
<!--            <div class="info-pannel-block-button">-->
<!--              <a href="#" class="info-pannel-block-button-a" ><b>Подать заявку</b></a>-->
<!--              <svg width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">-->
<!--                <title>Shape</title>-->
<!--                <desc>Created with Sketch.</desc>-->
<!--                <defs></defs>-->
<!--                <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">-->
<!--                  <g id="ButtonMain" transform="translate(-270.000000, -17.000000)" stroke="#4484D8" stroke-width="2">-->
<!--                    <g id="Blue">-->
<!--                      <polyline id="Shape" points="271 18 278 25 271 32"></polyline>-->
<!--                    </g>-->
<!--                  </g>-->
<!--                </g>-->
<!--              </svg>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="block-select">-->
<!--            <select name="" id="" class="brand-select">-->
<!--              <option value="">Все регионы</option>-->
<!--              <option value="">"Золотое кольцо"</option>-->
<!--              <option value="">Москва</option>-->
<!--              <option value="">Дальневосточный</option>-->
<!--            </select>-->
<!--          </div>-->
          <div class="contacts-wrapper">
            <div class="contacts-card" v-for="(contact) in arrContacts" :key="contact.id">
              <div class="contacts-title">{{ contact.title }}</div>
              <div class="contacts-card-section">
                <div class="contacts-card-section-img-wrapper">
                  <img src="../assets/images/contact-people.svg" alt="" class="contacts-card-img">
                </div>
                <div>
                  <div class="contacts-name">{{ contact.name }}</div>
                  <div class="contacts-position">{{ contact.position }}</div>
                </div>
              </div>
              <div class="contacts-card-section">
                <div class="contacts-card-section-img-wrapper">
                  <img src="../assets/images/contact-phone.svg" alt="" class="contacts-card-img">
                </div>
                <div class="contacts-number">{{ contact.number }}</div>
              </div>
              <div class="contacts-card-section">
                <div class="contacts-card-section-img-wrapper">
                  <img src="../assets/images/contact-mail.svg" alt="" class="contacts-card-img">
                </div>
                <div class="contacts-email">{{ contact.email }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-section-right">
          <div>
            <div class="content-text-visitors">
              <div style="margin-bottom: 20px">
                <i><b>Уважаемые посетители сайта!</b></i>
              </div>
              <div style="margin-bottom: 20px">
                <i><b>Обращаем Ваше внимание на  имеющиеся случаи мошенничества с использованием поддельных сайтов, якобы принадлежащих предприятиям ГК «Юг Руси». Злоумышленники предлагают внести предоплату, чтобы купить продукцию. Поставка продукции не производится. Обращаем Ваше внимание, что единственными  официальными адресами  сайта ГК «Юг Руси» являются адреса goldenseed.ru и grain.ru</b></i>
              </div>
              <div style="color: black">
                Просим Вас быть внимательными!
              </div>
            </div>
            <div class="content-text-title">
              Производим и поставляем фасованное растительное масло и бакалейную продукцию
            </div>
            <div class="content-text-subtitle">
              Уже более 15 лет люди выбирают продукцию группы компаний «Юг Руси» на полках магазинов. Именно по этому ГК «Юг Руси» является лидером рынка в своем сегменте. Наша компания на протяжении многих лет является лидером на российском рынке производителей товара. Мы стремимся обеспечить потребность всех слоев населения в натуральных, полезных, вкусных, качественных и доступных продуктах. Помимо известных брендов растительного масла, таких как «Золотая Семечка», «Аведовъ», «Злато», «Милора», наши предприятия производят высококачественную муку, майонезы, соки, консервы, мучные и кондитерские изделия и другие брендированные продукты питания бакалейной группы.
            </div>
          </div>
          <div class="partners-content-right-awards">
            <div class="partners-content-right-awards-item">
              <div class="partners-content-right-awards-item-count">
                250
              </div>
              <div class="partners-content-right-awards-item-title">
                позиций фирменной продукции
              </div>
            </div>
            <div class="partners-content-right-awards-item partners-content-right-awards-itemGold">
              <div class="partners-content-right-awards-item-count">
                15
              </div>
              <div class="partners-content-right-awards-item-title">
                брендов, которые любят и которым доверяют
              </div>
              <div class="partners-content-right-awards-itemGold:after"></div>
            </div>
            <div class="partners-content-right-awards-item">
              <div class="partners-content-right-awards-item-count">
                350
              </div>
              <div class="partners-content-right-awards-item-title">
                дистрибьюторов в России и за рубежом
              </div>
            </div>
            <div class="partners-content-right-awards-item">
              <div class="partners-content-right-awards-item-count">
                3500
              </div>
              <div class="partners-content-right-awards-item-title">
                торговых точек в России и странах СНГ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="section-partners">
      <div class="partners-cooperation">
        <div class="partners-cooperation-wrapper">
          <div class="partners-cooperation-left">
            <div class="partners-cooperation-left-title section-title">
              Сотрудничать с нами выгодно и удобно
            </div>
            <div class="partners-cooperation-left-desc">
              Мы считаем исключительно важным, чтобы потребители могли найти наш продукт в любой точке России, в любом магазине – от гипермаркета до маленького магазинчика у дома. Именно поэтому более 12 лет мы потратили на строительство системы дистрибьюции, которую мы считаем одной из лучших в стране. Сегодня клуб наших дистрибьюторов состоит более чем из 350 современных динамичных компаний по всей России, с которыми мы разделяем наш успех на рынке. Также мы напрямую сотрудничаем со всеми национальными торговыми сетями.
            </div>
            <div class="partners-cooperation-left-desc">
              Мы считаем торговые компании своими партнерами в выполнении миссии по снабжению людей качественной, вкусной и полезной продукцией и всегда рады взаимовыгодному сотрудничеству. Мы не просто поставляем продукцию – мы помогаем ее продавать за счет стабильного качества, узнаваемого бренда и рекламной поддержки.
            </div>
          </div>
          <div class="partners-cooperation-right">
            <div class="partners-cooperation-right-image">
              <img src="../assets/images/partners-image.png" alt="" style="background-color: rgba(0, 0, 0, 0); visibility: visible;">
            </div>
          </div>
        </div>
        <div class="partners-cooperation-advantages">
          <div class="partners-cooperation-advantages-item">
            <div class="partners-cooperation-advantages-item-title clearfix">
              <div class="partners-cooperation-advantages-item-title-ico">
              </div>
              Быстрый оборот продукции
            </div>
            <div class="partners-cooperation-advantages-item-desc">
              Высокий спрос потребителей на наше брендированное растительное масло и бакалейные товары
            </div>
          </div>
          <div class="partners-cooperation-advantages-item">
            <div class="partners-cooperation-advantages-item-title clearfix">
              <div class="partners-cooperation-advantages-item-title-ico">
              </div>
              Узнаваемые бренды
            </div>
            <div class="partners-cooperation-advantages-item-desc">
              «Золотая Семечка», «Аведовъ», «Злато», «Милора» давно завоевали доверие покупателей и стали народными марками
            </div>
          </div>
          <div class="partners-cooperation-advantages-item">
            <div class="partners-cooperation-advantages-item-title clearfix">
              <div class="partners-cooperation-advantages-item-title-ico">
              </div>
              Широкий ассортимент
            </div>
            <div class="partners-cooperation-advantages-item-desc">
              8 товарных категорий <br>
              64 вида продукции
            </div>
          </div>
          <div class="partners-cooperation-advantages-item">
            <div class="partners-cooperation-advantages-item-title clearfix">
              <div class="partners-cooperation-advantages-item-title-ico">
              </div>
              Стабильно высокое качество
            </div>
            <div class="partners-cooperation-advantages-item-desc">
              Мы гарантируем стабильное качество продуктов в каждой поставке
            </div>
          </div>
          <div class="partners-cooperation-advantages-item">
            <div class="partners-cooperation-advantages-item-title clearfix">
              <div class="partners-cooperation-advantages-item-title-ico">
              </div>
              Удобное расположение заводов
            </div>
            <div class="partners-cooperation-advantages-item-desc">
              Можно отгружать нашу продукцию всеми видами транспорта.
            </div>
          </div>
          <div class="partners-cooperation-advantages-item">
            <div class="partners-cooperation-advantages-item-title clearfix">
              <div class="partners-cooperation-advantages-item-title-ico">
              </div>
              Контроль продаж
            </div>
            <div class="partners-cooperation-advantages-item-desc">
              Система контроля продаж от склада до корзины покупателя
            </div>
          </div>
        </div>
      </div>
      <br>
    </div>
    <div class="container">
      <div class="section-title" style="text-align: start; margin-bottom: 38px">
        Мы работаем по всей России и в СНГ
      </div>
      <div class="partners-cooperation-advantages-item-desc" style="margin-bottom: 38px">
        Наша мощная команда продаж в регионах и система из 9 региональных представительств обеспечивают присутствие нашей продукции во всей России.
      </div>
      <div class="block-select" style="width: 100%; margin-bottom: 24px;">
<!--        <select name="" class="brand-select">-->
<!--          <option value="">Все регионы</option>-->
<!--          <option value="">"Золотое кольцо"</option>-->
<!--          <option value="">Москва</option>-->
<!--          <option value="">Дальневосточный</option>-->
<!--        </select>-->
      </div>
      <div class="contacts-wrapper" style="width: 100%;" >
        <div class="contacts-card" v-for="(contact) in arrContacts" :key="contact.id" >
          <div class="contacts-title">{{ contact.title }}</div>
          <div class="contacts-card-section">
            <div class="contacts-card-section-img">
              <img src="../assets/images/contact-people.svg" alt="">
            </div>
            <div>
              <div class="contacts-name">{{ contact.name }}</div>
              <div class="contacts-position">{{ contact.position }}</div>
            </div>
          </div>
          <div class="contacts-card-section">
            <div class="contacts-card-section-img">
              <img src="../assets/images/contact-phone.svg" alt=""></div>
            <div class="contacts-number">{{ contact.number }}</div>
          </div>
          <div class="contacts-card-section">
            <div class="contacts-card-section-img">
              <img src="../assets/images/contact-mail.svg" alt="">
            </div>
            <div class="contacts-email">{{ contact.email }}</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      arrContacts : [
        {
          id : 1,
          title : '"Золотое кольцо"',
          name : 'Морозов Игорь',
          position : 'Региональный менеджер',
          number : '+7 (916) 678-98-98',
          email : ''
        },
        {
          id : 2,
          title : 'ДАЛЬНЕВОСТОЧНЫЙ ФЕДЕРАЛЬНЫЙ ОКРУГ',
          name : 'Савченко Виталий',
          position : 'Руководитель обособленного подразделения',
          number : '+7 (984) 192-89-95',
          email : 'savchenko_vv@grain.ru'
        },
        {
          id : 3,
          title : 'УРАЛЬСКИЙ ФЕДЕРАЛЬНЫЙ ОКРУГ',
          name : 'Багдасарова Елена',
          position : 'Руководитель обособленного подразделения',
          number : '+7 (922) 219-67-79',
          email : 'bagdasarova_em@grain.ru'
        },
        {
          id : 4,
          title : 'ПРИВОЛЖСКИЙ ФЕДЕРАЛЬНЫЙ ОКРУГ (СЕВЕР)',
          name : 'Груданов Алексей',
          position : 'Руководитель обособленного подразделения',
          number : '+7 (910) 130-29-99',
          email : 'grudanov_aa@grain.ru'
        },
        {
          id : 5,
          title : 'ПРИВОЛЖСКИЙ ФЕДЕРАЛЬНЫЙ ОКРУГ (ЮГ)',
          name : 'Чуйков Максим',
          position : 'Руководитель обособленного подразделения',
          number : '+7 (937) 793-84-86',
          email : 'chuikov_mv@grain.ru'
        },
        {
          id : 6,
          title : 'СИБИРСКИЙ ФЕДЕРАЛЬНЫЙ ОКРУГ',
          name : 'Олешко Денис',
          position : 'Руководитель обособленного подразделения',
          number : '+7 (913) 215-64-06',
          email : 'oleshko_dv@grain.ru'
        },
        {
          id : 7,
          title : 'ЮЖНЫЙ ФЕДЕРАЛЬНЫЙ ОКРУГ',
          name : 'Соколов Александр',
          position : 'Руководитель обособленного подразделения',
          number : '+7 (928) 602-69-67',
          email : 'sokolov_av@grain.ru'
        },
        {
          id : 8,
          title : 'СЕВЕРО-КАВКАЗСКИЙ ФЕДЕРАЛЬНЫЙ ОКРУГ',
          name : 'Соколов Александр',
          position : 'Руководитель обособленного подразделения',
          number : '+7 (928) 602-69-67',
          email : 'sokolov_av@grain.ru'
        },
        {
          id : 9,
          title : 'СЕВЕРО-ЗАПАДНЫЙ ФЕДЕРАЛЬНЫЙ ОКРУГ',
          name : 'Довгер Виктор',
          position : 'Руководитель обособленного подразделения',
          number : '+7 (911) 811-74-68',
          email : 'dovger_va@grain.ru'
        },
        {
          id : 10,
          title : 'МОСКВА',
          name : 'Савченко Виталий',
          position : 'Руководитель отдела продаж',
          number : '+7 (984) 192-89-95',
          email : 'savchenko_vv@grain.ru'
        }
      ]
    }
  }
}

</script>

<style>
.inner-banner-partners {
  background-image: url("../assets/images/bannerpartners.jpg");
}
/*.inner-banner {*/
/*  width: 1360px;*/
/*  margin: 0 auto;*/
/*  height: 304px;*/
/*  background-repeat: no-repeat;*/
/*  background-size: cover;*/
/*  background-position: center;*/
/*}*/
.list-navigation-wrapper {
  border-bottom: 1px solid #e9e9e9;
}
.list-navigation {
  list-style-type: none;
  display: flex;
  height: 80px;
  gap: 52px;
}
.list-navigation-li {
  height: 80px;
  display: flex;
  align-items: center;
}
.a-navigation {
  font-family: "Museo Sans Cyrl 700", sans-serif;
  font-size: 16px;
  color: rgba(11, 19, 36, 0.95);
  letter-spacing: 0.77px;
  text-align: center;
  line-height: 20px;
  text-transform: none;
}
.active-navigation {
  border-bottom: 8px solid #FFDB0A;
}
.content-section {
  display: flex;
  justify-content: space-between;
  padding-top: 54px;
  padding-bottom: 92px;
}
.content-section-left {
  width: 288px;
}
.content-section-right {
  width: 807px;
}
.info-pannel-block {
  height: 245px;
  width: 288px;
  border-radius: 4px;
  background-color: #4484d8;
  padding-top: 34px;
  padding-left: 30px;
  padding-right: 33px;
  margin-bottom: 32px;
}
.info-pannel-block-title {
  color: #ffffff;
  font-family: "Museo Sans Cyrl 700", sans-serif;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 41px;
}
.info-pannel-block-button {
  width: 100%;
  height: 48px;
  border: 1px solid #4484D8;
  background-color: #FFFFFF;
  display: flex;
  padding: 0px 21px;
  align-items: center;
  justify-content: space-between;
}
.info-pannel-block-button-a {
  color: #336FC2;
  line-height: 48px;
  text-transform: none;
}
.block-select {
  margin-bottom: 24px;
  width: 288px;
  height: 54px;
}
.brand-select {
  width: 100%;
}
.contacts-wrapper {
  width: 288px;
  height: 840px;
  padding: 24px;
  border: 1px solid #4484D8;
  border-radius: 4px;
  border: 1px solid rgba(11, 19, 36, 0.15);
  overflow-y: scroll;
}
.contacts-wrapper:last-child {
  padding-bottom: 0px;
}
.contacts-wrapper:hover {
  overflow: scroll;
}
.contacts-wrapper::-webkit-scrollbar {
  position: absolute;
  display: block;
  background-color: transparent;
  width: 6px;
  border-radius: 6px;
  padding:  0px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(11, 19, 36, 0.15);
  position: absolute;
  border-radius: 6px;
}
.contacts-card-section-img-wrapper {
  width: 18px;
  margin-right: 5px;
}
.contacts-card-img {
  width: 18px;
  height: 18px;
  margin-right: 35px;
}
.contacts-card {
  border-bottom: 1px solid rgba(11, 19, 36, 0.15);
  padding: 5px 10px 34px 5px ;

}
.contacts-title {
  color: rgba(11, 19, 36, 0.4);
  font-family: "Museo Sans Cyrl 500", sans-serif;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin-bottom: 22px;
  text-transform: uppercase;
}
.contacts-name {
  position: relative;
  color: #333333;
  font-family: "Museo Sans Cyrl 700", sans-serif;
  font-size: 18px;
  line-height: 25px;
}
.contacts-position {
  color: rgba(11, 19, 36, 0.4);
  font-family: "Museo Sans Cyrl 500", sans-serif;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
}
.contacts-number {
  position: relative;
  display: block;
  color: rgba(34, 34, 34, 0.95);
  font-family: "Museo Sans Cyrl 500", sans-serif;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 8px;
}
.contacts-email {
  position: relative;
  color: rgba(34, 34, 34, 0.95);
  font-family: "Museo Sans Cyrl 500", sans-serif;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 4px;
}
.contacts-card-section {
  display: flex;
}
.content-text-visitors {
  font-size: 13pt;
  font-family: "Museo Sans Cyrl 300", sans-serif;
  color: #6a7678;
  font-style: italic;
  font-weight: 700;
  font-size: 13pt;
  margin-bottom: 70px;
}
.content-text-title {
  text-align: left;
  margin-bottom: 38px;
  font-family: "Museo Sans Cyrl 700", sans-serif;
  font-size: 44px;
  color: rgba(11, 19, 36, 0.95);
  line-height: 50px;
}
.content-text-subtitle {
  line-height: 26px;
  margin-bottom: 90px;
  font-family: "Museo Sans Cyrl 300", sans-serif;
  font-size: 16px;
  color: rgba(11, 19, 36, 0.95);
}
.contacts-card-section-img {
  margin-right: 20px;
}

.partners-content-right-awards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.partners-content-right-awards-item {
  background: rgba(173, 186, 189, 0.2);
  -webkit-border-radius: 4px;
  border-radius: 4px;
  width: 392px;
  padding: 10px 50px 30px 30px;
  margin-bottom: 26px;
}
.partners-content-right-awards-item-count {
  font-size: 88px;
  color: rgba(34, 34, 34, 0.95);
}
.partners-content-right-awards-item-title {
  font-family: "Museo Sans Cyrl 700", sans-serif;
  font-size: 20px;
  color: rgba(11, 19, 36, 0.95);
  line-height: 25px;
}
.partners-content-right-awards-itemGold {
  background-image: url(/src/assets/images/yellow-noise.png);
  -webkit-border-radius: 4px;
  border-radius: 4px;
  position: relative;
}
.partners-content-right-awards-itemGold:after {
  content: "";
  position: absolute;
  bottom: -20px;
  right: -30px;
  background-image: url(/src/assets/images/tovar-goda.png);
  background-repeat: no-repeat;
  -webkit-background-size: contain;
  background-size: contain;
  width: 164px;
  height: 273px;
}
.partners-cooperation {
  width: 100%;
  margin: 0 auto;
  padding: 0px 45px;
  padding-top: 78px;
  margin-bottom: 95px;
}
.partners-cooperation-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 76px;
}
.partners-cooperation-left {
  width: 43%;
}
.partners-cooperation-right {
  margin-top: 10px;
  width: 600px;
}
.partners-cooperation-left-title {
  text-align: left;
  margin-bottom: 38px;
}
.section-partners {
  background: rgba(173, 186, 189, 0.2);
  width: 1360px;
  margin: 0px auto 76px auto;
  padding: 0px 20px ;
}
.partners-cooperation-left-desc {
  margin-bottom: 26px;
  font-family: "Museo Sans Cyrl 300", sans-serif;
}
.partners-cooperation-right-image img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
}
.partners-cooperation-left-desc {
  margin-bottom: 26px;
}
.partners-cooperation-left-desc {
  font-size: 16px;
  color: rgba(11, 19, 36, 0.95);
  line-height: 26px;
}
.partners-cooperation-advantages {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.partners-cooperation-advantages-item {
  width: 392px;
  min-height: 224px;
  padding: 28px;
  background: #FFFFFF;
  border-radius: 4px;
  margin-bottom: 24px;
}
.partners-cooperation-advantages-item-title {
  font-family: "Museo Sans Cyrl 700", sans-serif;
  font-size: 20px;
  color: rgba(11, 19, 36, 0.95);
  line-height: 25px;
  margin-bottom: 18px;
}
.partners-cooperation-advantages-item-title-ico {
  position: relative;
  display: inline-block;
  background-image: url(/src/assets/images/ico_assortiment.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 88px;
  height: 88px;
  float: left;
  margin-right: 29px;
  top: 2px;
  left: 2px;
}
.clearfix:after, .row:after {
  content: " ";
  display: table;
  clear: both;
}
.partners-cooperation-advantages-item-desc {
  font-size: 16px;
  font-family: "Museo Sans Cyrl 300", sans-serif;
  color: rgba(11, 19, 36, 0.95);
  line-height: 26px;
  padding-left: 2px;
}
.partners-cooperation-advantages-item:nth-child(2) .partners-cooperation-advantages-item-title-ico {
  background-image: url(/src/assets/images/ico_brands.svg);
}
.partners-cooperation-advantages-item:nth-child(3) .partners-cooperation-advantages-item-title-ico {
  background-image: url(/src/assets/images/ico_controlsale.svg);
}
.partners-cooperation-advantages-item:nth-child(4) .partners-cooperation-advantages-item-title-ico {
  background-image: url(/src/assets/images/ico_obotot.svg);
}
.partners-cooperation-advantages-item:nth-child(5) .partners-cooperation-advantages-item-title-ico {
  background-image: url(/src/assets/images/ico_quality.svg);
}
.partners-cooperation-advantages-item:nth-child(6) .partners-cooperation-advantages-item-title-ico {
  background-image: url(/src/assets/images/ico_udobnRaspZavodov.svg);
}



</style>
