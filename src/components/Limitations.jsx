import data from '../data/limitations'

const limitations = data.map((item, i) => {
    return (
        <article className={`bg-white drop-shadow-lg p-8 rounded-xl`} key={i}>
            <h3 className="font-semibold inline-block mb-6 text-xl tracking-tighter">{item.heading}</h3>
            <p className="text-slate-550">{item.paragraph}</p>
        </article>
    )
})

export default function Limitations() {
    return (
        <section className="mb-16 pt-16">
            <div className="grid grid-cols-3 gap-8">
                <div className="bg-cyan-50 p-8 rounded-xl">
                    <h2 className="font-medium leading-[1.125] mb-4 text-4xl tracking-tighter">Limitations of BMI</h2>
                    <p className="italic">Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
                </div>

                {limitations}
            </div>
        </section>
    )
}