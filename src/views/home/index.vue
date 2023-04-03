<template>
  <div class="home">
    首页
    <ul>
      <li><BottonUi disabled @click="testClick('test')">默认</BottonUi></li>
      <li><BottonUi size="large" @click="testClick('test')">大</BottonUi></li>
      <li><BottonUi size="default">中</BottonUi></li>
      <li><BottonUi size="small">小</BottonUi></li>
      <li><BottonUi round>是否圆角</BottonUi></li>
      <li><BottonUi round size="small">是否圆角</BottonUi></li>
      <li><BottonUi round size="large">是否圆角</BottonUi></li>
      <li><BottonUi plain>是否镂空</BottonUi></li>
      <li><BottonUi type="primary" disabled>按钮类型primary</BottonUi></li>
      <li><BottonUi type="primary" plain>镂空primary</BottonUi></li>
      <li><BottonUi type="success" plain>镂空success</BottonUi></li>
      <li><BottonUi type="warning" plain>镂空warning</BottonUi></li>
      <li><BottonUi type="danger" plain round>镂空primary</BottonUi></li>
    </ul>
    <ul>
      <li><InputUi size="large" readonly></InputUi></li>
      <li><InputUi size="default" placeholder="请输入内容"></InputUi></li>
      <li><InputUi size="small"></InputUi></li>
      <li><InputUi type="textarea" resize="none" :rows="10"></InputUi></li>
      <li><InputUi type="textarea" resize=""></InputUi></li>
      <li><InputUi size="small" round prefix-icon="test">
      </InputUi></li>
    </ul>

  </div>
</template>
<script>
import BottonUi from '../../packages/botton/index.vue'
import InputUi from '../../packages/input/index.vue'
export default {
  name: 'Home',
  components: {
    BottonUi,
    InputUi
  },
  methods: {
    testClick (val) {
      console.log(123, val)
    }
  }
}
</script>

<style scoped lang="less">
.home{
  ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li{
      margin: 10px;
    }
  }
}
</style>
