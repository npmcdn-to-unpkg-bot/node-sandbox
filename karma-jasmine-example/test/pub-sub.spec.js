import {PubSub} from '../src/pub-sub';

describe('PubSub', () => {
  describe('publish-subscribe channel', () => {
    beforeEach(function() {
      this.pubSub = new PubSub();
      this.channelName = 'test-channel';
      this.listener = {
        callback(value) {
          return value;
        }
      };
    });

    it('listener receives notification for subscribed channel event', function() {
      // Arrange
      spyOn(this.listener, 'callback');
      this.pubSub.register(this.channelName, this.listener.callback);

      // Act
      this.pubSub.publish(this.channelName);

      // Assert
      expect(this.listener.callback).toHaveBeenCalled();
    });

    it('listener receives multiple notifications for subscribed channel event', function() {
      // Arrange
      spyOn(this.listener, 'callback');
      this.pubSub.register(this.channelName, this.listener.callback);

      // Act
      this.pubSub.publish(this.channelName, 'first');
      this.pubSub.publish(this.channelName, 'second');

      // Assert

      // Verify any calls were made
      expect(this.listener.callback.calls.any()).toEqual(true);

      // Verify exactly two calls were made
      expect(this.listener.callback.calls.count()).toEqual(2);

      // Verify first call payload
      var firstCall = this.listener.callback.calls.first();
      expect(firstCall.args[0]).toEqual('first');

      // Verify last call payload
      var lastCall = this.listener.callback.calls.mostRecent();
      expect(lastCall.args[0]).toEqual('second');
    });

    it(`listener doesn't receive notification for channel event when not subscribed`, function() {
      // Arrange
      spyOn(this.listener, 'callback');

      // Act
      this.pubSub.publish(this.channelName);

      // Assert
      expect(this.listener.callback).not.toHaveBeenCalled();
    });
  });
});
