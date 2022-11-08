import { InitialState } from "./coffe/context/products/InitialState"
import { AppRoutes } from "./routes"

function App() {

  return (
    <div className="App">
      <InitialState>
        <AppRoutes />
      </InitialState>
    </div>
  )
}

export default App
