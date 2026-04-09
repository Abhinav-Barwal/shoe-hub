'use client'

import { products } from "../data/page"
import { useState } from "react";

export default function Dashboard() {
    const [selectedProduct, setSelectedProduct] = useState<any | null>(null)
    const clickhandel = (id: number) => {
        const product = products.find((p) => p.id === id);
        if(product) setSelectedProduct(product);
    }
    
    const closePopup = () => setSelectedProduct(null);
    return(
        <>
        <div className="dashboard">
            <h2>Here Are Few items</h2>
            <div className="dash-cont">
                {products.map((product) => (
                <div key={product.id} className={`box box${product.id}`} onClick={() => clickhandel(product.id)}>
                    <div className="img-box">
                        <img src={product.image} alt=""/>
                    </div>
                    <p>{product.name}</p>
                </div>
                ))}
            </div>
        </div>
        {selectedProduct && (
        <div className="dataRendering-Popup">
            <div className="innerData">
                <div className="clicked-img">
                    <img src={selectedProduct.image} alt="" />
                </div>
                <div className="product-data">
                    <h3>{selectedProduct.name}</h3>
                    <p className="price">Price: {selectedProduct.price}</p>
                    <p className="discription">Type: {selectedProduct.description}</p>
                    <p className="color">Color: {selectedProduct.color}</p>
                    <p className="color">Rating: {selectedProduct.rating}</p>
                </div>
                <div className="cross-btn" onClick={closePopup}><svg className="ng-tns-c2-2 close-btn block" height="20.758" viewBox="0 0 20.758 20.758" width="20.758" xmlns="http://www.w3.org/2000/svg"><path className="ng-tns-c2-2" d="M-12295.05-2584.76l-4.576-4.577-4.576,4.577a1.621,1.621,0,0,1-2.288,0,1.615,1.615,0,0,1,0-2.289l4.576-4.577-4.576-4.578a1.615,1.615,0,0,1,0-2.289,1.621,1.621,0,0,1,2.288,0l4.577,4.578,4.578-4.578a1.619,1.619,0,0,1,2.286,0,1.617,1.617,0,0,1,0,2.289l-4.576,4.578,4.576,4.577a1.617,1.617,0,0,1,0,2.289,1.613,1.613,0,0,1-1.144.473A1.619,1.619,0,0,1-12295.05-2584.76Z" data-name="Union 5" id="Union_5" transform="translate(6874.972 10540.084) rotate(45)"></path></svg></div>
                <div className="add-btn"><svg className="ng-tns-c2-2 close-btn block" height="20.758" viewBox="0 0 20.758 20.758" width="20.758" xmlns="http://www.w3.org/2000/svg"><path className="ng-tns-c2-2" d="M-12295.05-2584.76l-4.576-4.577-4.576,4.577a1.621,1.621,0,0,1-2.288,0,1.615,1.615,0,0,1,0-2.289l4.576-4.577-4.576-4.578a1.615,1.615,0,0,1,0-2.289,1.621,1.621,0,0,1,2.288,0l4.577,4.578,4.578-4.578a1.619,1.619,0,0,1,2.286,0,1.617,1.617,0,0,1,0,2.289l-4.576,4.578,4.576,4.577a1.617,1.617,0,0,1,0,2.289,1.613,1.613,0,0,1-1.144.473A1.619,1.619,0,0,1-12295.05-2584.76Z" data-name="Union 5" id="Union_5" transform="translate(6874.972 10540.084) rotate(45)"></path></svg></div>
            </div>
        </div>
        )}
        </>
    )
}