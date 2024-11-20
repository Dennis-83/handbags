function Tile({title, tileText, image, alt}) {

    // Korte versie
    return (
        <section>
            {image ? (
                <img src={image} alt={alt}/>
            ) : (
                <>
                    <h2>{title}</h2>
                    {/*Meerdere paragrafen kunnen zo worden toegevoegd(of een enkele, mits in een array*/}
                    {tileText.map((paragraph) => (
                        <p>{paragraph}</p>
                    ))}
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
    //             {tileText.map((paragraph) => (
    //                 <p>{paragraph}</p>
    //             ))}
    //         </section>
    //     )
    // }
}

export default Tile;