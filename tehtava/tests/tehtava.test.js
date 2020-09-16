// Luodaan console.login "matkija" global-kontekstiin.
global.console = {
  log: jest.fn(),
}

describe('Tarkistetaan console.login sisältö', () => {
  it('pitäisi sisältää Nyt koodataan -teksti', () => {
    
    const tehtava = require('../tehtava.js');

    tehtava();

    expect(global.console.log).toHaveBeenCalledWith(
      'Nyt koodataan!'
    )
  });
});

