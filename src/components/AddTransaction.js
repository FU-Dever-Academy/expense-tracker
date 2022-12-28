import React, { useState } from "react";

function AddTransaction({ setTransactionList, transactionList }) {
  const [newTransaction, setTransaction] = useState({
    text: "",
    amount: "",
  });
  return (
    <>
      <div className="flex flex-col">
        <h3 className="text-xl font-bold border-b-2 pb-2 mb-4">
          Add new transaction
        </h3>
        <div className="flex flex-col mb-2">
          <p className="text-lg font-bold mb-2">Text</p>
          <input
            placeholder="Enter text..."
            className="p-2 border-2 border-slate-200 outline-none"
            onChange={(e) =>
              setTransaction({
                ...newTransaction,
                text: e.target.value,
              })
            }
          ></input>
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-bold mb-2">
            Amount <br></br>(negative - expense, postive - income)
          </p>
          <input
            placeholder="Enter text..."
            className="p-2 border-2 border-slate-200 outline-none"
            onChange={(e) =>
              setTransaction({
                ...newTransaction,
                amount: e.target.value,
              })
            }
          ></input>
        </div>
      </div>
      <button
        className="bg-black text-white text-center w-full py-2 mt-4"
        onClick={()=> setTransactionList([newTransaction, ...transactionList])}
      >
        Add transaction
      </button>
    </>
  );
}

export default AddTransaction;
