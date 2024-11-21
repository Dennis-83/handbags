function Product({redLabel, image, productTitle, price}) {
    return (
        <article>
            <span>{redLabel}</span>
            <img src={image} alt={productTitle}/>
            <p>{productTitle}</p>
            <h4>€{price},-</h4>
        </article>
    )
}

export default Product;