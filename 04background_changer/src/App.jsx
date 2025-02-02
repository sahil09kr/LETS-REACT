import { useState } from "react"
function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="bg-purple-500 h-screen flex items-center justify-center">
            <h1 className="text-white text-4xl">Hello, Tailwind in React!</h1>
        </div>
    );

}

export default App
