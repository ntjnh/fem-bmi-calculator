import { useState } from 'react'
import Result from './Result'

export default function Form() {
    const starterText = (
        <div>
            <h3>Welcome!</h3>

            <p>Enter your height and weight and you&rsquo;ll see your BMI result here.</p>
        </div>
    )
    const [bmiResult, setBmiResult] = useState(0)
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)

    function handleHeightChange(e) {
        setHeight(e.target.value)
    }

    function handleWeightChange(e) {
        setWeight(e.target.value)
    }

    const heightMetric = height
    const weightMetric = weight
    const bmiCalculation = weightMetric/(heightMetric * heightMetric)
    const bmi = Math.round(bmiCalculation * 10) / 10

    function handleBmiChange() {
        setBmiResult(bmi)
    }

    return (
        <form className="bg-white drop-shadow-2xl ml-auto p-9 rounded-2xl w-4/5" onChange={handleBmiChange}>
            <h2 className="font-semibold mb-8 text-2xl tracking-tight">Enter your details below</h2>

            <div className="flex mb-9">
                <div className="inline-block w-1/2">
                    <input className="mr-4" type="radio" name="units" id="metric" />
                    <label className="font-semibold text-lg" htmlFor="metric">Metric</label>
                </div>

                <div className="inline-block w-1/2">
                    <input className="mr-4" type="radio" name="units" id="imperial" />
                    <label className="font-semibold text-lg" htmlFor="imperial">Imperial</label>
                </div>
            </div>

            <div className="flex justify-between pt-6">
                <div className="inline-block relative w-[48%]">
                    <label className="absolute -top-8" htmlFor="height">Height</label>
                    <input className="border border-[#e0e1e3] p-6 rounded-xl w-full" type="number" name="height" id="height" onChange={handleHeightChange} placeholder="0" />
                    <span className="absolute align-middle inline-block leading-none right-6 top-7 unit-height">cm</span>
                </div>

                <div className="inline-block relative w-[48%]">
                    <label className="absolute -top-8" htmlFor="weight">Weight</label>
                    <input className="border border-[#e0e1e3] p-6 rounded-xl w-full" type="number" name="weight" id="weight" onChange={handleWeightChange} placeholder="0" />
                    <span className="absolute align-middle inline-block leading-none right-6 top-7 unit-weight">kg</span>
                </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-400 mt-8 px-6 py-8 rounded-l-md rounded-r-full text-white">

                {bmiResult ? <Result bmi={bmiResult} /> : starterText}
                
            </div>
        </form>
    )
}
