<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <BannerMainPage />
    <BrandsDisplay></BrandsDisplay>
    <DescriptionSlider></DescriptionSlider>
    <newsBlock></newsBlock>
    <sliderForBusiness></sliderForBusiness>
    <formCall></formCall>
  </div>
</template>

<script>

import sliderForBusiness from '@/components/SliderForBusiness'
import DescriptionSlider from "@/components/DescriptionSlider";
import BannerMainPage from '@/components/MainPageBanner'
import BrandsDisplay from '@/components/Brands'
import newsBlock from '@/components/News'
import formCall from '@/components/FormMain'




export default {
  components: {
    DescriptionSlider,
    BannerMainPage,
    BrandsDisplay,
    newsBlock,
    formCall,
    sliderForBusiness,
  }
}
// @ is an alias to /src
// import headerPage from '@/components/headerPage.vue'
//
// export default {
//   name: 'HomeView',
//   components: {
//     headerPage
//   }
// }
</script>
