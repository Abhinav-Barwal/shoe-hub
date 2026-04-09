'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { useFavourite } from "@/app/context/favouriteContext";

export default function FavProducts() {

    const [products, setProducts] = useState<any[]>([])
    const {likedId , handelLike} = useFavourite();
    const [err, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect (() => {
        const gallery = async() => {
            try {
                setLoading(true)
                const res = await fetch('https://dummyjson.com/products')
                const data =  await res.json()
                const favProducts = data.products.filter((p: any) => likedId.includes(p.id));
                    setProducts(favProducts);
                if(!res.ok) {
                    throw new Error('Failed to fetch data')
                }
            }
            catch(err:any) {
                setError('Something went wrong')
            }
            finally {
                setLoading(false)
            }
        }
        gallery()
    }, [likedId])

    return (
        <>
        <div className="mainbox">
            <h1 className="title">Product Gallery</h1>
            <div className="top-bar">
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <i className="bi bi-search"></i>
                </div>
                <div className="upload-btn">
                    <input type="file" id='upload' />
                    <label htmlFor="upload" className="primary-btn">Upload</label>
                    <label htmlFor="" className="primary-btn"><Link href="/dashboard/gallery">Back</Link></label>
                </div>
            </div>
                {products.length === 0 ? <p className="emptyError">Your cart is feeling light</p> : null}
            <div className="mainCont">
                {loading &&
                    <div className="main-loader">
                        <div className="loader">
                            <img src="/assets/loader.gif"></img>
                        </div>
                    </div>
                }
                {err && <p style={{color: 'red'}}>{err}</p>}
                {!loading && !err && (
                    products.map((products,index) => (
                        <div className="card" key={index} onDoubleClick={() => handelLike(products.id)}>
                            <i className={likedId.includes(products.id) ? "bi bi-heart-fill": 'bi bi-heart'} onClick={() => handelLike(products.id)}></i>
                            <div className="prodct-img">
                                <img src={products.images[0]} alt={products.title} />
                            </div>
                            <div className="prodct-info">
                                <h3 title={products.description}>{products.title}</h3>
                                <p><b>Category: </b>{products.category}</p>
                                <p><b>Price: </b>${products.price}</p>
                                <p><b>Discount: </b>{products.discountPercentage}%</p>
                                <p><b>Rating: </b>{products.rating}</p>
                                <i className="bi bi-pencil-square" title="Edit"></i>
                                <i className="bi bi-trash3-fill" title="Delete" onClick={() => handelLike(products.id)}></i>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
        </>
    )
}