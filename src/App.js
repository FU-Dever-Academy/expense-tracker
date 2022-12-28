import { useState } from "react";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import History from "./components/History";
import "./style.css"
import { AiFillAudio, AiFillCheckCircle } from "react-icons/ai";

function App() {
  const [transactionList, setTransactionList] = useState([]);
  console.log(transactionList);
  return (
    <>
      <div className="w-screen ">
        <div className="w-[32rem] mx-auto">
          <h1 className="text-center font-bold text-3xl my-4">
            Expense Tracker
          </h1>
          <Balance transactionList={transactionList}></Balance>
          <History transactionList={transactionList}></History>
          <AddTransaction
            setTransactionList={setTransactionList}
            transactionList={transactionList}
          ></AddTransaction>
        </div>
      </div>
    </>
  );
}

export default App;
