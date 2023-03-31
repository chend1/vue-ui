<template>
  <button
    class="buttom"
    :class="[
      'buttom-' + size,
      'buttom-' + type,
      { 'buttom-round': round },
      { 'buttom-plain': plain },
    ]"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'Buttom-Ui',
  props: {
    size: {
      // large default small
      type: String,
      default: 'default'
    },
    type: {
      // primary / success / warning / danger / info / text
      type: String,
      default: 'info'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      buttomSize: {
        large: 'buttom-large',
        default: 'buttom-default',
        small: 'buttom-small'
      }
    }
  }
}
</script>

<style scoped lang="less">
.buttom {
  display: inline-block;
  box-sizing: border-box;
  padding: 0 10px;
  border-radius: 5px;
  background-color: #909399;
  border: 1px solid #909399;
  height: 30px;
  line-height: 30px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #abadb1;
    color: #fff;
  }
}
// 按钮大小
.buttom-small {
  height: 28px;
  line-height: 26px;
  padding: 0 8px;
}
.buttom-default {
  height: 32px;
  line-height: 30px;
  padding: 0 10px;
}
.buttom-large {
  height: 40px;
  line-height: 38px;
  padding: 0 15px;
}
// 按钮圆角
.buttom-round {
  border-radius: 20px;
}
// 按钮颜色
.buttom-primary {
  background-color: #409eff;
  border-color: #409eff;
  &:hover {
    background-color: rgba(#409eff, 0.8);
    border-color: rgba(#409eff, 0.8);
  }
}
.buttom-success {
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover {
    background-color: rgba(#67c23a, 0.8);
    border-color: rgba(#67c23a, 0.8);
  }
}
.buttom-warning {
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover {
    background-color: rgba(#e6a23c, 0.8);
    border-color: rgba(#e6a23c, 0.8);
  }
}
.buttom-danger {
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover {
    background-color: rgba(#f56c6c, 0.8);
    border-color: rgba(#f56c6c, 0.8);
  }
}
// 镂空
.buttom-plain {
  background-color: rgba(#333, 0.07);
  color: #656668;
}
.buttom-plain.buttom-primary {
  background-color: rgba(#409eff, 0.07);
  color: #409eff;
  &:hover {
    background-color: #409eff;
    color: #fff;
  }
}
.buttom-plain.buttom-success {
  background-color: rgba(#67c23a, 0.07);
  color: #67c23a;
  &:hover {
    background-color: #67c23a;
    color: #fff;
  }
}
.buttom-plain.buttom-warning {
  background-color: rgba(#e6a23c, 0.07);
  color: #e6a23c;
  &:hover {
    background-color: #e6a23c;
    color: #fff;
  }
}
.buttom-plain.buttom-danger {
  background-color: rgba(#f56c6c, 0.07);
  color: #f56c6c;
  &:hover {
    background-color: #f56c6c;
    color: #fff;
  }
}
</style>
