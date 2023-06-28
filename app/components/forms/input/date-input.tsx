import { Input } from "./input";

type DateInputProps = {
  labelText: string;
};

export function DateInput({ labelText }: DateInputProps) {
  return (
    <Input
      labelText={labelText}
      type={"date"}
      className={"pb-1 pt-[0.825rem]"}
    />
  );
}
