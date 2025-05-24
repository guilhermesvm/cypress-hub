describe('API AdoPet', () => {
    it('GET messages', () => {
        cy.request({
            method: 'GET',
            url: "https://adopet-api-i8qu.onrender.com/mensagem/09fc8914-d9d9-4ee6-a460-4a4221559cc6",
            headers: { 
                Authorization: `Bearer ${Cypress.env('API_TOKEN')}`
            },
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).is.not.empty;
            expect(res.body).to.have.property('msg');
            expect(res.body).to.be.an('object');
            //expect(res.duration).to.be.lte(expectedTime)
        })
    })

})