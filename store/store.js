//store实例对象
import { action, observable } from 'mobx-miniprogram'

export const store = observable({
  activeTabBarIndex: 0,
  numA: 1,
  numB: 1,

  get sum(){
    return this.numA + this.numB
  },

  updateActiveTabBarIndex: action(function(index) {
    this.activeTabBarIndex = index
  })
})