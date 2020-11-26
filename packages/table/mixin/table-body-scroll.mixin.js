/*
 * @Description: 增加表格滚动事件和方法
 * @LastEditors: HL
 * @LastEditTime: 2020-07-14 12:11:22
 */
export default {
  data() {
    return {};
  },
  mounted() {
    // 绑定表体滚动事件
    this.$nextTick(() => {
      const tableBodyWrapper = this.$el.querySelector('.scrolling_adesk');
      tableBodyWrapper.addEventListener('scroll', this.handleScroll);
      tableBodyWrapper.addEventListener('DOMMouseScroll', this.handleScroll);
    });
  },
  methods: {
    // 表体滚动到什么位置
    pagingScrollTop(top, left) {
      const tableBodyWrapper = this.$el.querySelector('.scrolling_adesk');
      if (tableBodyWrapper) {
        tableBodyWrapper.scrollTop = top || 0;
        tableBodyWrapper.scrollLeft = left || 0;
      }
    },
    handleScroll(e) {
      // 解决 滚动时 行hover高亮的问题
      this.store.states.hoverRow = null;
      // 当表格滚动暴露滚动事件
      this.$emit('tableBodyScroll', this, e);
    }
  },
  beforeDestroy() {
    // 解绑事件
    const tableBodyWrapper = this.$el.querySelector('.scrolling_adesk');
    if (tableBodyWrapper) {
      tableBodyWrapper.removeEventListener('scroll', this.handleScroll);
      tableBodyWrapper.removeEventListener('DOMMouseScroll', this.handleScroll);
    }
  }
};
