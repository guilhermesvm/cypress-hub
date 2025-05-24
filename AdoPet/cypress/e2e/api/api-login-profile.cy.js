import { VALID_EMAIL, VALID_PASSWORD } from "../../support/constants/credentials.js"

describe('API AdoPet', () => {
    it('Should log in and check user name in the profile route', () => {
        cy.request('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
            email: VALID_EMAIL,
            password: VALID_PASSWORD 
        }).then((res) => {
            const token = res.body.token;
        
            cy.request({
                method: 'GET',
                url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/09fc8914-d9d9-4ee6-a460-4a4221559cc6',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                expect(res.status).to.eq(200);
                expect(res.body).is.not.empty;
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('mensagem', 'Perfil carregado.');
                expect(res.body).to.have.property('perfil');
                
                const perfil = res.body.perfil;
                expect(perfil).to.have.property('nome', 'Guilherme QA');
            })
        })
    })
})