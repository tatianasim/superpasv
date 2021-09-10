import supertest from 'supertest';

class AuthHelper {
    constructor() {
        this.responce = null;
    }

   async post(login, password) {
       await supertest(process.env.BASE_URL)
           .post('/auth')
           .send({ login: login, password: password})
           .then((res) => {this.responce = res});
       return this.responce;
    }
}

export default AuthHelper;