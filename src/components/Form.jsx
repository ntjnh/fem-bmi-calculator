export default function Form() {
    return (
        <form>
            <h2>Enter your details below</h2>

            <div>
                <div>
                    <input type="radio" name="units" id="metric" />
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
                    <input type="number" name="height" id="height" />
                    <span className="unit-height">cm</span>
                </div>

                <div>
                    <label htmlFor="weight">Weight</label>
                    <input type="number" name="weight" id="weight" />
                    <span className="unit-weight">kg</span>
                </div>
            </div>

            <div>
                <h3>Welcome!</h3>

                <p>Enter your height and weight and you&rsquo;ll see your BMI result here.</p>
            </div>
        </form>
    )
}
