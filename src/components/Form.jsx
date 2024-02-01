import { useState } from 'react'

export default function Form() {
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
    const bmi = weightMetric/(heightMetric * heightMetric)

    function handleBmiChange() {
        setBmiResult(bmi.toFixed(1))
    }

    return (
        <form onChange={handleBmiChange}>
            <h2>Enter your details below</h2>

            <div>
                <div>
                    <input type="radio" name="units" id="metric" checked />
                    <label htmlFor="metric">Metric</label>
                </div>

                <div>
                    <input type="radio" name="units" id="imperial" />
                    <label htmlFor="imperial">Imperial</label>
                </div>
            </div>

            <div>
                <div>
                    <label htmlFor="height">Height</label>
                    <input className="border border-black" type="number" name="height" id="height" onChange={handleHeightChange} />
                    <span className="unit-height">cm</span>
                </div>

                <div>
                    <label htmlFor="weight">Weight</label>
                    <input className="border border-black" type="number" name="weight" id="weight" onChange={handleWeightChange} />
                    <span className="unit-weight">kg</span>
                </div>
            </div>

            <div>
                <h3>Welcome!</h3>

                <p>Enter your height and weight and you&rsquo;ll see your BMI result here.</p>

                <p><strong>Height:</strong> {height}cm</p>
                <p><strong>Weight:</strong> {weight}kg</p>

                <h4>Your BMI is {bmiResult}</h4>
            </div>
        </form>
    )
}
