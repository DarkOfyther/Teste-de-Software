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
      cy.getByData('container')
      cy.getByData('conteudo')
      cy.getByData('vantagens')
      cy.getByData('titulo-vantagens')
      cy.getByData('vantagens-itens')
      cy.getByData('vantagens-item')
      cy.getByData('beneficios')
      cy.getByData('descrição-beneficios')
      cy.getByData('sem-custos')
      cy.getByData('programa-pontos')
      cy.getByData('acumulo-pontos')
      cy.getByData('seg-dispositivos')
      cy.getByData('descrição-seg')
      cy.getByName('saque').find("h2").should("contain", "Bem-vindo ao nosso site")
    })
  })

  

  
