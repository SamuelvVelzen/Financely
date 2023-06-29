import { Input } from "./input";

type NumberInputProps = {
  labelText: string;
  step?: number;
  min?: number;
  max?: number;
  className?: string;
};

export function NumberInput({
  labelText,
  step,
  min,
  max,
  className,
}: NumberInputProps) {
  return (
    <Input
      labelText={labelText}
      type={"number"}
      step={step}
      min={min}
      max={max}
      bodyClass={className}
    />
  );
}
