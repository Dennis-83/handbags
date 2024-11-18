import './App.css'
import Button from "./assets/components/Button.jsx";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    label="to the collection"
                    disabled={false}
                />
                <Button
                    label="shop all bags"
                    disabled={false}
                />
                <Button
                    label="pre-orders"
                    disabled={true}
                />
            </nav>
        </>
    )
}

export default App
