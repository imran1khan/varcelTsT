import Card from "./Card"

function OnRempTransition({ amount }: { amount: number }) {
    const date = new Date();
    return (
        <Card title="Recent Transactions">
            <div className="py-2 space-y-2">
                <div className="flex justify-between border-b border-slate-300 pb-2">
                    <div>
                        <div className="text-sm">Received INR</div>
                        <div className="text-slate-600 text-xs">{date.toDateString()}</div>
                    </div>
                    <div className=" flex flex-col justify-center">
                        +Rs {amount / 100}
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default OnRempTransition