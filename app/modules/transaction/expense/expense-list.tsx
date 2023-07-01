import { ExpenseViewModel } from "@Financely/Data/transaction";
import { List, ListItem } from "@Financely/UI/list";
import { SubTitle, Text } from "@Financely/UI/typography";
import { Amount } from "@Financely/UI/typography/price";

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
      <SubTitle text={expense.name} />

      <div className="flex items-center justify-between gap-4">
        {expense.description && (
          <Text text={expense.description} shouldTruncate={true} />
        )}

        <Amount amount={expense.amount} />
      </div>
    </ListItem>
  );
}
