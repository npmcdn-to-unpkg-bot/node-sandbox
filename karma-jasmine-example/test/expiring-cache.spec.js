import {ExpiringCache} from '../src/expiring-cache';


describe('ExpiringCache', () => {
  describe('Works without expiration', () => {
    beforeEach(function() {
      this.expiringCache = new ExpiringCache();
    });

    it('contains a value immediately after insertion', function() {
      const key = `key-1`,
            value = `value-1`;

      this.expiringCache.set(key, value);

      expect(this.expiringCache.get(key)).toEqual(value);
    });

    it('contains contains multiple values', function() {
      const entries = [
        ['1', 'a'],
        ['2', 'b'],
        ['3', 'c'],
      ];

      for (let [key, value] of entries) {
        this.expiringCache.set(key, value);
      }

      for (let [key, value] of entries) {
        expect(this.expiringCache.get(key)).toEqual(value);
      }
    });
  });

  describe('Expires keys', () => {
    beforeEach(function() {
      this.expiringCache = new ExpiringCache(2000);

      // Establish mock clock
      jasmine.clock().install();
    });

    afterEach(function() {
      // Establish mock clock
      jasmine.clock().uninstall();
    });

    it('contains a value immediately after insertion', function() {
      const key = `key-1`,
            value = `value-1`;

      this.expiringCache.set(key, value);

      // Present after 0ms
      expect(this.expiringCache.get(key)).toEqual(value);

      jasmine.clock().tick(500);

      // Present after 500ms
      expect(this.expiringCache.get(key)).toEqual(value);

      jasmine.clock().tick(2000);

      // Gone after 2500ms
      expect(this.expiringCache.get(key)).toBeUndefined();
    });
  });
});
