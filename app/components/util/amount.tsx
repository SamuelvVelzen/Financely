type AmountProps = {
  amount: string;
};

export function Amount({ amount }: AmountProps) {
  const formatter = new Intl.NumberFormat(undefined, {});

  return <p>{formatter.format(parseFloat(amount))}</p>;
}
