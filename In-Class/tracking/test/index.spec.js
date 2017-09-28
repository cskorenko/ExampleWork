const chai = require('chai');
const chaiHTTP = require('chai-http');

chai.use(chaiHTTP);

const expect = chai.expect;

describe('Routes', () => {
  const server = require('../index');

  describe('GET/tracking', () => {

    it('should return status 200 when successful', (done) => {
      chai.request(server)
      .get('/tracking?username=christine\&currentDate=2017-09-27')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
    });

    it('undefined username and/or date to have status 500', (done) => {
      chai.request(server)
      .get('/tracking?username=\&currentDate=')
      .end((err, res) => {
        expect(err).to.have.status(500);
        expect(res).to.have.status(500);
        done();
      });
    });

    it('should have correct error message', (done) => {
      chai.request(server)
      .get('/tracking?username=\&currentDate=')
      .end((err, res) => {
        expect(err).to.have.status(500);
        expect(res).to.have.status(500);
        expect(res.text).to.equal('Internal Server Error: Username and/or current date is undefined')
        done();
      })
    });

    it('too many login attempts to have status 403', (done) => {
      const mockApp = chai.request(server);

      mockApp.get('/tracking?username=christine\&currentDate=2017-09-27')
      .then(() => {
        return mockApp.get('/tracking?username=christine\&currentDate=2017-09-27');
      })
      .then(() => {
        return mockApp.get('/tracking?username=christine\&currentDate=2017-09-27');
      })
      .then(() => {
        return mockApp.get('/tracking?username=christine\&currentDate=2017-09-27');
      })
      .then(() => {
        return mockApp.get('/tracking?username=christine\&currentDate=2017-09-27');
      })
      .catch((err) => {
        expect(err).to.have.status(403);
        done();
      });
    });
  });
});
