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

    it(`listener doesn't receivesnotification for channel event when not subscribed`, function() {
      // Arrange
      spyOn(this.listener, 'callback');

      // Act
      this.pubSub.publish(this.channelName);

      // Assert
      expect(this.listener.callback).not.toHaveBeenCalled();
    });
  });
});
