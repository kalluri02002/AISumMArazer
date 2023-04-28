import Hero from "./componets/Hero"
import Demo from "./componets/Demo"
import "./App.css"

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient"/>
      </div>
      <div className="app">
        <Hero/>
        <Demo/>

      </div>

    </main>
  )
}

export default App