import logo from '../assets/img/heart.svg'
import Form from './Form'

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-white to-cyan-50 p-7 md:px-0 md:pb-24 md:pt-16">

            <div className="container">

                <div className="mb-4 md:mb-12 text-center md:text-left">
                    <img className="inline-block w-12 md:w-[60px]" src={logo} alt="Site logo" />
                </div>

                <div className="flex flex-wrap items-center">

                    <div className="mb-12 md:mb-0 text-center md:text-left md:w-1/2">
                        <h1 className="font-medium leading-[1.125] mb-8 text-[46px] md:text-[64px] tracking-tighter">Body Mass <br />Index Calculator</h1>
                        <p className="text-slate-550 md:w-4/5">Better understand your weight in relation to your height using our body mass index (BMI) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and wellbeing.</p>
                    </div>

                    <section className="md:w-1/2">
                        <Form />
                    </section>

                </div>

            </div>

        </header>
    )
}
