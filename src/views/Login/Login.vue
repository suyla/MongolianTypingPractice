<template>
  <a-form :layout="formState.layout" :model="formState" v-bind="formItemLayout">
    <a-form-item label="Form Layout">
      <a-radio-group v-model:value="formState.layout">
        <a-radio-button value="horizontal">Horizontal</a-radio-button>
        <a-radio-button value="vertical">Vertical</a-radio-button>
        <a-radio-button value="inline">Inline</a-radio-button>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="Field A">
      <a-input
        v-model:value="formState.username"
        placeholder="input placeholder"
      />
    </a-form-item>
    <a-form-item label="Field B">
      <a-input v-model:value="formState.pwd" placeholder="input placeholder" />
    </a-form-item>
    <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <a-button type="primary" @click="SubmitClick">Submit</a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import { computed, defineComponent, reactive } from "vue";
import axios from "axios";
export default defineComponent({
  methods: {
    SubmitClick() {
      axios({
        url: "http://localhost:9000/login",
        method: "POST",
        params: { username: this.formState.username, pwd: this.formState.pwd },
      }).then((res) => {
        if (res.data.retCode == 200) {
          this.$router.push({ path:'/index'});
        }
      });
    },
  },
  setup() {
    const formState = reactive({
      username: "老白",
      pwd: "123456",
    });
    const formItemLayout = computed(() => {
      const { layout } = formState;
      return layout === "horizontal"
        ? {
            labelCol: {
              span: 4,
            },
            wrapperCol: {
              span: 14,
            },
          }
        : {};
    });
    const buttonItemLayout = computed(() => {
      const { layout } = formState;
      return layout === "horizontal"
        ? {
            wrapperCol: {
              span: 14,
              offset: 4,
            },
          }
        : {};
    });
    return {
      formState,
      formItemLayout,
      buttonItemLayout,
    };
  },
});
</script>

<style>
</style>