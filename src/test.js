const requset = require('supertest');
const app = require('./app');

describe ('Testing Static GET', () =>{
    test('/route' , (done) => {
        requset(app)
        .get('/')
        .expect(200)
        .expect('content-type',/html/)
        .end((err) =>{
            if (err) return done(err);
            return done();
        })
    });

    test('not found' , (done) => {
        requset(app)
        .get('/notfound')
        .expect(404)
        .expect('content-type',/html/)
        .end((err) =>{
            if (err) return done(err);
            return done();
        })
    });

    test('search' , (done) => {
        requset(app)
        .post('/search')
        .expect(200)
        .expect('content-type',/json/)
        .end((err ,res) =>{
            if (err) return done(err);
            return done();
        })
    });
})