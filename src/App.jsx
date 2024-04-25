import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './component/CoffeeCard'

function App() {
  const loadCoffee = useLoaderData()
  return (
    <>

      <h1 className='text-3xl font-semibold'>Coffee items</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          loadCoffee.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
