import Image from "next/image";
import { BsEmojiSmile } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { IoImageOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineGifBox } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { RxListBullet } from "react-icons/rx";

export default function CreatePost(){
    return (
        <div className="border-t-[0.5px] border-b-0 border-gray-600 p-2">
            <div className="grid grid-cols-12 p-2">
                <div className="col-span-1">
                    {<Image 
                    className="rounded-full hover:bg-slate-600"
                    src="/dp.jpg" 
                    alt="profile-picture" 
                    height={50} 
                    width={50} />}
                </div>

                <div className="col-span-11 pl-2">
                    <div className="pl-2 flex place-items-baseline border border-gray-600 w-fit text-[#1d9bf0] text-sm font-semibold py-1 px-1 rounded-full hover:bg-slate-600 transition-all cursor-pointer">
                        <div>
                            Everyone
                        </div>
                        <div className="pl-1">
                            <IoIosArrowDown />
                        </div>
                    </div>
                    <div className="mx-2 mt-4 ml-0 w-full text-xl">
                        <textarea className="w-full resize-none caret-slate-300 focus:outline-none rounded-lg bg-transparent" name="create-post" id="create-post" rows={1} placeholder="What is happening?!"></textarea>
                    </div>
                    <div className="w-full text-[#1d9bf0] text-sm font-semibold py-1 px-1 transition-all cursor-pointer pb-4 border-b-[0.5px] border-gray-600">
                        <div className="flex w-fit place-items-baseline rounded-full hover:bg-slate-600">
                            <div className="w-fit pr-1">
                                <GiEarthAmerica />
                            </div>
                            <div className="w-fit">
                                Everyone can reply
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4 cursor-pointer transition-all">
                        <div className="flex text-xl text-[#1d9bf0] m-1">
                            <div className="p-2 rounded-full hover:bg-slate-600"><IoImageOutline /></div>
                            <div className="p-2 rounded-full hover:bg-slate-600"><MdOutlineGifBox /></div>
                            <div className="p-2 rounded-full hover:bg-slate-600"><RxListBullet /></div>
                            <div className="p-2 rounded-full hover:bg-slate-600"><BsEmojiSmile /></div>
                            <div className="p-2 rounded-full hover:bg-slate-600"><RiCalendarScheduleLine /></div>
                            <div className="p-2 rounded-full hover:bg-slate-600"><IoLocationOutline /></div>
                        </div>
                        <div className="w-fit">
                            <button className="font-semibold bg-[#1d9bf0] ml-2 my-0 mr-0 px-4 py-2 rounded-full hover:bg-sky-600" type="submit">Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}