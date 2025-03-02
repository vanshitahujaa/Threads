const checkout={
    _id:"32345",
    createdAt:new Date(),
    checkoutItems:[
        {
            productid:"12345",
            name:"Jacket",
            color:"Black",
            size:"M",
            price: 100,
            quantity:1,
            image:"https://picsum.photos/150?random=3"
            },
        {
            productid:"12345",
            name:"Jacket",
            color:"Black",
            size:"M",
            price: 100,
            quantity:1,
            image:"https://picsum.photos/150?random=3"
            },
    ],
    shippingAddress:{
        address:"123 Fashion Street",
        city:"New York",
        state:"USA",
    }
    
}
const OrderConfirmationPage = () => {
    const calculateEstimatedDelivery=(createdAt:any)=>{
        const orderDate = new Date(createdAt);
        orderDate.setDate(orderDate.getDate()+10)
        return orderDate.toLocaleDateString()
    }
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white ">
        <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">Thank You for Your Order!</h1>
        {checkout&& (
            <div className="p-6 rounded-lg border">
                <div className="flex justify-between mb-20">
                    {/* Order Id and Date */}
                    <div>
                        <h2 className="text-xl font-semibold">
                            Order ID: {checkout._id}
                        </h2>
                        <p className="text-gray-500">
                            Order Date: {new Date(checkout.createdAt).toLocaleString()}
                        </p>
                    </div>
                    {/* Estimated Delivery */}
                    <div>
                    <p className="text-emerald-700 text-sm">
                            Estimated Delivery: {" "}
                            {calculateEstimatedDelivery(checkout.createdAt)}
                        </p> 
                    </div>
                </div>
                {/* Ordered items */}
                <div className=" mb-20">
                    {checkout.checkoutItems.map((item)=>(
                        <div key={item.productid} className="flex items-center mb-4">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover object-center rounded-lg mr-4"/>
                            <div>
                            <h4 className="text-lg font-semibold">
                                {item.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                                {item.color} | {item.size}
                            </p>
                            </div>
                            <div className="ml-auto text-right">
                                <p className="text-lg font-semibold">
                                    ${item.price}
                                </p>
                                <p className="text-sm text-gray-500">
                                    Quantity: {item.quantity}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* payment and Delivery info */}
                <div className="grid grid-cols-2 gap-8">
                    {/* payment and delivery info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-2">
                            Payment Info
                        </h4>
                        <p className="text-gray-600">
                        PayPal
                        </p>
                    </div>
                    {/* Delivery info  */}
                    <div>
                        <h4 className="text-lg font-semibold mb-2">
                            Delivery Info
                        </h4>
                        <p className="text-gray-600">
                            {checkout.shippingAddress.address}
                        </p>
                        <p className="text-gray-600">
                            {checkout.shippingAddress.city},{" "}{checkout.shippingAddress.state}
                        </p>
                    </div>
                </div>
            </div>

        )}
    </div>
  )
}

export default OrderConfirmationPage