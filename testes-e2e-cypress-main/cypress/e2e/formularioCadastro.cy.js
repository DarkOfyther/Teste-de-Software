describe('Formulário cadastro', () => {
    beforeEach(()=> {
    cy.visit('http://localhost:3000')
    })
    it('Usuário deve conseguir se cadastrar com sucesso', () => {
    cy.getByData('botao-cadastro').click() /* testaremos agora o botão 'cadastrar' */
    cy.getByData('nome-input').type('Jose da Silva')
    cy.getByData('email-input').type('ze12@email.com')
    cy.getByData('senha-input').type('456789')
    cy.getByData('botao-enviar').click()
    cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')
    })

    it('Gerar caso de teste de cadastro!', () => {
        cy.getByData('botao-cadastro').click();
        cy.getByData('email-input').type('neilton@alura');
        cy.getByData('senha-input').type('123456');
        cy.getByData('botao-enviar').click();
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido');
    
      })
})

    
