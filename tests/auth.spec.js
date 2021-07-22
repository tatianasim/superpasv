import{expect} from "chai";
import supertest from 'supertest';

describe('auth', function (){
   const request = supertest('http://paysis.herokuapp.com')

   it('successful log in', function (done){
       request
           .post('/auth')
           .send({login: 'adminius', password: 'supers3cret'})
           .expect(200)
           .end(function (err, res){
               console.log(res.body);
               expect(res.statusCode).to.eq(200);
               expect(res.body.token).not.to.be.undefined;
               done();
           });
   });

   it('log in with credentials should return error', function (){
       request
           .post('/auth')
           .send({login: 'wrong', password: 'wrong'})
           .end(function (err, res){
               expect(res.statusCode).to.eq(404);
               expect(res.body.message).to.eq('Wrong login or password.');
           });

   })
});
