import React from 'react'
import recipes from '../recipes'
import Swal from 'sweetalert2'

function Menu() {

    const handleOrder = (id) => {
        console.log(id,"id is clicked")
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered!",
                text: "Your oder has been processed.",
                icon: "success"
              });
            }
          });
    }
    return (
        <div className='mt-28 p-12 w-full'>
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between mb-6'>
                <h2 className='text-4xl text-center sm:text-left font-bold'>This Weeks Specials!</h2>
                <button className='bg-yellow-400 font-bold text-lg rounded-xl p-3'>Order Menu</button>
            </div>

            <div className='grid min-[540px]:grid-cols-2 md:grid-cols-3 min-h-40 min-w-60 grid-rows-1 gap-6  '>
                {
                    recipes.map(recipe => <div key={recipe.id} className='bg-green-500 rounded-lg pb-5'>
                        <img className='w-full h-48 rounded-lg' src={recipe.image} alt='' />
                        <div className='px-2'>
                            <div className=''>
                                <h5 className='py-4 font-bold'>{recipe.title}</h5>
                                <p className='pb-4'>{recipe.price}</p>
                            </div>
                            <p className='pb-4'>{recipe.description}</p>
                            <button className='bg-yellow-400 font-bold text-lg rounded-xl p-3' onClick={() => handleOrder(recipe.id)}>Order Now</button>
                        </div>
                    </div>)
                }
            </div>
        </div >
    )
}

export default Menu