<template>
<div class="da">
  <div class="bigBox">
    <HeaderBox />
    <div>
      <router-view />
    </div>
  </div>
  <div class="FooterBox">
    <footerBox />
  </div>
  </div>
</template>
<script>
import HeaderBox from "./header";
import footerBox from "./footer";
export default {
  components: { HeaderBox, footerBox },
};
</script>
<style>
.da{
  position: relative;
  display: grid;
  background-color: #8BC34A;
  width: 1600px;
  height: 975px;
  margin: 0 auto;
}
.bigBox {
  display: flex;
  float: left;
}
.FooterBox{
  position: absolute;
  bottom: 0;
  margin: 0 0 0 0;
  width: 100%;
  height: 30px;
  background-color: #388E3C;
}

</style>
