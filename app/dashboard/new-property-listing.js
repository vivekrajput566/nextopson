'use client'
import React, { useState } from 'react';

const PropertyForm = () => {
    
  const [propertyFor, setPropertyFor] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [advanceDetails, setAdvanceDetails] = useState({
    carpetArea: '',
    furniture: '',
    parkingAvailable: false,
    airConditioning: '',
  });
  const [listedBy, setListedBy] = useState('');

  const handleAdvanceDetailsChange = (field, value) => {
    setAdvanceDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the form data using the state variables
  };

  return (

    <>

    <div className=' w-3/4 shadow-2xl flex flex-col rounded-lg h-fit pt-4 pb-10 border-t-8 border-black'>

        <div className='text-4xl  text-black  flex justify-center p-2'> 
          New Property Listing

        </div>

        <div>

        <div className="upload-photos-body flex items-center justify-center w-full p-10">
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg className="w-10 h-10 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
          </svg>
          <p className="mb-2 text-xl text-white-500 dark:text-white-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
    
        <form className=" mx-auto  w-3/4 text-black" onSubmit={handleSubmit}>
      {/* Basic Details */}
      <div className="mb-5">
        <label htmlFor="propertyFor" className="block mb-2 text-md font-semibold text-white-900 dark:text-black">
        Property for sale or ren
        </label>
        <select
          id="propertyFor"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={propertyFor}
          placeholder='sefes'
          onChange={(e) => setPropertyFor(e.target.value)}
          required
        >
          <option value="">Property for sale or rent</option>
          <option value="sale">For Sale</option>
          <option value="rent">For Rent</option>
        </select>
      </div>
      <div className="mb-5">
        <label htmlFor="propertyType" className="block mb-2 text-md font-semibold text-white-900 dark:text-black">
        Property type
        </label>
        <select
          id="propertyType"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          required
        >
          <option value="">Property type</option>
          <option value="flat">Flat</option>
          <option value="house">House</option>
          <option value="townhouse">Townhouse</option>
        </select>
      </div>
      <div className="mb-5">
        <label htmlFor="bedrooms" className="block mb-2 text-md font-semibold text-white-900 dark:text-black">
          Number of Bedrooms
        </label>
        <input
          type="number"
          id="bedrooms"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          placeholder='Number of Bedrooms'
          required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="bathrooms" className="block mb-2 text-md font-semibold text-white-900 dark:text-black">
          Number of Bathrooms
        </label>
        <input
          type="number"
          id="bathrooms"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
          placeholder='Number of Bathrooms'
          required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="price" className="block mb-2 text-md font-semibold text-white-900 dark:text-black">
          Price
        </label>
        <input
          type="text"
          id="price"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder=' Price'
          required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="address" className="block mb-2 text-md font-semibold text-white-900 dark:text-black">
          Property Address
        </label>
        <input
          type="text"
          id="address"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder=' Property Address'
          required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="description" className="block mb-2 text-md font-semibold text-white-900 dark:text-black">
          Property Description
        </label>
        <textarea
          id="description"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder=' Property Description'
          required
        />
      </div>

      {/* Advance Details */}
      <div className="mb-5">
        <label htmlFor="carpetArea" className="block mb-2 text-md font-semibold text-white-900 dark:text-black">
          Carpet Area (sq ft)
        </label>
        <input
          type="text"
          id="carpetArea"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={advanceDetails.carpetArea}
          onChange={(e) => handleAdvanceDetailsChange('carpetArea', e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="furniture" className="block mb-2 text-md font-semibold text-white-900 dark:text-black">
          Furniture
        </label>
        <select
          id="furniture"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={advanceDetails.furniture}
          onChange={(e) => handleAdvanceDetailsChange('furniture', e.target.value)}
        >
          <option value="">Select</option>
          <option value="furnished">Furnished</option>
          <option value="semi-furnished">Semi-furnished</option>
          <option value="unfurnished">Unfurnished</option>
        </select>
      </div>
      <div className="mb-5 flex items-center pt-4 pb-4">
        <div className="flex items-center ">
          <input
            id="parkingAvailable"
            type="checkbox"
            className="w-4 h-4 border border-white-300 rounded bg-white-50 focus:ring-3 focus:ring-blue-300 dark:bg-white-700 dark:border-white-600 dark:focus:ring-blue-600 dark:ring-offset-white-800 dark:focus:ring-offset-white-800"
            checked={advanceDetails.parkingAvailable}
            onChange={(e) => handleAdvanceDetailsChange('parkingAvailable', e.target.checked)}
          />
          </div>
          <div>
         <label htmlFor="parkingAvailable" className="ms-2 text-md font-semibold text-white-900 dark:text-white-300">
            Parking Available
          </label>
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="airConditioning" className="block mb-2 text-md font-semibold text-white-900 dark:text-black">
          Air Conditioning
        </label>
        <select
          id="airConditioning"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={advanceDetails.airConditioning}
          onChange={(e) => handleAdvanceDetailsChange('airConditioning', e.target.value)}
        >
          <option value="">Select</option>
          <option value="centralAC">Central AC</option>
          <option value="acAvailable">AC Available</option>
          <option value="none">None</option>
        </select>
      </div>

      {/* Listed By */}
      <div className="mb-5">
        <label htmlFor="listedBy" className="block mb-2 text-md font-semibold text-white-900 dark:text-black">
          Listed By
        </label>
        <select
          id="listedBy"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={listedBy}
          onChange={(e) => setListedBy(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="agent">Agent</option>
          <option value="owner">Owner</option>
        </select>
      </div>
      <div className='flex w-full justify-center'>
      <button
        type="submit"
        className="text-white w-11/12 bg-black flex justify-center hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-lg px-5 py-2.5 text-center dark:bg-black-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>

      </div>
    </form>
    </div>

    </div>

    </>
 
  );
};

export default PropertyForm;
