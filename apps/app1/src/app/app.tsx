import { Lib } from '@test/lib';
import { useState } from 'react';

export function App() {
  const [firstNumber, setFirstNumber] = useState<number | null>(null);
  const [secondNumber, setSecondNumber] = useState<number | null>(null);
  const [result, setResult] = useState<number | string>(
    'Please enter valid numbers'
  );

  const handleResult = () => {
    setResult(
      firstNumber !== null &&
        secondNumber !== null &&
        (firstNumber !== 0 || secondNumber !== 0)
        ? Lib(firstNumber, secondNumber)
        : 'Please enter valid numbers'
    );
  };

  return (
    <div className="flex flex-col justify-center text-center">
      <h1 className="font-bold text-3xl">App1</h1>
      <h3 className="font-bold text-3xl">{result}</h3>

      <div className="space-x-3">
        <input
          id="firstNumber"
          type="number"
          className="w-72 p-2 rounded-md border-2 border-gray-400"
          placeholder={firstNumber === null ? 'Enter your first number...' : ''}
          value={firstNumber !== null ? firstNumber : ''}
          onChange={(e) =>
            setFirstNumber(e.target.value ? Number(e.target.value) : 0)
          }
        />
        <input
          id="secondNumber"
          type="number"
          className="w-72 p-2 rounded-md border-2 border-gray-400"
          placeholder={
            secondNumber === null ? 'Enter your second number...' : ''
          }
          value={secondNumber !== null ? secondNumber : ''}
          onChange={(e) =>
            setSecondNumber(e.target.value ? Number(e.target.value) : 0)
          }
        />

        <button
          className=" w- mt-4 p-2 bg-blue-950 text-white rounded"
          onClick={handleResult}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
