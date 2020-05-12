import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src';

chai.use(chaiHttp);
chai.should();

describe('Driver endpoint', () => {
  const baseUrl = '/api/v1/drivers';
  describe('when getting all drivers', () => {
    it('should return an array of all drivers', (done) => {
      chai
        .request(app)
        .get(`${baseUrl}/all`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('when getting a specific driver by ID', () => {
    it('should should return the driver if they exist', (done) => {
      chai
        .request(app)
        .get(`${baseUrl}/1/details`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it('should return a not found error if the driver does not exist', (done) => {
      chai
        .request(app)
        .get(`${baseUrl}/100/details`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });

    it('should return a bad request error if the parameter passed is not an integer', (done) => {
      chai
        .request(app)
        .get(`${baseUrl}/10we/details`)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

    describe('when getting available drivers within 3km for a specific location', () => {
      it('should get drivers within 3KM by default', (done) => {
        chai
          .request(app)
          .get(`${baseUrl}/range?latitude=1.9320231&&longtude=30.0975393`)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });

      it('should get drivers within specified KMs when a distance is supplied', (done) => {
        chai
          .request(app)
          .get(`${baseUrl}/range?distance=1&&latitude=1.9320231&&longtude=30.0975393`)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });

      it('should thrown a bad request error if any query param is invalid', (done) => {
        chai
          .request(app)
          .get(`${baseUrl}/range?distance=1ds&&latitude=1.9320231&&longtude=30.0975393`)
          .end((err, res) => {
            res.should.have.status(400);
            done();
          });
      });
    });

    describe('when getting available drivers', () => {
      it('should return all the available drivers', (done) => {
        chai
          .request(app)
          .get(`${baseUrl}/status?value=free`)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });

      it('should return an erro if status used if unsupported', (done) => {
        chai
          .request(app)
          .get(`${baseUrl}/status?value=freeeee`)
          .end((err, res) => {
            res.should.have.status(400);
            done();
          });
      });
    });
});
