import React, { useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState(0);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleButtonClick = (operation) => {
    let newValue;

    switch (operation) {
      case "+":
        newValue = parseFloat(result) + parseFloat(inputValue);
        break;
      case "-":
        newValue = parseFloat(result) - parseFloat(inputValue);
        break;
      case "*":
        newValue = parseFloat(result) * parseFloat(inputValue);
        break;
      case "/":
        newValue = parseFloat(result) / parseFloat(inputValue);
        break;
      default:
        return;
    }

    setInputValue(newValue.toString());
    setResult(newValue);
  };

  return (
    <header className="flex items-center justify-center h-screen bg-gray-100">
      <section className="w-[1200px] h-[700px] sm:w-[600px] md:w-[900px] lg:w-[1200px] xl:w-[1500px] mx-auto bg-white shadow-lg">
        <div className="top-0 left-0 right-0 bg-blue-800 p-5 z-10"></div>

        <div className="w-full md:w-[900px] mx-auto h-[200px] md:right-5 bg-white border border-blue-500 rounded-md my-20">
          <div className="flex items-center justify-center h-full">
            <div className="absolute">
              <input
                type="text"
                className="border-blue-700 border w-full md:w-[180px] h-[80px] mb-9"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-row space-x-2 mt-28 ml-2">
              <button
                onClick={() => handleButtonClick("+")}
                className="mt-2 bg-blue-800 text-white py-2 px-5"
              >
                +
              </button>
              <button
                onClick={() => handleButtonClick("-")}
                className="mt-2 bg-blue-800 text-white py-2 px-5"
              >
                -
              </button>
              <button
                onClick={() => handleButtonClick("*")}
                className="mt-2 bg-blue-800 text-white py-2 px-5"
              >
                *
              </button>
              <button
                onClick={() => handleButtonClick("/")}
                className="mt-2 bg-blue-800 text-white py-2 px-5"
              >
                /
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[900px] mx-auto h-[200px] md:right-10 bg-white border border-blue-500 rounded-md my-20">
          <div className="flex items-center justify-center h-full flex-col">
            <h1 className="font-bold text-[25px] text-blue-600">
              {inputValue}
            </h1>
            <h2 className="text-xl font-bold text-blue-600">
              Result: {result}
            </h2>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Calculator;
