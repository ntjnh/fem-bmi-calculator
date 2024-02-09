import { useState } from 'react'
import Result from './Result'

export default function Form() {
    const starterText = (
        <div>
            <h3 className="font-medium mb-4 text-xl tracking-tight">Welcome!</h3>

            <p className="font-light text-sm">Enter your height and weight and you&rsquo;ll see your BMI result here.</p>
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
        <form className="bg-white drop-shadow-2xl md:ml-auto p-6 md:p-9 rounded-2xl md:w-4/5" onChange={handleBmiChange}>
            <h2 className="font-semibold mb-5 md:mb-8 text-2xl tracking-tight">Enter your details below</h2>

            <div className="flex mb-8 md:mb-9">
                <div className="inline-block w-1/2">
                    <input className="mr-4" type="radio" name="units" id="metric" />
                    <label className="font-semibold text-md md:text-lg" htmlFor="metric">Metric</label>
                </div>

                <div className="inline-block w-1/2">
                    <input className="mr-4" type="radio" name="units" id="imperial" />
                    <label className="font-semibold text-md md:text-lg" htmlFor="imperial">Imperial</label>
                </div>
            </div>

            <div className="flex flex-wrap justify-between pt-6">
                <div className="inline-block mb-12 md:mb-0 relative w-full md:w-[48%]">
                    <label className="absolute -top-7 md:-top-8 text-slate-550 text-sm md:text-base" htmlFor="height">Height</label>
                    <input className="border border-[#e0e1e3] p-[22px] md:p-6 rounded-xl font-semibold leading-none text-[22px] w-full" type="number" name="height" id="height" onChange={handleHeightChange} placeholder="0" />
                    <span className="absolute align-middle font-semibold inline-block leading-none right-6 text-blue-500 text-[23px] top-6 unit-height">cm</span>
                </div>

                <div className="inline-block relative w-full md:w-[48%]">
                    <label className="absolute -top-7 md:-top-8 text-slate-550 text-sm md:text-base" htmlFor="weight">Weight</label>
                    <input className="border border-[#e0e1e3] p-[22px] md:p-6 rounded-xl font-semibold leading-none text-[22px] w-full" type="number" name="weight" id="weight" onChange={handleWeightChange} placeholder="0" />
                    <span className="absolute align-middle font-semibold inline-block leading-none right-6 text-blue-500 text-[23px] top-6 unit-weight">kg</span>
                </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-400 mt-8 px-6 py-8 rounded-lg text-white">

                {bmiResult ? <Result bmi={bmiResult} /> : starterText}
                
            </div>
        </form>
    )
}
