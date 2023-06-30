import { Input } from "./input";

type NumberInputProps = {
  name: string;
  labelText: string;
  step?: number;
  min?: number;
  max?: number;
  className?: string;
};

export function NumberInput({
  name,
  labelText,
  step,
  min,
  max,
  className,
}: NumberInputProps) {
  return (
    <Input
      name={name}
      labelText={labelText}
      type={"number"}
      step={step}
      min={min}
      max={max}
      bodyClass={className}
    />
  );
}
