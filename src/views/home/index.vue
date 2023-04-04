<template>
  <div class="home">
    首页
    <ul>
      <li><button-Ui disabled @click="testClick('test')">默认</button-Ui></li>
      <li><button-Ui size="large" @click="testClick('test')">大</button-Ui></li>
      <li><button-Ui size="default">中</button-Ui></li>
      <li><button-Ui size="small">小</button-Ui></li>
      <li><button-Ui round>是否圆角</button-Ui></li>
      <li><button-Ui round size="small">是否圆角</button-Ui></li>
      <li><button-Ui round size="large">是否圆角</button-Ui></li>
      <li><button-Ui plain>是否镂空</button-Ui></li>
      <li><button-Ui type="primary" disabled>按钮类型primary</button-Ui></li>
      <li><button-Ui type="primary" plain>镂空primary</button-Ui></li>
      <li><button-Ui type="success" plain>镂空success</button-Ui></li>
      <li><button-Ui type="warning" plain>镂空warning</button-Ui></li>
      <li><button-Ui type="danger" plain round>镂空primary</button-Ui></li>
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
// import BottonUi from '../../packages/botton/index.vue'
import InputUi from '../../packages/input/index.vue'
export default {
  name: 'Home',
  components: {
    // BottonUi,
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
