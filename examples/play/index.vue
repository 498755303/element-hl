<!--
 * @Description: 
 * @LastEditors: HL
 * @LastEditTime: 2020-06-01 11:04:58
 -->
<template>
  <div class="test">
    <p class="test-p">用来测试,放到顶部的</p>
    <adesk-table :tbTitle="tableTitle"
                 :tbData="tableData"
                 :tbset="tableSet"
                 :tableRowStyleName="tableRowStyleName"
                 :arraySpanMethod="arraySpanMethod"
                 @sortHandle="sortChange"                 
                 :offsetTop="50"></adesk-table>
    <!-- :fixTbData="fixTbData" -->
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
          prop: "id",
          issort: false,
          ishtml: false,
          fixed: 'left',
          issort: true
        },
        {
          name: "用户名",
          prop: "userName",
          align: "left",
          issort: false,
          renderType: "default",
          fixed: 'left',
          width: "150px"
        },
        {
          name: "真实姓名",
          prop: "realName",
          align: "left",
          issort: false,
          renderType: "default",
          width: "150px"
        },
        {
          name: "职位",
          prop: "userIdentity",
          issort: false,
          align: "left",
          renderType: "default",
          width: "150px"
        },
        {
          name: "工号",
          prop: "jobNumber",
          issort: false,
          align: "right",
          renderType: "default",
          width: "150px"
        },
        {
          name: "部门",
          prop: "departmentName",
          issort: false,
          align: "left",
          renderType: "default"
        },
        {
          name: "角色",
          prop: "roleNametrans",
          issort: false,
          align: "left",
          renderType: "html"
        },
        {
          name: "最后登录时间",
          prop: "lastLoginTime",
          issort: false,
          renderType: "default"
        },
        {
          name: "最后登录IP",
          prop: "lastLoginIp",
          issort: false,
          renderType: "default",
          align: "right"
        },
        {
          name: "开启/冻结",
          prop: "status",
          issort: false,
          renderType: "switch"
        },
        // {
        //   name: "操作",
        //   prop: "edit",
        //   issort: false,
        //   renderType: "custormedit",
        //   edit: [
        //     {
        //       type: 1,
        //       name: "重置密码"
        //     },
        //     {
        //       type: 2,
        //       name: "分配账号"
        //     },
        //     {
        //       type: 3,
        //       name: "编辑"
        //     },
        //     {
        //       type: 4,
        //       name: "删除"
        //     }
        //   ],
        //   fixed: "right"
        // }
      ],
      tableSet: {
        selection:true,
        stripe: true,
        isborder: true,
        loading: false,
        fixHeader: true,
        fixRef: "fixTable",
        onlyShowFixHeader: true
      },
      tableData: [
        {
          "id": 407,
          "departmentId": 58,
          "departmentName": "北京万盟在线科技有限公司",
          "userName": "test@newtopad.com",
          "realName": "测试",
          "userTelephone": "18888888888",
          "userIdentity": "运营",
          "roleName": "设计师",
          "createTime": "2019-11-15 17:02:19",
          "lastLoginTime": "2019-11-15 17:02:27",
          "lastLoginIp": "36.102.208.210",
          "status": true
        },
        {
          "id": 408,
          "departmentId": 58,
          "departmentName": "北京万盟在线科技有限公司",
          "userName": "test2@newtopad.com",
          "realName": "test",
          "userTelephone": "18612312312",
          "userIdentity": "运营",
          "roleName": "优化师",
          "createTime": "2019-10-31 14:36:53",
          "lastLoginTime": "2019-10-31 14:39:17",
          "lastLoginIp": "36.102.208.210",
          "status": true
        },
        {
          "id": 409,
          "departmentId": 58,
          "departmentName": "北京万盟在线科技有限公司",
          "userName": "test3@newtopad.com",
          "realName": "test1",
          "userTelephone": "13512341234",
          "jobNumber": "",
          "userIdentity": "优化",
          "roleName": "优化师",
          "createTime": "2019-10-31 14:48:19",
          "status": true
        },
        {
          "id": 410,
          "departmentId": 58,
          "departmentName": "北京万盟在线科技有限公司",
          "userName": "xczy-shuju02.bj@newtopad.com",
          "realName": "张玉红",
          "userTelephone": "18600784377",
          "userIdentity": "运营",
          "roleName": "系统管理员",
          "createTime": "2019-10-31 15:04:48",
          "lastLoginTime": "2020-03-16 09:45:50",
          "lastLoginIp": "222.128.15.71",
          "status": true
        },
        {
          "id": 411,
          "departmentId": 58,
          "departmentName": "北京万盟在线科技有限公司",
          "userName": "zhaoyong.bj@newtopad.com",
          "realName": "赵勇",
          "userTelephone": "13504467959",
          "userIdentity": "总经理",
          "roleName": "系统管理员",
          "createTime": "2019-11-01 14:11:57",
          "lastLoginTime": "2020-03-16 10:40:35",
          "lastLoginIp": "222.128.15.71",
          "status": true
        },
        {
          "id": 412,
          "departmentId": 60,
          "departmentName": "设计二部",
          "userName": "xuhuijie.bj@newtopad.com",
          "realName": "许慧杰",
          "userTelephone": "13810796692",
          "userIdentity": "编导",
          "roleName": "视频创作",
          "createTime": "2019-11-26 14:50:44",
          "lastLoginTime": "2020-02-03 14:18:01",
          "lastLoginIp": "182.51.86.158",
          "status": true
        },
        {
          "id": 413,
          "departmentId": 60,
          "departmentName": "设计二部",
          "userName": "bainan.bj@newtopad.com",
          "realName": "白楠",
          "userTelephone": "13522457860",
          "userIdentity": "编导",
          "roleName": "视频创作",
          "createTime": "2019-11-26 14:50:51",
          "lastLoginTime": "2020-01-17 16:57:40",
          "lastLoginIp": "222.128.15.71",
          "status": true
        },
        {
          "id": 414,
          "departmentId": 60,
          "departmentName": "设计二部",
          "userName": "pingwenxian.bj@newtopad.com",
          "realName": "平文显",
          "userTelephone": "13671300871",
          "userIdentity": "平面设计师",
          "roleName": "设计师",
          "createTime": "2019-11-26 14:10:39",
          "status": true
        },
        {
          "id": 415,
          "departmentId": 60,
          "departmentName": "设计二部",
          "userName": "zhangfan.bj@newtopad.com",
          "realName": "张帆 ",
          "userTelephone": "18337303720",
          "userIdentity": "剪辑",
          "roleName": "视频创作",
          "createTime": "2019-11-26 14:11:05",
          "lastLoginTime": "2020-03-16 16:16:43",
          "lastLoginIp": "120.244.234.136",
          "status": true
        },
        {
          "id": 416,
          "departmentId": 60,
          "departmentName": "设计二部",
          "userName": "fengxiaolei.bj@newtopad.com",
          "realName": "冯晓雷",
          "userTelephone": "17600187742",
          "userIdentity": "剪辑",
          "roleName": "视频创作",
          "createTime": "2019-11-26 14:51:38",
          "lastLoginTime": "2020-03-16 14:01:14",
          "lastLoginIp": "106.121.179.196",
          "status": true
        },
        {
          "id": 417,
          "departmentId": 60,
          "departmentName": "设计二部",
          "userName": "mihongzhan.bj@newtopad.com",
          "realName": "米宏展",
          "userTelephone": "15920572230",
          "userIdentity": "剪辑",
          "roleName": "视频创作",
          "createTime": "2019-11-26 14:20:46",
          "lastLoginTime": "2020-03-16 10:44:48",
          "lastLoginIp": "123.118.223.71",
          "status": true
        },
        {
          "id": 418,
          "departmentId": 60,
          "departmentName": "设计二部",
          "userName": "jingjinxiu.bj@newtopad.com",
          "realName": "景锦秀",
          "userTelephone": "17610073136",
          "userIdentity": "剪辑",
          "roleName": "视频创作",
          "createTime": "2019-11-26 14:20:49",
          "lastLoginTime": "2020-03-16 10:51:24",
          "lastLoginIp": "222.128.15.71",
          "status": true
        },
        {
          "id": 419,
          "departmentId": 60,
          "departmentName": "设计二部",
          "userName": "yulong.bj@newtopad.com",
          "realName": "于龙",
          "userTelephone": "15856984989",
          "userIdentity": "剪辑组长",
          "roleName": "视频创作",
          "createTime": "2019-11-26 14:20:53",
          "lastLoginTime": "2020-03-16 10:05:17",
          "lastLoginIp": "120.244.234.136",
          "status": true
        },
        {
          "id": 423,
          "departmentId": 60,
          "departmentName": "设计二部",
          "userName": "yangdonghu.bj@newtopad.com",
          "realName": "杨冬虎",
          "userTelephone": "18201175710",
          "userIdentity": "摄像师",
          "roleName": "视频创作",
          "createTime": "2019-11-26 14:21:09",
          "lastLoginTime": "2020-03-13 09:06:59",
          "lastLoginIp": "222.128.15.71",
          "status": true
        },
        {
          "id": 424,
          "departmentId": 60,
          "departmentName": "设计二部",
          "userName": "baiqianwen.bj@newtopad.com",
          "realName": "白倩文",
          "userTelephone": "17582969113",
          "userIdentity": "平面设计师",
          "roleName": "设计师",
          "createTime": "2019-11-26 14:12:50",
          "status": true
        },
        {
          "id": 425,
          "departmentId": 60,
          "departmentName": "设计二部",
          "userName": "liuhao.bj@newtopad.com",
          "realName": "刘昊",
          "userTelephone": "18234074730",
          "userIdentity": "平面设计师组长",
          "roleName": "设计师",
          "createTime": "2019-11-26 14:12:58",
          "status": true
        },
        {
          "id": 426,
          "departmentId": 60,
          "departmentName": "设计二部",
          "userName": "renyuting.bj@newtopad.com",
          "realName": "任宇婷",
          "userTelephone": "13593139614",
          "userIdentity": "平面设计师",
          "roleName": "设计师",
          "createTime": "2019-11-26 14:13:18",
          "status": true
        },
        {
          "id": 427,
          "departmentId": 60,
          "departmentName": "设计二部",
          "userName": "zhangxiang.bj@newtopad.com",
          "realName": "张翔",
          "userTelephone": "18235074271",
          "userIdentity": "平面设计师",
          "roleName": "设计师",
          "createTime": "2019-11-26 14:13:30",
          "status": true
        },
        {
          "id": 428,
          "departmentId": 60,
          "departmentName": "设计二部",
          "userName": "yangxuexi.bj@newtopad.com",
          "realName": "杨雪汐",
          "userTelephone": "15035150652",
          "userIdentity": "平面设计师",
          "roleName": "设计师",
          "createTime": "2019-11-26 14:13:42",
          "status": true
        },
        {
          "id": 430,
          "departmentId": 61,
          "departmentName": "设计三部",
          "userName": "zhangzhuo.bj@newtopad.com",
          "realName": "张茁",
          "userTelephone": "18549955726",
          "userIdentity": "平面设计师",
          "roleName": "设计师",
          "createTime": "2019-11-26 14:14:33",
          "status": true
        },
        {
          "id": 431,
          "departmentId": 61,
          "departmentName": "设计三部",
          "userName": "zhenyuan.bj@newtopad.com",
          "realName": "甄媛",
          "userTelephone": "18878995581",
          "userIdentity": "平面设计师",
          "roleName": "设计师",
          "createTime": "2019-11-29 17:22:18",
          "lastLoginTime": "2019-11-29 17:22:44",
          "lastLoginIp": "222.128.15.71",
          "status": true
        },
        {
          "id": 433,
          "departmentId": 59,
          "departmentName": "设计一部",
          "userName": "gaoyan.bj@newtopad.com",
          "realName": "高岩",
          "userTelephone": "17744414694",
          "userIdentity": "编导",
          "roleName": "视频创作",
          "createTime": "2019-11-26 14:52:12",
          "lastLoginTime": "2020-03-10 15:29:18",
          "lastLoginIp": "222.128.15.71",
          "status": true
        },
        {
          "id": 434,
          "departmentId": 59,
          "departmentName": "设计一部",
          "userName": "yanghongli.bj@newtopad.com",
          "realName": "杨红丽",
          "userTelephone": "18701378626",
          "userIdentity": "平面设计师组长",
          "roleName": "设计师",
          "createTime": "2020-01-14 13:36:25",
          "lastLoginTime": "2020-03-16 10:14:33",
          "lastLoginIp": "222.128.15.71",
          "status": true
        },
        {
          "id": 436,
          "departmentId": 59,
          "departmentName": "设计一部",
          "userName": "zhaorong.bj@newtopad.com",
          "realName": "赵容",
          "userTelephone": "18329334140",
          "userIdentity": "剪辑",
          "roleName": "视频创作",
          "createTime": "2019-11-26 14:15:59",
          "lastLoginTime": "2020-03-16 09:40:15",
          "lastLoginIp": "222.128.15.71",
          "status": true
        },
        {
          "id": 437,
          "departmentId": 59,
          "departmentName": "设计一部",
          "userName": "lishuai.bj@newtopad.com",
          "realName": "李帅",
          "userTelephone": "13522075052",
          "userIdentity": "剪辑",
          "roleName": "视频创作",
          "createTime": "2019-11-26 14:16:07",
          "lastLoginTime": "2020-03-16 10:05:29",
          "lastLoginIp": "222.128.15.71",
          "status": true
        },
        {
          "id": 438,
          "departmentId": 59,
          "departmentName": "设计一部",
          "userName": "wangziyang.bj@newtopad.com",
          "realName": "王自洋",
          "userTelephone": "15290658315",
          "userIdentity": "平面设计师",
          "roleName": "设计师",
          "createTime": "2019-11-26 14:16:31",
          "lastLoginTime": "2019-11-05 18:23:39",
          "status": true
        },
        {
          "id": 439,
          "departmentId": 59,
          "departmentName": "设计一部",
          "userName": "shangxingfeng.bj@newtopad.com",
          "realName": "尚兴峰",
          "userTelephone": "19920083137",
          "userIdentity": "剪辑",
          "roleName": "视频创作",
          "createTime": "2019-11-26 14:16:50",
          "lastLoginTime": "2020-01-15 09:54:25",
          "lastLoginIp": "222.128.15.71",
          "status": true
        },
        {
          "id": 440,
          "departmentId": 59,
          "departmentName": "设计一部",
          "userName": "guoailong.bj@newtopad.com",
          "realName": "郭爱龙",
          "userTelephone": "15028402817",
          "userIdentity": "平面设计师",
          "roleName": "设计师",
          "createTime": "2019-11-26 14:17:04",
          "lastLoginTime": "2019-11-05 18:00:00",
          "status": true
        },
        {
          "id": 442,
          "departmentId": 59,
          "departmentName": "设计一部",
          "userName": "liubo.bj@newtopad.com",
          "realName": "刘波",
          "userTelephone": "15755057759",
          "userIdentity": "平面设计师",
          "roleName": "设计师",
          "createTime": "2019-11-26 14:17:14",
          "lastLoginTime": "2019-11-05 18:03:18",
          "status": true
        },
        {
          "id": 443,
          "departmentId": 59,
          "departmentName": "设计一部",
          "userName": "fanshutong.bj@newtopad.com",
          "realName": "樊书通",
          "userTelephone": "18635405816",
          "userIdentity": "平面设计师",
          "roleName": "设计师",
          "createTime": "2019-11-26 14:17:28",
          "lastLoginTime": "2019-11-05 19:02:04",
          "status": true
        },
        {
          "id": 444,
          "departmentId": 59,
          "departmentName": "设计一部",
          "userName": "liangyanling.bj@newtopad.com",
          "realName": "梁艳玲",
          "userTelephone": "15021853714",
          "userIdentity": "平面设计师",
          "roleName": "设计师",
          "createTime": "2019-11-26 14:17:42",
          "lastLoginTime": "2019-11-05 18:24:59",
          "status": true
        },
        {
          "id": 445,
          "departmentId": 59,
          "departmentName": "设计一部",
          "userName": "liumiao.bj@newtopad.com",
          "realName": "刘淼",
          "userTelephone": "18406505785",
          "userIdentity": "平面设计师",
          "roleName": "设计师",
          "createTime": "2019-11-26 14:18:26",
          "lastLoginTime": "2019-11-05 17:56:20",
          "status": true
        },
        {
          "id": 446,
          "departmentId": 59,
          "departmentName": "设计一部",
          "userName": "zhanglu.bj@newtopad.com",
          "realName": "张璐",
          "userTelephone": "15735166576",
          "userIdentity": "平面设计师",
          "roleName": "设计师",
          "createTime": "2019-11-26 14:18:47",
          "lastLoginTime": "2019-11-05 18:25:05",
          "status": true
        },
        {
          "id": 447,
          "departmentId": 59,
          "departmentName": "设计一部",
          "userName": "jiangchenxi.bj@newtopad.com",
          "realName": "姜晨曦",
          "userTelephone": "13546416046",
          "userIdentity": "平面设计师",
          "roleName": "设计师",
          "createTime": "2019-11-26 14:18:49",
          "lastLoginTime": "2019-11-05 18:03:22",
          "status": true
        },
        {
          "id": 448,
          "departmentId": 59,
          "departmentName": "设计一部",
          "userName": "lijiaming.bj@newtopad.com",
          "realName": "李佳明",
          "userTelephone": "18935461462",
          "userIdentity": "平面设计师",
          "roleName": "设计师",
          "createTime": "2019-11-26 14:18:56",
          "lastLoginTime": "2019-11-05 18:17:55",
          "status": true
        },
        {
          "id": 450,
          "departmentId": 63,
          "departmentName": "运营二部",
          "userName": "leina.bj@newtopad.com",
          "realName": "雷娜",
          "userTelephone": "15811348595",
          "userIdentity": "优化师",
          "roleName": "优化师",
          "createTime": "2019-11-29 17:34:59",
          "lastLoginTime": "2020-03-16 09:31:49",
          "lastLoginIp": "221.216.139.59",
          "status": true
        },
        {
          "id": 451,
          "departmentId": 63,
          "departmentName": "运营二部",
          "userName": "liyanying.bj@newtopad.com",
          "realName": "李艳英",
          "userTelephone": "17611192858",
          "userIdentity": "优化主管",
          "roleName": "优化师",
          "createTime": "2020-01-17 13:43:04",
          "lastLoginTime": "2020-03-16 11:33:42",
          "lastLoginIp": "113.44.67.160",
          "status": true
        },
        {
          "id": 452,
          "departmentId": 63,
          "departmentName": "运营二部",
          "userName": "lvhaitao.bj@newtopad.com",
          "realName": "吕海焘",
          "userTelephone": "13934296434",
          "userIdentity": "优化师",
          "roleName": "优化师",
          "createTime": "2019-11-29 17:35:17",
          "lastLoginTime": "2020-03-16 10:56:11",
          "lastLoginIp": "221.218.215.154",
          "status": true
        },
        {
          "id": 453,
          "departmentId": 63,
          "departmentName": "运营二部",
          "userName": "lihe.bj@newtopad.com",
          "realName": "李贺",
          "userTelephone": "17692249832",
          "userIdentity": "优化师",
          "roleName": "优化师",
          "createTime": "2020-01-14 16:47:11",
          "lastLoginTime": "2020-02-11 15:53:34",
          "lastLoginIp": "221.192.180.225",
          "status": true
        },
        {
          "id": 455,
          "departmentId": 63,
          "departmentName": "运营二部",
          "userName": "jiajiewen.bj@newtopad.com",
          "realName": "贾杰文",
          "userTelephone": "15210298266",
          "userIdentity": "优化师",
          "roleName": "优化师",
          "createTime": "2019-11-29 17:35:35",
          "lastLoginTime": "2020-03-16 12:07:20",
          "lastLoginIp": "114.246.80.17",
          "status": true
        },
        {
          "id": 456,
          "departmentId": 63,
          "departmentName": "运营二部",
          "userName": "fangmei.bj@newtopad.com",
          "realName": "房梅",
          "userTelephone": "13641015967",
          "userIdentity": "优化师",
          "roleName": "优化师",
          "createTime": "2020-01-14 16:53:45",
          "lastLoginTime": "2020-03-16 16:17:25",
          "lastLoginIp": "125.33.125.80",
          "status": true
        },
        {
          "id": 457,
          "departmentId": 63,
          "departmentName": "运营二部",
          "userName": "wengqingjing.bj@newtopad.com",
          "realName": "翁清静",
          "userTelephone": "18221041096",
          "userIdentity": "优化师",
          "roleName": "优化师",
          "createTime": "2019-11-29 17:35:43",
          "lastLoginTime": "2020-03-16 10:21:11",
          "lastLoginIp": "113.44.67.160",
          "status": true
        },
        {
          "id": 458,
          "departmentId": 63,
          "departmentName": "运营二部",
          "userName": "caixiaolu.bj@newtopad.com",
          "realName": "蔡晓璐",
          "userTelephone": "13263164073",
          "userIdentity": "优化师",
          "roleName": "优化师",
          "createTime": "2019-11-29 17:35:49",
          "lastLoginTime": "2020-03-14 22:36:30",
          "lastLoginIp": "111.197.232.51",
          "status": true
        },
        {
          "id": 459,
          "departmentId": 63,
          "departmentName": "运营二部",
          "userName": "caihan.bj@newtopad.com",
          "realName": "蔡晗",
          "userTelephone": "15738535375",
          "userIdentity": "优化师",
          "roleName": "优化师",
          "createTime": "2019-11-29 17:35:56",
          "lastLoginTime": "2020-03-16 11:21:18",
          "lastLoginIp": "111.196.243.73",
          "status": true
        },
        {
          "id": 460,
          "departmentId": 63,
          "departmentName": "运营二部",
          "userName": "youhuilin.bj@newtopad.com",
          "realName": "尤慧琳",
          "userTelephone": "17600357198",
          "userIdentity": "优化师",
          "roleName": "优化师",
          "createTime": "2020-01-21 16:38:54",
          "lastLoginTime": "2020-03-16 09:47:52",
          "lastLoginIp": "111.193.228.182",
          "status": true
        },
        {
          "id": 461,
          "departmentId": 63,
          "departmentName": "运营二部",
          "userName": "liuyue.bj@newtopad.com",
          "realName": "刘月",
          "userTelephone": "16619704990",
          "userIdentity": "优化助理",
          "roleName": "优化师助理",
          "createTime": "2020-01-14 16:47:54",
          "lastLoginTime": "2020-03-15 10:12:04",
          "lastLoginIp": "111.196.62.99",
          "status": true
        }
      ],
      fixTbData: [
        {
          "id": '合计',
          "departmentId": 1,
          "departmentName": "总计",
          "userName": "test@newtopad.com",
          "realName": "测试",
          "userTelephone": "18888888888",
          "userIdentity": "运营",
          "roleName": "设计师",
          "createTime": "2019-11-15 17:02:19",
          "lastLoginTime": "2019-11-15 17:02:27",
          "lastLoginIp": "36.102.208.210",
          "status": true
        },
      ]
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
    tableRowStyleName({ row, rowIndex }) {
      if (rowIndex == 0) {
        return { height: "50px" };
      }
    },
     // 排序处理
    sortChange(prop, order) {
      console.log(prop,order)
    },
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
