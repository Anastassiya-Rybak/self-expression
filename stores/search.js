export const useSearchStore = defineStore ("search", {
    state: () => ({
        inpData: ''
    }),

    actions: {
        editItem(newData){
            this.inpData = newData;
        },

        saveState () {
            localStorage.setItem('searchState', JSON.stringify(this.$state))
        },

        restoreState() {
            const savedState = localStorage.getItem('searchState')
            if (savedState) {
              this.$patch(JSON.parse(savedState))
            }
        },
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSearchStore, import.meta.hot));
}