import React from 'react'

export default function Input(props: { value: number, unit: string  }) {
  return (
   <div>
      <h2>Valor inicial:</h2>
      <p>{props.value} °{props.unit}</p>
    </div>
  )
}
