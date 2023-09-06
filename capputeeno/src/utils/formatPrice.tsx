export function convertPrice(valueCents : number) {
    const valueFormatted = valueCents / 100;
    return valueFormatted.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
