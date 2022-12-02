import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }

  return (
    <div className="max-w-[500px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">
          로그인 페이지
        </h1>
        <p className="py-2">
          회원가입이 필요하신가요?
          <Link
            to="/signup"
            className="underline decoration-red-500 text-indigo-500 hover:text-red-500"
          >
            회원가입
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-mono">메일주소</label>
          <input onChange={(e) => setEmail(e.target.value)} className="border p-1 rounded-md" type="email"/>
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-mono">비밀번호</label>
          <input onChange={(e) => setPassword(e.target.value)} className="border p-1 rounded-md" type="password"/>
        </div>
        <button
          className="border border-blue-500 bg-blue-600
          hover:bg-blue-500 w-full p-4 my-2 text-white rounded-md"
        >
          로그인
        </button>
      </form>
    </div>
  )
}

export default Signin;