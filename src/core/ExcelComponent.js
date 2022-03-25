import {DomListener} from "@core/DomListener";

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.subscribe = options.subscribe || []
    this.store = options.store
    this.unsubscribers = []

    this.prepare()
  }

  // Set up a component before init()
  prepare() {

  }

  // Return a component's template
  toHTML() {
    return ''
  }

  // Notify listeners about event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // Subscribe on event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  $dispatch(action) {
    this.store.dispatch(action)
  }

  // Only changes of fields that we subscribed
  storeChanged() {
  }

  isWatching(key) {
    return this.subscribe.includes(key)
  }

  // Initialize a component
  // Add DOM listeners
  init() {
    this.initDOMListeners()
  }

  // Remove a component
  // Clear DOM listeners
  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach(unsub => unsub())
  }
}
