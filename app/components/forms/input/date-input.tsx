import { Input } from "./input";

type DateInputProps = {
  labelText: string;
  className?: string;
};

export function DateInput({ labelText, className }: DateInputProps) {
  return (
    <Input
      labelText={labelText}
      type={"date"}
      inputClassName={"!pb-1 !pt-[0.825rem]"}
      bodyClass={className}
    />
  );
}
