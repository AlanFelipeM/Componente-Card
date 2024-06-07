import Card from "./components/Card";
import ktposterImg from "./assets/kt-poster.jpg"
import btposterImg from "./assets/bt-poster.jpg"
import wsposterImg from "./assets/ws-poster.jpg"

function App() {
  return (
    <>
      <Card title= "Pôster: Batman The Dark Knight" posterImg={ktposterImg}/>
      <Card title="Pôster: The Batman" posterImg={btposterImg}/>
      <Card title="Pôster: Why so Serious?" posterImg={wsposterImg}/>
     </>
  )
}

export default App