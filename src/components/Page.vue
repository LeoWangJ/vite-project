<template>
  <NavBar
    title="标题"
    left-text="返回"
    right-text="按钮"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<script setup lang="ts">
  import { NavBar,Toast } from 'vant';
  const onClickLeft = () => history.back();
  const onClickRight = () => Toast('按钮');
</script>

<style>

</style>