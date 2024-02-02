import logo from '../assets/img/heart.svg'
import Form from './Form'

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-white to-cyan-50 py-16">

            <div className="container mx-auto">

                <div className="mb-12">
                    <img className="w-[60px]" src={logo} alt="Site logo" />
                </div>

                <div className="flex flex-wrap items-center">

                    <div className="w-1/2">
                        <h1 className="font-medium leading-[1.125] mb-12 text-[64px] tracking-tighter">Body Mass <br />Index Calculator</h1>
                        <p className="text-[#596271] w-3/4">Better understand your weight in relation to your height using our body mass index (BMI) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and wellbeing.</p>
                    </div>

                    <section className="w-1/2">
                        <Form />
                    </section>

                </div>

            </div>

        </header>
    )
}
