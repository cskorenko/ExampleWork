let emitter = {
  events: {},
  on,
  emit
};

function on (eventType, listenerFunc) {
  if (!this.events[eventType]) {
    this.events[eventType] = [listenerFunc]
  } else {
    this.events[eventType].push(listenerFunc);
  }
}

function emit (eventType) {
  if (this.events[eventType]) {
    for (let i = 0; i < this.events[eventType].length; i++) {
      this.events[eventType][i]();
    }
  }
}

module.exports = emitter;
