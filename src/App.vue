<template>

  <router-view/>
  <tabbar>
     <tabbaritem path="/home" activeColor="red">
           <template v-slot:icon-item>
 <img  src="./assets/img/zhuye.svg" alt="">
           </template>

         <template v-slot:icon-item-1>
 <img  src="./assets/img/zhuye-1.svg" alt="">
           </template>        <template v-slot:text-item>
            <div>
                首页
            </div>
        </template>
        </tabbaritem>
            <tabbaritem  path="/category">
           <template v-slot:icon-item>
 <img src="./assets/img/leimupinleifenleileibie.svg" alt="">
           </template>
               <template v-slot:icon-item-1>
 <img src="./assets/img/leimupinleifenleileibie-1.svg" alt="">
           </template>
        <template v-slot:text-item>
            <div>
                分类
            </div>
        </template>
        </tabbaritem>
            <tabbaritem  path="/cart">
           <template v-slot:icon-item>
 <img src="./assets/img/gouwuche.svg" alt="">
           </template>
                <template v-slot:icon-item-1>
 <img src="./assets/img/gouwuche-1.svg" alt="">
           </template>
        <template v-slot:text-item>
            <div>
                购物车
            </div>
        </template>
        </tabbaritem>
            <tabbaritem  path="/profile">
           <template v-slot:icon-item>
 <img src="./assets/img/wode.svg" alt="">
           </template>
                <template v-slot:icon-item-1>
 <img src="./assets/img/wode-1.svg" alt="">
           </template>
        <template v-slot:text-item>
            <div>
                我的
            </div>
        </template>
        </tabbaritem>
  </tabbar>
</template>
<script>
import Tabbar from './components/Tabbar/Tabbar'
import tabbaritem from './components/Tabbar/Tabbaritem'
export default {
  name: 'app',
  components: {
    tabbar: Tabbar,
    tabbaritem
  }
}
</script>
<style>
  @import url('./assets/css/base.css');
 
</style>
>
