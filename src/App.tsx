import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tailwindlogo from './assets/tailwind.svg'
import './App.css'

const App: React.FC = () => {

  return (
    <>
      <div className='flex justify-center gap-4'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com" target="_blank">
          <img src={tailwindlogo} className="logo tailwind scale-150" alt="Tailwind CSS logo" />
        </a>
      </div>
      <div>

      </div>
      <h1>Vite + React + Tailwind CSS</h1>
      <div className="card">
        <p>
          Template de projeto React TypeScript com Vite e Tailwind CSS
        </p>
      </div>
    </>
  )
}

export default App
