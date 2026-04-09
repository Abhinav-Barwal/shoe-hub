'use client'

import { useEffect, useState } from "react"
import Link from "next/link"

export default function ApiTest() {

    const [client, setClient] = useState<any[]>([])
    useEffect(() => {
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data => setClient(data.users))
    },[])

    let [count, setcount] = useState(0)

    function incre() {
        setcount(count+1)
    }
    function decre() {
        if(count <= 0) {
            return alert("Value can't be in -ve(negative)")
        }
        setcount(count-1)
    }
    
    return(
        <>
        <div className="mainTable">
            <h1><b>Client Names</b></h1><br />
            <ul>
                {client.map((user,index) => (
                    <li key={index}>
                        <Link href={`/users/${user.id}`}><b>{user.id}</b> &nbsp;&nbsp;{user.firstName}</Link>
                    </li>
                ))}
            </ul>
            <div className="boxs">
                <button className="btn" onClick={decre}>-</button>
                <p>{count}</p>
                <button className="btn" onClick={incre}>+</button>
            </div>
        </div>
        </>
    )
}