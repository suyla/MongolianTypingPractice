<template>
  <div id="event-handling">
    <p class="tb-lr">
      <span
        v-for="item in newNeedArr"
        :key="item"
        :class="item.flag ? '' : 'tfont'"
        >{{ item.message }}&nbsp;</span
      >
    </p>
    <input v-model="comparison" class="" />
  </div>
</template>

<script>
//模板语法
//导出的意思
export default {
  data() {
    return {
      message: " ᠳᠠᠭᠠᠨ᠂ᠳᠡᠭᠡᠨ᠂ᠲᠠᠭᠠᠨ᠂ᠲᠡᠭᠡᠨ ᠠᠷᠠᠭ᠎ᠠ",//从后端导入
      comparison: "",
      newNeedArr: [],
    };
  },
  methods: {
    bbb() {
      const arr = this.message.split(/[ ]+/); //以空格分开

      arr.forEach((item) => {
        const param = { message: item, flag: true };
        this.newNeedArr.push(param);
      });
    },
  },
  watch: {
    comparison(e) {
      const newArr = e.split(/[ ]+/);

      for (var i = 0; i < this.newNeedArr.length; i++) {
        //undifind null
        if (newArr[i]) {
          if (newArr[i] === this.newNeedArr[i].message) {
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
</style>
