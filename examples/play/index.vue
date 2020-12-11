<!--
 * @Description:
 * @LastEditors: HL
 * @LastEditTime: 2020-08-06 18:46:04
-->
<template>
  <div>
    <!-- <adesk-tab></adesk-tab> -->
    <!--    <adesk-table-demo></adesk-table-demo>-->
    <!-- <adesk-slider></adesk-slider> -->
    <!-- <adesk-input></adesk-input> -->
    <adesk-dialog ref="test"></adesk-dialog>
    <el-button type="primary"
               size="mini"
               id="testEle"
               @click="openDialog">打开对话框
    </el-button>
    <el-select v-model="value1" multiple placeholder="请选择" :multipleShowTag="false" filterable class="test">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        <div>
          <p style="padding:0;margin:0">{{ item.label }}</p>
          <p style=" color: #8492a6; font-size: 12px; padding:0;margin:0">{{ item.value }}</p>
        </div>
      </el-option>
    </el-select>

    <el-table
        ref="multipleTable"
        :data="options"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
      <el-table-column
          type="selection"
          width="55">
        <template slot="header" slot-scope="scope">
          <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"/>
        </template>
      </el-table-column>
      <el-table-column
          prop="label"
          label="地址"
          show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// import adeskTab from "./el-tab/index.vue";
// import adeskTableDemo from "./table/table.vue";
// import adeskSlider from "./slider/slider.vue";
// import adeskInput from "./el-input/index.vue";
import adeskDialog from './el-dialog/index.vue';

export default {
  data() {
    return {
      value1: [],
      options: [{
        value: '选项1',
        label: '黄金面'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }]
    };
  },
  methods: {
    openDialog() {
      this.$refs.test.openDialog();
    },
    handleSelectionChange(v) {
      console.log(v);
    }
  },
  components: {
    // adeskTab
    // adeskSlider
    // adeskTableDemo,
    adeskDialog
  }
};
</script>
