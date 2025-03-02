import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
type FilterState = {
  category: string;
  gender: string;
  color: string;
  size: string[];
  material: string[];
  brand: string[];
  minPrice: number;
  maxPrice: number;
};
const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()
  const [selectedColor ,setSelectedColor ]=useState("")
  const [filter, setFilter] = useState<FilterState>({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });
  const [priceRange,setPriceRange] = useState([0,100])
  const categories = ["Top Wear", "Bottom Wear"];
  const genders = ["Men", "Women"];
  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Gray",
    "Black",
    "White",
    "Beige",
    "Pink",
    "Navy",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = [
    "Cotton",
    "Polyester",
    "Rayon",
    "Linen",
    "Silk",
    "Wool",
    "Viscose",
    "Fleece",
  ];
  const brands = [
    "Urban Threads",
    "Threads Originals",
    "Street Style",
    "H&M",
    "Levis",
  ];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilter({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice ? parseInt(params.minPrice) : 0,
      maxPrice: params.maxPrice ? parseInt(params.maxPrice) : 100,
    });
  }, [searchParams]);


  
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement | HTMLButtonElement;
  
    // Determine if the element is a checkbox
    const isCheckbox = type === "checkbox";
    const checked = isCheckbox && (e.target as HTMLInputElement).checked;
  
    // Create a shallow copy of the filter state
    const newFilter: FilterState = { ...filter };
  
    if (isCheckbox) {
      if (name === "size" || name === "material" || name === "brand") {
        const key = name as "size" | "material" | "brand";
        if (checked) {
          newFilter[key] = [...newFilter[key], value];
        } else {
          newFilter[key] = newFilter[key].filter((item) => item !== value);
        }
      }
    } else if (name === "color") {
      newFilter.color = value; // Update color for button click
    } else if (name === "minPrice" || name === "maxPrice") {
      const key = name as "minPrice" | "maxPrice";
      newFilter[key] = parseInt(value, 10);
    } else {
      const key = name as "category" | "gender";
      newFilter[key] = value;
    }
  
    setFilter(newFilter);
    updateURLParams(newFilter);
  };
  
  const updateURLParams = (newFilter: any) => {
    const params = new URLSearchParams();
    Object.keys(newFilter).forEach((key) => {
      if (Array.isArray(newFilter[key]) && newFilter[key].length > 0) {
        params.append(key, newFilter[key].join(","));
      } else if (newFilter[key]) {
        params.append(key, newFilter[key]);
      }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice = parseInt(e.target.value, 10); // Convert string to number
    const newPriceRange = [0, newMaxPrice]; // Update price range dynamically
  
    // Update the priceRange state (if needed for UI slider or other components)
    setPriceRange(newPriceRange);
  
    // Create a new filter object with updated price range
    const newFilter = { ...filter, minPrice: newPriceRange[0], maxPrice: newPriceRange[1] };
  
    // Update the filter state and URL parameters
    setFilter(filter)
    updateURLParams(newFilter)
  };
  
  
  
  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filters</h3>
      {/* category filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Category
        </label>
        {categories.map((category)=>(
          <div key={category} className="flex items-center mb-1">
           <input type="radio"
            name="category"
            value={category}
            onChange={handleFilterChange}
            checked={filter.category===category}
            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"/>
          <span className="text-gray-700" >{category}</span>
          
          </div>
        ))}
      </div>

      {/* Gender filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Gender
        </label>
        {genders.map((gender)=>(
          <div key={gender} className="flex items-center mb-1">
           <input type="radio" name="gender"
           value={gender}
           onChange={handleFilterChange}
           checked={filter.gender===gender}
            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"/>
          <span className="text-gray-700" >{gender}</span>
          </div>
        ))}
      </div>

      {/* Color filter */}

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Color
        </label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color)=>(
            <button key={color} name="color"
            value={color}
            
            onClick={handleFilterChange }
            
            className={`w-8 h-8 rounded-full border border-gray-300  cursor-pointer transition hover:scale-105 ${filter.color===color ? "ring-2 ring-blue-500":""}`}
            style={{backgroundColor:color}} >
            </button>
          ))}
        </div>
      </div>
      {/* Size Filter */}
      <div className="mb-6 ">
        <label className="block text-gray-600 font-medium mb-2">
          Size
        </label>
        {
          sizes.map((size)=>(
            <div key={size}
            

            className="flex items-center mb-1">
              <input type="checkbox" name="size" 
              value={size}
              onChange={handleFilterChange}
              checked={filter.size.includes(size)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300" />
              <span className="text-gray-700">{size}</span>
            </div>
          ))
        }
      </div>
      {/* Material filter */}
      <div className="mb-6 ">
        <label className="block text-gray-600 font-medium mb-2">
          Material
        </label>
        {
          materials.map((material)=>(
            <div key={material} className="flex items-center mb-1">
              <input type="checkbox" name="material" 
              value={material}
              onChange={handleFilterChange}
              checked={filter.material.includes(material)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300" />
              <span className="text-gray-700">{material}</span>
            </div>
          ))
        }
      </div>
      {/* brand filter */}
      <div className="mb-6 ">
        <label className="block text-gray-600 font-medium mb-2">
          Brand
        </label>
        {
          brands.map((brand)=>(
            <div key={brand} className="flex items-center mb-1">
              <input type="checkbox" name="brand" 
              value={brand}
              onChange={handleFilterChange}
              checked={filter.brand.includes(brand)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300" />
              <span className="text-gray-700">{brand}</span>
            </div>
          ))
        }
      </div>
      {/* price range */}
      <div className="mb-8">
        <label className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>
        <input type="range" name="priceRange" min={0} max={100} 
        value={priceRange[1]}
        onChange={handlePriceChange}
        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"/>
        <div className="flex justify-between text-gray-600 mt-2">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
      
    </div>
  )
}

export default FilterSidebar