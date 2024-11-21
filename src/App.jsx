import './App.css'
import Button from "./assets/components/Button.jsx";
import Product from "./assets/components/Product.jsx";
import Tile from "./assets/components/Tile.jsx";

function App() {

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
                    price={400}
                />
                <Product
                    redLabel="Best seller"
                    image="../src/assets/bag_2.png"
                    productTitle="The stylish bag"
                    price={250}
                />
                <Product
                    redLabel="New collection"
                    image="../src/assets/bag_3.png"
                    productTitle="The simple bag"
                    price={300}
                />
                <Product
                    redLabel="New collection"
                    image="../src/assets/bag_4.png"
                    productTitle="The trendy bag"
                    price={150}
                />
            </main>
            <footer>
                <Tile title="The Brand" >
                    {/*2x een lorem25 gebruikt*/}
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto culpa dicta dignissimos eveniet inventore ipsam, libero recusandae soluta veniam voluptatum. Eius iure libero molestias non?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis enim eveniet exercitationem, facilis, ipsa itaque labore libero nam odio optio, quod sint velit veritatis voluptatem?</p>
                </Tile>
                <Tile
                    image="../src/assets/brand.png"
                    alt="brand"
                />
                <Tile
                    image="../src/assets/our_story.png"
                    alt="our story"
                />
                <Tile title="Our Story" >
                    {/*1x een lorem50 gebruikt*/}
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque nostrum odio optio repellat. Asperiores consequuntur eligendi iure laboriosam totam. Accusantium aut deleniti dolorem, provident quia sapiente! Architecto atque blanditiis dignissimos earum est eum explicabo harum illo maxime mollitia nobis odit perferendis quibusdam quis sint, tempore ullam vitae voluptas voluptates.</p>
                </Tile>
            </footer>
        </>
    )
}

export default App
