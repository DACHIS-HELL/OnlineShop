import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { products } from '../../assets/data/data'
import { SearchItems } from './SearchItems'

export const Hero = () => {
    const [value, setValue] = useState("")
    const onChanage = (e) => {
      setValue(e.target.value)
    }
  
    const onSearch = (key) => {
      setValue(key)
    }
    return (
      <>
        <section className='hero'>
          <div className='container'>
            <h1>
                This is test project with <span>ReactJs</span>
            </h1>
            <p>This site has no purpose other than to influence employers</p>
            <div className='search'>
              <span>All Categories</span>
              <hr />
              <input type='text' placeholder='Search Products...' onChange={onChanage} value={value} />
              <button onClick={() => onSearch(value)}>
                <BiSearch className='serachIcon heIcon' />
              </button>
            </div>
            <SearchItems products={products} value={value} onSearch={onSearch} />
            <p>To find a product, start the search from the first letter of the product name</p>
          </div>
        </section>
      </>
    )
  }
  