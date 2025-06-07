import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
    <h2 className='bg-gray-700 rounded-xl p-4 text-xl mb-3'>Tailwind css and props</h2>
    <Card name="Bad monkey" price ="$150" items={"25"}/>
    <Card name={"Sad monkey"} price ={"$200"} items={"28"}/>
    </>
  )
}

export default App
