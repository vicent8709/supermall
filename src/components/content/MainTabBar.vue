<template>
  <tab-bar>
    <tab-bar-item link="/home">
      <img slot="item-icon" src="~@/assets/images/tabbar/home.svg" />
      <img slot="item-icon-active" src="~@/assets/images/tabbar/home_active.svg" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category">
      <img slot="item-icon" src="~@/assets/images/tabbar/category.svg" />
      <img slot="item-icon-active" src="~@/assets/images/tabbar/category_active.svg" />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/cart">
      <img slot="item-icon" src="~@/assets/images/tabbar/shopcart.svg" />
      <img slot="item-icon-active" src="~@/assets/images/tabbar/shopcart_active.svg" />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="profile">
      <img slot="item-icon" src="~@/assets/images/tabbar/profile.svg" />
      <img slot="item-icon-active" src="~@/assets/images/tabbar/profile_active.svg" />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBarItem from "@/components/common/tabbar/TabBarItem";
import TabBar from "@/components/common/tabbar/TabBar"

export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem,
  }
}
</script>

<style scoped>

</style>