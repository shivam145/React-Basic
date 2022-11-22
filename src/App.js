import Expenses from './components/Expenses';

function App() {

  const expenses = [{
    name: "Amazon alexa",
    price: "3000",
    manDate: new Date("2022-05-24")
  }, {
    name: "Mi Speaker",
    price: "2000",
    manDate: new Date("2022-11-24")
  }, {
    name: "Mythology",
    price: "200",
    manDate: new Date("2022-02-29")
  }];
  return (
    <div>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
