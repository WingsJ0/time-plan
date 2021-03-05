/**
 * @name 监听元素可见性
 */

/* private */

import { DirectiveBinding } from 'vue'

let observers = new Map<HTMLElement, IntersectionObserver>()

/* public */

/**
 * @name 挂载
 * @param el 元素
 */
function mounted(el: HTMLElement, binding: DirectiveBinding<(status: boolean) => void>): void {
  let observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    let intersecting = entries.some((el: IntersectionObserverEntry) => el.intersectionRatio > 0)

    if (typeof binding.value === 'function') {
      binding.value(intersecting)
    }
  })
  observer.observe(el)

  observers.set(el, observer)
}
/**
 * @name 卸载
 * @param el 元素
 */
function unmounted(el: HTMLElement) {
  let observer = observers.get(el)
  if (observer) {
    observer.unobserve(el)
    observer.disconnect()

    observers.delete(el)
  }
}

/* construct */

let directive = {
  name: 'observe',
  mounted,
  unmounted
}

export default directive
