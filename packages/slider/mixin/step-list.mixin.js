/*
 * @Description: 增加自定义stepList的支持
 * @LastEditors: HL
 * @LastEditTime: 2020-07-21
 */
export default {
  data() {
    return {};
  },
  computed: {
    stepList() {
      return this.$parent.stepList;
    }
  },
  methods: {
    getIndex(position, arr) {
      if (!arr || arr.length === 0) {
        return 0;
      }
      let index = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1]) {
          if (position > arr[i] && position < arr[i + 1]) {
            index = i;
            break;
          }
        } else {
          index = i;
        }
      }
      if (index < arr.length - 1) {
        if (position - arr[index] >= arr[index + 1] - position) {
          index = index + 1;
        }
      }
      return index;
    }
  }
};
