import '../components/ExpenseItem.css';

function ExpenseItem(props) {
    return (
        <div className='expense-item'>
            <div>{props.manDate.toLocaleString()}</div>
            <div className='expense-item__description'>
                <h2>{props.name}</h2>
                <div className='expense-item__price'>{props.price}</div>
            </div>
        </div>
    );
}


export default ExpenseItem;