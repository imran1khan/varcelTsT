import { useState } from "react";
import Card from "./Card"
const SUPPORTED_BANKS = [{
  name: "HDFC Bank",
  redirectUrl: "https://netbanking.hdfcbank.com"
}, {
  name: "Axis Bank",
  redirectUrl: "https://www.axisbank.com/"
}];
function AddmoneyCard() {
  const [select, setSelect] = useState('');
  return (
    <Card title="Add Money">
      <div className="space-y-4">
        <div className="pt-2">
          <label className="block mb-2 text-sm font-medium text-gray-900">Amount</label>
          <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Amount" />
        </div>
        <div>
          <div className="mt-2">Bank</div>
          <select onChange={(e) => setSelect(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            {SUPPORTED_BANKS.map(option => <option key={option.name + option.redirectUrl} value={option.redirectUrl}>{option.name}</option>)}
          </select>
        </div>
        <div className="flex justify-center pt-4">
          <button onClick={()=>window.open(select,'_blank')} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
            Add Money
          </button>
        </div>
      </div>
    </Card>
  )
}

export default AddmoneyCard