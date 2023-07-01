type AmountProps = {
  amount: string;
};

export function Amount({ amount }: AmountProps) {
  const formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  });

  return <p>{formatter.format(parseFloat(amount))}</p>;
}
