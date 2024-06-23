import Link from "next/link";
import { FaUser } from "react-icons/fa";

function Login() {
    return ( <div className="min-h-[580px] mb-[150px]">
        <hr className="border-zinc-500 relative bottom-[2px] w-[94%] mx-auto" />
        
        <div className="w-[94%] mx-auto border-t border-slate-300 mt-[34px]">
        <h1 className="relative bottom-[75px] font-serif text-3xl ml-2">Log in</h1>
        <b>Username</b><br />
        <input className="border border-stone-400 mt-2 p-1 w-[300px]" placeholder=" Enter your username" type="text" /><br /><br />
        <b>Password</b><br />
        <input className="border border-stone-400 mt-2 p-1 w-[300px] mb-4" placeholder=" Enter your password" type="text" /><br />
        <input className=" h-5 w-5 cursor-pointer rounded-md border border-blue-gray-500" type="checkbox" name="" id="" />
        <small className="text-[15px] relative left-2 bottom-1">Keep me logged in (for up to one year)</small><br />
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-1 px-2 w-[300px] mt-3">Log in</button><br />
        <small className="text-[15px] relative left-[65px] top-4 text-sky-600 hover:underline cursor-pointer">Help with logging in</small><br />
        <small className="text-[15px] relative left-14 top-5 text-sky-600 hover:underline cursor-pointer">Forgot your password?</small>
        </div>
        <div className="relative top-32 mx-auto w-[94%]">
            <FaUser className="relative top-6 left-24" opacity={0.15} size={100}/>
            <b className="text-sm">Don't have an account?</b><br />
            <Link href={'/create-account'}>
            <button className=" text-blue-600 text-sm border border-stone-500 font-bold py-1 px-2 w-[300px] hover:border-blue-500">Join Wikipedia</button>
            </Link>
        </div>
    </div> );
}

export default Login;