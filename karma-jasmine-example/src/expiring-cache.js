
export class ExpiringCache {
  constructor(expiration) {
    this._expiration = expiration;
    this._entries = new Map();
  }

  set(key, value) {
    this._entries.set(key, value);

    setTimeout(() => {
      this._entries.delete(key);
    }, this._expiration);
  }

  get(key) {
    return this._entries.get(key);
  }
}
