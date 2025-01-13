import { useState, useEffect } from "react";

interface UserInputProps {
  passBmiToParent: (bmi: any) => void;
}

export default function UserInput({ passBmiToParent }: UserInputProps) {
  const [heightFeet, setHeightFeet] = useState<string>('5');
  const [heightInches, setHeightInches] = useState<string>('0');
  const [weightPounds, setWeightPounds] = useState<string>('100');

  useEffect(() => {
    const calculatedBmi = parseFloat(weightPounds) / (((parseFloat(heightFeet) * 12) + parseFloat(heightInches)) ** 2) * 703;
    passBmiToParent(isNaN(calculatedBmi) ? 'Invalid input.' : calculatedBmi);
  }, [heightFeet, heightInches, weightPounds]);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    switch (event.target.name) {
      case "heightFeet":
        setHeightFeet(event.target.value);
        break;
      case "heightInches":
        setHeightInches(event.target.value);  
        break;
      case "weightPounds":
        setWeightPounds(event.target.value);  
        break;    
      default:
        break;
    }
  }

  return (
    <div id="input-container" className="w-[290px] border-2 border-gray-100 mx-auto bg-white shadow-lg rounded-lg p-4 mt-3">
      <div id="height-input">
        <h2 className="text-gray-500 font-bold mt-1 mb-1">Enter Your Height:</h2>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col w-[125px]">
            <input type="text" className="border-2 border-slate-200 p-1 text-center" name="heightFeet" value={heightFeet} onChange={handleInputChange} />
            <label htmlFor="heightFeet" className="p-1 text-center">Feet</label>
          </div>
          <div className="flex flex-col w-[125px]">
            <input type="text" className="border-2 border-slate-200 p-1 text-center" name="heightInches" value={heightInches} onChange={handleInputChange} />
            <label htmlFor="heightInches" className="p-1 text-center">Inches</label>
          </div>
        </div>
      </div>
      <div id="weight-input">
        <h2 className="text-gray-500 font-bold mt-1 mb-1">Enter Your Weight:</h2>
        <div className="flex flex-col w-[125px]">
          <input type="text" className="border-2 border-slate-200 p-1 text-center" name="weightPounds" value={weightPounds} onChange={handleInputChange} />
          <label htmlFor="weightPounds" className="p-1 text-center">Pounds</label>
        </div>
      </div>
    </div>
  )
}
