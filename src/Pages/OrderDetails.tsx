import { useEffect, useState } from "react";
// import { DiVim } from "react-icons/di";
import { Link, useParams } from "react-router-dom";

interface ShippingAddress {
  city: string;
  country: string;
}

interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderDetailsType {
  _id: string;
  createdAt: Date;
  isPaid: boolean;
  isDelivered: boolean;
  paymentMethod: string;
  shippingMethod: string;
  shippingAddress: ShippingAddress;
  orderItems: OrderItem[];
}

const OrderDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [orderDetails, setOrderDetails] = useState<OrderDetailsType | null>(null);

  useEffect(() => {
    const mockOrderDetails: OrderDetailsType = {
      _id: id || "N/A",
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "PayPal",
      shippingMethod: "Standard",
      shippingAddress: { city: "New York", country: "USA" },
      orderItems: [
        {
          productId: "1",
          name: "Jacket",
          price: 100,
          quantity: 2,
          image: "https://picsum.photos/150?random=2",
        },
        {
          productId: "2",
          name: "Jeans",
          price: 80,
          quantity: 4,
          image: "https://picsum.photos/150?random=3",
        },
      ],
    };

    setOrderDetails(mockOrderDetails);
  }, [id]);

  return  (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-lg md:text-xl font-bold mb-6">Order Details</h2>
      {!orderDetails ? (<p>
        No Order Details Found
      </p>):(<div className="p-4 sm:p-6 rounded-lg border">
        <div className="flex flex-col sm:flex-row  justify-between mb-4">
          <div>
          <h3 className="text-lg md:text-xl font-semibold">
            Order ID: #{orderDetails._id}
          </h3>
          <p className="text-gray-600">
            {new Date(orderDetails.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0 ">
          <span className="mb-2">Order:
          <span className={`${orderDetails.isPaid?"text-green-700 bg-green-100":"text-red-700 bg-red-100"} px-3 py-1 rounded-full text-sm font-medium mb-2`}>{orderDetails.isPaid?"Approved":"Pending"}
          </span>
          </span>
        <span>
          Delivery:{"  "}
          <span className={`${orderDetails.isDelivered?"text-green-700 bg-green-100":"text-yellow-700 bg-yellow-100"} px-3 py-1 rounded-full text-sm font-medium mb-2`}>{orderDetails.isDelivered?"Delivered":"Pending"}</span>
          </span>    
        </div>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-2 ">
              Payment Info
            </h4>
            <p>Payment Method: {orderDetails.paymentMethod}</p>
            <p>Status: {orderDetails.isPaid ?"Paid":"Unpaid"}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 ">
              Shipping Info
            </h4>
            <p>Shipping Method: {orderDetails.shippingMethod}</p>
            <p>Address: {`${orderDetails.shippingAddress.city},${orderDetails.shippingAddress.country}`}</p>
          </div>
        </div>
        {/* productlist */}
        <div className="overflow-x-auto">
          <h4 className="text-lg font-semibold mb-4 ">Products</h4>
          <table className="min-w-full text-gray-600 mb-4">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 ">Name</th>
                <th className="py-2 px-4 ">Unit Price</th>
                <th className="py-2 px-4 ">Quantity</th>
                <th className="py-2 px-4 ">Total</th>
              </tr>
            </thead>
            <tbody>
              {orderDetails.orderItems.map((item)=>(
                <tr key={item.productId} className="border-b">
                  <td className="py-2 px-4 flex items-center">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg mr-4" />
                    <Link to={`/product/${item.productId}` } className="text-blue-500 hover:underline">
                    <span className="text-lg"> {item.name}</span>
                    </Link>
                    </td>
                    <td className="py-2 px-4 ">${item.price}</td>
                    <td className="py-2 px-4 ">{item.quantity}</td>
                    <td className="py-2 px-4 ">${item.price * item.quantity}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* back to order */}
        <Link to="/my-orders" className="text-blue-500 hover:underline">
        Back to My Orders
        </Link>
      </div>
    )}
    </div>
  )
}

export default OrderDetails;
