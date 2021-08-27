<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
});
</script>

<style lang="scss">
.el-table__row {
  td {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    .cell {
      padding: 0 !important;
    }
  }
}
</style>
