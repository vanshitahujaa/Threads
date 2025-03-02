import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductGrid from "./ProductGrid";

const notify = () => toast("Items added to Cart", {
    autoClose: 2000,
    pauseOnHover: false,
});
interface ProductImage {
    url: string;
    altText: string;
}
const showError = () => {
    toast.error("Select size and color first!", {
        position: "top-right", // Customize position: top-right, top-center, bottom-right, etc.
        autoClose: 2000, // Auto close in 5 seconds
        hideProgressBar: false, // Show/hide progress bar
        closeOnClick: true, // Close when clicking on the toast
        pauseOnHover: false, // Pause the timer when hovered
        draggable: true, // Allow toast to be dragged
        progress: undefined, // Use default progress bar
    });
};

interface Product {
    name: string;
    price: number;
    originalPrice: number;
    description: string;
    brand: string;
    material: string;
    sizes: string[];
    color: string[];
    images: ProductImage[];
}

const selectedProduct: Product = {
    name: "Stylish jacket"
    , price: 120,
    originalPrice: 150,
    description: "This is a stylish jacket perfect for any occasion",
    brand: "FashionBrand",
    material: "Leather",
    sizes: ["S", "M", "L", "XL"],
    color: ["Black", "Blue"],
    images: [
        {
            url: "https://picsum.photos/500?random=9",
            altText: "Stylish jacket 1"

        },
        {
            url: "https://picsum.photos/500?random=8",
            altText: "Stylish jacket 1"

        }
    ]
}
const similarProducts: any = [
    {
        _id: 1,
        name: "Product 1",
        price: 100,
        images: [{ url: "https://picsum.photos/500?random=12" }]
    },
    {
        _id: 2,
        name: "Product 2",
        price: 100,
        images: [
            { url: "https://picsum.photos/500?random=15" }
        ]
    },
    {
        _id: 3,
        name: "Product 3",
        price: 100,
        images: [{ url: "https://picsum.photos/500?random=16" }]
    },
    {
        _id: 4,
        name: "Product 4",
        price: 100,
        images: [{ url: "https://picsum.photos/500?random=14" }]
    },

]

const ProductDetails = () => {
    const [mainImage, setMainImage] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
        if (selectedProduct.images.length > 0) {
            setMainImage(selectedProduct.images[0].url);
        }
    }, [selectedProduct])
    const handleQuantityChange = (action: string) => {
        if (action === "plus") setQuantity((prev) => prev + 1);
        if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
    }
    const HandleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            showError()
        }
        else {
            setIsButtonDisabled(true)
            setTimeout(() => {

                notify()
                setIsButtonDisabled(false)
            }, 500)

        } 0
    }
    return (
        <div className='p-6'>
            <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg '>
                <div className='flex flex-col md:flex-row '>
                    {/* left thumbnails */}
                    <div className=' md:flex flex-col space-y-4 mr-6 hidden'>
                        {selectedProduct.images.map((image, index) => (
                            <img key={index} src={image.url} alt={image.altText || `Thumbnail ${index}`} className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
                                onClick={() => setMainImage(image.url)} />

                        ))}
                    </div>
                    {/* Main image */}
                    <div className="md:w-1/2">
                        <div className="mb-4">
                            <img
                                src={mainImage || "/placeholder.jpg"}
                                alt={selectedProduct.images[0].altText || "Main image"}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                            {/* mobile thumbnails */}
                            <div className="md:hidden flex overscroll-x-auto space-x-4 mb-4 mt-2">
                                {selectedProduct.images.map((image, index) => (
                                    <img key={index} src={image.url} alt={image.altText || `Thumbnail ${index}`} className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
                                        onClick={() => setMainImage(image.url)} />

                                ))}
                            </div>
                        </div>

                    </div>
                    {/* right side */}
                    <div className="md:w-1/2 md:ml-10">
                        <h1 className="text-2xl md:text-3xl font-semiboldbold mb-2">
                            {selectedProduct.name}
                        </h1>
                        <p className="text-lg text-gray-600 mb-1 line-through ">
                            {selectedProduct.originalPrice && `${selectedProduct.originalPrice}`}
                        </p>
                        <p className="text-xl text-gray-500 mb-2">
                            $ {selectedProduct.price}
                        </p>
                        <p className="text-gray-600 mb-4">
                            {selectedProduct.description}
                        </p>
                        <div className="mb-4">

                            <p className="text-gray-700">
                                Color:
                            </p>
                            <div className="flex gap-2 mt-2">
                                {selectedProduct.color.map((color: string) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-8 h-8 rounded-full ring-2 ${selectedColor === color ? "ring-black" : "ring-gray-300"}`}
                                        style={{ backgroundColor: color }}
                                        aria-label={`Select color ${color}`}
                                    />
                                ))}
                            </div>

                        </div>
                        <div className="mb-4">
                            <p className="text-gray-700">
                                Size:
                            </p>
                            <div className="flex gap-2 mt-2">
                                {selectedProduct.sizes.map((size) => (
                                    <button key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 rounded border ${selectedSize === size ? "bg-black text-white" : ""}`}>
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="mb-6">
                            <p className="text-gray-700">
                                Quantity:
                            </p>
                            <div className="flex items-center space-x-4 mt-2">
                                <button
                                    onClick={() => handleQuantityChange("minus")}
                                    className="px-2 py-1 bg-gray-200 text-lg">
                                    -
                                </button>
                                <span className="text-lg">{quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange("plus")}
                                    className="px-2 py-1 bg-gray-200 text-lg">
                                    +
                                </button>
                            </div>
                        </div>
                        <div>
                            <button onClick={HandleAddToCart}
                                disabled={isButtonDisabled}
                                className={`w-full py-2 px-6 text-lg text-white bg-black hover:bg-gray-900 rounded-lg mb-4 ${isButtonDisabled ? "cursor-not-allowed opacity-50" : "hover:bg-gray-900 "}`}>
                                {isButtonDisabled ? "Adding..." : "Add to Cart"}
                            </button>
                            <ToastContainer />
                            <div className="mt-10 text-gray-700">
                                <h3 className="text-xl font mb-4">
                                    Characterstics:
                                </h3>
                                <table className="w-full text-left text-sm text-gray-600">
                                    <tbody>
                                        <tr>
                                            <td className="py-1">Brand</td>
                                            <td className="py-1">{selectedProduct.brand}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">Material</td>
                                            <td className="py-1">{selectedProduct.material}</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-20 ">
                    <h2 className="text-2xl text-center font-medium mb-4">
                        You May Also Like
                    </h2>
                    <ProductGrid products={similarProducts} />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails