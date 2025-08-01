import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Display from './components/Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='min-h-screen flex flex-col items-center p-4 sm:p-10'>
      <h1 className='text-3xl mb-8'>Calculadora Científica</h1>
      <div className='container flex flex-col sm:flex-row'>
        <div className='calculator bg-gray-600 border-b-4 border-b-gray-700 p-4 
                        rounded-bl-2xl rounded-tl-2xl shadow-[-4px_-4px_8px_rgba(0,0,0,0.6)]'>
          <Display/>
          {/* Grid para organizar todos os botões */}
          <div className='grid grid-cols-6 gap-2 mt-5 mb-5'>
            {/* Linha 3 */}
            <Button value='Shift' type='black-buttons'/>
            <Button value='Alpha' type='black-buttons'/>
            <Button value='x⁻¹' type='black-buttons'/>
            <Button value='x³' type='black-buttons'/>
            <Button value='Abs' type='black-buttons'/>
            <Button value='log■▯' type='black-buttons'/>

            {/* Linha 4 */}
            <Button value='▮/▯' type='black-buttons'/>
            <Button value='√■' type='black-buttons'/>
            <Button value='x²' type='black-buttons'/>
            <Button value='x?' type='black-buttons'/>
            <Button value='log' type='black-buttons'/>
            <Button value='ln' type='black-buttons'/>

            {/* Linha 5 */}
            <Button value='( - )' type='black-buttons'/>
            <Button value='º’ ’’' type='black-buttons'/>
            <Button value='hyp' type='black-buttons'/>
            <Button value='sin' type='black-buttons'/>
            <Button value='cos' type='black-buttons'/>
            <Button value='tan' type='black-buttons'/>

            {/* Linha 6 */}
            <Button value='RCL' type='black-buttons'/>
            <Button value='ENG' type='black-buttons'/>
            <Button value='(' type='black-buttons'/>
            <Button value=')' type='black-buttons'/>
            <Button value='S<=>D' type='black-buttons'/>
            <Button value='M+' type='black-buttons'/>
          </div>

          <div className='grid grid-cols-5 gap-2 mt-5 mb-5'>
            {/* Linha 7 */}
            <Button value='7' type='gray-buttons'/>
            <Button value='8' type='gray-buttons'/>
            <Button value='9' type='gray-buttons'/>
            <Button value='DEL' type='green-buttons'/>
            <Button value='AC' type='green-buttons' className='rounded-tr-3xl'/>

            {/* Linha 8 */}
            <Button value='4' type='gray-buttons'/>
            <Button value='5' type='gray-buttons'/>
            <Button value='6' type='gray-buttons' className='rounded-tl-3xl'/>
            <Button value='×' type='gray-buttons'/>
            <Button value='÷' type='gray-buttons'/>

            {/* Linha 9 */}
            <Button value='1' type='gray-buttons'/>
            <Button value='2' type='gray-buttons'/>
            <Button value='3' type='gray-buttons'/>
            <Button value='+' type='gray-buttons'/>
            <Button value='-' type='gray-buttons'/>

            {/* Linha 10 */}
            <Button value='0' type='gray-buttons' className='rounded-bl-3xl'/>
            <Button value='.' type='gray-buttons'/>
            <Button value='×10?' type='gray-buttons'/>
            <Button value='Ans' type='gray-buttons'/>
            <Button value='=' type='gray-buttons' className='rounded-br-3xl'/>
          </div>
        </div>
        <div className='equation-history bg-white border-b-4 border-r-4 border-b-gray-200 
                      border-r-gray-200 p-4 rounded-br-2xl rounded-tr-2xl shadow-[0px_-4px_8px_rgba(0,0,0,0.6)]'>
          <h2>Equation History</h2>
        </div>
      </div>
    </main>
  )
}

export default App
