<template>
  <el-dialog title="测试dialog自定义动画"
             top="5vh"
   
             :visible.sync="visible">
    <el-button type="primary"
               @click="getPosition">获取位置</el-button>
                  <el-button type="primary"
               @click="close">关闭</el-button>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      transitionName: "hide-to"
    };
  },
  methods: {
    openDialog() {
      this.visible = true;
    },
    close(){
      this.visible = false;
    },
    getPosition() {
      const rect = document.querySelector("#testEle").getBoundingClientRect()
      console.log(rect);
    },
    beforeEnter (el) {
      console.log(el);
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter(el, done) {
      console.log(el, done)
      el.style.opacity = 1;
    },
    leave: function (el, done) {
      console.log(el, done)
    }
  }
};
</script>
<style scoped>
.hide-to-enter-active {
  transition: all 2s ease;
}
.hide-to-leave-active {
  transition: all 2s cubic-bezier(1, 0.5, 0.8, 1);
}

.hide-to-leave-to {
  transform: translate(calc(-50% + 100px), 28px) scale(0.1);
  transform-origin: left;
  opacity: 0;
}
</style>
