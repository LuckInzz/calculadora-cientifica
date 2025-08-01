import { use, useState } from 'react'
import './App.css'
import Button from './components/Button'
import Display from './components/Display'

import { create, all, re } from 'mathjs';
const math = create(all);

function App() {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('')
  const [ans, setAns] = useState ('')


  const handleButtonClick = (value) => {
    switch(value) {
      case '=':
        try {
          const calcResult = math.evaluate(expression)
          setResult(String(calcResult))
          setAns(String(calcResult))
        } catch (error) {
          setResult("Syntax ERROR\n[AC] : Cancel")
        }
        break

      case 'AC':
        setExpression('')
        setResult('')
        break

      case 'Ans':
        setExpression(ans)
        break

      case 'x':
        if (result !== ''){
          setExpression(result + '*')
          setResult('')
        }
        else
          setExpression((prev) => prev + '*')
        break

      case '÷':
        if (result !== ''){
          setExpression(result + '/')
          setResult('')
        }
        else
          setExpression((prev) => prev + '/')
        break

      case '+':
        if (result !== ''){
          setExpression(result + '+')
          setResult('')
        }
        else
          setExpression((prev) => prev + '+')
        break

      case '-':
        if (result !== ''){
          setExpression(result + '-')
          setResult('')
        }
        else
          setExpression((prev) => prev + '-')
        break

      default:
        if (result !== ''){
          setResult('')
          setExpression('')
        }
        setExpression((prev) => prev + value)
        break
    }
  }

  return (
    <main className='min-h-screen flex flex-col items-center p-4 sm:p-8'>
      <h1 className='text-3xl mb-15'>Calculadora Científica</h1>
      <div className='container flex flex-col md:flex-row gap-5 md:gap-10'>
        <div className='calculator bg-gray-600 border-b-4 border-b-gray-700 p-4 
                        rounded-2xl shadow-[-4px_-4px_8px_rgba(0,0,0,0.6)]'>

          <Display exp={expression} result={result}/>

          {/* Grid para organizar todos os botões */}
          <div className='grid grid-cols-6 gap-2 mt-5 mb-5'>
            {/* Linha 3 */}
            <Button value='Shift' type='black-buttons' onClick={handleButtonClick}/>
            <Button value='Alpha' type='black-buttons' onClick={handleButtonClick}/>
            <Button value='x⁻¹' type='black-buttons' onClick={handleButtonClick}/>
            <Button value='x³' type='black-buttons' onClick={handleButtonClick}/>
            <Button value='Abs' type='black-buttons' onClick={handleButtonClick} />
            <Button value='log■▯' type='black-buttons' onClick={handleButtonClick}/>

            {/* Linha 4 */}
            <Button value='▮/▯' type='black-buttons' onClick={handleButtonClick}/>
            <Button value='√■' type='black-buttons' onClick={handleButtonClick}/>
            <Button value='x²' type='black-buttons' onClick={handleButtonClick}/>
            <Button value='x?' type='black-buttons' onClick={handleButtonClick}/>
            <Button value='log' type='black-buttons' onClick={handleButtonClick}/>
            <Button value='ln' type='black-buttons' onClick={handleButtonClick}/>

            {/* Linha 5 */}
            <Button value='( - )' type='black-buttons' onClick={handleButtonClick}/>
            <Button value='º’ ’’' type='black-buttons' onClick={handleButtonClick}/>
            <Button value='hyp' type='black-buttons' onClick={handleButtonClick}/>
            <Button value='sin' type='black-buttons' onClick={handleButtonClick}/>
            <Button value='cos' type='black-buttons' onClick={handleButtonClick}/>
            <Button value='tan' type='black-buttons' onClick={handleButtonClick}/>

            {/* Linha 6 */}
            <Button value='RCL' type='black-buttons' onClick={handleButtonClick}/>
            <Button value='ENG' type='black-buttons' onClick={handleButtonClick}/>
            <Button value='(' type='black-buttons' onClick={handleButtonClick}/>
            <Button value=')' type='black-buttons' onClick={handleButtonClick}/>
            <Button value='S<=>D' type='black-buttons' onClick={handleButtonClick}/>
            <Button value='M+' type='black-buttons' onClick={handleButtonClick}/>
          </div>

          <div className='grid grid-cols-5 gap-2 mt-5 mb-5'>
            {/* Linha 7 */}
            <Button value='7' type='gray-buttons' onClick={handleButtonClick}/>
            <Button value='8' type='gray-buttons' onClick={handleButtonClick}/>
            <Button value='9' type='gray-buttons' onClick={handleButtonClick}/>
            <Button value='DEL' type='green-buttons' onClick={handleButtonClick}/>
            <Button value='AC' type='green-buttons' onClick={handleButtonClick}/>

            {/* Linha 8 */}
            <Button value='4' type='gray-buttons' onClick={handleButtonClick}/>
            <Button value='5' type='gray-buttons' onClick={handleButtonClick}/>
            <Button value='6' type='gray-buttons' onClick={handleButtonClick}/>
            <Button value='x' type='gray-buttons' onClick={handleButtonClick}/>
            <Button value='÷' type='gray-buttons' onClick={handleButtonClick}/>

            {/* Linha 9 */}
            <Button value='1' type='gray-buttons' onClick={handleButtonClick}/>
            <Button value='2' type='gray-buttons' onClick={handleButtonClick}/>
            <Button value='3' type='gray-buttons' onClick={handleButtonClick}/>
            <Button value='+' type='gray-buttons' onClick={handleButtonClick}/>
            <Button value='-' type='gray-buttons' onClick={handleButtonClick}/>

            {/* Linha 10 */}
            <Button value='0' type='gray-buttons' onClick={handleButtonClick}/>
            <Button value='.' type='gray-buttons' onClick={handleButtonClick}/>
            <Button value='x10?' type='gray-buttons' onClick={handleButtonClick}/>
            <Button value='Ans' type='gray-buttons' onClick={handleButtonClick}/>
            <Button value='=' type='gray-buttons' onClick={handleButtonClick}/>
          </div>
        </div>
        <div className='equation-history bg-white border-b-4 border-r-4 border-b-gray-200  p-5 w-75
                      border-r-gray-200 rounded-2xl shadow-[-4px_-4px_8px_rgba(0,0,0,0.6)]'>
          <h2>Equation History</h2>
        </div>
      </div>
    </main>
  )
}

export default App
