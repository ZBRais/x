import React from "react";
import Image from "next/image";
import { BiMessageRounded } from "react-icons/bi";
import { FaRegHeart, FaRetweet } from "react-icons/fa6";
import { LuUpload } from "react-icons/lu";


const FeedCard: React.FC = () => {
    return (
    <div className="border-t-[0.5px] border-b-0 border-gray-600 hover:bg-slate-800 transition-all cursor-pointer p-2">
    <div className="grid grid-cols-12 p-2">
        <div className="col-span-1">
            {<Image 
            className="rounded-full"
            src="/dp.jpg" 
            alt="profile-picture" 
            height={50} 
            width={50} />}
        </div>
        <div className="col-span-11 pl-2">
            <h5 className="font-semibold">Zubai</h5>
            <p>Just started to build X clone:
                -Started to build SidebarMenu first, some UI issue need to be fixed
                -Explored TailwindCSS 
                -Resource: 
                @piyushgarg_dev
                twitter clone course

                Going to update daily progress
                #buildinpublic #tailwindcss
            </p>
            <div className="flex justify-between pt-2 text-lg">
                <div>
                    <BiMessageRounded />
                </div>
                <div>
                    <FaRetweet />
                </div>
                <div>
                    <FaRegHeart />
                </div>
                <div>
                    <LuUpload />
                </div>
            </div>
        </div>
    </div>
    </div>)
}
  
export default FeedCard;