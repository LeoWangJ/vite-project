<script setup lang="ts">
  import { ref } from 'vue';
  import { Button } from 'vant';
  import { ShareSheet } from 'vant';
  import { appVars } from './theme'
  const showShare = ref(false);
  const options = [
    { name: '微信', icon: 'wechat' },
    { name: '微博', icon: 'weibo' },
    { name: '复制链接', icon: 'link', description: '描述信息' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
  ];
</script>

<template>
  <van-config-provider :theme-vars="appVars">
    <Button type="primary" @click="showShare = !showShare">主要按钮</Button>
    <ShareSheet
      v-model:show="showShare"
      :options="options"
      title="立即分享给好友"
      description="描述信息"
    />
    <router-view/>
    <div class="text-teal-400">123</div>
  </van-config-provider>
</template>

<style>
</style>
