<template>
  <el-dialog title="提示" v-model="visible" width="30%" destroy-on-close center>
    <span>需要注意在 Dialog 打开前是这条内容和下面的内容都是不会被渲染的</span>
    <strong>额外的内容</strong>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false"
          >确 定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { ElDialog } from "element-plus";

interface OptionType {
  title: string;
  width: string | number;
  fullscreen: boolean;
  top: string;
  modal: boolean;
  appendToBody: boolean;
  lockScroll: boolean;
  customClass: string;
  openDelay: number;
  closeDelay: number;
  closeOnClickModal: boolean;
  closeOnPressEscape: boolean;
  showClose: boolean;
  center: boolean;
  destroyOnClose: boolean;
}

const defaultOptions: OptionType = {
  title: "提示",
  width: "50%",
  fullscreen: false,
  top: "15vh",
  modal: true,
  appendToBody: false,
  lockScroll: true,
  customClass: "",
  openDelay: 0,
  closeDelay: 0,
  closeOnClickModal: true,
  closeOnPressEscape: true,
  showClose: true,
  center: false,
  destroyOnClose: false,
};

export default defineComponent({
  name: "Mydialog",
  components: {
    ElDialog,
  },
  props: {
    options: {
      type: Object,
      default: defaultOptions,
    },
  },

  setup(props) {
    const visible = ref(false);
    const options = reactive({ ...props.options });
    const toggle = () => {
      visible.value = !visible.value;
    };

    const show = () => {
      visible.value = true;
    };

    const hide = () => {
      visible.value = false;
    };

    return {
      visible,
      toggle,
      show,
      hide,
      ...options,
    };
  },
});
</script>
