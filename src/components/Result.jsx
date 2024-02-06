export default function Result(props) {
    return (
        <div className="flex">
            <div className="w-1/3">
                <h4>Your BMI is...</h4>
                <h5 className="text-4xl">{props.bmi}</h5>
            </div>

            <div className="pl-2 w-2/3">
                <p className="font-light text-sm">Your BMI suggests you&rsquo;re a healthy weight. Your ideal weight is between <strong className="font-semibold">63.6kg - 85.2kg</strong>.</p>
            </div>
        </div>
    )
}