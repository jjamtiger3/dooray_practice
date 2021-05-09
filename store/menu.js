export const state = () => ({
    urlState: '/project'
})

export const mutations = {
    changeUrlState (state, currentUrl) {
        state.urlState = currentUrl
    }
}

export const getters = {
    currentUrl: state => {
        return state.urlState
    }
}