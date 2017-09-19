import { IS_SHOW_LOADING } from './mutation-types.js'
export default{
  // loading动画的状态记录
  [IS_SHOW_LOADING] (state, payload) {
    state.isLoading = payload.isLoading
  }
}
