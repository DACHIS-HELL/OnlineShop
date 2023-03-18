import React from 'react'
import Card from './hero/card'
import { Hero } from './hero/Hero'
import { Product } from './product/Product'
import { TopProduct } from './topproducts/TopProduct'

export default function Home() {
  return (
    <>
    <Hero/>
    <Card/>
    <Product/>
    <TopProduct/>
    </>
  )
}
