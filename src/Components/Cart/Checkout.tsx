import { useState } from "react"
import { useNavigate } from "react-router-dom"
import PayPalButton from "./PayPalButton"

const cart = {
  products: [

    { id: 1, name: 'T-Shirt', price: 10, size: "M", color: "red", image: "https://picsum.photos/200?random=1" },
    { id: 2, name: 'Jeans', price: 25, size: "L", color: "black", image: "https://picsum.photos/200?random=4" },
    { id: 1, name: 'Product 1', price: 10, size: "M", color: "red", image: "https://picsum.photos/200?random=3" },
    { id: 1, name: 'Product 1', price: 10, size: "M", color: "red", image: "https://picsum.photos/200?random=2" },
    { id: 1, name: 'Product 1', price: 10, size: "M", color: "red", image: "https://picsum.photos/200?random=2" }

  ],
  totalPrice: 65,
}
const Checkout = () => {
  const navigate = useNavigate()
  const [checkoutId,setCheckoutId]=useState<number|null>(null)
  const [shippingAddress, setShippingAddress] = useState({
    FirstName: "",
    LastName: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    phone: "",
  })
  const handleCreatedCheckout = (e:any)=>{
    e.preventDefault()
    setCheckoutId(123)
  }
  const handlePaymentSuccess=(details:CaretPositionFromPointOptions)=>{
    console.log("Payment Successful",details)
    navigate("/order-confirmation")
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* left section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form action="" onSubmit={handleCreatedCheckout}>
          <h3 className="text-lg mb-4">
            Contact Details
          </h3>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="">
              Email
            </label>
            <input
              type="email"
              id="email"
              value="user@example.com"
              className="w-full p-2 border rounded bg-gray-100"
              readOnly
            />
            <h3 className="text-lg mt-4 mb-4">Delivery</h3>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div >
                <label className="block text-gray-700" htmlFor="">
                  First Name
                </label>
                <input type="text"
                  value={shippingAddress.FirstName}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, FirstName: e.target.value })}
                  className="w-full p-2 border rounded " required />
              </div>
              <div >
                <label className="block text-gray-700" htmlFor="">
                  Last Name
                </label>
                <input type="text"
                  value={shippingAddress.LastName}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, LastName: e.target.value })}
                  className="w-full p-2 border rounded " required />
              </div>
            </div>
              <div>
              <label className="block text-gray-700" htmlFor="">
                Address
              </label>
              <input type="text" value={shippingAddress.address}
              onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
              className="w-full p-2 border rounded mb-4 " required
              />
              </div>
            <div className="mb-4 grid grid-cols-2 gap-4">

              <div>
              <label className="block text-gray-700" htmlFor="">
                City
              </label>
              <input type="text" value={shippingAddress.city}
              onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
              className="w-full p-2 border rounded" required
              />
              </div>

              <div>
              <label className="block text-gray-700" htmlFor="">
                Postal Code
              </label>
              <input type="text" value={shippingAddress.zip}
              onChange={(e) => setShippingAddress({ ...shippingAddress, zip: e.target.value })}
              className="w-full p-2 border rounded " required
              />
              </div>

            </div>
          </div>
          <div >
                <label className="block text-gray-700" htmlFor="">
                  Country
                </label>
                <input type="text"
                  value={shippingAddress.country}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
                  className="w-full p-2 border rounded " required />
              </div>
          <div className="mt-2" >
                <label className="block text-gray-700" htmlFor="">
                  Phone
                </label>
                <input type="text"
                  value={shippingAddress.phone}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
                  className="w-full p-2 border rounded " required />
              </div>
              <div className="mt-6">
                {!checkoutId ? (
                  <button type="submit"
                  className="w-full bg-black text-white py-3 rounded"
                  >Continue to Payment</button>

                ):(
                  <div>
                    <h3 className="text-lg mb-4">
                      Pay with PayPal
                    </h3>
                    {/* paypal component */}
                    <PayPalButton amount="100" onSuccess={handlePaymentSuccess}
                    onError={()=>alert("Payment Failed, Try Again.")}/>
                  </div>
                )}
              </div>
        </form>
      </div>
      {/* Right side */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-lg mb-4">
          Order Summary
        </h2>
        <div className="border-t py-4 mb-4">
          {cart.products.map((ProductDetails,index)=>(
            <div key={index} className="flex items-start justify-between py-2 border-b">
              <div className="flex items-start">
                <img src={ProductDetails.image} alt={ProductDetails.name} className="w-20 h-24 object-cover mr-4"></img>
                <div >
                  <h3 className="text-md">
                  {ProductDetails.name}
                  </h3>
                  <p className="text-gray-500 ">
                    Size:{ProductDetails.size}
                  </p>
                  <p className="text-gray-500 ">
                     Color:{ProductDetails.color}
                  </p>
                </div>
                

              </div>
              <p className="text-xl">
              ${ProductDetails.price?.toLocaleString()}
            </p>
            </div>
          ))}
        </div>

          <div className="flex justify-between items-center text-lg mb-4">
            <p>Subtotal:</p>
            <p>${cart.totalPrice?.toLocaleString()}</p>
          </div>
          <div className="flex justify-between items-center text-lg ">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
            <p>Total:</p>
            <p>${cart.totalPrice?.toLocaleString()}</p>
          </div>
      </div>
    </div>
  )
}

export default Checkout