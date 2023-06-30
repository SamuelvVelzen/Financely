import { ChevronUpDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export type IOption = { value: number; label: string };

type SelectInputProps = {
  name: string;
  labelText: string;
  className?: string;
  options: IOption[];
};

export function SelectInput({
  name,
  labelText,
  className,
  options = [],
}: SelectInputProps) {
  const [open, setOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState<IOption | null>(null);

  function handleOptionClick(option: IOption): void {
    setOpen(false);

    setSelectedOption({ ...option });
  }

  function handleEmptyClick(
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ): void {
    event.stopPropagation();
    setSelectedOption(null);
  }

  return (
    <div className={`relative ${className}`}>
      <div
        className={`peer relative block h-full w-full appearance-none rounded-3xl border border-darkgrey bg-transparent pb-2.5 pl-5 pr-10 pt-4 text-sm text-dark focus:text-dark focus:outline-none focus:ring-0 ${
          open && "rounded-b-none"
        }`}
        onClick={() => setOpen(!open)}
      >
        {selectedOption?.label}
        {selectedOption && (
          <XMarkIcon
            onClick={(event) => handleEmptyClick(event)}
            className="absolute right-6 top-4 h-4 w-4"
          />
        )}
        <ChevronUpDownIcon className="absolute right-2 top-4 h-4 w-4" />
      </div>
      <label
        htmlFor={name}
        className={`absolute left-[1.2rem] top-[0.3rem] z-10 origin-[0] -translate-y-4 scale-75 transform rounded-3xl bg-light px-1 text-sm text-darkgrey duration-300 ${
          !selectedOption && "top-1/2 -translate-y-1/2 scale-100 "
        }`}
      >
        {labelText}
      </label>

      {open && (
        <div className="absolute z-20 w-full divide-y divide-darkgrey rounded-b-3xl border border-t-0 border-darkgrey bg-white">
          {options.map((option) => (
            <div
              className="px-5 py-3"
              key={option.value}
              onClick={() => handleOptionClick(option)}
            >
              <p>{option.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
