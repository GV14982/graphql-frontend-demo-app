import './App.css'
import { Provider } from 'urql'
import { Country } from './Country'
import { client } from './client'

function App() {
  return (
    <Provider value={client}>
      <Country />
    </Provider>
  )
}

export default App
