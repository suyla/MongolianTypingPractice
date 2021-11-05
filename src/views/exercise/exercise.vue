<template>
  <div id="event-handling" class="typeInput">
    <p class="tb-lr">
      <span
        v-for="item in newNeedArr"
        :key="item"
        :class="item.flag ? '' : 'tfont'"
        >{{ item.message }}&nbsp;</span
      >
  <!-- :class="item.flag ? '' : 'tfont'" 
                 按状态判断显示颜色 -->
    </p>
    <textarea
      class="tb-lr"
      v-model="comparison"
      autofocus="autofocus"
    ></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: " ᠳᠠᠭᠠᠨ᠂ᠳᠡᠭᠡᠨ᠂ᠲᠠᠭᠠᠨ᠂ᠲᠡᠭᠡᠨ ᠠᠷᠠᠭ᠎ᠠ", //从后端导入
      comparison: "",
      newNeedArr: [],
    };
  },
  methods: {
    //字符串按空格拆分成字
    bbb() {
      const arr = this.message.split(/[ ]+/); //以空格分开

      arr.forEach((item) => {
        //把每个字保存到Map里，Map里是字和它的状态
        const param = { message: item, flag: true };
        this.newNeedArr.push(param);
      });
    },
  },
  watch: {
    comparison(e) {
      //字符串按空格拆分成字
      const newArr = e.split(/[ ]+/);
      //比对
      for (var i = 0; i < this.newNeedArr.length; i++) {
        if (newArr[i]) {
          if (newArr[i] === this.newNeedArr[i].message) {
            //赋状态
            this.newNeedArr[i].flag = true;
          } else {
            this.newNeedArr[i].flag = false;
          }
        }
      }
    },
  },
  components: {},
  mounted: function () {
    this.bbb();
  },
};
</script>

<style>
@import "../../assets/css/mglType.css";
.tfont {
  color: red;
}
textarea {
  width: 1200px;
  height: 800px !important;
  display: table-column;
  border: 1px solid #666;
  padding: 12px;
  text-align: justify; /*实现两端对齐文本效果*/
  text-align-last: left; /*最后一行向左对齐*/
  word-break: keep-all; /*只能在半角空格或连字符处换行*/
  font-size: 28px;
}
.typeInput {
  writing-mode: vertical-lr;
  text-orientation: sideways-right;
  -webkit-writing-mode: vertical-lr; /*垂直方向自右而左的书写方式*/
  -webkit-text-orientation: sideways-right;
}
</style>
