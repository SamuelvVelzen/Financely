import { ExpenseViewModel } from "@Financely/Data/transaction";
import { List, ListItem } from "@Financely/UI/list";
import { Amount, SubTitle, Text } from "@Financely/UI/typography";

type ExpenseListProps = { data: ExpenseViewModel[] };

export function ExpenseList({ data }: ExpenseListProps) {
  return (
    <List>
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
