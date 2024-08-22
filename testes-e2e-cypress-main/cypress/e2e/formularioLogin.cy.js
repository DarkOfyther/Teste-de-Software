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
  
    });
  });
  