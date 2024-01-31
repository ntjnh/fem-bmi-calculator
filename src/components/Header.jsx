import Form from './Form'

export default function Header() {
    return (
        <header className="flex">
            <div className="w-1/2">
                <h1 className="font-semibold text-5xl">Body Mass Index Calculator</h1>
                <p>Better understand your weight in relation to your height using our body mass index (BMI) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and wellbeing.</p>
            </div>

            <section className="w-1/2">
                <Form />
            </section>
        </header>
    )
}
