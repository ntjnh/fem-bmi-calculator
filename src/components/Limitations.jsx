import data from '../data/limitations'
import iconGender from '../assets/img/icon-gender.svg'
import iconAge from '../assets/img/icon-age.svg'
import iconMuscle from '../assets/img/icon-muscle.svg'
import iconPregnancy from '../assets/img/icon-pregnancy.svg'
import iconRace from '../assets/img/icon-race.svg'
const icons = [iconGender, iconAge, iconMuscle, iconPregnancy, iconRace]

const limitations = data.map((item, i) => {
    return (
        <article className={`bg-white drop-shadow-lg p-6 md:p-8 rounded-xl`} key={i}>
            <h3 className="font-semibold inline-block mb-5 md:mb-6 pl-10 relative text-xl tracking-tight">
                <span className="absolute bg-center bg-contain bg-no-repeat h-7 inline-block left-0 w-7" style={{ backgroundImage: `url(${icons[i]})`}}></span>
                {item.heading}
            </h3>
            <p className="text-slate-550">{item.paragraph}</p>
        </article>
    )
})

export default function Limitations() {
    return (
        <section className="mb-24 md:mb-0 px-6 md:px-0 md:py-28 bg-gradient-to-r from-cyan-50 to-white">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    <div className="md:bg-[#e4fcfe] mb-9 md:mb-0 md:p-8 rounded-xl text-center md:text-left">
                        <h2 className="font-medium leading-[1.125] mb-8 md:mb-4 text-[34px] md:text-4xl tracking-tighter">Limitations of BMI</h2>
                        <p className="text-slate-550">Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
                    </div>

                    {limitations}
                </div>
            </div>
        </section>
    )
}