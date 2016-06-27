
export class PubSub {
  constructor() {
    this._channels = new Map();
  }

  register(channelName, listener) {
    if (!this._channels.has(channelName)) {
      this._channels.set(channelName, []);
    }

    this._channels.get(channelName).push(listener);

    return listener;
  }

  publish(channelName, payload) {
    if (!this._channels.has(channelName)) {
      return;
    }

    const listeners = this._channels.get(channelName);
    listeners.forEach(listenerCallback => {
      listenerCallback(payload);
    });
  }
}
