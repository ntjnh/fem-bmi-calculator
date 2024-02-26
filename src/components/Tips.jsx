import iconEating from '../assets/img/icon-eating.svg'
import iconExercise from '../assets/img/icon-exercise.svg'
import iconSleep from '../assets/img/icon-sleep.svg'

export default function Tips() {
    const tipsContent = [
        {
            icon: iconEating,
            heading: 'Healthy eating',
            paragraph: 'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarify, and mood.'
        },
        {
            icon: iconExercise,
            heading: 'Regular exercise',
            paragraph: 'Exercise improves fitness, aids weight control, elevates mood and reduces disease risk, fostering wellness and longevity.'
        },
        {
            icon: iconSleep,
            heading: 'Adequate sleep',
            paragraph: 'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.'
        }
    ]

    const tips = tipsContent.map((tip, i) => {
        return (
            <article key={i} className="pb-10 md:pb-0 w-full md:w-[33%]">
                <img className="mb-7 md:mb-10" src={tip.icon} />
                <h3 className="font-semibold mb-6 md:mb-7 text-2xl tracking-tighter">{tip.heading}</h3>
                <p className="max-w-[360px] text-slate-550">{tip.paragraph}</p>
            </article>
        )
    })

    return (
        <section className="bg-gradient-to-r from-white to-cyan-50 px-6 md:px-0 pb-4 pt-12 md:py-28">
            <div className="container">
                <div className="flex flex-wrap items-center justify-between">
                    {tips}
                </div>
            </div>
        </section>
    )
}