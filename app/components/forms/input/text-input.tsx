import { Input } from "./input";

type TextInputProps = {
  labelText: string;
};

export function TextInput({ labelText }: TextInputProps) {
  return <Input labelText={labelText} type={"text"} />;
}
