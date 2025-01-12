import { useState } from "react"
import Header from "./components/Header";
import UserInput from "./components/UserInput"
import CalculatedBmi from "./components/CalculatedBmi"

export default function App() {
  const [calculatedBmi, setCalculatedBmi] = useState<any>(19.5);
  
  const passBmiToParent = (bmi: any) => {
    setCalculatedBmi(bmi);
  }

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <UserInput passBmiToParent={passBmiToParent} />
        <CalculatedBmi bmi={calculatedBmi} />     
      </main>      
    </>
  )
}
