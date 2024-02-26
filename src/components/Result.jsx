export default function Result(props) {
    return (
        <div className="flex flex-wrap">
            <div className="mb-6 md:mb-0 w-full md:w-1/3">
                <h4 className="mb-4 md:mb-0">Your BMI is...</h4>
                <input 
                    className="bg-transparent inline-block min-w-min text-5xl md:text-4xl" 
                    type="text" 
                    name="bmi" 
                    id="bmi" 
                    value={props.bmi}
                    readOnly 
                />
            </div>

            <div className="md:pl-2 w-full md:w-2/3">
                <p className="font-light text-sm">Your BMI suggests you&rsquo;re a healthy weight. Your ideal weight is between <strong className="font-semibold">63.6kg - 85.2kg</strong>.</p>
            </div>
        </div>
    )
}