import YuButton from './button'

//按需引入
export { YuButton }

const components = [YuButton]

const YuUI = {
  install(App: any) {
    components.forEach((item) => {
      App.component(item.name, item)
    })
  },
}

export default YuUI
