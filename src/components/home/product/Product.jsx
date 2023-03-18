import React, { useState } from 'react'
import { products } from '../../assets/data/data'
import Heading from '../../common/Heading'
import { ProductItems } from './ProductItems'

export const Product = () => {
    const [cartItems, setCartItems] = useState(products)

  return <>
            <section className='product'>
                <div className="container">
                    <Heading title='Popular Products' desc='The products are not real, their purpose is to have an effect' />
                    <ProductItems cartItems={cartItems} />
                </div>
            </section>
  </>
  
}

