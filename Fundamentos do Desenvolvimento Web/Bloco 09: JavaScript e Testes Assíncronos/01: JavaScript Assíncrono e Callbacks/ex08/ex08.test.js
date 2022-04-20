// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./ex08");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    expect(getPokemonDetails((pokemon) => pokemon.name === 'joao', (error, message) => {
      expect(error).toEqual(new Error('Não temos esse pokémon para você :('));
      done();
    }));
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
    expect(getPokemonDetails((pokemon) => pokemon.name === 'Charmander', (error, message) => {
      expect(message).toBe(`Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember`);
      done();
    }));
  });
});
