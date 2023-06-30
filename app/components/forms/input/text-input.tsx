import { Input } from "./input";

type TextInputProps = {
  name: string;
  labelText: string;
  className?: string;
};

export function TextInput({ name, labelText, className }: TextInputProps) {
  return (
    <Input
      name={name}
      labelText={labelText}
      type={"text"}
      bodyClass={className}
    />
  );
}
