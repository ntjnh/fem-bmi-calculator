import manEatingImage from '../assets/img/image-man-eating.webp'

export default function Meaning() {
    return (
        <section className="flex pt-20 pb-24">
            <div className="md:w-1/2">
                <img className="max-w-full" src={manEatingImage} alt="Man eating sushi" />
            </div>

            <div className="flex flex-wrap items-center pl-28 pt-28 md:w-1/2">
                <div>
                    <h2 className="font-medium leading-[1.125] mb-10 text-5xl tracking-tighter">What your BMI result means</h2>
                    <p className="text-slate-550">A BMI range of 18.5 to 24.9 is considered a &lsquo;healthy weight.&rsquo; Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruit and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
                </div>
            </div>
        </section>
    )
}
