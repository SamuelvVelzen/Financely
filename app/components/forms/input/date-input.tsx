import { Input } from "./input";

type DateInputProps = {
  name: string;
  labelText: string;
  className?: string;
};

export function DateInput({ name, labelText, className = "" }: DateInputProps) {
  return (
    <Input
      name={name}
      labelText={labelText}
      type={"date"}
      inputClassName={"!pb-1 !pt-[0.825rem]"}
      bodyClass={className}
    />
  );
}
