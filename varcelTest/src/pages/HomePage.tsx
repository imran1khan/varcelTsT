import { NavLink, Outlet, useLocation } from "react-router-dom";

const routes = [
    {
        pageName: 'Home',
        path: '/homepage'
    },
    {
        pageName: 'Transfer',
        path: '/homepage/transfer'
    },
    {
        pageName: 'Transactions',
        path: '/homepage/transactions'
    },
    {
        pageName: 'P2P Transfer',
        path: '/homepage/p2ptransfer'
    },
];
function HomePage() {
    const currentPath = useLocation();
    return (
        <div className=" h-screen">
            <div className="bg-[#EBE6E6] h-[5%]">banner</div>
            <div className="bg-[#EBE6E6] h-[90%] flex">
                <div className="bg-[#EBE6E6] w-[15%] space-y-3 pt-4">
                    {routes.map((i, v) => 
                        (
                        <div key={v + i.pageName} className="text-center font-semibold cursor-pointer bg-[#EBE6E6] hover:bg-[#e1d6d6]">
                            <NavLink to={i.path}   className={currentPath.pathname===i.path?"text-[#ca88ee]":"text-[#639de0]"}>{i.pageName}</NavLink>
                        </div>
                    ))}
                </div>
                <div className="bg-[#EBE6E6] flex-grow"><Outlet/></div>
            </div>
        </div>
    )
}

export default HomePage