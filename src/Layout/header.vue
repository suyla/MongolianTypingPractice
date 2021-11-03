<template>
  <a-menu
    id="dddddd"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 100px"
    mode="vertical-right"
    @click="handleClick"
    class="menu"
  >
    <router-link tag="a" to="/home">
      <a-sub-menu key="sub1" @titleClick="titleClick">
        <template #title>
          <i class="iconfont heightcenter">&#xe7fb;</i>
          <span class="ant-menu-title-content-span">ᠲᠡᠷᠢᠭᠦᠨ ᠨᠢᠭᠤᠷ</span>
        </template>
      </a-sub-menu>
    </router-link>
    <router-link tag="a" to="/exercise">
      <a-sub-menu key="sub2" @titleClick="titleClick">
        <template #title
          ><i class="iconfont heightcenter">&#xe816;</i
          ><span class="ant-menu-title-content-span">
            ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ
          </span></template
        >
      </a-sub-menu>
    </router-link>
    <router-link tag="a" to="/keyboard">
    <a-sub-menu key="sub4">
      <template #title>
        <i class="iconfont heightcenter">&#xe8cc;</i>
        <span class="ant-menu-title-content-span">ᠪᠠᠢᠴᠠᠭᠠᠯᠲᠠ</span>
      </template>
    </a-sub-menu>
    </router-link>
  </a-menu>
</template>
<script>
import { defineComponent, ref, watch } from "vue";
import {
  MailOutlined,
  QqOutlined,
  AppstoreOutlined,
  SettingOutlined,
  smile,
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    MailOutlined,
    QqOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },

  setup() {
    const selectedKeys = ref(["1"]);
    const openKeys = ref(["sub1"]);

    const handleClick = (e) => {
      console.log("click", e);
    };

    const titleClick = (e) => {
      console.log("titleClick", e);
    };

    watch(
      () => openKeys,
      (val) => {
        console.log("openKeys", val);
      }
    );
    return {
      selectedKeys,
      openKeys,
      handleClick,
      titleClick,
    };
  },
  methods: {},
});
</script>
<style scoped>
@import "../assets/css/mglType.css";
@font-face {
  font-family: "mongol-font";
  src: url(../assets/fonts/mnglbaizhengotf.ttf);
}
.heightcenter {
  display: flex;
  margin: 0 0 0 5px;
}
.menu >>> .ant-menu-submenu-title {
  height: auto !important;
  width: 80px !important;
  background-color: #4caf50;
  font-size: 30px;
  padding: 10px 10px 10px 10px;
}
.menu >>> .ant-menu-submenu-title:hover {
  background-color: #388e3c;
}
.menu >>> .ant-menu-title-content-span {
  -ms-writing-mode: tb-lr;
  -webkit-writing-mode: vertical-lr;
  -webkit-text-orientation: sideways-right;
  writing-mode: vertical-lr;
  /* writing-mode: tb-rl; */
  text-orientation: sideways-right;
  font-family: "mongol-font";
}
.menu >>> .ant-menu-submenu-title {
  margin: 0 !important;
}
.ant-menu-vertical-right {
  width: 81px !important;
}
.ant-menu-vertical .ant-menu-submenu,
.ant-menu-vertical-left .ant-menu-submenu,
.ant-menu-vertical-right .ant-menu-submenu,
.ant-menu-inline .ant-menu-submenu {
  padding-bottom: 0;
}
</style>