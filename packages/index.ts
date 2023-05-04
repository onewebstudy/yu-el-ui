import YuButton from './button'
import YuInput from './input'

//按需引入
export { YuButton }

const components = [YuButton, YuInput]

const YuUI = {
  install(App: any) {
    components.forEach((item) => {
      App.component(item.name, item)
    })
  },
}

export default YuUI
