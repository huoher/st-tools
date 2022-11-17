<template>
  <n-tabs
      class="card-tabs"
      default-value="shMail"
      size="large"
      animated
      style="margin: 0 -4px"
      pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
  >
    <n-tab-pane name="shMail" tab="上铁邮箱登录">
      <n-form :rules="shMailRules" :model="shMailModel">
        <n-form-item path="username">
          <n-input-group style="display: flex; align-items: center">
            <n-input v-model:value="shMailModel.username" placeholder="请输入邮箱"></n-input>
            <n-input-group-label style="width: 120px">@sh.mor.cr</n-input-group-label>
          </n-input-group>
        </n-form-item>
        <n-form-item  path="password">
          <n-input v-model:value="shMailModel.password" placeholder="请输入邮箱密码" type="password"/>
        </n-form-item>
      </n-form>
      <n-button type="primary" block secondary strong>
        登录
      </n-button>
    </n-tab-pane>
    <n-tab-pane name="ldap" tab="LDAP登录">
      <n-form :rules="ldapRules" :model="ladpModel">
        <n-form-item>
          <n-input-group style="display: flex; align-items: center">
            <n-input placeholder="请输入邮箱"></n-input>
            <n-input-group-label style="width: 120px">@stxz.com</n-input-group-label>
          </n-input-group>
        </n-form-item>
        <n-form-item>
          <n-input placeholder="请输入邮箱密码" type="password"/>
        </n-form-item>
      </n-form>
      <n-button type="primary" block secondary strong>
        登录
      </n-button>
    </n-tab-pane>
  </n-tabs>
</template>

<script setup>
import { NTabs, NTabPane, NForm, NFormItem, NInput, NInputGroupLabel, NButton } from 'naive-ui'
import { reactive } from 'vue'

const shMailRules = reactive({
  username: {
    required: true,
    trigger: ['input', 'blur'],
    message: '请输入邮箱',
  },
  password:
      {
        required: true,
        trigger: ['input', 'blur'],
        message: '请输入密码',
      },
})


const ldapRules = reactive({
  username: {
    required: true,
    trigger: ['input', 'blur'],
    message: '请输入邮箱',
  },
  password:
      {
        required: true,
        trigger: ['input', 'blur'],
        message: '请输入密码',
      },
})

const ladpModel = reactive({
  username: '',
  password: '',
})
const shMailModel = reactive({
  username: '',
  password: '',
})
</script>

<style scoped lang="stylus">
.card-tabs .n-tabs-nav--bar-type
  padding-left 4px
</style>
