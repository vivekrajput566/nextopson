'use client'
import React, { useState } from 'react';

const PropertyForm = () => {
    
  const [formData, setFormData] = useState({});

  const [images, setImages] = useState([]);

  const [imagesPrev, setImagesPrev] = useState([]);
  
  const [submitButtonStatus, setSubmitButtonStatus]= useState(false);


  var b=1;
  const handleImageChange =async (e) => {
    

     const files = e.target.files;
     setImages((images)=>[...images,...files])

     if (files) {
       const imagesArray = Array.from(files).map((file) => URL.createObjectURL(file));
       setImagesPrev((prevImages) => [...prevImages, ...imagesArray]);
     } else {
        // No files selected
        console.log("No files selected");
    }
    console.log(images)
    

    
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
    const prevImages = [...imagesPrev];
    prevImages.splice(index, 1);
    setImagesPrev(prevImages);
  };


  const handleFormData = (e) => {

   
    const key=e.target.name;
    console.log(e.target.name);
    const value=e.target.value
    setFormData((prevDetails) => ({
      ...prevDetails,
      [key]: value,

    }));

  };


    async function validateForm(){

      const {
        airConditioning,
        address,
        bathrooms,
        bedrooms,
        carpetArea,
        description,
        landmark,
        furniture,
        listedBy,
        parkingAvailable,
        price,
        propertyFor,
        propertyType
      } = formData;

      if (
        !address ||
        !bathrooms ||
        !bedrooms ||
        !description ||
        !landmark ||
        !furniture ||
        !listedBy ||
        !price ||
        !propertyFor ||
        !propertyType
      ) {
       
        
        console.log("Please fill in all the required fields correctly");
        return false;


      }

      if (isNaN(bathrooms) || isNaN(bedrooms) || isNaN(price)) {
        
        console.log("Numeric values are expected for certain fields");
        return false;
      }
      if (bathrooms<0 || bedrooms<0 || price<0) {
        
        console.log("Numbers Should Be Positive");
        return false;
      }
      if (carpetArea && isNaN(carpetArea)) {
        
        console.log("Numeric values are expected for certain fields");
        return false;
      }

      return true;
    }
  const  handleSubmit = async (e) => {
    e.preventDefault();
   // setSubmitButtonStatus(true);
   // console.log(formData);
    const validateFormStatus= await validateForm();
    
    if(!validateFormStatus){

      return false;
    }

    if(!images || images?.length==0 ){
      console.log("Please Upload Property Photos ")
      return false;
    }
    if(images?.length>10){
      console.log("You Can Upload 10 Photos Only")
      return false;
    }
    
    const formDataValues = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      formDataValues.append(key, value);
    })

      console.log(images)

      images.forEach((file, index) => {
        formDataValues.append(`files[]`, file);
      });

      formDataValues.forEach((name)=>{
          console.log(name);
      })
 

  console.log(images.length);
  
    try{                       
                
         console.log("here..")
      const res =  await fetch('/api/backend/listNewProperty/saveListing', {
         method: 'POST',
         body: formDataValues,
       })
         .then((response) => {
            console.log(response)
            setSubmitButtonStatus(false);
            return false
           if (!response.ok) {
            // setRegisterSpinnerStatus(false)
             
             throw new Error('Network response was not ok');

           }
           return response.json();
         })
         .then((responseData) => {
           if(responseData.success==true){

             console.log(responseData)
             
             setRegisterError("")
             setViewForm("otp")
             setRegisterSpinnerStatus(false)
             return;
       
           }
           if(responseData.success==false){

             console.log(registerInputs)
             console.log(responseData)
             console.log("not valid data")
             setRegisterError("Mobile no. already exist")
             setRegisterSpinnerStatus(false)
             return; 
       
           }
           
          
           
           // Handle successful response
         })
         .catch((error) => {
           setRegisterSpinnerStatus(false);
           setRegisterError("Network Error")
          //console.log(error)
           // Handle errors
         });
     
   
   }
   catch(error){
      console.log(error)
   }
    



  };

 

  return (

    <>
     <div className='w-full flex justify-center'>
    <div className=' w-3/4 shadow-2xl flex flex-col justify-center rounded-lg h-fit pt-4 pb-10 border-t-8 border-black'>

        <div className='text-4xl  text-black  flex justify-center p-2'> 
          New Property Listing

        </div>

        <div>

                <div className="flex flex-wrap -mx-2 p-4">
          {imagesPrev.map((image, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
              <div className="relative group">
                <img
                  src={image}
                  alt={`preview-${index}`}
                  className="w-full h-40 md:h-48 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
                />
                <button
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>


        <div className="upload-photos-body flex items-center justify-center w-full p-10">
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg className="w-10 h-10 mb-4 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
          </svg>
          <p className="mb-2 text-xl text-white"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" multiple onChange={handleImageChange} className="hidden" />
      </label>
    </div>
    
        <form className=" mx-auto  w-3/4 text-black" >
      {/* Basic Details */}
      <div className="mb-5">
        <label htmlFor="propertyFor" className="relative block mb-2 text-md font-semibold text-white-900 dark:text-black">
        Property for sale or rent<span className='absolute top-0 text-red-500 font-bold text-lg'>*</span>
        </label>
        <select
          name="propertyFor"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder='sefes'
          value={formData.propertyFor || ""}
          onChange={handleFormData}
          required
        >
          <option value="">Property for sale or rent</option>
          <option value="sale">For Sale</option>
          <option value="rent">For Rent</option>
        </select>
      </div>
      <div className="mb-5">
        <label htmlFor="propertyType" className="relative block mb-2 text-md font-semibold text-white-900 dark:text-black">
        Property type<span className='absolute top-0 text-red-500 font-bold text-lg'>*</span>
        </label>
        <select
          name="propertyType"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={formData.propertyType || ""}
          onChange={handleFormData}
          required
        >
          <option value="">Property type</option>
          <option value="flat">Flat</option>
          <option value="house">House</option>
          <option value="townhouse">Townhouse</option>
          <option value="appartment">Appartment</option>
          <option value="commercial">Commercial</option>
          <option value="flatmates">Flat Mates</option>
          <option value="plot">Plot</option>
          <option value="duplex">Duplex</option>
        </select>
      </div>
      <div className="mb-5">
        <label htmlFor="bedrooms" className="relative block mb-2 text-md font-semibold text-white-900 dark:text-black">
          Number of Bedrooms<span className='absolute top-0 text-red-500 font-bold text-lg'>*</span>
        </label>
        <input
          type="number"
          name="bedrooms"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={formData.bedrooms || ""}
          onChange={handleFormData}
          placeholder='Number of Bedrooms'
          required
          
        />
      </div>
      <div className="mb-5">
        <label htmlFor="bathrooms" className="relative block relative mb-2 text-md font-semibold text-white-900 dark:text-black">
          Number of Bathrooms<span className='absolute top-0 text-red-500 font-bold text-lg'>*</span>
        </label>
        <input
          type="number"
          name="bathrooms"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={formData.bathrooms || ""}
          onChange={handleFormData}
          placeholder='Number of Bathrooms'
          required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="price" className="relative block mb-2 text-md font-semibold text-white-900 dark:text-black">
          Price<span className='absolute top-0 text-red-500 font-bold text-lg'>*</span>
        </label>
        <input
          type="text"
          name="price"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={formData.price || ""}
          onChange={handleFormData}
          placeholder=' Price'
          required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="address" className="relative  block mb-2 text-md font-semibold text-white-900 dark:text-black">
          Property Address<span className='absolute top-0 text-red-500 font-bold text-lg'>*</span>
        </label>
        <input
          type="text"
          name="address"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={formData.address || ""}
          onChange={handleFormData}
          placeholder=' Property Address'
          required
        />
      </div>


      <div className="mb-5">
        <label htmlFor="landmark" className="relative  block mb-2 text-md font-semibold text-white-900 dark:text-black">
          Property Landmark<span className='absolute top-0 text-red-500 font-bold text-lg'>*</span>
        </label>
        <input
          type="text"
          name="landmark"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={formData.landmark ||""}
          onChange={handleFormData}
          placeholder=' Property Landmark'
          required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="description" className=" relative block mb-2 text-md font-semibold text-white-900 dark:text-black">
          Property Description<span className='absolute top-0 text-red-500 font-bold text-lg'>*</span>
        </label>
        <textarea
          name="description"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={formData.description || ""}
          onChange={handleFormData}
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
          name="carpetArea"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={formData.carpetArea || ""}
          onChange={handleFormData}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="furniture" className="relative block mb-2 text-md font-semibold text-white-900 dark:text-black">
          Furniture<span className='absolute top-0 text-red-500 font-bold text-lg'>*</span>
        </label>
        <select
          name="furniture"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={formData.furniture || ""}
          onChange={handleFormData}
          required
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
            name="parkingAvailable"
            type="checkbox"
            className="w-4 h-4 border border-white-300 rounded bg-white-50 focus:ring-3 focus:ring-blue-300 dark:bg-white-700 dark:border-white-600 dark:focus:ring-blue-600 dark:ring-offset-white-800 dark:focus:ring-offset-white-800"
            value={formData.parkingAvailable || ""}
            onChange={handleFormData}
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
          name="airConditioning"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={formData.airConditioning || ""}
          onChange={handleFormData}
        >
          <option value="">Select</option>
          <option value="centralAC">Central AC</option>
          <option value="acAvailable">AC Available</option>
          <option value="none">None</option>
        </select>
      </div>

      {/* Listed By */}
      <div className="mb-5">
        <label htmlFor="listedBy" className="relative block mb-2 text-md font-semibold text-white-900 dark:text-black">
          Listed By<span className='absolute top-0 text-red-500 font-bold text-lg'>*</span>
        </label>
        <select
          name="listedBy"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={formData.listedBy || ""}
          onChange={handleFormData}
          required
        >
          <option value="">Select</option>
          <option value="agent">Agent</option>
          <option value="owner">Owner</option>
        </select>
      </div>
      <div className="text-center md:text-left flex items-center justify-center">
         
            {submitButtonStatus?(
               <button 
               className="mt-4 bg-blue-600 hover:bg-blue-700 w-full py-4 text-white uppercase rounded text-xs tracking-wider"
               type="submit"
             >
            
            <div role="status" className=" w-full flex justify-center items-center ">
            <svg aria-hidden="true" className="inline flex justify-center w-4 h-4 text-white animate-spin  fill-black " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          </button>
          ):
          (
            <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 w-full py-4 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
            onClick={handleSubmit}
          >

           <span>Continue</span>
           </button>

          )}

           
         
        </div>
    </form>
    </div>

    </div>

    </div>
    
    </>
 
  );
};

export default PropertyForm;
