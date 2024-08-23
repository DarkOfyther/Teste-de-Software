describe('Testando múltiplas páginas', () => {
    beforeEach('Deve conseguir acessar a página de cartões', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('neilton@alura.com')
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()
    })


    it('Deve conseguir acessar a página de cartões', () => {
    cy.getByData('app-home').find('a').eq(1).click()
    cy.getByData('titulo-cartoes').should('exist').and('have.text','Meus cartões')
    })

    it('Deve conseguir acessar o investimento', () => {
        cy.getByData('app-home').find('a').eq(3).click()
        cy.getByData('titulo-investimento').should('exist').and('have.text','Investimentos')
    })
    it('Deve conseguir acessar o serviços', () => {
        cy.getByData('app-home').find('a').eq(2).click()
        cy.getByData('titulo-servico').should('exist').and('have.descendants','h5','img')
    })
    it('Deve conseguir acessar o inicio', () => {
        cy.getByData('app-home').find('a').eq(0).click()
        cy.getByData('titulo-inicio').should('exist').and('have.text', 'Nova Transação')
    })

    })