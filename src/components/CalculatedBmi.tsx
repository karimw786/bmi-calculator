interface CalculatedBmiProps {
  bmi: any;
}

export default function CalculatedBmi({ bmi }: CalculatedBmiProps) {
  const getBmiCategory = (bmiScore: number) => {
    if (bmiScore < 18.5) {
      return "Underweight";
    } 
    else if (bmiScore >= 18.5 && bmiScore <= 24.9) {
      return "Normal weight";
    } 
    else if (bmiScore >= 25 && bmiScore <= 29.9) {
      return "Overweight";
    } 
    else {
      return "Obese";
    }
  }

  return (
    <div id="output-container" className="text-center mt-10">
        <h2 className="text-2xl font-bold">Your BMI:</h2>
        <p className="text-6xl">{ !isNaN(bmi) ? bmi.toFixed(1) : bmi }</p>
        <p className="text-2xl">{ !isNaN(bmi) ? getBmiCategory(bmi.toFixed(1)) : "" }</p>
        <p className="mt-8">
          <span className="font-semibold">BMI Categories:</span><br />
          Underweight = Less than 18.5<br />
          Normal weight = 18.5-24.9<br />
          Overweight = 25-29.9<br />
          Obese = 30 or greater
        </p>
    </div>
  )
}
