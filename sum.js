function sum(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number')
        return "Insira apenas número para a soma";

    if(a <= 0  && b <=0)
        return "Não é possível somar números negativos"
    
    else return a + b;
  }
  module.exports = sum;