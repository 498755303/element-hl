<template>
  <div class="input">
    <el-input placeholder="请输入名称"
                  maxlength="50"
                  :doubleCodeable="true"
                  show-word-limit                  
                  v-model.trim="name"
                  type="text">
      </el-input>
</div>
</template>
<script>
export default {
  data() {
    return {
      name:""
    };
  }
};
</script>
<style scoped lang="less">
</style>
