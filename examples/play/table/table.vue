<!--
 * @Description: 
 * @LastEditors: HL
 * @LastEditTime: 2020-06-02 14:10:28
 -->
<template>
  <div class="test">
    <p class="test-p">用来测试,放到顶部的</p>
    <el-button type="primary"
               @click.stop="test">测试</el-button>
    <adesk-table :tbTitle="tableTitle"
                 ref="tbRef"
                 :tbData="tableData"
                 :tbset="tableSet"
                 v-if="!hidden"
                 :tableRowStyleName="tableRowStyleName"
                 :headerRowStyle="headerRowStyle"
                 :offsetTop="60"
                 :fixTbData="fixTbData">
    </adesk-table>
  </div>
</template>
<script>
import _ from "lodash";
import AdeskTable from "./v2/index";
export default {
  data() {
    return {
      tableTitle: [
        {
          name: "用户ID",
          prop: "thirdAccountName",
          issort: false,
          ishtml: false,
          fixed: 'left',
          issort: false
        },
        {
          name: "展现",
          prop: "showCount",
          issort: false,
          ishtml: false,
          issort: false
        },
        {
          name: "点击数",
          prop: "clickCount",
          issort: false,
          ishtml: false,
          issort: false
        },
        {
          name: "消耗",
          prop: "cost",
          issort: false,
          ishtml: false,
          issort: false
        },
        {
          name: "余额",
          prop: "account_balance",
          issort: false,
          ishtml: false,
          issort: false
        }
      ],
      tableSet: {
        stripe: true,
        loading: false,
        isborder: false,
        showSummary: false,
        size: "mini",
        ref: "tbRef",
        fixHeader: true,
        fixRef: "fixTable",
        onlyShowFixHeader: true,
        resizable: false,
        mixinScrollDom: ".adesk-page"
      },
      tableData: [
        {
          "thirdAccountName": "百传-北京新氧科技有限公司-3",
          "thirdAccountId": 1652074259361799,
          "showCount": 45560382,
          "clickCount": 778851,
          "cost": 621528.68,
          "account_balance": 22514.54
        },
        {
          "thirdAccountName": "北京淇瑀信息科技有限公司4",
          "thirdAccountId": 1636287800562699,
          "showCount": 26645568,
          "clickCount": 572289,
          "cost": 284487.91,
          "account_balance": 467903.43
        },
        {
          "thirdAccountName": "北京淇瑀信息科技有限公司6",
          "thirdAccountId": 1636288126842892,
          "showCount": 10541971,
          "clickCount": 66235,
          "cost": 259977.58,
          "account_balance": 257536.32
        },
        {
          "thirdAccountName": "重庆市分众小额贷款有限公司-9",
          "thirdAccountId": 1630874971275278,
          "showCount": 3886171,
          "clickCount": 27985,
          "cost": 230087.6,
          "account_balance": 521025.5
        },
        {
          "thirdAccountName": "北京密境和风科技有限公司-6",
          "thirdAccountId": 108186807893,
          "showCount": 40237909,
          "clickCount": 288220,
          "cost": 140276.88,
          "account_balance": 150152.08
        },
        {
          "thirdAccountName": "北京淇瑀信息科技有限公司5",
          "thirdAccountId": 1636287945692171,
          "showCount": 3671640,
          "clickCount": 21156,
          "cost": 128526.69,
          "account_balance": 168621.41
        },
        {
          "thirdAccountName": "天津快推-清理大师极速版-3",
          "thirdAccountId": 1651440327791630,
          "showCount": 8317981,
          "clickCount": 610619,
          "cost": 117234.59,
          "account_balance": 12143.4
        },
        {
          "thirdAccountName": "北京密境和风科技有限公司-11",
          "thirdAccountId": 1639923931929613,
          "showCount": 8669981,
          "clickCount": 115492,
          "cost": 60296.89,
          "account_balance": 56404.26
        },
        {
          "thirdAccountName": "北京密境和风科技有限公司-5",
          "thirdAccountId": 106637028976,
          "showCount": 4348885,
          "clickCount": 121318,
          "cost": 48700.73,
          "account_balance": 35132
        },
        {
          "thirdAccountName": "北京密境和风科技有限公司-9",
          "thirdAccountId": 1629696631183373,
          "showCount": 3210790,
          "clickCount": 49960,
          "cost": 28317.41,
          "account_balance": 109667.84
        },
        {
          "thirdAccountName": "北京密境和风科技有限公司-10",
          "thirdAccountId": 1633844024953868,
          "showCount": 7989992,
          "clickCount": 71076,
          "cost": 21287.65,
          "account_balance": 83877.76
        },
        {
          "thirdAccountName": "北京密境和风科技有限公司-12",
          "thirdAccountId": 1639924268878851,
          "showCount": 353651,
          "clickCount": 7252,
          "cost": 10207.86,
          "account_balance": 70158.42
        },
        {
          "thirdAccountName": "北京密境和风科技有限公司-2",
          "thirdAccountId": 100199897671,
          "showCount": 1935886,
          "clickCount": 34346,
          "cost": 10168.97,
          "account_balance": 69215.88
        },
        {
          "thirdAccountName": "百传-北京新氧科技有限公司-4",
          "thirdAccountId": 1652074504838151,
          "showCount": 436752,
          "clickCount": 12507,
          "cost": 3808,
          "account_balance": 13282.23
        },
        {
          "thirdAccountName": "百传-北京新氧科技有限公司-2",
          "thirdAccountId": 1650715241774092,
          "showCount": 0,
          "clickCount": 0,
          "cost": 0,
          "account_balance": 66.81
        }
      ],
      fixTbData: [
        {
          "thirdAccountName": "合计",
          "showCount": 165807559,
          "clickCount": 2777306,
          "cost": 1964907.44,
          "account_balance": 521025.5
        }
      ],
      hidden: false
    };
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      const len = _.filter(this.tableTitle, { fixed: 'left' }).length;
      if (rowIndex === 0) {
        if (columnIndex == 0) {
          return {
            rowspan: 1,
            colspan: len
          };
        } else if (columnIndex > 2 && columnIndex < len + 1) {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    // 表格行样式
    tableRowStyleName({ row, rowIndex }) {
      // if (rowIndex == 0) {
      //   return {
      //     color: '#FF3333',
      //     height: "36px"
      //   };
      // } else {
      //   return {
      //     height: "50px"
      //   };
      // }
    },
    headerRowStyle({ row, rowIndex }) {
      // return {
      //   height: "36px"
      // };
    },
    // 排序处理
    sortChange(prop, order) {
      console.log(prop, order)
    },
    test() {
      console.log(this.$refs[this.fixTable])
    }
  },
  components: {
    AdeskTable
  },
};
</script>
<style scoped>
.test {
  width: 50%;
}
.test-p {
  line-height: 100px;
}
</style>
