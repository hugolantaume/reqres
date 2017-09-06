var data = require('../data.json');
var Promise = require('bluebird');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('Check all `/api` endpoints', function() {

  it('countries.json (/api/countries/...)', function(done) {
    let startIndex = 0;
    let endIndex = 10;
    let pages = [];
    for (var i = 1; i <= 25; i += 1)
      pages.push(i);

    Promise.mapSeries(pages, (page) => {
      return chai.request(server)
        .get('/api/countries?page=' + page.toString())
        .then((res) => {
          return res.body.data;
        })
    }).then((results) => {
      for (let result of results) {
        result.should.be.eql(data['countries'].slice(startIndex, endIndex));
        startIndex += 10;
        endIndex += 10;
      }
      done();
    }).catch((err) => {
      console.log(err);
      done(err);
    });
  });

  it('inventory.json (/api/inventory/...)', function(done) {
    let startIndex = 0;
    let endIndex = 500;
    let pages = [];
    for (var i = 1; i <= 6; i += 1)
      pages.push(i);

    Promise.mapSeries(pages, (page) => {
      return chai.request(server)
        .get('/api/inventory?page=' + page.toString())
        .then((res) => {
          return res.body.data;
        })
    }).then((results) => {
      for (let result of results) {
        result.should.be.eql(data['inventory'].slice(startIndex, endIndex));
        startIndex += 500;
        endIndex += 500;
      }
      done();
    }).catch((err) => {
      console.log(err);
      done(err);
    });
  });

  it('movies.json (/api/movies/...)', function(done) {
    let startIndex = 0;
    let endIndex = 10;
    let pages = [];
    for (var i = 1; i <= 277; i += 1)
      pages.push(i);

    Promise.mapSeries(pages, (page) => {
      return chai.request(server)
        .get('/api/movies?page=' + page.toString())
        .then((res) => {
          return res.body.data;
        })
    }).then((results) => {
      for (let result of results) {
        result.should.be.eql(data['movies'].slice(startIndex, endIndex));
        startIndex += 10;
        endIndex += 10;
      }
      done();
    }).catch((err) => {
      console.log(err);
      done(err);
    });
  });

  it('stocks.json (/api/stocks/...)', function(done) {
    let startIndex = 0;
    let endIndex = 500;
    let pages = [];
    for (var i = 1; i <= 5; i += 1)
      pages.push(i);

    Promise.mapSeries(pages, (page) => {
      return chai.request(server)
        .get('/api/stocks?page=' + page.toString())
        .then((res) => {
          return res.body.data;
        })
    }).then((results) => {
      for (let result of results) {
        result.should.be.eql(data['stocks'].slice(startIndex, endIndex));
        startIndex += 500;
        endIndex += 500;
      }
      done();
    }).catch((err) => {
      console.log(err);
      done(err);
    });
  });

});
