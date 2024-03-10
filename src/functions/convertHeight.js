export default function convertHeight(height) {

    const heightInInches = (height[0] * 12) + height[1]
    const inchesToCm = Math.round(heightInInches * 2.54)
    const heightInMetres = inchesToCm / 100

    return heightInMetres
}
