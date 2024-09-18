const { imposto_de_renda } = require('./imposto');

describe('Testes de cálculo do Imposto de Renda', () => {
  
  test('Salário abaixo de R$ 2.259,20 deve resultar em imposto de R$ 0', () => {
    expect(imposto_de_renda(2250)).toBe(0);
  });

  test('Salário R$ 2.500,00 deve resultar em imposto de R$ 18,06', () => {
    expect(imposto_de_renda(2500)).toBeCloseTo(18.06, 2);
  });

  test('Salário R$ 3.000,00 deve resultar em imposto de R$ 81,44', () => {
    expect(imposto_de_renda(3000)).toBeCloseTo(81.44, 2);
  });

  test('Salário R$ 3.500,00 deve resultar em imposto de R$ 193,44', () => {
    expect(imposto_de_renda(3500)).toBeCloseTo(193.44, 2);
  });

  test('Salário R$ 4.000,00 deve resultar em imposto de R$ 380,44', () => {
    expect(imposto_de_renda(4000)).toBeCloseTo(380.44, 2);
  });

  test('Salário R$ 5.000,00 deve resultar em imposto de R$ 634,55', () => {
    expect(imposto_de_renda(5000)).toBeCloseTo(634.55, 2);
  });

  test('Salário exatamente igual a R$ 2.259,20 deve resultar em imposto de R$ 0', () => {
    expect(imposto_de_renda(2259.20)).toBe(0);
  });
  
  test('Salário exatamente igual ao limite superior de R$ 4.664,68 deve calcular o imposto corretamente', () => {
    expect(imposto_de_renda(4664.68)).toBeCloseTo(896.0, 2);
  });
});