import Card from "../components/Card"

function P2PTransfer() {
  return (
    <div className="flex justify-center items-center h-full text-black">
      <div className="h-[80%] w-[30%]  flex justify-center items-center">
      <Card title="Send" css="w-full">
        <div className="p-2 space-y-4">
          <div className="space-y-2 border-b border-slate-300 pb-3">
            <div>Number</div>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Number" />
          </div>
          <div className="space-y-2 border-b border-slate-300 pb-3">
            <div>Amount</div>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Amount"/>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-700 w-[30%] rounded-md text-white py-2 px-4">send</button>
          </div>
        </div>
      </Card>
      </div>
    </div>
  )
}

export default P2PTransfer