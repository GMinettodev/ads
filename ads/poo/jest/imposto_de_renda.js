function imposto_de_renda(salary) {
  if (salary < 2259.2) {
    return 0;
  } else if (salary <= 2826.65) {
    return (salary - 2259.2) * 0.075;
  } else if (salary <= 3751.05) {
    return (salary - 2826.65) * 0.15 + 169.44;
  } else if (salary <= 4664.68) {
    return (salary - 3751.05) * 0.225 + 381.44;
  } else {
    return (salary - 4664.68) * 0.275 + 896.0;
  }
}

module.exports = { impostodde_renda };
