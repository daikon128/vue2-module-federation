describe('TodoList', () => {
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

  it('空文字で検索した際に全てのTodoListが表示されること', () => {
    cy.get('[name="todo-search-button"]')
      .click()

    const todoList = cy.get('[name="todo-list"]')
    todoList.children().should('have.length', 3)
    todoList
      .children()
      .first()
      .should('have.text', '買い物をする : カレーの具材')
  })
})