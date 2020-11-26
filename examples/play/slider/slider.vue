<template>
    <el-slider
            v-model="value"
            :showStops="true"
            :min="0"
            :max="11000"
            :stepList="stepList"
            :marks="marks">
    </el-slider>
<!--    <el-slider-->
<!--            v-model="value"-->
<!--            :showStops="true"-->
<!--            range-->
<!--            :min="0"-->
<!--            :max="100"-->
<!--            :marks="marks">-->
<!--    </el-slider>-->
</template>

<script>
  export default {
    name: 'slider',
    data() {
      return {
        value: [0, 500],
        stepList: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000],
        marks: {
          0: '0',
          2000: '2000元',
          5000: '5000元',
          10000: '1万元'
        }
      };
    }
  };
</script>

<style scoped>

</style>
