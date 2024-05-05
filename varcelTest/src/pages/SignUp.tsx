import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"

function SignUp() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNum, setMobileNum] = useState('');
    const onSubmithandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(username)
        console.log(password)
        console.log(mobileNum)
        setPassword('');
        setUsername('');
        setMobileNum('');
        navigate('/homepage');
    }
    return (
        <div className='flex justify-center items-center bg-black text-white h-screen'>
            <div className="h-[70%] w-[20%] ">
                <form onSubmit={onSubmithandler} className="flex-col bg-purple-950 h-[90%] w-full relative rounded-md">
                    <div className="h-[10%] flex justify-center items-center">
                        <div className="text-center">
                            paytm
                        </div>
                    </div>
                    <div className="flex-col space-y-1 border border-purple-500 rounded-sm h-[80%] flex justify-center items-center">
                        <>
                        <input value={username} onChange={(e)=>setUsername(e.target.value)} className="text-black w-full h-[20%] px-3" type="text" placeholder="username" name="username" />
                        <br />
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} className="text-black w-full h-[20%] px-3"  type="text" placeholder="password" name="password" />
                        <br />
                        <input value={mobileNum} onChange={(e)=>setMobileNum(e.target.value)} className="text-black w-full h-[20%] px-3"  type="text" placeholder="mobile number" name="mobile number" />
                        </>
                    </div>
                    <div className="flex justify-center items-center h-[10%] ">
                        <button type="submit" className="text-white bg-purple-900 hover:bg-purple-800 w-full h-[90%] rounded-md">submit</button>
                    </div>
                </form>
                <div className="flex justify-center items-center h-[10%] bg-purple-700 rounded-md">
                    <NavLink to={'/'}>have an account? Login</NavLink>
                </div>
            </div>
        </div>
    )
}

export default SignUp