function Tile({title, image, alt, children}) {

    // Korte versie
    return (
        <section>
            {image ? (
                <img src={image} alt={alt}/>
            ) : (
                <>
                    <h2>{title}</h2>
                    {children}
                </>
            )}
        </section>
    )

    // Lange versie
    // if (image) {
    //     return (
    //         <section>
    //             <img src={image} alt={alt}/>
    //         </section>
    //     )
    // } else {
    //     return (
    //         <section>
    //             <h2>{title}</h2>
    //             {children}
    //         </section>
    //     )
    // }

}

export default Tile;