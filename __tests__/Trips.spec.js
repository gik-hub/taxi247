import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src';

chai.use(chaiHttp);
chai.should();

describe('Trips endpoint', () => {
  const baseUrl = '/api/v1/trips';
  describe('when getting all active trips', () => {
    it('should return an array of all active trips', (done) => {
      chai
        .request(app)
        .get(`${baseUrl}/active`)
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body.data).to.be.an('array');
          done();
        });
    });
  });

  describe('when creating a trip', () => {
    it('should create a trip with an open trip order with an available driver', (done) => {
      chai
        .request(app)
        .post(`${baseUrl}/create`)
        .send({
          trip_orders_id: 2,
          drivers_id: 1,
        })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });

    it('should not create a trip with with a non-free driver', (done) => {
      chai
        .request(app)
        .post(`${baseUrl}/create`)
        .send({
          trip_orders_id: 8,
          drivers_id: 10,
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });

    it('should not create a trip with with a closed order', (done) => {
      chai
        .request(app)
        .post(`${baseUrl}/create`)
        .send({
          trip_orders_id: 8,
          drivers_id: 1,
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe('when completing a trip', () => {
    it('should complete a valid trip', (done) => {
      chai
        .request(app)
        .post(`${baseUrl}/complete`)
        .send({
          trips_id: 1,
        })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });

    it('should throw an error when trying to complete a non-existing trip', (done) => {
      chai
        .request(app)
        .post(`${baseUrl}/complete`)
        .send({
          trips_id: 8,
        })
        .end((err, res) => {
          res.should.have.status(400);
          expect(res.body).to.have.a.property('error');
          done();
        });
    });
  });
});
