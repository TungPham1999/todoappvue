<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>List User</span>
      </div>
    </template>
    <el-table v-loading="loading" border :data="users" style="width: 100%">
      <el-table-column
        align="right"
        class-name="ele-column"
        prop="name"
        label="Name"
      >
        <template #default="scope">
          <router-link
            :to="{
              name: 'accounts',
              params: { id: scope.row.id ? scope.row.id : 1 },
            }"
            >{{ scope.row.name }}</router-link
          >
        </template>
      </el-table-column>
      <el-table-column align="right" prop="account_ids" label="Accounts">
        <template #default="scope">
          <tr v-for="(item, index) in scope.row.account_ids" :key="index">
            <td class="children-column">
              {{ item }}
            </td>
          </tr>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "src/store";
  
export default defineComponent({
  name: "HomePage",
  setup() {
    const loading = ref(true);
    const store = useStore();
    const users = computed(() => store.state.user.users);
    if (!users.value.length) {
      Promise.all([
        store.dispatch("user/SET_USERS", {
          id: 1,
        }),
        store.dispatch("user/SET_USERS", {
          id: 2,
        }),
        store.dispatch("user/SET_USERS", {
          id: 3,
        }),
      ])
        .then((data: any) => {
          store.commit("user/SET_USERS", data);
          loading.value = false;
        })
        .catch(() => {
          loading.value = false;
        });
    } else {
      loading.value = false;
    }

    return {
      users,
      loading,
    };
  },
});
</script>

<style lang="scss" scoped>
.children-column {
  width: 100vw;
  border: none;
  border-bottom: 1px solid #ebeef5;
  text-align: end;
  padding: 16px;
}
</style>