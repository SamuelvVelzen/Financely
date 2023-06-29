import { Input } from "./input";

type TextInputProps = {
  labelText: string;
  className?: string;
};

export function TextInput({ labelText, className }: TextInputProps) {
  return <Input labelText={labelText} type={"text"} bodyClass={className} />;
}
