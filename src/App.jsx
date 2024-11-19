import './App.css'
import Button from "./assets/components/Button.jsx";
import Product from "./assets/components/Product.jsx";
import Tile from "./assets/components/Tile.jsx";

function App() {
    // Tekst voor de paragrafen altijd in een array ivm .map methode in Tile component,
    // ook bij een enkele paragraaf. (evt op te lossen door strings naar array te converteren, dan kan enkele paragraaf ook in een string)
    const singleParagraph =["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aut cumque ea hic impedit, laboriosam nostrum odio perferendis porro temporibus ut voluptatum. Accusamus deserunt dolor dolore dolorum enim eum ex exercitationem expedita illum ipsum nostrum quae quis rem, totam unde ut, veritatis. Doloremque eius magni similique suscipit veritatis voluptatem."]
    const multipleParagraphs = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque et inventore nesciunt saepe suscipit. Accusantium eveniet incidunt nisi omnis possimus quisquam sequi ullam unde voluptatum!", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores consectetur cum eius in ipsum molestias, nihil pariatur possimus quis recusandae vero voluptate, voluptates voluptatibus?"]


    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    label="to the collection"
                    onClick={(label) => {
                        console.log(label);
                    }}
                    disabled={false}
                />
                <Button
                    label="shop all bags"
                    onClick={(label) => {
                        console.log(label);
                    }}
                    disabled={false}
                />
                <Button
                    label="pre-orders"
                    onClick={(label) => {
                        console.log(label);
                    }}
                    disabled={true}
                />
            </nav>
            <main>
                <Product
                    redLabel="Best seller"
                    image="../src/assets/bag_1.png"
                    productTitle="The handy bag"
                    price="€400,-"
                />
                <Product
                    redLabel="Best seller"
                    image="../src/assets/bag_2.png"
                    productTitle="The stylish bag"
                    price="€250,-"
                />
                <Product
                    redLabel="New collection"
                    image="../src/assets/bag_3.png"
                    productTitle="The simple bag"
                    price="€300,-"
                />
                <Product
                    redLabel="New collection"
                    image="../src/assets/bag_4.png"
                    productTitle="The trendy bag"
                    price="€150,-"
                />
            </main>
            <footer>
                <Tile
                    title="The Brand"
                    tileText={multipleParagraphs}
                />
                <Tile
                    image="../src/assets/brand.png"
                    alt="brand"
                />
                <Tile
                    image="../src/assets/our_story.png"
                    alt="our story"
                />
                <Tile
                    title="Our Story"
                    tileText={singleParagraph}
                />
            </footer>
        </>
    )
}

export default App
