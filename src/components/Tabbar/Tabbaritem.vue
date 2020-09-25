<template>
      <div class="tab-bar-item" @click="pathClick">
          <div v-if="!isActive">
         <slot  name="icon-item"></slot>
          </div>
        <div v-else>
            <slot name="icon-item-1"></slot>
        </div>
        <div :style="activeColorStyle">
            <slot name="text-item"></slot>
        </div>
        </div>
</template>
<script>
export default {
    props: {
        path: String,
        activeColor: {
            type: String,
            default: 'blue'
        }
    },
    data() {
        return {
            
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) != -1
        },
        activeColorStyle() {
            return this.isActive?{color:this.activeColor}:{}
        }
    },
    methods: {
        pathClick() {
            this.$router.push(this.path)
        }
    }
}
</script>
<style>
     .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img {
      height: 24px;
  }
</style>