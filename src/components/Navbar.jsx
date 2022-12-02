import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100]">
      <h1>logo</h1>
      <div>
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </div>
  )
}

export default Navbar