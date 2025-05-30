import React from 'react'
import ChefDocumentTable from './components/ChefDocumentTable'

const ChefDocument = () => {
  return (
    <div className="p-6 w-full">
            {/* Page Header */}
        <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">Chef Document</h1>
            <p>Chef/Chef</p>
        </div>
      
      <div>
        <ChefDocumentTable/>
      </div>
    </div>
  )
}

export default ChefDocument
