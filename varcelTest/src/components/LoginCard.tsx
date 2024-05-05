import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";

function LoginCard() {
    const navigate=useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onSubmithandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPassword('');
        setUsername('');
        navigate('/homepage');
    }
    return (
        <div className="h-[70%] w-[20%] ">
            <form onSubmit={onSubmithandler} className="flex-col bg-purple-950 h-[90%] w-full relative rounded-md">
                <div className="h-[10%] flex justify-center items-center">
                    <div className="text-center">
                        paytm
                    </div>
                </div>
                <div className="flex-col space-y-1 border border-purple-500 rounded-sm h-[80%] flex justify-center items-center">
                    <input className="text-black w-full h-[20%] px-3" value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" name="username" />
                    <br />
                    <input className="text-black w-full h-[20%] px-3" value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password" name="password" />
                </div>
                <div className="flex justify-center items-center h-[10%] ">
                    <button type="submit" className="text-white bg-purple-900 hover:bg-purple-800 w-full h-[90%] rounded-md">submit</button>
                </div>
            </form>
            <div className="flex justify-center items-center h-[10%] bg-purple-700 rounded-md">
                <NavLink to={'/signUp'}>don't have an account? sign up</NavLink>
            </div>
        </div>
    )
}

export default LoginCard