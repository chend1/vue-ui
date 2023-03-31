<template>
  <div class="input-wrap" v-if="type !== 'textarea'">
    <input
      :type="type"
      :placeholder="placeholder"
      :readonly="readonly"
      class="input"
      :class="['input-' + size, 'input-' + type, { 'input-round': round }]"
    />
    <div class="icon" v-if="prefixIcon">
      <span :class="prefixIcon"></span>
    </div>
    <div class="icon" v-if="suffixIcon">
      <span :class="suffixIcon"></span>
    </div>
  </div>
  <div class="textarea" v-else>
    <textarea
      :style="{ resize: resize }"
      :placeholder="placeholder"
      :cols="cols"
      :rows="rows"
      :readonly="readonly"
    ></textarea>
  </div>
</template>
<script>
export default {
  name: 'Input-Ui',
  props: {
    size: {
      type: String,
      default: 'default'
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    prefixIcon: {
      type: String,
      default: ''
    },
    suffixIcon: {
      type: String,
      default: ''
    },
    maxlength: {
      type: Number
    },
    minlength: {
      type: Number
    },
    rows: {
      type: Number
    },
    cols: {
      type: Number
    },
    resize: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
.input-wrap {
  position: relative;
}
.input {
  display: inline-block;
  box-sizing: border-box;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #909399;
  outline: none;
  height: 30px;
  line-height: 30px;
  color: #333;
  &:focus {
    outline: none;
    border-color: #409eff;
  }
}
textarea {
  display: inline-block;
  box-sizing: border-box;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #909399;
  outline: none;
  line-height: 22px;
  color: #333;
  &:focus {
    outline: none;
    border-color: #409eff;
  }
}
// 输入框大小
.input-small {
  height: 28px;
  line-height: 26px;
  padding: 0 8px;
}
.input-default {
  height: 32px;
  line-height: 30px;
  padding: 0 10px;
}
.input-large {
  height: 40px;
  line-height: 38px;
  padding: 0 15px;
}
// 输入框圆角
.input-round {
  border-radius: 20px;
  padding: 0 15px;
}
</style>
