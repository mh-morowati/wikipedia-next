import { GiPencil } from "react-icons/gi";
import { FaRegNewspaper } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";

function CreateAccount() {
    return ( <div className="min-h-[580px]  w-[920px] relative left-[360px] mb-24">
    <h1 className="text-3xl font-serif relative bottom-10">Create account</h1>
    <section className="float-right relative right-40 top-8 text-center">
        <h1 className="text-xl font-serif"><b>Wikipedia is made by people like you.</b></h1><br />
        <h1 className="text-3xl font-serif">1,224,647,571</h1>
        <p className="my-5 text-neutral-600	">edits</p>
        <h1 className="text-3xl font-serif">6,836,336</h1>
        <p className="my-5 text-neutral-600">articles</p>
        <h1 className="text-3xl font-serif">117,251</h1>
        <p className="my-5 text-neutral-600">recent contributors</p>
    </section>
    
    <section className="float-right relative right-28 top-20">
    <GiPencil className="mt-4" opacity={0.1} size={70}/>
    <FaRegNewspaper className="mt-6"  opacity={0.1} size={70}/>
    <BsFillPeopleFill className="mt-6"  opacity={0.1} size={70}/>
    </section>
    <section className="mt-10">
        <b>Username</b><br />
        <input className="border border-stone-400 mt-2 p-1 w-[280px]" placeholder=" Enter your username" type="text" /><br />
        <small className="opacity-90">Your username is public and cannot be <br /> made private later.</small><br /><br />
        <b>Password</b><br />
        <input className="border border-stone-400 mt-2 p-1 w-[280px]" placeholder=" Enter a password" type="password" /><br />
        <small className="opacity-90">It is recommended to use a unique password <br /> that you are not using on any other website.</small><br /><br />
        <b>Confirm password</b><br />
        <input className="border border-stone-400 mt-2 p-1 w-[280px]" placeholder=" Enter password again" type="password" /><br /><br />
        <b>Email address (recommended)</b><br />
        <input className="border border-stone-400 mt-2 p-1 w-[280px]" placeholder=" Enter your email address" type="email" /><br />
        <small className="opacity-90">Email is required to recover your account if <br /> you lose your password.</small><br /><br />
        <b>CAPTCHA Security check</b><br />
        <div className="w-[300px] h-[250px] border border-stone-400 text-center mb-4">
        <input className="border border-stone-400 mt-2 p-1 w-[280px]" placeholder="Enter the text you see on the image" type="text" /><br />
        <small>Can't see the image? <span className="text-sky-600 hover:underline cursor-pointer">Request an account</span></small>
        </div>
        <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-1 px-4 w-[300px] rounded opacity-90">Create your account</button>
    </section>
    </div> );
}

export default CreateAccount;