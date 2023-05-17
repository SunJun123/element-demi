/*
 * @Description: 
 * @Author: sunjun
 * @Date: 2021-02-23 00:44:12
 * @LastEditors: sunjun
 * @LastEditTime: 2023-05-17 15:30:22
 */
const { switchVersion, loadModule } = require('./utils')

const Vue = loadModule('vue')
if (!Vue || typeof Vue.version !== 'string') {
  console.warn('[element-demi] Vue is not found. Please run "npm install vue" to install.')
}
else if (Vue.version.startsWith('2.')) {
  switchVersion(2)
}
else if (Vue.version.startsWith('3.')) {
  switchVersion(3)
}
else {
  console.warn(`[element-demi] Vue version v${Vue.version} is not suppported.`)
}
