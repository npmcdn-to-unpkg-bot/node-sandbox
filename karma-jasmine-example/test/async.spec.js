
describe('Jasmine Async Tests', () => {
  it('should wait for the timeout to complete', (done) => {
    let value = 0;

    setTimeout(() => {
      value++;

      expect(value).toEqual(1);

      done();
    }, 500);
  });

  it('should wait for a Promise', (done) => {
    const mockServer = {
      get(id) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(id);
          }, 500);
        });
      }
    };

    mockServer.get(42)
      .then((value) => {
        expect(value).toEqual(42);

        done();
      })
      .catch((error) => {
        done.fail(error);
      });
  });

  it('should wait for a Promise', (done) => {
    const mockServer = jasmine.createSpyObj('mockServer', ['get']);
    mockServer.get.and.returnValue(Promise.resolve(42));

    mockServer.get(42)
      .then((value) => {
        expect(value).toEqual(42);

        done();
      })
      .catch((error) => {
        done.fail(error);
      });
  });
});
