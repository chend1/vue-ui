import BottonUi from './botton/index'

const uiList = [BottonUi]

const install = (Vue) => {
  // // 判断是否安装，安装过就不用继续执行
  // if (install.installed) return
  // install.installed = true
  uiList.map((ui) => {
    return Vue.component(ui.name, ui)
  })
  // // 检测到 Vue 再执行
  // if (typeof window !== 'undefined' && window.Vue) {
  //   install(window.Vue)
  // }
}

export default {
  install,
  ...uiList
}
