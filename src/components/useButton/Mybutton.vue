<template>
  <el-button type="primary" @click="action('add')"> add </el-button>
  <el-button type="primary" @click="action('remove')"> remove </el-button>
  <el-button type="primary" @click="showDialog"> openDialog </el-button>
  <Mydialog ref="dialog"></Mydialog>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { ElButton } from "element-plus";
import Mydialog from "../useDialog/Mydialog.vue";

export default defineComponent({
  name: "Mybutton",
  components: {
    ElButton,
    Mydialog,
  },
  emits: ["textChange"],
  setup(props, { emit }) {
    const dialog = ref();

    const showDialog = () => {
      dialog.value.show();
    };

    const action = (type: string) => {
      emit("textChange", type);
    };

    return { dialog, showDialog, action };
  },
});
</script>
