'use client'

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function ApiTest() {

    const {id} = useParams()
    const[client, setCleint] = useState<any | null>(null)
    useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}`)
        .then(res => res.json())
        .then(data => setCleint(data))
    }, [id])
    if(!client) {
        return <p style={{color: 'red', position: 'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)'}}>Loading...</p>
    }
    return(
        <>
        <div className="mainTable">
            <h1><b>Client Details</b></h1><br />
            <p><b>First Name: </b>{client.firstName}</p>
            <p><b>Last Name: </b>{client.lastName}</p>
            <p><b>Age: </b>{client.age}</p>
            <p><b>Gender: </b>{client.gender}</p>
            <p><b>Email: </b>{client.email}</p>
            <p><b>Phone: </b>{client.phone}</p>
            <p><b>BirthDate: </b>{client.birthDate}</p>
            <p><b>BloodGroup: </b>{client.bloodGroup}</p>
            <p><b>Height: </b>{client.height}</p>
            <p><b>Weight: </b>{client.weight}</p>
            <p><b>EyeColor: </b>{client.eyeColor}</p>
        </div>
        </>
    )
}