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
      cy.getByName('saque').find("h2").should("contain", "Bem-vindo ao nosso site")
    })
  })

  //  ATIVIDADE 06

  
