describe('player functionality', () => {
  it('should play a song after clicking on play button', () => {
      cy.visit('http://192.168.2.14:8080');
      cy.get('.next-song-button').eq(2).click()
  });
});
