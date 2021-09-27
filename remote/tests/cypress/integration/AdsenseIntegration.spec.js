describe('BigAdsense', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('ユーザ1の場合に車の広告が表示されること', ()=> {
    cy.get('[name="change-user-1"]')
      .click()
      .get('[name="user-optimal-adsense"]')
      .should('have.text', '車')
  })

  it('ユーザ2の場合にゲームの広告が表示されること', ()=> {
    cy.get('[name="change-user-2"]')
      .click()
      .get('[name="user-optimal-adsense"]')
      .should('have.text', 'ゲーム')
  })

  it('ユーザ3の場合に食品の広告が表示されること', ()=> {
    cy.get('[name="change-user-3"]')
      .click()
      .get('[name="user-optimal-adsense"]')
      .should('have.text', '食品')
  })
})