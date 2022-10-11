function App() {
  return (
    <>
      <div className="w-screen ">
        <div className="w-[32rem] mx-auto">
          <h1 className="text-center font-bold text-3xl my-4">
            Expense Tracker
          </h1>
          <div className="">
            <p className="text-md">YOUR BALANCE</p>
            <div className="flex flex-row">
              <span className="text-2xl font-bold">$</span>
              <div className="text-2xl font-bold">260.00</div>
            </div>
          </div>
          <div className="w-full drop-shadow-lg bg-white p-4 flex flex-row my-4">
            <div className="w-1/2 flex flex-col items-center text-green-700 border-r-2">
              <p className="text-lg">INCOME</p>
              <div className="flex flex-row">
                <span className="text-2xl font-bold">$</span>
                <div className="text-2xl font-bold">260.00</div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-center text-red-700">
              <p className="text-lg">EXPENSE</p>
              <div className="flex flex-row">
                <span className="text-2xl font-bold">$</span>
                <div className="text-2xl font-bold">260.00</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold border-b-2 pb-2 mb-4">History</h3>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between w-full drop-shadow-lg bg-white p-2 mb-4 border-r-8 border-r-green-700">
                <p className="text-lg">Cash</p>
                <div className="text-lg">+500</div>
              </div>
              <div className="flex flex-row justify-between w-full drop-shadow-lg bg-white p-2 mb-4 border-r-8 border-r-red-700">
                <p className="text-lg">Pen</p>
                <div className="text-lg">-500</div>
              </div>
              <div className="flex flex-row justify-between w-full drop-shadow-lg bg-white p-2 mb-4 border-r-8 border-r-green-700">
                <p className="text-lg">Cash</p>
                <div className="text-lg">+500</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold border-b-2 pb-2 mb-4">
              Add new transaction
            </h3>
            <div className="flex flex-col mb-2">
              <p className="text-lg font-bold mb-2">Text</p>
              <input placeholder="Enter text..." className="p-2 border-2 border-slate-200 outline-none"></input>
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-bold mb-2">Amount (negative - expense, postive - income)</p>
              <input placeholder="Enter text..." className="p-2 border-2 border-slate-200 outline-none"></input>
            </div>
          </div>
          <button className="bg-black text-white text-center w-full py-2 mt-4">Add transaction</button>
        </div>
      </div>
    </>
  );
}

export default App;
