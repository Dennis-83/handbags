import './App.css'
import Button from "./assets/components/Button.jsx";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    label="to the collection"
                    onClick={(label) => {
                        console.log( label );
                    }}
                    disabled={false}
                />
                <Button
                    label="shop all bags"
                    onClick={(label) => {
                        console.log( label );
                    }}
                    disabled={false}
                />
                <Button
                    label="pre-orders"
                    onClick={(label) => {
                        console.log( label );
                    }}
                    disabled={true}
                />
            </nav>
        </>
    )
}

export default App
