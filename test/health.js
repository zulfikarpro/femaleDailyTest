// Import the dependencies for testing
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

// Configure chai
chai.use(chaiHttp);
chai.should();
describe('testing', () => {
  describe('GET health', () => {
    // Test to get all students record
    it('health testing', (done) => {
      chai.request(app)
        .get('/api/health')
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body.message).equal('success');
          done();
        });
    });
  });

  describe('GET twitter', () => {
    // Test to get all students record
    it('twitter testing', (done) => {
      chai.request(app)
        .get('/api/twitter')
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body.message).equal('success');
          done();
        });
    });
  });

  describe('GET sales', () => {
    it('sales testing', (done) => {
      chai.request(app)
        .get('/api/sales')
        .end((err, res) => {
          if (err) throw err;
          res.should.have.status(200);
          expect('Content-Type', 'text/html');
          done();
        });
    });
  });

  describe('GET sales detail', () => {
    // Test to get all students record
    it('sales testing', (done) => {
      chai.request(app)
        .get('/api/salesdetail')
        .end((err, res) => {
          res.should.have.status(200);
          expect('Content-Type', 'text/html');
          done();
        });
    });
  });
});
