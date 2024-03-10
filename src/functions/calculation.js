import convertHeight from './convertHeight'
import convertWeight from './convertWeight'

export default function calculation(units, height, weight) {

    // BMI calculation function - weight (in kg) divided by height in metres squared
    const bmiCalculation = (height, weight) => weight / (height * height)

    let bmi = 0,
    system = units ? 'imperial' : 'metric'

    if (system === 'imperial') {
        // Height parameter is expected to be an array containing 2 numbers - feet and inches
        const metricHeight = convertHeight(height)

        // Weight parameter is also expected to be an array containing 2 numbers - stone and pounds
        const metricWeight = convertWeight(weight)

        bmi = bmiCalculation(metricHeight, metricWeight)
    } else if (system === 'metric') {
        // Convert the height from centimetres to metres
        const heightMetric = height / 100
        const weightMetric = weight

        bmi = bmiCalculation(heightMetric, weightMetric)
    }
    
    // Return the BMI rounded to 1 decimal place if not a whole number
    return Math.round(bmi * 10) / 10
}
