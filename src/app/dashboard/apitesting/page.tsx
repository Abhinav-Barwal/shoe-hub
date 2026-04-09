// 'use client'

// import { useEffect, useState } from "react"

// export default function ApiTest() {
//     const[product, setProduct] = useState<any[]>([])
//     useEffect(() => {
//         fetch('https://fake-store-api.mock.beeceptor.com/api/products')
//         .then((res) => res.json())
//         .then((data) => setProduct(data))
//     },[])
//     return(
//         <>
//         <div className="mainTable">
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Discription</th>
//                         <th>Price</th>
//                         <th>Unit</th>
//                         <th>Image</th>
//                         <th>Discount</th>
//                         <th>Availability</th>
//                         <th>Brand</th>
//                         <th>Category</th>
//                         <th>Rating</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {product.map((test,index) => (
//                         <tr key={index}>
//                             <td>{test.name}</td>
//                             <td>{test.description}</td>
//                             <td>{test.price}</td>
//                             <td>{test.unit}</td>
//                             <td>{test.image}</td>
//                             <td>{test.discount}</td>
//                             <td>{test.availability}</td>
//                             <td>{test.brand}</td>
//                             <td>{test.category}</td>
//                             <td>{test.rating}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//         </>
//     )
// }

'use client'

import { useEffect, useState } from "react"

export default function ApiTest() {

    const [product,setProduct] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [err, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchApi = async() => {
            try {
                setLoading(true)
                const res = await fetch('https://fake-store-api.mock.beeceptor.com/api/products')
                const data = await res.json()
                setProduct(data)
                if(!res.ok) {
                    throw new Error('Failed to fetch data')
                }
            }catch(err: any) {
                setError('Something went wrong')
            }finally {
                setLoading(false)
            }
        }
        fetchApi()
    },[])
    return (
        <>
        <div className="mainTable">
            {loading && <p>Loading...</p>}
            {err && <p style={{color: 'red'}}>{err}</p>}
            {!loading && !err && (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Discription</th>
                            <th>Price</th>
                            <th>Unit</th>
                            <th>Image</th>
                            <th>Discount</th>
                            <th>Availability</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((test, index) => (
                            <tr key={index}>
                                <td>{test.name}</td>
                                <td>{test.description}</td>
                                <td>{test.price}</td>
                                <td>{test.unit}</td>
                                <td>{test.image}</td>
                                <td>{test.discount}</td>
                                <td>{test.availability}</td>
                                <td>{test.brand}</td>
                                <td>{test.category}</td>
                                <td>{test.rating}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
        </>
    )
}