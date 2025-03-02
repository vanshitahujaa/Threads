import SortOptions from "../Components/Product/SortOptions";
import FilterSidebar from "../Components/Product/FilterSidebar";
import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import ProductGrid from "../Components/Product/ProductGrid";

const CollectionPage = () => {
    const [products, setProducts] = useState([]);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
    useEffect(()=>{
        setTimeout(()=>{
            const fetchedProducts:any  =[
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
                {
                    _id: 5,
                    name: "Product 5",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500?random=14" }]
                },
                {
                    _id: 6,
                    name: "Product 6",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500?random=14" }]
                },
                {
                    _id: 7,
                    name: "Product 7",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500?random=14" }]
                },
                {
                    _id: 8,
                    name: "Product 8",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500?random=14" }]
                },
            
            ];
            setProducts(fetchedProducts);
        },1000)


    },[])

  return (
    <div className="flex flex-col lg:flex-row">
        {/* mobile filter button */}
        <button onClick={toggleSidebar} className="lg:hidden border p-2 flex justify-center items-center">
            <FaFilter className="mr-2"/>Filters
        </button>
        {/* filter sidebar */}
        <div ref={sidebarRef} className={`${isSidebarOpen ?"translate-x-0":"-translate-x-full"} fixed inset-y-0 z-50  left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
        <FilterSidebar/>
        </div>
        <div className="flex-grow p-4 ">
            <h2 className="text-2xl uppercase mb-4">All Collection</h2>
            {/* sort options */}
            <SortOptions/>
            {/* product grid */}
            <ProductGrid products={products} />
        </div>
        
        </div>
  )
}

export default CollectionPage