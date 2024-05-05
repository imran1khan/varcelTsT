import Card from "./Card"
interface propInterface {
    amount?:number,
    locked?:number,
}

function BalanceCard({amount,locked}:propInterface) {
  return (
    <Card title="Balance">
        <div className="flex justify-between border-b border-slate-300 pb-2">
            <div>Unlocked balance</div>
            <div>{(amount || 0) /100} INR</div>
        </div>
        <div className="flex justify-between border-b border-slate-300 pb-2">
            <div>Total Locked Balance</div>
            <div>{(locked || 0) /100} INR</div>
        </div>
        <div className="flex justify-between border-b border-slate-300 pb-2">
            <div>Total Balance</div>
            <div>{((locked ?? 0) + (amount ?? 0)) / 100} INR</div>
        </div>
    </Card>
  )
}

export default BalanceCard