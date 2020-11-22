<template>
  <div class="tab-bar-item" @click="toView">
     <div v-if="!isActive"><slot name="item-icon"></slot></div>
     <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="active"><slot name="item-text"></slot></div>
  </div>
</template>

<script>

export default {
  name: "TabBarItem",
  props:{
    link:String,
    activeColor:{
      type:String,
      default:"deeppink"
    }
  },
  data(){
    return{
      //isActive:true,
    }
  },
  components:{

  },
  methods:{
    toView(){
      this.$router.push(this.link)
    },
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.link)!==-1
    },
    active(){
      return this.isActive?{color:this.activeColor}:{}
    }
  }
}
</script>

<style scoped>

.tab-bar-item{
  flex: 1;
  text-align: center;
  font-size: 12px;
  box-shadow: 0 -1px 1px rgba(100,100,100,0.2);
}

.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

</style>