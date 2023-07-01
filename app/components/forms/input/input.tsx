type InputProps = {
  name: string;
  labelText: string;
  type: "date" | "number" | "text";
  bodyClass?: string;
  inputClassName?: string;
  step?: number;
  min?: number;
  max?: number;
};

export function Input({
  name,
  labelText,
  type,
  bodyClass,
  inputClassName,
  step,
  min,
  max,
}: InputProps) {
  return (
    <div className={`${bodyClass} relative`}>
      <input
        type={type}
        id={name}
        name={name}
        className={`${inputClassName} peer block w-full appearance-none rounded-3xl border border-darkgrey bg-transparent px-5 pb-2.5 pt-4 text-sm text-dark focus:text-dark focus:outline-none focus:ring-0`}
        placeholder=" "
        min={min}
        max={max}
        step={step}
      />
      <label
        htmlFor={name}
        className={`absolute left-[1.2rem] top-[0.3rem] z-10 origin-[0] -translate-y-4 scale-75 transform rounded-3xl bg-light px-1 text-sm text-darkgrey duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-[0.3rem] peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-1 peer-focus:text-darkgrey`}
      >
        {labelText}
      </label>
    </div>
  );
}
