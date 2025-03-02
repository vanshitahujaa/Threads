import GenderCollectionSection from '../Components/Product/GenderCollectionSection'
import Hero from '../Components/Layout/Hero'
import NewArrivals from '../Components/Product/NewArrivals'
import ProductDetails from '../Components/Product/ProductDetails'
import ProductGrid from '../Components/Product/ProductGrid'
import FeaturedCollection from '../Components/Product/FeaturedCollection'
import FeaturesSection from '../Components/Product/FeaturesSection'
interface Product {
  _id: number;
  name: string;
  images: { url: string }[];
  price: number;
}

const placeholderProducts: Product[] = [
  {
    _id: 5,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500?random=12" }],
  },
  {
    _id: 6,
    name: "Product 2",
    price: 100,
    images: [{ url: "https://picsum.photos/500?random=15" }],
  },
  {
    _id: 7,
    name: "Product 3",
    price: 100,
    images: [{ url: "https://picsum.photos/500?random=16" }],
  },
  {
    _id: 8,
    name: "Product 4",
    price: 100,
    images: [{ url: "https://picsum.photos/500?random=14" }],
  },
];
const Home = () => {
  return (
    <div className='scrollbar '>
        <Hero/>
        <GenderCollectionSection/>
        <NewArrivals/>
        <br />

        {/* Best seller */}
        <h2 className='text-3xl text-center font-bold mb-4'>
          Best Seller
        </h2>
        <ProductDetails/>
        <div className='container mx-auto'>
          <h2 className='text-3xl text-center font-bold mb-4'>
            Top Wears for Women
          </h2>
          <ProductGrid products={placeholderProducts} />
        </div>
        <FeaturedCollection/>
        <FeaturesSection/>
      
    </div>
  )
}

export default Home
