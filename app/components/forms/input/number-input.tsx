type NumberInputProps = {
  labelText: string;
  step?: number;
  min?: number;
  max?: number;
};

export function NumberInput({ labelText, step, min, max }: NumberInputProps) {
  return (
    <div className="relative">
      <input
        type="number"
        id="floating_outlined"
        className="border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:text-gray-900 focus:outline-none focus:ring-0"
        placeholder=" "
        step={step}
        min={min}
      />
      <label
        htmlFor="floating_outlined"
        className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-gray-900"
      >
        {labelText}
      </label>
    </div>
  );
}
