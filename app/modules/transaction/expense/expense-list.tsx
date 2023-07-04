import { ExpenseViewModel } from "@Financely/Data/transaction";
import { List, ListItem } from "@Financely/UI/list";
import { SubTitle, Text } from "@Financely/UI/typography";
import { Amount, DisplayDate } from "@Financely/UI/util";

type ExpenseListProps = { data: ExpenseViewModel[]; className?: string };

export function ExpenseList({ data, className = "" }: ExpenseListProps) {
  return (
    <List className={`${className}`}>
      {data.map((expense, index) => (
        <ExpenseListItem index={index} expense={expense} />
      ))}
    </List>
  );
}

type ExpenseListItemProps = { index: number; expense: ExpenseViewModel };

function ExpenseListItem({ expense, index }: ExpenseListItemProps) {
  return (
    <ListItem key={index} className="px-0">
      <DisplayDate date={expense.payDate} />

      <div className="flex items-center justify-between gap-4">
        <SubTitle text={expense.name} />

        <Amount amount={expense.amount} />
      </div>

      {expense.description && (
        <Text text={expense.description} shouldTruncate={true} />
      )}
    </ListItem>
  );
}
