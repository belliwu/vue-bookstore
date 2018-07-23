<template>
  <div id="home">
    <div class="section">
      <!-- 熱門推薦 -->
      <div class="swiper-container" ref="slider">
        <div class="swiper-wrapper" v-for="slide in slides" v-bind:key="slide.id" tag="div">
          <img :src="slide.img_url" />
        </div>
        <!-- End for wrapper -->
        <!-- 快訊 -->
        <!-- End for wrapper -->
        <div class="swiper-pagination" ref="pagination">
        </div>
      </div>
      <!-- Ened for container -->
    </div>
    <!-- End for section -->

    <div class="section">
      <div>
        <!-- 新書上架 -->
      </div>
    </div>

    <div class="section">
      <div>
        <!-- 編輯推薦 -->
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  name: "home",
  data() {
    return {
      slides: [
        {
          id: 1,
          img_url: "/static/sliders/t1.svg"
        },
        {
          id: 2,
          img_url: "/static/sliders/t2.svg"
        }
      ]
    };
  },
  mounted() {
    new Swiper(this.$refs.slider, {
      pagination: this.$refs.pagination,
      paginationClickable: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoPlay: 2500,
      autoplayDisableOnInteraction: false
    });
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
}

.swiper-slide {
  height: 8rem;
  overflow: hidden;
  position: relative;
}
</style>
