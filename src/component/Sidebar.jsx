import React, { useState } from "react";
import {  Button, Drawer, Space } from "antd";
import { IoHome } from "react-icons/io5";
import { TbBuildingCommunity } from "react-icons/tb";
import { CiShop } from "react-icons/ci";
import { MdWebStories } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import {useAuth}from '../Context/authContext'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-sdk/firebase";

export const Sidebar=()=>
{
    const [open, setOpen] = useState(false);
   
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  
  function handleLogout(){
    signOut(auth)
  }
  return (
    <>
      <Space>
        <Button className="p-2" type="primary" onClick={showDrawer}>
          <HiMiniBars3BottomLeft size={25}/>
        </Button>
      </Space>
      
      <Drawer
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
       
      >
        <div className="p-4 flex flex-col gap-20 " >

            <div className="flex gap-2 flex-wrap items-center justify-center">
            <img className="w-16" src="https://babycode.org/InfoWebsite/images/Icon.png" alt="" />
            <span className="text-lg font-bold">BabyCode</span>
            </div>
            
            {/* <div>
            <Avatar size={80} src={<img src={User.photoURL} alt="avatar" />} />
            
            </div> */}
            <ul className="flex flex-col gap-2 justify-center items-center ">
                <div className="w-10/12 ">
                <a href="" className="rounded-md  p-2 text-center text-lg font-bold flex gap-2 hover:shadow-xl hover:bg-slate-100  "><IoHome size={30}/> Home</a>
                </div>
                <div  className="w-10/12">
                <a href="" className="rounded-md  p-2 text-lg font-bold flex gap-2   hover:shadow-xl hover:bg-slate-100"><TbBuildingCommunity size={30}/> Community</a>

                </div>
                <div className="w-10/12 ">
                <a href="" className="rounded-md  p-2 text-lg font-bold flex gap-2   hover:shadow-xl hover:bg-slate-100"><MdWebStories size={30}/> Stories</a>

                </div>
                <div className="w-10/12 ">
                <a href="" className=" rounded-md  p-2 text-lg font-bold flex gap-2   hover:shadow-xl hover:bg-slate-100"><CiShop size={30}/> Shop</a>

                </div>
            </ul>

            <div>
                <button onClick={handleLogout} className="flex gap-4 bg-black text-white m-auto p-2 text-center items-center justify-center rounded-md shadow-xl font-bold w-6/12">
                    <IoLogOut size={30}/>
                    LOGOUT
                </button>
            </div>

           
        </div> 
      </Drawer>
      
    </>
  );
}