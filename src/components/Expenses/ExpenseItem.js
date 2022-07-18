import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title)
  // const clickHandle = () =>{
  //   setTitle(prompt('New expense name : '))

  // }
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount} €</div>
        </div>
        {/* <button onClick={clickHandle}>Change title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
