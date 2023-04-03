<template>
  <button
    class="button"
    :class="[
      'button-' + size,
      'button-' + type,
      { 'button-round': round },
      { 'button-plain': plain },
      { 'button-disabled': disabled },
    ]"
    @click="buttonClick"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'button-Ui',
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
      buttonSize: {
        large: 'button-large',
        default: 'button-default',
        small: 'button-small'
      }
    }
  },
  methods: {
    buttonClick () {
      if (this.disabled) {
        return
      }
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="less">
.button {
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
.button-small {
  height: 28px;
  line-height: 26px;
  padding: 0 8px;
}
.button-default {
  height: 32px;
  line-height: 30px;
  padding: 0 10px;
}
.button-large {
  height: 40px;
  line-height: 38px;
  padding: 0 15px;
}
// 按钮圆角
.button-round {
  border-radius: 20px;
}
// 按钮颜色
.button-primary {
  background-color: #409eff;
  border-color: #409eff;
  &:hover {
    background-color: rgba(#409eff, 0.8);
    border-color: rgba(#409eff, 0.8);
  }
}
.button-success {
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover {
    background-color: rgba(#67c23a, 0.8);
    border-color: rgba(#67c23a, 0.8);
  }
}
.button-warning {
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover {
    background-color: rgba(#e6a23c, 0.8);
    border-color: rgba(#e6a23c, 0.8);
  }
}
.button-danger {
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover {
    background-color: rgba(#f56c6c, 0.8);
    border-color: rgba(#f56c6c, 0.8);
  }
}

// 镂空
.button-plain {
  background-color: rgba(#333, 0.07);
  color: #656668;
}
.button-plain.button-primary {
  background-color: rgba(#409eff, 0.07);
  color: #409eff;
  &:hover {
    background-color: #409eff;
    color: #fff;
  }
}
.button-plain.button-success {
  background-color: rgba(#67c23a, 0.07);
  color: #67c23a;
  &:hover {
    background-color: #67c23a;
    color: #fff;
  }
}
.button-plain.button-warning {
  background-color: rgba(#e6a23c, 0.07);
  color: #e6a23c;
  &:hover {
    background-color: #e6a23c;
    color: #fff;
  }
}
.button-plain.button-danger {
  background-color: rgba(#f56c6c, 0.07);
  color: #f56c6c;
  &:hover {
    background-color: #f56c6c;
    color: #fff;
  }
}

// 禁用
.button-disabled{
  background-color: #babcbe;
  border-color: #babcbe;
  cursor:no-drop;
  &:hover {
    background-color: rgba(#babcbe, 0.8);
    border-color: rgba(#babcbe, 0.8);
  }
}
.button-disabled.button-primary {
  background-color: rgba(#409eff, 0.5);
  border-color: rgba(#409eff, 0.5);
  &:hover {
    background-color: rgba(#409eff, 0.5);
    border-color: rgba(#409eff, 0.5);
  }
}
.button-disabled.button-success {
  background-color: rgba(#67c23a, 0.5);
  border-color: rgba(#67c23a, 0.5);
  &:hover {
    background-color: rgba(#67c23a, 0.5);
    border-color: rgba(#67c23a, 0.5);
  }
}
.button-disabled.button-warning {
  background-color: rgba(#e6a23c, 0.5);
  border-color: rgba(#e6a23c, 0.5);
  &:hover {
    background-color: rgba(#e6a23c, 0.5);
    border-color: rgba(#e6a23c, 0.5);
  }
}
.button-disabled.button-danger {
  background-color: rgba(#f56c6c, 0.5);
  border-color: rgba(#f56c6c, 0.5);
  &:hover {
    background-color: rgba(#f56c6c, 0.5);
    border-color: rgba(#f56c6c, 0.5);
  }
}
</style>
