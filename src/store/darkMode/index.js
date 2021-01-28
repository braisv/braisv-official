const state = {
    darkMode: false,
    isDark: true
  }
  
  const getters = {
    isDark: s => s.isDark
  }
  
  const mutations = {
    toggleDarkMode: state => {
      state.isDark = !state.isDark
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    mutations
  }
  