describe('local integration', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('トップ画面でTodoListが表示されること', ()=> {
    cy.get('[name="todo-list"]')
      .should('exist')
  })

  it('トップ画面でTodo検索が表示されること', ()=> {
    cy.get('[name="todo-search"]')
      .should('exist')
  })

  it('トップ画面で広告が表示されること', ()=> {
    cy.get('[name="big-adsense"]')
      .should('exist')
  })
})