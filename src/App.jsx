import { useEffect, useState, useRef } from 'react'
import './App.css'
import Button from './components/Button'
import Display from './components/Display'

import { create, all } from 'mathjs';
const math = create(all);

function App() {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('')
  const [ans, setAns] = useState ('')
  const [caretPos, setCaretPos] = useState(expression.length)
  const [eqHistory, setEqHistory] = useState([])
  const historyRef = useRef(null) 

  useEffect(() =>{ 
    if(caretPos > expression.length){
      setCaretPos(expression.length)
    }
  }, [expression, caretPos])

  useEffect (() => {
    if(historyRef.current) {
      historyRef.current.scrollDown = historyRef.current.scrollHeight
    }
  }, [eqHistory])

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "ArrowLeft") {
        setCaretPos((pos) => Math.max(0, pos - 1));
      } else if (e.key === "ArrowRight") {
        setCaretPos((pos) => Math.min(expression.length, pos + 1));
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [expression]);

  const handleButtonClick = (value) => {
    switch(value) {
      case '=':
        try {
          if (expression !== ''){
            const calcResult = math.evaluate(expression)
            setResult(String(calcResult))
            setAns(String(calcResult))
            const eq = expression + ' = ' + calcResult
            setEqHistory([eq, ...eqHistory])
          }
        } catch (error) {
          setResult("Syntax ERROR [AC] : Cancel")
        }
        break

      case 'AC':
        setExpression('')
        setResult('')
        setCaretPos('1')
        break

      case 'Ans':
        setExpression(ans)
        setCaretPos(ans.length)
        break
      
      case 'DEL':
        setExpression((prev) => prev.slice(0, caretPos - 1) + prev.slice(caretPos))
        setCaretPos(pos => Math.max(0, pos - 1))
        break

      case '×':
        setExpression((prev) => prev.slice(0, caretPos) + '*' + prev.slice(caretPos))
        setCaretPos(pos => pos + 1)
        break

      case '÷':
        setExpression((prev) => prev.slice(0, caretPos) + '/' + prev.slice(caretPos))
        setCaretPos(pos => pos + 1)
        break
      
      case 'x²':
        setExpression((prev) => prev.slice(0, caretPos) + '^2' + prev.slice(caretPos))
        if (expression.length >= 1)
          setCaretPos(pos => pos + 2)
        else
          setCaretPos(pos => pos - 2)
        break
      
      case 'x³':
        setExpression((prev) => prev.slice(0, caretPos) + '^3' + prev.slice(caretPos))
        if (expression.length >= 1)
          setCaretPos(pos => pos + 2)
        else
          setCaretPos(pos => pos - 2)
        break

      case 'x⁻¹':
        setExpression((prev) => prev.slice(0, caretPos) + '^-1' + prev.slice(caretPos))
        if (expression.length >= 1)
          setCaretPos(pos => pos + 3)
        else
          setCaretPos(pos => pos - 3)
        break

      case 'x?':
        setExpression((prev) => prev.slice(0, caretPos) + '^' + prev.slice(caretPos))
        if (expression.length >= 1)
          setCaretPos(pos => pos + 1)
        else
          setCaretPos(pos => pos - 1)
        break
      
      case '√■':
        setExpression((prev) => prev.slice(0, caretPos) + 'sqrt()' + prev.slice(caretPos))
        setCaretPos(pos => pos + 5)
        break

      case 'ln':
        setExpression((prev) => prev.slice(0, caretPos) + 'log()' + prev.slice(caretPos))
        setCaretPos(pos => pos + 4)
        break
      
      case 'log■▯':
        setExpression((prev) => prev.slice(0, caretPos) + 'log(,)' + prev.slice(caretPos))
        setCaretPos(pos => pos + 4)
        break

      case 'log':
        setExpression((prev) => prev.slice(0, caretPos) + 'log10()' + prev.slice(caretPos))
        setCaretPos(pos => pos + 6)
        break
      
      case 'sin':
        setExpression((prev) => prev.slice(0, caretPos) + 'sin()' + prev.slice(caretPos))
        setCaretPos(pos => pos + 4)
        break
      
      case 'cos':
        setExpression((prev) => prev.slice(0, caretPos) + 'cos()' + prev.slice(caretPos))
        setCaretPos(pos => pos + 4)
        break
      
      case 'tan':
        setExpression((prev) => prev.slice(0, caretPos) + 'tan()' + prev.slice(caretPos))
        setCaretPos(pos => pos + 4)
        break

      default:
        setExpression((prev) => prev.slice(0, caretPos) + value + prev.slice(caretPos))
        setCaretPos(pos => pos + 1)
        break
    }
  }

  return (
    <main className='min-h-screen p-4 sm:p-8'>
      <h1 className='text-3xl mb-15'>Scientific Calculator</h1>
      <div className='container flex flex-col md:flex-row gap-5 md:gap-10'>
        <div className='calculator bg-gray-600 border-b-4 border-r-4 border-b-gray-700 border-r-gray-700 p-4 
                        rounded-2xl shadow-[-4px_-4px_8px_rgba(0,0,0,0.6)]'>

          <Display exp={expression} result={result} caretPos={caretPos}/>

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
            <Button value='×' type='gray-buttons' onClick={handleButtonClick}/>
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
        <div className='equation-history bg-white border-b-4 border-r-4 border-b-gray-200 p-5 w-81
                      border-r-gray-200 rounded-2xl shadow-[-4px_-4px_8px_rgba(0,0,0,0.6)]'>
          <h2 className='mb-5'>Equation History</h2>
          <div ref={historyRef} className='rounded-2xl bg-gray-100 overflow-y-auto h-148'>
            <ul>
              {eqHistory.map((eq, index) => (
                <li key={index} className='p-2'>
                  <span>{eq}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
