import YuButton from './src/index.vue'

YuButton.install = (App: any) => {
  App.component(YuButton.name, YuButton)
}

export default YuButton
