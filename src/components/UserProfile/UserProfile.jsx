import React from "react";
import MyProfile from "../widgets/MyProfileCard";
import UserProfileCard from "../widgets/UserProfileCard";
import Navbar from "../widgets/Navbar";
import ContractCard from "../widgets/ContractCard";

const ProfilePage = ()=>{
    return(
        <div className="flex flex-col h-screen w-screen">
            <Navbar/>
            
           
            <div className="flex gap-5">
                <div className="pl-[10px]">
                <MyProfile/>
                </div>
                <div>
                    <div className="mt-[70px]">
                    <h1 className="font-bold text-2xl mb-2">Contractors in Ahmedabad:</h1>
                     <UserProfileCard/>
                    </div>
                    <div>
                    <h1 className="font-bold text-2xl mb-2 mt-4">Available Contracts:</h1>
                     <ContractCard/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;