describe('local integration', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('絞り込み検索した際に特定のTodoListが表示されること', () => {
    cy.get('[name="todo-search-text-box"]')
      .type('本')
    cy.get('[name="todo-search-button"]')
      .click()

    const todoList = cy.get('[name="todo-list"]')
    todoList.children().should('have.length', 1)
    todoList
      .children()
      .first()
      .should('have.text', '本を読む : 吾輩は猫である')
  })

  it('ユーザ１がログインした状態の場合、広告に車が表示されること', ()=> {
    cy.get('[name="big-adsense"]')
      .get('[name="user-optimal-adsense"]')
      .should('have.text', '車')
  })
})