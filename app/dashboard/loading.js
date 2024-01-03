import React from 'react'

function loading() {
  return (
    <div role="status" className="p-10 m-10 divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
    {[1, 2, 3, 4, 5,6,7,8,9].map((item) => (
      <div key={item} className="flex items-center justify-between pt-4">
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-300 rounded-full "></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
      </div>
    ))}
    <span className="sr-only">Loading...</span>
  </div>
  )
}

export default loading