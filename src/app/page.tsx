'use client';
import { signIn } from "next-auth/react";
import { RiTwitterXLine } from "react-icons/ri";

export default function x(){
  return (
    <div className="grid grid-cols-7 m-1 h-screen w-screen">

      <div className="col-span-4 p-48 text-[350px]">
        <RiTwitterXLine />
      </div>
      <div className="col-span-3">
        <div className="m-5">
          <div className="m-5 font-extrabold text-[60px]">
            <h1>Happening now</h1>
          </div>
          <div className="mt-10 mx-5 font-extrabold text-[30px]">
            <h3>Join today.</h3>
          </div>
          <div className="m-5">
            <div onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000/home'})} className="flex items-center justify-center h-fit">
              <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                <span>Login with Google</span>
              </button>
            </div>
            <div>
              <button>Facebook</button>
            </div>
            <div className="mb-">
              <button>Create Account</button>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}