import InputCard from '@/entities/things/InputCard'
import Card from '@/entities/things/ui/Card'
import React from 'react'
import { Products } from '../types';

export default async function InputOutput() {
    const url = "https://652124aea4199548356cd977.mockapi.io/products"
    const response = await fetch(url);
    const products:Products[] = await response.json(); 
   return (
    <>
     <InputCard/>
      {products.map((product) => (
        <div key={product.id}>
          <Card head={product.head} text={product.text} />
        </div>
      ))}
      </>
  )
}
