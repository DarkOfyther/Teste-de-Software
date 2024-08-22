describe('Formulário de login', () => { // contexto do nosso teste

    beforeEach(() => {
      // Visita a página da aplicação antes de cada teste
      cy.visit('http://localhost:3000');
    });
  
    it('Não deve permitir um e-mail inválido!', () => {
      cy.getByData('botao-login').click();
      cy.getByData('email-input').type('neilton@alura');
      cy.getByData('senha-input').type('123456');
      cy.getByData('botao-enviar').click();
      cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido');
  
    })
    it('Não deve permitir o campo e-mail em branco', () => {
        cy.getByData('botao-login').click();
        cy.getByData('senha-input').type('123456');
        cy.getByData('botao-enviar').click();
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório');
      });

      it('Não deve permitir o campo senha em branco', () => {
        cy.getByData('botao-login').click();
        cy.getByData('email-input').type('neilton@alura');
        cy.getByData('botao-enviar').click();
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo de senha é obrigatório');
      });
    });
  
  