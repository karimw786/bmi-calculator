import { useState, useEffect } from "react";

interface UserInputProps {
  passBmiToParent: (bmi: any) => void;
}

export default function UserInput({ passBmiToParent }: UserInputProps) {
  const [unit, setUnit] = useState<number>(0); // Imperial
  const [height0, setHeight0] = useState<string>('5'); // 5 feet
  const [height1, setHeight1] = useState<string>('0'); // 0 inches
  const [weight, setWeight] = useState<string>('100'); // 100 pounds

  useEffect(() => {
    let calculatedBmi;
    
    if (unit === 0) {
      calculatedBmi = parseFloat(weight) / (((parseFloat(height0) * 12) + parseFloat(height1)) ** 2) * 703;
    } else {
      calculatedBmi = parseFloat(weight) / ((parseFloat(height0) / 100) ** 2);
    }

    passBmiToParent(isNaN(calculatedBmi) ? 'Invalid input.' : calculatedBmi);
  }, [unit, height0, height1, weight]);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    switch (event.target.name) {
      case "height0":
        setHeight0(event.target.value);
        break;
      case "height1":
        setHeight1(event.target.value);  
        break;
      case "weight":
        setWeight(event.target.value);  
        break;   
      default:
        break;
    }
  }

  const handleUnitChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.value === "Imperial") {
      setUnit(0); // Imperial
      setHeight0('5'); // 5 feet
      setHeight1('0'); // 0 inches
      setWeight('100'); // 100 pounds
    } else {
      setUnit(1); // Metric
      setHeight0('152'); // 152 centimeters
      setWeight('45'); // 45 kilograms
    }
  }

  return (
    <div id="input-container" className="w-[290px] border-2 border-gray-100 mx-auto bg-white shadow-lg rounded-lg p-4 mt-3">
      <div id="unit-input" className="text-center flex justify-center gap-2">
        <div>
          <input type="radio" id="unitImperial" name="unit" value="Imperial" checked={unit === 0 ? true : false} onChange={handleUnitChange} />
          <label htmlFor="unitImperial" className="mx-1">Imperial</label>
        </div>
        <div>
          <input type="radio" id="unitMetric" name="unit" value="Metric" checked={unit === 1 ? true : false} onChange={handleUnitChange} />
          <label htmlFor="unitMetric" className="mx-1">Metric</label>
        </div>
      </div>
      <div id="height-input">
        <h2 className="text-gray-500 font-bold mt-1 mb-1">Enter Your Height:</h2>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col w-[125px]">
            <input type="text" className="border-2 border-slate-200 p-1 text-center" name="height0" value={height0} onChange={handleInputChange} />
            <label htmlFor="height0" className="p-1 text-center">{unit === 0 ? "Feet" : "Centimeters"}</label>
          </div>
          <div className="flex flex-col w-[125px]">
            <input type="text" className={`border-2 border-slate-200 p-1 text-center ${unit === 0 ? '' : 'hidden'}`} name="height1" value={height1} onChange={handleInputChange} />
            <label htmlFor="height1" className="p-1 text-center">{unit === 0 ? "Inches" : ""}</label>
          </div>
        </div>
      </div>
      <div id="weight-input">
        <h2 className="text-gray-500 font-bold mt-1 mb-1">Enter Your Weight:</h2>
        <div className="flex flex-col w-[125px]">
          <input type="text" className="border-2 border-slate-200 p-1 text-center" name="weight" value={weight} onChange={handleInputChange} />
          <label htmlFor="weight" className="p-1 text-center">{unit === 0 ? "Pounds" : "Kilograms"}</label>
        </div>
      </div>
    </div>
  )
}
