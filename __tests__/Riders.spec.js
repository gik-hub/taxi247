import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src';

chai.use(chaiHttp);
chai.should();

describe('Riders endpoint', () => {
  const baseUrl = '/api/v1/riders';
  describe('when getting all riders', () => {
    it('should return an array of all riders', (done) => {
      chai
        .request(app)
        .get(`${baseUrl}/all`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('when getting a specific rider by ID', () => {
    it('should return the rider when id is valid', (done) => {
      chai
        .request(app)
        .get(`${baseUrl}/1/details`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it("should return a not found error id the resource does't exist", (done) => {
      chai
        .request(app)
        .get(`${baseUrl}/100/details`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });

    it('should return a bad request error if the param type is invalid', (done) => {
      chai
        .request(app)
        .get(`${baseUrl}/10we/details`)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe('When getting 3 closest drivers for a specific riders order', () => {
    it('should return the closest drivers in a 3KM radius by default', (done) => {
      chai
        .request(app)
        .get(`${baseUrl}/orders/3/closeDrivers`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it('should return bad request error if the order does not exist or is resolved', (done) => {
        chai
          .request(app)
          .get(`${baseUrl}/orders/12/closeDrivers`)
          .end((err, res) => {
            res.should.have.status(400);
            done();
          });
      });
  });
});
