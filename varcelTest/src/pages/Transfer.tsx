import AddmoneyCard from "../components/Addmoneycard"
import BalanceCard from "../components/BalanceCard"
import OnRempTransition from "../components/OnRempTransition"

function Transfer() {
  return (
    <div className="h-full">
        <div className=" text-4xl text-[#6a51a6] py-8 px-4 font-bold">Transfer</div>
        <div className="text-black grid grid-cols-2 gap-2 p-4">
            <AddmoneyCard/>
            <div className="grid gap-2">
                <BalanceCard/>
                <OnRempTransition amount={0}/>
            </div>
        </div>
    </div>
  )
}

export default Transfer