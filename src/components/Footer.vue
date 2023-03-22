<template>
  <footer>
    <div class="container">
      <div class="footer-top-wrapper">
        <a href="/" class="footer-logo">
          <img src="../assets/images/logo.png" alt="" style="background-color: rgba(0, 0, 0, 0); visibility: visible;">
        </a>
        <div class="footer-list">
<!--          <ul class="footer-list-menu">-->

<!--            <li><a href="#">О ГРУППЕ КОМПАНИЙ</a></li>-->

<!--            <li><a href="#">Наша продукция</a></li>-->

<!--            <li><a href="#">Оптовым покупателям</a></li>-->

<!--            <li><a href="#">Поставщикам с/х продукции</a></li>-->

<!--            <li><a href="#">Тендеры</a></li>-->

<!--            <li><a href="#">Карьера</a></li>-->

<!--            <li><a href="#">КОНТАКТЫ</a></li>-->


<!--          </ul>-->
          <div class="footer-list-info">
            <p>Ростовская область, город Аксай,<br> улица Заречная, д. 5</p>
            <p class="footer-strong-text">
              Бесплатный звонок по России <br>
              <a href="tel:88005007707">8 800 500 77 07</a>
            </p>
            <p>
              <a href="mailto:contact@grain.ru">contact@grain.ru</a>
            </p>
          </div>
        </div>
        <div class="footer-button-up">
<!--          <button>-->

<!--            <svg width="56px" height="56px" viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">-->
<!--              &lt;!&ndash; Generator: Sketch 49.2 (51160) - http://www.bohemiancoding.com/sketch &ndash;&gt;-->
<!--              <title>Burger Up</title>-->
<!--              <desc>Created with Sketch.</desc>-->
<!--              <defs></defs>-->
<!--              <g id="Burger-Up" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">-->
<!--                <circle id="Oval" fill="#EFF1F2" cx="28" cy="28" r="28"></circle>-->
<!--                <path d="M27,21.6980834 L20.2940265,28.798526 L18.8400002,27.4252789 L28.0670133,17.6555003 L37.2940265,27.4252789 L35.8400002,28.798526 L29,21.5561729 L29,39 L27,39 L27,21.6980834 Z" id="Combined-Shape" fill-opacity="0.498584692" fill="#0B1324" fill-rule="nonzero"></path>-->
<!--              </g>-->
<!--            </svg>-->
<!--          </button>-->
        </div>
      </div>
      <div class="footer-bot-wrapper">
        <div class="footer-privacy">
          Политика конфиденциальности <br>
          © ГК «Юг Руси» 2007-2022        			</div>
        <div class="footer-bot-list">
          <div class="footer-sitemap">
<!--            <a href="#">Карта сайта</a>-->
          </div>
          <div class="footer-openinfo">
            <a href="#">Реализация имущества</a><br>
            <a href="#">Раскрытие информации</a>
          </div>
        </div>
        <div class="footer-development">
<!--          <a href="http://7pap.ru" target="_blank">Разработка сайта: Семь пап</a>-->
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footerBlock'
}

</script>

<style>
footer {
  width: 88.8%;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 54px;
}

.footer-top-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.footer-bot-wrapper {
  display: flex;
  justify-content: flex-start;
}
.footer-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.footer-list {
  display: flex;
  margin-right: 51px;
}
.footer-list-menu {
  margin-right: 66px;
}

ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
ul li {
  margin: 0;
  padding: 0;
}
.footer-list-menu li a {
  font-family: "Museo Sans Cyrl 500", sans-serif;
  font-size: 14px;
  color: rgba(11, 19, 36, 0.95);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  line-height: 28px;
  transition: all .2s;
}
.footer-list-info p {
  font-family: "Museo Sans Cyrl 300", sans-serif;
  font-size: 16px;
  color: #000000;
  margin-top: 3px;
  margin-bottom: 19px;
  line-height: 17px;
}
.footer-list-info .footer-strong-text {
  font-family: "Museo Sans Cyrl 500", sans-serif;
  letter-spacing: -0.6px;
  font-size: 14px;
}
.footer-button-up {
  position: relative;
  top: -7px;
}
.footer-privacy {
  width: 297px;
  font-family: "Museo Sans Cyrl 500", sans-serif;
  font-size: 14px;
  color: rgba(11, 19, 36, 0.4);
  letter-spacing: 0.5px;
  line-height: 20px;
  margin-right: 107px;
  padding-top: 9px;
}
.footer-bot-list {
  width: 484px;
  display: flex;
  justify-content: space-between;
  margin-right: 113px;
  align-items: flex-end;
  margin-left: auto;
}
.footer-sitemap a {
  font-family: "Museo Sans Cyrl 500", sans-serif;
  font-size: 14px;
  color: rgba(11, 19, 36, 0.95);
  letter-spacing: 0.5px;
  line-height: 21px;
  text-transform: uppercase;
  transition: all .2s;
}
.footer-openinfo a {
  font-family: "Museo Sans Cyrl 500", sans-serif;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
  letter-spacing: 0.5px;
  transition: all .2s;
}
.footer-development {
  display: flex;
  align-items: flex-end;
  margin-left: auto;
}
.footer-development a {
  font-family: "Museo Sans Cyrl 500", sans-serif;
  font-size: 14px;
  color: rgba(11, 19, 36, 0.4);
  letter-spacing: 0.5px;
  line-height: 16px;
  transition: all .2s;
}
</style>
