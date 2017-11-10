var chai = require('chai');
var should = require('chai').should();
var chaiHttp = require('chai-http');
var io = require('socket.io-client');
var server = require('../bin/www');

chai.use(chaiHttp);
var socketUrl = 'http://localhost:3000';
var opts = {forceNew: true};
 
describe("/GET story", function() {

    it('should receive socket events', function(done) {
        chai.request(server)
            .get('/api/story')
            .then(function(res) {
                client = io.connect(socketUrl);
                client.on('line', function(scene) {
                    scene.should.be.an('object');
                    done();
                });
                
            });
    })
});

describe("/GET start", function() {
    
        it('should render start page', function(done) {
            chai.request(server)
                .get('/')
                .end(function(err, res) {
                    res.should.have.status(200);

                    done();
                });
        });
    });
