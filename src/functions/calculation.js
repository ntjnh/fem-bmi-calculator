export default function calculation(units, height, weight) {
    /*
    const heightMetric = height
    const weightMetric = weight
    const bmiCalculation = weightMetric/(heightMetric * heightMetric)
    const bmi = Math.round(bmiCalculation * 10) / 10
    */

    let bmi = 0

    if (units === 'metric') {
        let calc = weight / (height * height)
        bmi = Math.round(calc * 10) / 10
    } else if (units === 'imperial') {
        // 
    } else {
        console.error('Invalid units of measure.')
    }
    
    return bmi
}
