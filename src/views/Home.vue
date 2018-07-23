<template>
  <div id="home">
    <div class="section">
      <!-- 熱門推薦 -->
      <div class="swiper-container" ref="slider">
        <div class="swiper-wrapper" v-for="slide in slides" v-bind:key="slide.id" tag="div">
          <router-link class="swiper-slide" tag="div" :to="{name:'BookDetail', params:{id: slide.id}}">
            <img :src="slide.img_url" />
          </router-link>
        </div>
        <!-- End for wrapper -->
        <!-- 快訊 -->
        <div class="announcement">
          <label>快訊</label>
          <span>{{announcement}}</span>
        </div>
        <!-- End for wrapper -->
        <div class="swiper-pagination" ref="pagination">
        </div>
      </div>
      <!-- Ened for container -->
    </div>
    <!-- End for section -->

    <div class="section">
      <!-- 新書上架 -->
      <div class="book-list">
        <div class="header">
          <div class="heading">最新更新</div>
          <div class="more">更多 ...</div>
        </div>
        <div class="book-items">
          <div class="book">
            <div class="cover">
              <img src="@/assets/cover/1.jpeg" alt="">
            </div>
            <div class="title">揭開資料真相 : 從小白到資料分析達人</div>
            <div class="authors">belliwu</div>
          </div>

          <div class="book">
            <div class="cover">
              <img src="@/assets/cover/2.jpeg" alt="">
            </div>
            <div class="title">道德經</div>
            <div class="authors">老子</div>
          </div>

          <div class="book">
            <div class="cover">
              <img src="@/assets/cover/3.jpeg" alt="">
            </div>
            <div class="title">孫子兵法</div>
            <div class="authors">孫武</div>
          </div>

          <div class="book">
            <div class="cover">
              <img src="@/assets/cover/4.jpeg" alt="">
            </div>
            <div class="title">史記</div>
            <div class="authors">司馬遷</div>
          </div>
        </div>
      </div>

      <div class="book-list">
        <div class="header">
          <div class="heading">最新編輯</div>
          <div class="more">更多 ...</div>
        </div>
        <div class="book-items">
          <div class="book">
            <div class="cover">
              <img src="@/assets/cover/7.jpeg" alt="">
            </div>
            <div class="title">自己動手作大數據</div>
            <div class="authors">張三</div>
          </div>

          <div class="book">
            <div class="cover">
              <img src="@/assets/cover/8.jpeg" alt="">
            </div>
            <div class="title">自己動手作作業系統</div>
            <div class="authors">李四</div>
          </div>

          <div class="book">
            <div class="cover">
              <img src="@/assets/cover/9.jpeg" alt="">
            </div>
            <div class="title">自己動手作AI</div>
            <div class="authors">王武</div>
          </div>

          <div class="book">
            <div class="cover">
              <img src="@/assets/cover/10.jpeg" alt="">
            </div>
            <div class="title">自己動手作神經網路</div>
            <div class="authors">孫六</div>
          </div>
        </div>
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
      announcement: "今日上架的圖書全日 8 折",
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
