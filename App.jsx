import { useState } from "react"
import { collection, addDoc } from "firebase/firestore"
import { db } from "./firebase"

function App() {

  const [name, setName] = useState("")

  async function addAnimal() {
    await addDoc(collection(db, "animals"), {
      name: name
    })
    alert("Saved!")
  }

  return (
    <div>
      <h1>Animal App</h1>

      <input 
        type="text"
        placeholder="Animal Name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addAnimal}>
        Save
      </button>
    </div>
  )
}

export default App
