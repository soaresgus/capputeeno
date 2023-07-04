export function formatCentsToMoney(cents: number): string {
  const money = cents / 100;

  const moneyFormatted = money.toFixed(2).replace('.', ',');

  return moneyFormatted;
}
