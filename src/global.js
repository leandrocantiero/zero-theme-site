import Vue from 'vue'

export const urlSistema = ''

export function showError(e) {
    if (e && e.response && e.response.data) {
        Vue.toasted.global.defaultError({ msg: e.response.data })

    } else if (typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg: e })
    } else if (e.length > 0) {
        e.forEach((e) = this.Vue.toasted.global.defaultError(e.message))
    } else {
        Vue.toasted.global.defaultError({})
    }
}

export function showSuccess(e) {
    if (e && e.response && e.response.data) {
        Vue.toasted.global.defaultSuccess({ msg: e.response.data })

    } else if (typeof e === 'string') {
        Vue.toasted.global.defaultSuccess({ msg: e })
    } else if (e.length > 0) {
        e.forEach((e) = this.Vue.toasted.global.defaultSuccess(e.message))
    } else {
        Vue.toasted.global.defaultSuccess({})
    }
}