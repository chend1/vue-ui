<template>
  <div class="home">
    首页
    <ul>
      <li><BottomUi>默认</BottomUi></li>
      <li><BottomUi size="large">大</BottomUi></li>
      <li><BottomUi size="default">中</BottomUi></li>
      <li><BottomUi size="small">小</BottomUi></li>
      <li><BottomUi round>是否圆角</BottomUi></li>
      <li><BottomUi round size="small">是否圆角</BottomUi></li>
      <li><BottomUi round size="large">是否圆角</BottomUi></li>
      <li><BottomUi plain>是否镂空</BottomUi></li>
      <li><BottomUi type="primary">按钮类型primary</BottomUi></li>
      <li><BottomUi type="primary" plain>镂空primary</BottomUi></li>
      <li><BottomUi type="success" plain>镂空success</BottomUi></li>
      <li><BottomUi type="warning" plain>镂空warning</BottomUi></li>
      <li><BottomUi type="danger" plain round>镂空primary</BottomUi></li>
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
import BottomUi from '../../packages/bottom/index.vue'
import InputUi from '../../packages/input/index.vue'
export default {
  name: 'Home',
  components: {
    BottomUi,
    InputUi
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
