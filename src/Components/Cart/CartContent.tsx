import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri'


const CartContent = () => {
  const cartProducts = [
    { id: 1, name: 'T-Shirt', price: 10,size:"M",color:"red",quantity:1,image:"https://picsum.photos/200?random=1"},
    { id: 2, name: 'Jeans', price: 25,size:"L",color:"black",quantity:1,image:"https://picsum.photos/200?random=4"},
    { id: 1, name: 'Product 1', price: 10,size:"M",color:"red",quantity:1,image:"https://picsum.photos/200?random=3"},
    { id: 1, name: 'Product 1', price: 10,size:"M",color:"red",quantity:1,image:"https://picsum.photos/200?random=2"},
    { id: 1, name: 'Product 1', price: 10,size:"M",color:"red",quantity:1,image:"https://picsum.photos/200?random=2"},
    { id: 1, name: 'Product 1', price: 10,size:"M",color:"red",quantity:1,image:"https://picsum.photos/200?random=2"},
    { id: 1, name: 'Product 1', price: 10,size:"M",color:"red",quantity:1,image:"https://picsum.photos/200?random=2"},
  ]

  return (
    <div>
      {
        cartProducts.map((product, index) => (
          <div key={index} className='flex items-start justify-between py-4 border-b '>
            <div className='flex items-start'>
          <img src={product.image} alt={product.name} className='w-20 h-24 object-cover mr-4 rounded'></img>
          <div className='flex flex-col'>
            <h3>{product.name}</h3>
            <p className='text-sm text-gray-500 '>size:{product.size} | color:{product.color}</p>
            <div className='flex items-center mt-2'> 
              <button className='border rounded px-2 py-1 font-medium text-xl'>
                -
                </button>
                <span className='mx-4'>{product.quantity}</span>
              <button className='border rounded px-2 py-1 font-medium text-xl'>
                +
                </button>
            </div>
            </div>

            </div>
            <div>
            <p>Price: ${product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin3Line className='h-6 w-6 mt-2 text-red-600'/>
            </button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CartContent