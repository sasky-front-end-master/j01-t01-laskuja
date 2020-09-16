// Luodaan console.login "matkija" global-kontekstiin.
global.console = {
  log: jest.fn(),
}

describe('Tarkistetaan console.login sisältö', () => {
  it('pitäisi sisältää laskut', () => {
    
    const tehtava = require('../tehtava.js');
    tehtava();

    expect(global.console.log).toHaveBeenCalledWith('6+2=8');
    expect(global.console.log).toHaveBeenCalledWith('6-2=4');
    expect(global.console.log).toHaveBeenCalledWith('6*2=12');
    expect(global.console.log).toHaveBeenCalledWith('6/2=3');
  });
});

