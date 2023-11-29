/*
 * @Author: zheng shan idealshan@gmail.com
 * @Date: 2023-11-27 20:29:04
 * @LastEditors: zheng shan idealshan@gmail.com
 * @LastEditTime: 2023-11-27 20:29:58
 * @FilePath: \element-plus-2.4.3\vitest.setup.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { config } from '@vue/test-utils'
import { vi } from 'vitest'
import ResizeObserver from 'resize-observer-polyfill'

vi.stubGlobal('ResizeObserver', ResizeObserver)

config.global.stubs = {}
