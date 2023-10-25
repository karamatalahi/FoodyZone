import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData'
import toast, {Toaster} from 'react-hot-toast'
import { useSelector } from 'react-redux/es/hooks/useSelector'
const FoodItem = () => {

  const category = useSelector((state)=>state.category.category);
  const search = useSelector((state)=> state.search.search);
  // console.log(search);

  const handleToast = (e) =>{
    toast.success(`Added ${e}`)
  }

  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>

    {
     FoodData.filter((food)=>{
      if(category== "All"){
        return food.name.toLowerCase().includes(search.toLowerCase());
      }
      else{
        return category== food.category && food.name.toLowerCase().includes(search.toLowerCase());
      }
     }).map((item,index)=>
    (  <FoodCard key={index} id= {item.id}
         name = {item.name}
          price = {item.price}
          description = {item.desc}
          rating = {item.rating}
          img = {item.img}
          handleToast = {handleToast}
        />)
     )
    }
    </div>
    </>
  )
}

export default FoodItem


//01:06:00