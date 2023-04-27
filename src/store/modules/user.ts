const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: '',
      name: '',
      avatar: '',
      nickName: '',
      userId: null,
      dept: {},
      permissions: [],
      permBtn: [],
      permCode: [],
    }
  },
  getters: {},
  actions: {},
})

export default useUserStore
