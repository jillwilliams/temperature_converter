const celciusEl= document.getElementById("celcius")
const fahrenheitEl = document.getElementById("fahrenheit")
const kelvinEl = document.getElementById("kelvin")
const convertBtnEl = document.getElementById("convert-btn")


function calculateTheValues() {
    const celcius = celciusEl.value.trim()
    const fahrenheit = fahrenheitEl.value.trim()
    const kelvin = kelvinEl.value.trim()    
    
    if (celcius !== "") {
        const getCelcius = parseFloat(celciusEl.value)
        fahrenheitEl.value = (getCelcius * 9 / 5 + 32).toFixed(2)
        kelvinEl.value = ((getCelcius + 273.15)).toFixed(2)

    } else if (fahrenheit !== "") {
        const getFahrenheit = parseFloat(fahrenheitEl.value)
        celciusEl.value = (((getFahrenheit - 32) * 5) / 9).toFixed(2)
        kelvinEl.value = (((getFahrenheit - 32) * 5) / 9 + 273.15).toFixed(2)
    } else  if (kelvin !== "") {
        const getKelvin = parseFloat(kelvinEl.value)
        celciusEl.value = (getKelvin - 273.15).toFixed(2)
        fahrenheitEl.value = ((getKelvin - 273.15) * 1.8 + 32).toFixed(2)
    }
}