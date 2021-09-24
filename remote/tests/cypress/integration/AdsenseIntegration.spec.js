describe('BigAdsense', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('広告が表示されること', () => {
    cy.get('[name="big-adsense"]')
      .should('have.text', '大きなユーザ最適化された広告')
  })
})