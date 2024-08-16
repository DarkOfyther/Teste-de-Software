describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h1 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })
})

  describe('Página Principal', () => {
    beforeEach( () => {
      cy.visit('http://localhost:3000/')
    });
    it('Deve renderizar h2 com o texto correto!', () => {
      cy.visit('http://localhost:3000')
      cy.getByData('subtitulo').contains('Bem-vindo ao nosso site')
    })
  })
   //ATIVIDADE 06

  //  it('Deve verificar se o título contém "To-do List"', () => {
  //   cy.verifyText('.todo-list li', 'To-do List');
  // })
