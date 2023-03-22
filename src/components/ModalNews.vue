<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
          class="modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
      >
        <main class="modal-body" id="modalDescription">
          <div class="popup-close news-popup-close" @click="closeNew"></div>
          <div class="news_detail-img">
<!--            <img :src="require(`../assets/images/${this.imageSrc}`)" alt="">-->
            <img v-if="this.src" :src="require(`../assets/images/${this.src}`)" alt="">
          </div>
          <div class="popup-title-tender">
            {{this.title}}
          </div>
          <div class="news-popup-date">
            {{this.date}}
          </div>
          <article
              class="modal__body__content  modal-body__content-article news-popup-text"
              v-html="this.body">
          </article>
          <div class="news-popup-text">

          </div>

        </main>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modalNews',
  props:{
    title: String,
    body: String,
    date: String,
    src: String
  },
  data () {
    return {
      // imageSrc: '',
    }
  },
  methods: {
    closeNew() {
      this.$emit("closeNew");
    },
  },
}
</script>

<style>
.news_detail-img {
  height: 280px;
  margin-bottom: 40px;
  outline: 1px solid #999;
}
.news_detail-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
