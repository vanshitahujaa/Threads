import { Link } from 'react-router-dom'
import menCollectionImage from '../../assets/mens-collection.webp'
import womenCollectionImage from '../../assets/womens-collection.webp'
const GenderCollectionSection = () => {
  return (
    <section className='py-16 px-4 lg:px-2'>
        <div className='container mx-auto flex flex-col md:flex-row gap-8'>
            {/* womens collection */}
            <div className='relative flex-1'>
                <img src={womenCollectionImage} alt="Women Collection Section"  className='w-full h-[700px] object-cover'/>
                <div className='absolute bottom-8 left-8 bg-white p-4'>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                        Women's Collection
                    </h2>
                    <Link to="/collections/all?gender=Women" className='text-lg text-gray-600 hover:text-gray-900'>
                    Shop Now


                    </Link>
                </div>


            </div>
            {/* Mens collection */}
            <div className='relative flex-1'>
                <img src={menCollectionImage} alt="men Collection Section"  className='w-full h-[700px] object-cover'/>
                <div className='absolute bottom-8 left-8 bg-white p-4'>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                        Men's Collection
                    </h2>
                    <Link to="/collections/all?gender=Men" className='text-lg text-gray-600 hover:text-gray-900'>
                    Shop Now


                    </Link>
                </div>


            </div>
        </div>

    </section>
  )
}
export default GenderCollectionSection
