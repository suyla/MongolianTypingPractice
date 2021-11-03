<template>
  <div class="maximum">
    <div class="numb bck">
      <ul class="hUl">
        <li class="keyli bckli">
          <p class="">~`</p>
        </li>
        <li class="keyli bckli">
          <p class="">1</p>
        </li>
        <li class="keyli bckli">
          <p class="">2</p>
        </li>
        <li class="keyli bckli">
          <p class="">3</p>
        </li>
        <li class="keyli bckli">
          <p class="">4</p>
        </li>
        <li class="keyli bckli">
          <p class="">5</p>
        </li>
        <li class="keyli bckli">
          <p class="">6</p>
        </li>
        <li class="keyli bckli">
          <p class="">7</p>
        </li>
        <li class="keyli bckli">
          <p class="">8</p>
        </li>
        <li class="keyli bckli">
          <p class="">9</p>
        </li>
        <li class="keyli bckli">
          <p class="">0</p>
        </li>
        <li class="keyli bckli">
          <p class="">-</p>
        </li>
        <li class="keyli bckli">
          <p class="">-</p>
        </li>
        <li class="keylibackspace bckli">
          <p class="">backspace</p>
        </li>
      </ul>
    </div>
    <div class="qkey bck">
      <ul class="hUl">
        <li class="keyliTab bckli">
          <p class="">Tab</p>
        </li>
        <li class="keyli bckli">
          <p class="">q</p>
        </li>
        <li class="keyli bckli">
          <p class="">w</p>
        </li>
        <li class="keyli bckli">
          <p class="">e</p>
        </li>
        <li class="keyli bckli">
          <p class="">r</p>
        </li>
        <li class="keyli bckli">
          <p class="">t</p>
        </li>
        <li class="keyli bckli">
          <p class="">y</p>
        </li>
        <li class="keyli bckli">
          <p class="">u</p>
        </li>
        <li class="keyli bckli">
          <p class="">i</p>
        </li>
        <li class="keyli bckli">
          <p class="">o</p>
        </li>
        <li class="keyli bckli">
          <p class="">p</p>
        </li>
        <li class="keyli bckli">
          <p class="">[</p>
        </li>
        <li class="keyli bckli">
          <p class="">]</p>
        </li>
        <li class="keyliEnd bckli">
          <p class="">&nbsp;&nbsp;\&nbsp;|</p>
        </li>
      </ul>
    </div>
    <div class="akey bck">
      <ul class="hUl">
        <li class="keyliCapsLockEnter bckli">
          <p class="">CapsLock</p>
        </li>
        <li class="keyli bckli">
          <p class="">a</p>
        </li>
        <li class="keyli bckli">
          <p class="">s</p>
        </li>
        <li class="keyli bckli">
          <p class="">d</p>
        </li>
        <li class="keyli bckli">
          <p class="">f</p>
        </li>
        <li class="keyli bckli">
          <p class="">g</p>
        </li>
        <li class="keyli bckli">
          <p class="">h</p>
        </li>
        <li class="keyli bckli">
          <p class="">j</p>
        </li>
        <li class="keyli bckli">
          <p class="">k</p>
        </li>
        <li class="keyli bckli">
          <p class="">l</p>
        </li>
        <li class="keyli bckli">
          <p class="">;</p>
        </li>
        <li class="keyli bckli">
          <p class="">'~`'</p>
        </li>
        <li class="keyliCapsLockEnter bckli">
          <p class="">Enter</p>
        </li>
      </ul>
    </div>
    <div class="zkey bck">
      <ul class="hUl">
        <li class="keyliShift bckli">
          <p class="">Shift</p>
        </li>
        <li class="keyli bckli">
          <p class="">z</p>
        </li>
        <li class="keyli bckli">
          <p class="">x</p>
        </li>
        <li class="keyli bckli">
          <p class="">c</p>
        </li>
        <li class="keyli bckli">
          <p class="">v</p>
        </li>
        <li class="keyli bckli">
          <p class="">b</p>
        </li>
        <li class="keyli bckli">
          <p class="">n</p>
        </li>
        <li class="keyli bckli">
          <p class="">m</p>
        </li>
        <li class="keyli bckli">
          <p class="">,</p>
        </li>
        <li class="keyli bckli">
          <p class="">.</p>
        </li>
        <li class="keyli bckli">
          <p class="">/</p>
        </li>
        <li class="keyliShift bckli">
          <p class="">Shift</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* 
numb 键盘第一行
qkey 键盘第二行
akey 键盘第三行
zkey 键盘第四行
*/

.keyliShift {
  width: 198px;
  height: 75px;
  background-color: cornflowerblue;
  float: left;
}
.keyliCapsLockEnter {
  width: 155px;
  height: 75px;
  background-color: cornflowerblue;
  float: left;
}
.keyliEnd {
  width: 95px;
  height: 75px;
  background-color: cornflowerblue;
  float: left;
}
.keyliTab {
  width: 130px;
  height: 75px;
  background-color: cornflowerblue;
  float: left;
}
.keylibackspace {
  width: 150px;
  height: 75px;
  background-color: cornflowerblue;
  float: left;
}
.hUl {
  list-style: none;
  margin: 0 0 0 -40px;
}
.keyli {
  width: 75px;
  height: 75px;
  background-color: cornflowerblue;
  float: left;
}
.bckli {
  margin: 10px 0px 0 11px;
}
.zkey {
  height: 100px;
  widows: 100%;
}
.akey {
  height: 100px;
  widows: 100%;
}
.qkey {
  height: 100px;
  widows: 100%;
}
.numb {
  height: 100px;
  width: 100%;
}
.maximum {
  width: 1300px;
  height: 400px;
}
</style>