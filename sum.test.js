const sum = require('./sum');

test('adiciona 1 + 2 e retorna 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adiciona 1 + "2" e retorna Insira apenas número para a soma', () => {
    expect(sum(1, "2")).toBe("Insira apenas número para a soma");
});

test('adiciona 1 + "a" e retorna Insira apenas número para a soma', () => {
    expect(sum(1, "a")).toBe("Insira apenas número para a soma");
});

test('adiciona "1" + "2" e retorna Insira apenas número para a soma', () => {
    expect(sum("1", "2")).toBe("Insira apenas número para a soma");
});

test('adiciona -1 + 4 e retorna 3', () => {
    expect(sum(-1, 4)).toBe(3);
});

test('adiciona -1 + -2 e retorna Não é possível somar números negativos', () => {
    expect(sum(-1, -2)).toBe("Não é possível somar números negativos");
});

test('adiciona 1.5 + 1.5 e retorna 3', () => {
    expect(sum(1.5, 1.5)).toBe(3);
  });