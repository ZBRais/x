import React from "react";
import { RiMoneyDollarBoxLine, RiNotification2Line, RiTwitterXLine } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi2";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { CgMoreO } from "react-icons/cg";
import CreatePost from "./components/CreatePost";
import FeedCard from "./components/FeedCard";


interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <GoHomeFill />,
  },
  {
    title: "Explore",
    icon: <IoSearch />,
  },
  {
    title: "Notifications",
    icon: <RiNotification2Line />,
  },
  {
    title: "Messages",
    icon: <MdOutlineMailOutline />,
  },
  {
    title: "Bookmarks",
    icon: <PiBookmarkSimpleBold />
  },
  {
    title: "Premium",
    icon: <RiMoneyDollarBoxLine />
  },
  {
    title: "Profiles",
    icon: <HiOutlineUser />,
  },
  {
    title: "More",
    icon: <CgMoreO />
  },
]

export default function Home() {
  return (
      <div className="grid grid-cols-12 h-screen w-screen px-20">
      
        <div className="col-span-3 ml-10">
        {/*1st Column*/}
          <div className="mx-1">
            <div className="text-3xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
              <RiTwitterXLine />
            </div>
            <div className="mt-1 h-full w-full text-2xl">
              {/*Menu*/}
              {sidebarMenuItems.map((item) => (
                <div 
                className="flex justify-start 
                items-center gap-4" 
                key={item.title}>
                  {/* Div that wraps both the icon and the title */}
                  <div className="flex px-4 py-2 items-center gap-4 hover:bg-gray-800 hover:font-semibold 
                w-fit pr-4 cursor-pointer 
                transition-all rounded-full">
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </div>
                </div>
              ))}
              <div className="w-full">
                <button className="bg-[#1d9bf0] w-5/6 my-2 px-4 py-2 rounded-full hover:bg-sky-600">Post</button>
              </div>
      
            </div>
          </div>
        </div>
        <div className="col-span-6 border-x-[1px] border-b-0 border-gray-600 overflow-scroll">
          <CreatePost />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
    
        <div className="col-span-3">{/*3rd Column*/}</div>
      </div>
  );
}
