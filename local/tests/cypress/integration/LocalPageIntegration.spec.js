describe('local page integration', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('トップ画面でTodoListが表示されること', ()=> {
    cy.get('[name="todo-list"]')
      .should('exist')
  })

  it('トップ画面でTodo検索が表示されること', ()=> {
    cy.get('[name="todo-search-button"]')
      .should('exist')
  })

  it('トップ画面で広告が表示されること', ()=> {
    cy.get('[name="big-adsense"]')
      .should('exist')
  })

  it('ユーザ１がログインした状態の場合、広告に車が表示されること', ()=> {
    cy.get('[name="big-adsense"]')
      .get('[name="user-optimal-adsense"]')
      .should('have.text', '車')
  })

  it('Todo検索がされる前に空のTodoListが反映されていること', () => {
    cy.get('[name="todo-content"]')
      .should('have.text', '[]')
  })

  it('Todo検索がされた際にTodoListに反映されること', () => {
    cy.get('[name="todo-search-button"]')
      .click()
      .get('[name="todo-content"]')
      .should('have.text', '[{"id":1,"name":"name1","description":"description1"}]')
  })
})