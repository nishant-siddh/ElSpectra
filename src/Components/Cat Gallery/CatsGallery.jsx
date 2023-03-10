import React from 'react'
import IndividualCat from './IndividualCat'

const AllCats = () => {
  return (
    <div>
      <h2 className="text-slate-900 text-center text-2xl font-medium border-t-2 py-4 px-2">
        Cats Image Gallary
      </h2>

      <div className="flex flex-wrap gap-3 md:w-5/6 lg:w-2/3 justify-center m-auto">
        <IndividualCat />
      </div>
    </div>
  )
}

export default AllCats
