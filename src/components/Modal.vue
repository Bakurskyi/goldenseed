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
          <div class="popup-close news-popup-close" @click="close"></div>
          <div class="popup-title-tender">
            {{this.title}}
          </div>
          <div class="status__wrap">
            <ul class="vacancy-filter-result-item-tags clearfix">
              <li><a href="javascript:;">{{this.date}}</a></li>
              <li><a href="javascript:;">{{this.status}}</a></li>
              <li><a href="javascript:;">{{this.service}}</a></li>
            </ul>
          </div>
          <div class="modal__body__content" v-html="this.body">

          </div>
<!--            {{this.body}}-->
          <br>

        </main>


      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalPop",
  props:{
    title: String,
    body: String,
    date: String,
    status: String,
    service: String
  },
  methods: {
    close() {
      this.$emit("close");
    },

  },
};
</script>
<style>
.modal__body__content {

}
.status__wrap {
  margin-bottom: 40px;
}
p {
  margin-top: 10px;
  color: #6a7678;
}
</style>
