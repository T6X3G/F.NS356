import React from "react";
import './productListingCard.styles.css'
import ProductImage from '../../../assets/books-images/book-bg1.jpg'

const ProductListingCard = () => {
    return (
        <div className="product-listing-card">
             <div className="product-listing-img-container">
                <img src={ProductImage} alt="product-listing-image"
                    className="product-listing-image"/>
                </div>
            <div className="product-listing-details-container">
                <h3>Good To Greate Book</h3>
                <p className="author-name">Jim Collins</p>
                 <p className="pricing">$100-Cube</p>
                 <a href="#" className="product-listing-button">Button</a>
             </div>
        </div>
    )
}

export default ProductListingCard;