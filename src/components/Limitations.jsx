import iconGender from '../assets/img/icon-gender.svg'
import iconAge from '../assets/img/icon-age.svg'
import iconMuscle from '../assets/img/icon-muscle.svg'
import iconPregnancy from '../assets/img/icon-pregnancy.svg'
import iconRace from '../assets/img/icon-race.svg'

const limitationsContent = [
    {
        icon: iconGender,
        heading: 'Gender',
        paragraph: 'The development and body fat composition of girls and boys vary with age. Consequently, a child’s age and gender are considered when evaluating their BMI.'
    },
    {
        icon: iconAge,
        heading: 'Age',
        paragraph: 'In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.'
    },
    {
        icon: iconMuscle,
        heading: 'Muscle',
        paragraph: 'BMI may misclassify muscular individuals as overweight or obese, as it doesn’t differentiate muscle from fat.'
    },
    {
        icon: iconPregnancy,
        heading: 'Pregnancy',
        paragraph: 'Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.'
    },
    {
        icon: iconRace,
        heading: 'Race',
        paragraph: 'Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.'
    }
]

const limitations = limitationsContent.map((item, i) => {
    return (
        <article className={`bg-white drop-shadow-lg p-6 md:p-8 rounded-xl`} key={i}>
            <h3 className="font-semibold inline-block mb-5 md:mb-6 pl-10 relative text-xl tracking-tight">
                <span className="absolute bg-center bg-contain bg-no-repeat h-7 inline-block left-0 w-7" style={{ backgroundImage: `url(${item.icon})`}}></span>
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