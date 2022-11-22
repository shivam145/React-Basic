
import ExpenseItem  from './ExpenseItem';

function Expenses(props) {
    return (
        <div>   
            <ExpenseItem
                name={props.items[0].name}
                price={props.items[0].price}
                manDate={props.items[0].manDate}
            />
            <ExpenseItem
                name={props.items[1].name}
                price={props.items[1].price}
                manDate={props.items[1].manDate}
            />
            <ExpenseItem
                name={props.items[2].name}
                price={props.items[2].price}
                manDate={props.items[2].manDate}
            />
        </div>
    )
}

export default Expenses;