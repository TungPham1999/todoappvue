<template>
  <el-row>
    <el-col :span="4">
      <header>
        <h5 class="layout-header">Account management</h5>
      </header>
      <nav class="navbar-wrapper">
        <el-menu class="el-menu-vertical-demo">
          <router-link to="/">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <template #title>Users</template>
            </el-menu-item>
          </router-link>
        </el-menu>
      </nav>
    </el-col>
    <el-col :span="8">
      <div class="body--wrapper">
        <router-view />
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.body--wrapper {
  margin-top: 70px;
}
.layout-header {
  padding: 20px 20px;
  font-weight: 600;
  color: #a27777;
}
.navbar-wrapper {
  height: calc(100vh - 70px);
}
</style>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
<style lang="scss">
.ele-column {
  padding: 16px !important;
}
</style>