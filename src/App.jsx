import './App.css'
import Button from "./assets/components/Button.jsx";
import Product from "./assets/components/Product.jsx";

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
        </>
    )
}

export default App
