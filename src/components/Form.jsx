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

    const [showImperial, setShowImperial] = useState(false)
    const [bmiResult, setBmiResult] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [heightFt, setHeightFt] = useState('')
    const [heightIn, setHeightIn] = useState('')
    const [weightSt, setWeightSt] = useState('')
    const [weightLbs, setWeightLbs] = useState('')

    function handleUnitChange(e) {
        setShowImperial(prev => !prev)
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (showImperial) {
            const heightI = [Number(heightFt), Number(heightIn)]
            const weightI = [Number(weightSt), Number(weightLbs)]

            setBmiResult(calculation(showImperial, Number(heightI), Number(weightI)))
        } else {
            setBmiResult(calculation(showImperial, Number(height), Number(weight)))
        }
    }

    const metricFields = (
        <div className={`flex flex-wrap justify-between pt-6`}>
            <div className="inline-block mb-11 md:mb-0 relative w-full md:w-[48%]">
                <label className="absolute -top-7 md:-top-8 text-slate-550 text-sm md:text-base" htmlFor="height">Height</label>
                <input 
                    className="border border-[#e0e1e3] p-[22px] md:p-6 rounded-xl font-semibold leading-none text-[22px] w-full placeholder:text-[#C6C6C8]" 
                    type="number" 
                    name="height" 
                    id="height" 
                    value={height}
                    onChange={e => setHeight(e.target.value)} 
                    placeholder="188"
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
                    placeholder="80.3" 
                />
                <span className="absolute align-middle font-semibold inline-block leading-none right-6 text-blue-500 text-[23px] top-6 unit-weight">kg</span>
            </div>
        </div>
    )

    const imperialFields = (
        <div className={`flex flex-wrap justify-between pt-6`}>
            <div className="inline-block mb-11 md:mb-0 relative w-full md:w-[24%]">
                <label className="absolute -top-7 md:-top-8 text-slate-550 text-sm md:text-base" htmlFor="height">Height</label>
                <input 
                    className="border border-[#e0e1e3] p-[22px] md:p-6 rounded-xl font-semibold leading-none text-[22px] w-full placeholder:text-[#C6C6C8]" 
                    type="number" 
                    name="height" 
                    id="height" 
                    value={heightFt}
                    onChange={e => setHeightFt(e.target.value)} 
                    placeholder="6"
                />
                <span className="absolute align-middle font-semibold inline-block leading-none right-6 text-blue-500 text-[23px] top-6 unit-height">ft</span>
            </div>

            <div className="inline-block mb-11 md:mb-0 relative w-full md:w-[24%]">
                <label className="hidden" htmlFor="height">Height</label>
                <input 
                    className="border border-[#e0e1e3] p-[22px] md:p-6 rounded-xl font-semibold leading-none text-[22px] w-full placeholder:text-[#C6C6C8]" 
                    type="number" 
                    name="height" 
                    id="height" 
                    value={heightIn}
                    onChange={e => setHeightIn(e.target.value)} 
                    placeholder="2"
                />
                <span className="absolute align-middle font-semibold inline-block leading-none right-6 text-blue-500 text-[23px] top-6 unit-height">in</span>
            </div>

            <div className="inline-block relative w-full md:w-[24%]">
                <label className="absolute -top-7 md:-top-8 text-slate-550 text-sm md:text-base" htmlFor="weight">Weight</label>
                <input 
                    className="border border-[#e0e1e3] p-[22px] md:p-6 rounded-xl font-semibold leading-none text-[22px] w-full placeholder:text-[#C6C6C8]" 
                    type="number" 
                    name="weight" 
                    id="weight" 
                    value={weightSt}
                    onChange={e => setWeightSt(e.target.value)} 
                    placeholder="12" 
                />
                <span className="absolute align-middle font-semibold inline-block leading-none right-6 text-blue-500 text-[23px] top-6 unit-weight">st</span>
            </div>

            <div className="inline-block relative w-full md:w-[24%]">
                <label className="hidden" htmlFor="weight">Weight</label>
                <input 
                    className="border border-[#e0e1e3] p-[22px] md:p-6 rounded-xl font-semibold leading-none text-[22px] w-full placeholder:text-[#C6C6C8]" 
                    type="number" 
                    name="weight" 
                    id="weight" 
                    value={weightLbs}
                    onChange={e => setWeightLbs(e.target.value)} 
                    placeholder="9" 
                />
                <span className="absolute align-middle font-semibold inline-block leading-none right-6 text-blue-500 text-[23px] top-6 unit-weight">lbs</span>
            </div>
        </div>
    )

    return (
        <form className="bg-white drop-shadow-2xl p-6 md:p-9 rounded-2xl" onSubmit={handleSubmit}>
            <h2 className="font-semibold mb-5 md:mb-8 text-2xl tracking-tight">Enter your details below</h2>

            <div className="flex mb-7 md:mb-10">
                <div className="w-1/2">
                    <label className="radio-wrap" htmlFor="metric">Metric
                        <input type="radio" name="units" id="metric" value="metric" onChange={e => handleUnitChange(e)} defaultChecked />
                        <span className="button-radio"></span>
                    </label>
                </div>

                <div className="w-1/2">
                    <label className="radio-wrap" htmlFor="imperial">Imperial
                        <input type="radio" name="units" id="imperial" value="imperial" onChange={e => handleUnitChange(e)} />
                        <span className="button-radio"></span>
                    </label>
                </div>
            </div>
            
            {showImperial ? imperialFields : metricFields}

            <div className="mt-6">
                <button className="border-2 border-slate-820 bg-slate-820 hover:bg-slate-800 hover:border-slate-800 font-medium px-6 py-4 rounded-xl text-white text-xl w-full" type="submit">Calculate</button>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-400 mt-8 px-6 py-8 rounded-lg text-white">

                {bmiResult ? <Result bmi={bmiResult} height={height} /> : starterText}
                
            </div>
        </form>
    )
}
