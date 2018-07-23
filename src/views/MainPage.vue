<template>
  <div class="tabs">
    <img src="@/assets/logo.png" alt="III DSI-ZONES Logo">
    <ul>
      <router-link :to="{name:'Home'}" tag="li">
        <div><img src="@/assets/images/home.svg" alt="home"></div>
        <div>首頁</div>
      </router-link>

      <router-link :to="{name:'Cart'}" tag="li">
        <div>
          <img src="@/assets/images/cart.svg" alt="cart"></div>
        <div>購物車</div>
      </router-link>

      <router-link :to="{name: 'Categories'}" tag="li">
        <div><img src="@/assets/images/category.svg" alt="category"></div>
        <div>分類</div>
      </router-link>

      <router-link :to="{name: 'Me'}" tag="li">
        <div><img src="@/assets/images/me.svg" alt="me"></div>
        <div>關於我</div>
      </router-link>
    </ul>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-active {
  transform: translate(-430px);
  opacity: 0;
}

.router-link-active {
  background-color: #ffffff !important;
  color: #ffff00 !important;
  border-radius: 5px;
}
</style>
