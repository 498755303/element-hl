<!--
 * @Description: tab hover
 * @LastEditors: HL
 * @LastEditTime: 2020-07-07 14:37:23
--> 
<template>
  <el-tabs tab-position="left"
           v-model="activeName"
           type="card"
           trigger="hover"
           style="height: 200px;">
    <el-tab-pane label="用户管理"
                 name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理"
                 name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理"
                 name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿"
                 name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
  }
};
</script>
<style scoped lang="less">
</style>
