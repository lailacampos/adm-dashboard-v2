import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tailwindlogo from './assets/tailwind.svg'
import { Dialog } from '@headlessui/react'
import './App.css'

const App: React.FC = () => {
  const [isOpenSimpleModal, setIsOpenSimpleModal] = useState(false);
  const [isOpenHeadlessModal, setIsOpenHeadlessModal] = useState(false);

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
      <div className='card flex items-center justify-evenly flex-row'>
        <button 
          className='mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-60'
          onClick={() => setIsOpenSimpleModal(true)}
        >
          Abrir Modal Simples
        </button>
        <button
          className='mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition w-60'
          onClick={() => setIsOpenHeadlessModal(true)}
        >
          Abrir Modal Headless UI
        </button>
      </div>
      {/* Modal Simples */}
      {isOpenSimpleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="rounded-xl shadow-xl p-8 w-full max-w-md mx-4 bg-[#242424]">
            <h2 className="text-xl font-bold mb-2">Modal Simples</h2>
            <p className="mb-4">Esta é uma mensagem dentro do modal.</p>
            <button
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              onClick={() => setIsOpenSimpleModal(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Modal Headless UI */}
      <Dialog open={isOpenHeadlessModal} onClose={() => setIsOpenHeadlessModal(false)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
        <div className="rounded-xl shadow-xl p-8 w-full max-w-md mx-4 bg-[#242424] text-center">
          <h2 className="text-xl font-bold mb-2">Modal Headless UI</h2>
          <p className="mb-4">Esta é uma mensagem dentro do modal.</p>
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => setIsOpenHeadlessModal(false)}
          >
            Fechar
          </button>
        </div>
      </Dialog>
    </>
  )
}

export default App
