export default function convertWeight(weight) {
    // Convert the stones and pounds into pounds
    const weightInLbs = (weight[0] * 14) + weight[1]

    // Convert the weight in pounds into kilograms
    const weightInKg = weightInLbs / 2.20462

    return weightInKg
}
