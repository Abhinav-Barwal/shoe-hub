"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
    const [isFocused, setIsFocused] = useState<string | null>(null)
    const [username, setUserName] = useState('')
    const [pass, setPass] = useState('')
    const cred = [
        {username: 'Abhinav Barwal', pass: '123'},
        {username: 'Jagjeet Singh', pass: 'Password@123'}
    ]
    const router = useRouter();
    const handelsubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const user = cred.find ((c) => c.username === username && c.pass === pass)
        if (user) {
            router.push('/dashboard')
            alert("Welcome Back chief We are waiting for you till you left")
        }else {
            alert('Wrong ID and Password please try again !')
        }
    }
  return (  
    <>
    <div className="main">
        <div className="loginContainer">
            <form action="">
                <div className="logo">
                    <img src="/assets/logo.png" alt=""/>
                </div>
                <div className="login-cont">
                    <div className="inner-cont">
                        <div className= {`username ${isFocused === 'username' || username ? "focused" : ''}`} >
                            <input type="text" value={username} className="input" onChange={(e) => setUserName(e.target.value)} onFocus={() => setIsFocused("username")} onBlur={() => setIsFocused(null)}/>
                            <label htmlFor="name">username</label>
                        </div>
                        <div className={`username password ${isFocused === 'pass' || pass ? 'focused' : ''}`} >
                            <input type="text" value={pass} className="input" onChange={(e) => setPass(e.target.value)} onFocus={() => setIsFocused("pass")} onBlur={()=> setIsFocused(null)}/>
                            <label htmlFor="pass">password</label>
                        </div>
                        <div className="forgot">
                            <Link href="#">Forgoten password</Link>
                        </div>
                        <button className="login" onClick={handelsubmit}>Login</button>
                        <p>OR</p>
                        <div className="fblogin">
                            <Link href="/users">Login with Facebook</Link>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <img src="/assets/shoe.png" alt=""/>
                    <button className="btn">Sign-up</button>
                </div>
            </form>
        </div>
    </div>
    </>
  );
}
