<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>List Account</span>
      </div>
    </template>
    <el-table v-loading="loading" border :data="accounts" style="width: 100%">
      <el-table-column
        class-name="ele-column"
        align="right"
        prop="id"
        label="ID"
      >
      </el-table-column>
      <el-table-column
        class-name="ele-column"
        align="right"
        prop="name"
        label="Name"
      >
      </el-table-column>
      <el-table-column
        class-name="ele-column"
        align="right"
        prop="balance"
        label="Balance"
      >
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "src/store";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const store = useStore();
    const loading = ref(true);
    const route = useRoute();
    const accounts = computed(() => store.state.user.accounts);
    store
      .dispatch("user/SET_ACCOUNTS", route.params.id.toString())
      .then(() => {
        loading.value = false;
      })
      .catch(() => {
        loading.value = false;
      });
    return {
      accounts,
      loading,
    };
  },
});
</script>
