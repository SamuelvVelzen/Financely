type DateProps = {
  date: string;
};

export function DisplayDate({ date }: DateProps) {
  let options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const formatter = new Intl.DateTimeFormat(undefined, options);

  return (
    <p className="text-sm text-darkgrey">
      {formatter.format(Date.parse(date))}
    </p>
  );
}
