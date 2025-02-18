import { useState } from "react"

function App() {
const[color,setColor]=useState("green");

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
                                        {/* <div> acts as the full-screen container.
                                  className="w-full h-screen duration-200":
                                  w-full: Full width.
                                  h-screen: Full height of the viewport.
                                  duration-200: Adds a smooth 200ms transition when the background color changes.
                                  style={{ backgroundColor: color }}:
                                  Dynamically sets the background color using the color state. */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        
                                          {/* 1. fixed
                                    Makes the <div> stay in place even when scrolling.
                                    It remains fixed relative to the viewport.
                                    2. flex
                                    Enables Flexbox layout, allowing child elements to be arranged easily.
                                    3. flex-wrap
                                    Ensures that child elements wrap onto the next line if they don’t fit in a single row.
                                    4. justify-center
                                    Centers the child elements horizontally.
                                    5. bottom-12
                                    Positions the <div> 12 units (48px) from the bottom of the viewport.
                                    6. inset-x-0
                                    Shortcut for left-0 right-0, making the <div> span the full width of the screen.
                                    7. px-2
                                    Adds horizontal padding (8px on both left and right sides). */}
      <div className="fixed flex flex-wrap justify-center gap-3 shadaw-lg bg-white px-3 py-2">
                                          {/* . gap-3
                                    Adds spacing (12px) between child elements.
                                    5. shadow-lg
                                    Applies a large shadow effect, making the container look elevated (like a card or floating element).
                                    6. bg-white
                                    Sets the background color to white.
                                    7. px-3 py-2
                                    px-3 (horizontal padding: 12px) → Adds space inside on the left & right.
                                    py-2 (vertical padding: 8px) → Adds space inside on the top & bottom.
                                    8. rounded-3xl
                                    Makes the container’s corners highly rounded (like a pill shape). */}
      <button onClick={()=>setColor("red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>red</button>
      <button onClick={()=>setColor("green")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>green</button>
      <button onClick={()=>setColor("blue")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>blue</button>
      <button onClick={()=>setColor("black")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>black</button>
      <button onClick={()=>setColor("yellow")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}>yellow</button>
        </div>
      </div>

    </div>

  )
}

export default App
