import { useRef,useState,useEffect } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { Link } from "react-router-dom"

interface NewArrivals {
  _id: number;
  name: string;
  price: number;
  image: {
    url: string;
    altText?: string;
  };
}


const NewArrivals = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX , setStartX] = useState(0);
  const [scrollLeft,setScrollLeft]=useState(false)
  const [canScrollRight,setCanScrollRight]=useState(true)
  const [canScrollLeft,setCanScrollLeft]=useState(false)



    const NewArrivals = [
        { _id: 1,
          name: "Stylish Jacket"
             , price: 10.99,
             image: 
             {url:"https://picsum.photos/500?random=7",
            altText:"Stylish Jacket"
             }

            },
        { _id: 2,
          name: "Stylish Jacket"
             , price: 10.99,
             image: 
             {url:"https://picsum.photos/500?random=8",
            altText:"Stylish Jeans"
             }

            },
        { _id: 3,
          name: "Stylish Jacket"
             , price: 10.99,
             image: 
             {url:"https://picsum.photos/500?random=9",
            altText:"Stylish Jacket"
             }

            },
        { _id: 4,
          name: "Stylish Jacket"
             , price: 10.99,
             image: 
             {url:"https://picsum.photos/500?random=10",
            altText:"Stylish Jacket"
             }

            },
        { _id: 5,
          name: "Stylish Jacket"
             , price: 10.99,
             image: 
             {url:"https://picsum.photos/500?random=11",
            altText:"Stylish Jacket"
             }

            },
        { _id: 6,
          name: "Stylish Jacket"
             , price: 10.99,
             image: 
             {url:"https://picsum.photos/500?random=12",
            altText:"Stylish Jacket"
             }

            },
        { _id: 7,
          name: "Stylish Jacket"
             , price: 10.99,
             image: 
             {url:"https://picsum.photos/500?random=13",
            altText:"Stylish Jacket"
             }

            },
        { _id: 8,
          name: "Stylish Jacket"
             , price: 10.99,
             image: 
             {url:"https://picsum.photos/500?random=6",
            altText:"Stylish Jacket"
             }

            },
          ]
          const scroll = (direction:any)=>{
            const scrollAmount = direction==="left"?-300 : 300;
            scrollRef.current?.scrollBy({left:scrollAmount,behavior:"smooth"})
          }

          const updateScrollButtons =()=>{
            const container = scrollRef.current;
            if(container){
              const leftScroll = container.scrollLeft
              const rightScrollable = container.scrollWidth>container.clientWidth+leftScroll
              setCanScrollLeft(leftScroll>0)
              setCanScrollRight(rightScrollable);


            }
            console.log({

              scrollLeft: container?.scrollLeft
              ,clientWidth: container?.clientWidth,
              scrollWidth: container?.scrollWidth

            }
            )
           }
            useEffect(() => {
              const container = scrollRef.current;
              if (container) {
                container.addEventListener("scroll", updateScrollButtons);
                updateScrollButtons();
              }
            }, []);

  return (
    <section className="py-16 px-4 lg:px-0">
    <div className="container mx-auto text-center mb-10 relative">
      <h2 className="text-3xl font-bold mb-4">
        Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest fashion trends and must-have items for the season.  
        </p>
        {/* scroll buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button className={`p-2 rounded border  text-black ${!canScrollLeft ?"bg-gray-200 text-gray-400 cursor-not-allowed" :"bg-white text-black" }`}>
            <FiChevronLeft onClick={()=>scroll("left")}
            aria-disabled={!canScrollLeft}
            className="text-2xl"/>
          </button>
          <button className={`p-2 rounded border  text-black ${!canScrollRight ?"bg-gray-200 text-gray-400 cursor-not-allowed" :"bg-white text-black" }`}>
            <FiChevronRight onClick={()=>scroll("right")}
            aria-disabled={!canScrollRight}
             className="text-2xl"/>
          </button>
        </div>
    </div>
    {/* Scrollable Content */}
    <div ref={scrollRef} className="container mx-auto overflow-hidden hover:overflow-x-auto flex space-x-6 relative scrollbar mb-1">
      {NewArrivals.map((product)=>(
        <div key={product._id} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative" >
        <img src={product.image.url} 
        alt={product.image.altText || product.name} className="w-full h-[500px] object-cover rounded-lg" />
        <div className="absolute bottom-0 left-0 right-0  backdrop-blur-md text-white p-4 rounded-b-lg ">
          <Link to={`/product/${product._id}`} className="block">
          <h4 className="font-medium"> {product.name}</h4>
          <p className="mt-1">${product.price}</p>
          </Link>

        </div>

        </div>
      ))}

      


    </div>
    
    </section>
  )
}
export default NewArrivals