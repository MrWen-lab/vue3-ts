<template>
  <el-Table :data="tableList">
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
  </el-Table>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ElTable } from "element-plus";

export default defineComponent({
  name: "Mytable",
  props: {
    buttonText: {
      type: String,
    },
  },
  components: {
    ElTable,
  },
  setup() {
    const tableList = ref([
      {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
      },
    ]);

    const count = ref(1);

    const methods = {
      add: () => {
        tableList.value.push({
          date: `${new Date()}`,
          name: `王小虎${count.value}`,
          address: `上海市普陀区金沙江路 ${count.value} 弄`,
        });
        count.value++;
      },

      remove: () => {
        if (tableList.value.length === 1) {
          return;
        }
        tableList.value.pop();
        count.value--;
      },
    };

    const change = (type: "add" | "remove") => {
      methods[type]();
    };

    return { tableList, change };
  },
});
</script>
