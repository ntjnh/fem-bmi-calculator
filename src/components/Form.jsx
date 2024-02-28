import { useState } from 'react'
import Result from './Result'
import calculation from '../functions/calculation'

export default function Form() {
    const starterText = (
        <div>
            <h3 className="font-medium mb-4 text-xl tracking-tight">Welcome!</h3>

            <p className="font-light text-sm">Enter your height and weight and you&rsquo;ll see your BMI result here.</p>
        </div>
    )
    const [bmiResult, setBmiResult] = useState(0)
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')

    function handleUnitChange(e) {
        setUnits(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setBmiResult(bmi)
    }

    // const heightMetric = height / 100
    // const weightMetric = weight
    // const bmiCalculation = weightMetric/(heightMetric * heightMetric)
    // const bmi = Math.round(bmiCalculation * 10) / 10
    const bmi = calculation(units, height, weight)

    return (
        <form className="bg-white drop-shadow-2xl p-6 md:p-9 rounded-2xl" onSubmit={handleSubmit}>
            <h2 className="font-semibold mb-5 md:mb-8 text-2xl tracking-tight">Enter your details below</h2>

            <div className="flex mb-7 md:mb-10">
                <div className="w-1/2">
                    <label className="radio-wrap" htmlFor="metric">Metric
                        <input type="radio" name="units" id="metric" value="metric" onChange={handleUnitChange} />
                        <span className="button-radio"></span>
                    </label>
                </div>

                <div className="w-1/2">
                    <label className="radio-wrap" htmlFor="imperial">Imperial
                        <input type="radio" name="units" id="imperial" value="imperial" onChange={handleUnitChange} />
                        <span className="button-radio"></span>
                    </label>
                </div>
            </div>

            <div className="flex flex-wrap justify-between pt-6">
                <div className="inline-block mb-11 md:mb-0 relative w-full md:w-[48%]">
                    <label className="absolute -top-7 md:-top-8 text-slate-550 text-sm md:text-base" htmlFor="height">Height</label>
                    <input 
                        className="border border-[#e0e1e3] p-[22px] md:p-6 rounded-xl font-semibold leading-none text-[22px] w-full placeholder:text-[#C6C6C8]" 
                        type="number" 
                        name="height" 
                        id="height" 
                        value={height}
                        onChange={e => setHeight(e.target.value)} 
                        placeholder="0"
                    />
                    <span className="absolute align-middle font-semibold inline-block leading-none right-6 text-blue-500 text-[23px] top-6 unit-height">cm</span>
                </div>

                <div className="inline-block relative w-full md:w-[48%]">
                    <label className="absolute -top-7 md:-top-8 text-slate-550 text-sm md:text-base" htmlFor="weight">Weight</label>
                    <input 
                        className="border border-[#e0e1e3] p-[22px] md:p-6 rounded-xl font-semibold leading-none text-[22px] w-full placeholder:text-[#C6C6C8]" 
                        type="number" 
                        name="weight" 
                        id="weight" 
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        placeholder="0" 
                    />
                    <span className="absolute align-middle font-semibold inline-block leading-none right-6 text-blue-500 text-[23px] top-6 unit-weight">kg</span>
                </div>
            </div>

            <div className="mt-6">
                <button className="border-2 border-slate-820 bg-slate-820 hover:bg-slate-800 hover:border-slate-800 font-medium px-6 py-4 rounded-xl text-white text-xl w-full" type="submit">Calculate</button>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-400 mt-8 px-6 py-8 rounded-lg text-white">

                {bmiResult ? <Result bmi={bmiResult} height={height} /> : starterText}
                
            </div>
        </form>
    )
}
