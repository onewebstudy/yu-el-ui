import YuInput from './src/index.vue'

YuInput.install = (App: any) => {
  App.component(YuInput.name, YuInput)
}
export default YuInput
