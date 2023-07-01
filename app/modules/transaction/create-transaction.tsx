import {
  Button,
  DeleteButton,
  EditButton,
  OutlineButton,
  ThemeColorEnum,
} from "@Financely/UI/button";
import {
  DateInput,
  IOption,
  NumberInput,
  SelectInput,
  TextareaInput,
  TextInput,
} from "@Financely/UI/forms";
import { useState } from "react";
import { TransactionTypeEnum } from "./enums";
import { CreateTransactionViewModel } from "./types";

type CreateTransactionProps = {
  data: CreateTransactionViewModel;
  showEditMode?: boolean;
};

export function CreateTransaction({
  data,
  showEditMode = false,
}: CreateTransactionProps) {
  const [isEditMode, setIsEditMode] = useState(showEditMode);
  const [showDetails, setShowDetails] = useState(false);

  const options: IOption[] = [
    { value: TransactionTypeEnum.income, label: "Income" },
    { value: TransactionTypeEnum.expense, label: "Expense" },
  ];

  return (
    <div>
      <div
        className={`group flex items-center justify-between p-4 ${
          isEditMode ? "hidden" : "block"
        }`}
      >
        <p>{data.name}</p>

        <div className="flex ">
          <p>{data.amount}</p>

          <EditButton
            onClick={() => setIsEditMode(true)}
            className="invisible ml-2 group-hover:visible"
          />
          <DeleteButton className="invisible ml-2 group-hover:visible" />
        </div>
      </div>

      <div className={`p-4  ${isEditMode ? "block" : "hidden"}`}>
        <div className="mb-2 flex gap-4">
          <SelectInput
            name="type"
            labelText={"Type"}
            className="w-1/6"
            options={options}
          />

          <NumberInput
            name="amount"
            labelText={"Amount"}
            step={0.01}
            min={0}
            className="w-1/6"
          />
          <TextInput name="name" labelText={"Name"} className="w-3/6" />
          <DateInput name="date" labelText={"Date"} className="w-1/6" />
        </div>

        <p
          onClick={() => setShowDetails(!showDetails)}
          className="mb-2 text-sm text-darkgrey underline"
        >
          {showDetails ? "Show" : "Hide"} advanced data
        </p>

        <div className={`${showDetails ? "block" : "hidden"}`}>
          <TextareaInput name="description" labelText={"Description"} />
        </div>

        <div className="flex justify-end">
          <OutlineButton
            theme={ThemeColorEnum.primary}
            onClick={() => {
              setIsEditMode(false);
            }}
          >
            Cancel
          </OutlineButton>
          <Button theme={ThemeColorEnum.primary} className="ml-2">
            Opslaan
          </Button>
        </div>
      </div>
    </div>
  );
}
