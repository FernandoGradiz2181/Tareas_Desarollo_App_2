import React from 'react'

export default function Conversor(props: { value: number, unit: string }) {
  
    let celcius = 0;
    let fahrenheit = 0;
    let kelvin = 0;

    if (props.unit === 'C') {
        celcius = props.value;
        fahrenheit = (props.value * 9 / 5) + 32;
        kelvin = props.value + 273.15;
    }
  
  if (props.unit === 'F') {
    celcius = (props.value - 32) * 5 / 9;
    fahrenheit = props.value;
    kelvin = (props.value - 32) * 5 / 9 + 273.15;
  }

  if (props.unit === 'K') {
    celcius = props.value - 273.15;
    fahrenheit = (props.value - 273.15) * 9 / 5 + 32;
    kelvin = props.value;
  }
  
  
  
  
  
    return (
      <div>
        <h2>Conversiones:</h2>
        <ul>
          <li>Celsius: {celcius} °C</li>
          <li>Fahrenheit: {fahrenheit} °F</li>
        <li>Kelvin: {kelvin} K</li>
      </ul>
    </div>
  )
}
