'use client'

import { useEffect, useState } from "react"
import Link from "next/link";
import { useFavourite } from "@/app/context/favouriteContext";

export default function Gallery() {

    const [products, setProducts] = useState<any[]>([])
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState<string | null>(null);
    const {likedId , handelLike} = useFavourite()
    useEffect(() => { 
        const gallery = async() => {
            try {
                setLoading(true)
                const res = await fetch('https://dummyjson.com/products')
                const data  = await res.json()
                // const allImages = data.products.flatMap((p : any) => p.images)
                setProducts(data.products)
                if (!res.ok) {
                    throw Error('Failed to fetch data')
                }
            } catch (err: any) {
                setError('Someting went wrong')
            }
            finally {
                setLoading(false)
            }
        }
        gallery()
    }, [])

    const deleteProduct = (id:number) => {
        setProducts(prev => prev.filter(product => product.id !== id));
    }
    return( 
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
                    <label htmlFor="" className="primary-btn"><Link href="/dashboard/gallery/fav">Favourite</Link></label>
                </div>
            </div>
            <div className="mainCont">
                {err && <p style={{color: 'red'}}>{err}</p>}
                {!loading && !err && (products.map((products,index) => (
                    <div className="card" key={index} onDoubleClick ={() => handelLike(products.id)}>
                        <i className={likedId.includes(products.id) ? "bi bi-heart-fill": 'bi bi-heart'}onClick={() => handelLike(products.id)}></i>
                        <div className="product-img">
                            {/* {products.images.map((url: string, idx: number) => (
                                <img key={idx} src={url} alt={products.title} />
                            ))} */}
                            <img src={products.images[0]} alt={products.title} className="productImages"/>
                        </div>
                        <div className="prodct-info">
                            <h3 title={products.description}>{products.title}</h3>
                            <p><b>Category: </b>{products.category}</p>
                            <p><b>Price: </b>${products.price}</p>
                            <p><b>Discount: </b>{products.discountPercentage}%</p>
                            <p><b>Rating: </b>{products.rating}</p>
                            <i className="bi bi-pencil-square" title="Edit"></i>
                            <i className="bi bi-trash3-fill" title="Delete" onClick={() => deleteProduct(products.id)}></i>
                        </div>
                    </div>
                )))}
                {loading &&
                    <div className="main-loader">
                        <div className="loader">
                            <img src="/assets/loader.gif"></img>
                        </div>
                    </div>
                }
            </div>
        </div>
        </>
    )
}