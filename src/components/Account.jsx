import React from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
      console.log('로그아웃')
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <div className="max-w-[400px] mx-auto my-16 p-4 bg-gray-50">
      <h1 className="text-2xl font-bold py-4 text-center">Account</h1>
      <p className="text-center">사용자 이메일 : {user && user.email}</p>
      <div className="text-center">
        <button onClick={handleLogout} className="border px-6 py-2 my-4">로그아웃</button>
      </div>
    </div>
  )
}

export default Account;