describe('local integration', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('トップ画面でヘッダーが表示されること', ()=> {
    cy.get('[name="custom-header"]')
      .should('exist')
  })

  it('トップ画面でTodoListが表示されること', ()=> {
    cy.get('[name="todo-list"]')
      .should('exist')
  })

  it('トップ画面で広告が表示されること', ()=> {
    cy.get('[name="big-adsense"]')
      .should('exist')
  })

  it('設定リンクを押した際に設定に遷移されること', () => {
    cy.get('[name="header-link-settings"]')
      .click()
      .get('[name="settings"]')
      .should('exist')
  })
})