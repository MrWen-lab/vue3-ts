<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="myTable">
      <Mybutton @textChange="textChange"></Mybutton>
      <Mytable ref="mytable"></Mytable>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Mytable from "@/components/useTable/Mytable.vue";
import Mybutton from "@/components/useButton/Mybutton.vue";

export default defineComponent({
  name: "About",
  components: {
    Mytable,
    Mybutton,
  },
  setup() {
    const mytable = ref();
    const textChange = (text: string) => {
      mytable.value.change(text);
    };
    return { mytable, textChange };
  },
});
</script>

<style lang="scss" scoped>
.myTable {
  width: 100%;
  height: 200px;
}
</style>
