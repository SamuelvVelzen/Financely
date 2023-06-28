import { Input } from "./input";

type NumberInputProps = {
  labelText: string;
  step?: number;
  min?: number;
  max?: number;
};

export function NumberInput({ labelText, step, min, max }: NumberInputProps) {
  return <Input labelText={labelText} type={"number"} />;
}
