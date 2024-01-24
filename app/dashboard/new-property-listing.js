'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'


const PropertyForm = () => {


  const router = useRouter();

  const [formData, setFormData] = useState({});

  const [showError, setShowError] = useState("");

  const [errorColor, setErrorColor] = useState("red-500");

  const [images, setImages] = useState([]);

  const [imagesPrev, setImagesPrev] = useState([]);
  
  const [submitButtonStatus, setSubmitButtonStatus]= useState(false);

  const landmark ={ indore :[
    'dhabli',
    'niranjanpur',
    'nipania',
    'mahalaxmi nagar',
    'bicholi mardana',
    'bhanwarkuwa',
    'rajendra nagar',
    'rau',
    'lalbagh palace',
    'chandan nagar',
    'sukhlia',
    'vijaynagar',
    'palasia',
    'supercorridor'
  ],
  pune:
  [
    'Vittal Nagar',
    'Pimpri Chinchwad',
    'Wakad',
    'Hinjewadi',
    'Baner',
    'Wagholi',
    'Viman Nagar',
    'Kharadi',
    'Hadapsar',
    'Shivaji Nagar',
    'Koregaon Park',
    'Gopal Patti',
    'Autadwadi',
    'Uruli Devachi',
    'Kondhwa',
    'Dhankawadi',
    'Khadewadi',
    'Dattawadi',
    'Swar Gate',
    'Magarpatta',
    'Gokhale Nagar',
    'Kalyani Nagar',
    'Kothrud'
  ]
}

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

    //console.log(e.target.checked);
    if(key=="propertyFor"){
      formData.propertyType="";
    }
    
    setFormData((prevDetails) => ({
      ...prevDetails,
      [key]: value,

    }));

  };

  const handleFormDataCheckedBox=(e)=>{

    const key=e.target.name;
   
    
    console.log(e.target.checked);
    const value=e.target.value
    if(e.target.checked){

      setFormData((prevDetails) => ({
        ...prevDetails,
        [key]: true,
  
      }));
      
    }
    else{

      setFormData((prevDetails) => ({
        ...prevDetails,
        [key]: false,
  
      }));

    }
  
    
    


  }


    async function validateForm(){

      const {
        airConditioning,
        address,
        username,
        bhk,
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
        propertyType,
        city,
        contactno
      } = formData;

   
      if (
        !address ||
        !bathrooms ||
        !username ||
        !bhk ||
        !bedrooms ||
        !description ||
        !landmark ||
        !furniture ||
        !listedBy ||
        !price ||
        !propertyFor ||
        !propertyType ||
        !city ||
        !contactno
      ) {
       
        
        setShowError("Please fill in all the required fields correctly");
        setSubmitButtonStatus(false);
        return false;


      }

      if (isNaN(bathrooms) || isNaN(contactno) || isNaN(bedrooms) || isNaN(price)) {
        
        setShowError("Numeric values are expected for certain fields");
        setSubmitButtonStatus(false);
        return false;
      }
      if (bathrooms<0 || bedrooms<0 || price<0 ) {
        
        setShowError("Numbers Should Be Positive");
        setSubmitButtonStatus(false);
        return false;
      }
      if (contactno.length!=10) {
        
        setShowError("Enter Correct Contact no.");
        setSubmitButtonStatus(false);
        return false;
      }
      if (carpetArea && isNaN(carpetArea)) {
        
        setShowError("Numeric values are expected for certain fields");
        setSubmitButtonStatus(false);
        return false;
      }

      return true;
    }
    


    const handleUpload = async (data) => {


      if (!images) return;

      const promises = [];
      for (let i = 0; i < images.length; i++) {
        
        promises.push(
          fetch(data.preSignedUrlArr[i], {
            method: "PUT",
            body: images[i],
            
            
          })
        );
      }
    
      try {
        await Promise.all(promises);
        return true;
        
      } catch (error) {
        setSubmitButtonStatus(false);
        // Handle upload error
        console.log(error)
        return false;
      } finally {

        setSubmitButtonStatus(true);
        return true;

      }
    };
  








  const  handleSubmit = async (e) => {
    e.preventDefault();

   // console.log(...formData);
    setSubmitButtonStatus(true);
   // console.log(formData);
    const validateFormStatus= await validateForm();
    
    
    if(!validateFormStatus){

      return false;
    }
  

    if(!images || images?.length==0 ){
      setShowError("Please Upload Property Photos ")
      setSubmitButtonStatus(false);
      return false;
    }
    if(images?.length>10){
      setShowError("You Can Upload 10 Photos Only")
      setSubmitButtonStatus(false);
      return false;
    }
    
    const formDataValues = new FormData();
    const imageDataValues = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      formDataValues.append(key, value);
    })

    formDataValues.append('allFiles',images.length);

      console.log(images)

      images.forEach((file, index) => {
        imageDataValues.append(`files[]`, file);
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
            //console.log(response)

            
           if (!response.ok) {
            // setRegisterSpinnerStatus(false)
             
             throw new Error('Network response was not ok');

           }
           return response.json();
         })
         .then(async (responseData) => {
           console.log(responseData.validUser);
           //console.log(responseData.preSignedUrlArr)
           
           if(!responseData.validUser){
            setShowError("Something went wrong! Redirecting to the login page!")
            setErrorColor("red-500")


           // router.replace('/login'); 
            setSubmitButtonStatus(false);

            return; 
      
          }
           if(responseData.success==true){

            console.log(responseData.preSignedUrlArr)
          
              const uploadResult=await handleUpload(responseData)
            console.log(uploadResult);
              if(uploadResult){
                
              console.log(responseData)
              setShowError("Successfully Listed! Redirecting...")
              setErrorColor("green-400")
              router.replace('/dashboard');
            

              return;
              }
              else{

                setSubmitButtonStatus(false);
                console.log("after uploading...")


                setShowError("Something went wrong try again later!")
             setErrorColor("red-500")
             return;

              }
       
           }
           if(responseData.success==false){

             console.log(registerInputs)
             console.log(responseData)
             //console.log("not valid data")
             //setRegisterError("Mobile no. already exist")
             //setRegisterSpinnerStatus(false)

             setShowError("Something went wrong try again later!")
             setErrorColor("red-500")
             setSubmitButtonStatus(false);
             return; 
       
           }
           
          
           
           
         })
         .catch((error) => {
          console.log(error)
          setShowError("Something went wrong try again later!!!")
          setErrorColor("red-500")
          setSubmitButtonStatus(false);
          return; 
         });
     
   
   }
   catch(error){
      console.log(error)
   }
    

  };


  

 

  return (

    <>
     <div className='w-full flex justify-center'>
    <div className=' sm:w-[88%] lg:w-3/4 w-[97%] shadow-2xl flex flex-col justify-center rounded-lg h-fit pt-4 pb-10 border-t-8 border-black'>

        <div className='  text-black  flex justify-center p-2 text-2xl lg:text-4xl'> 
          New Property Listing

        </div>

        <div>

                <div className="grid grid-cols-2 auto-rows-fr h-full w-full lg:grid-cols-3 gap-4 p-4">
          {imagesPrev.map((image, index) => (
            <div key={index} className=" h-full p-2 shadow-md group justify-center items-center flex items-center relative">
                <div className="w-full h-auto ">
                <Image
                  src={image}
                  width="20"
                    height="20"
                    sizes="100vw"
                    className="w-auto h-auto "
                    alt="fd"
                />
              </div>

                <button
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-2 right-2 bg-black  text-white p-2 py-0 rounded-md "
                >
                  X
                </button>
              
            </div>
          ))}
        </div>


        <div className="upload-photos-body flex items-center justify-center w-full  sm:p-1 sm:p-2 lg:p-10">
      <label htmlFor="dropzone-file" className="flex flex-col items-center w-full bg-[#374151] justify-center  h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer   ">
        <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
          <svg className="w-10 h-10 mb-4 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
          </svg>
          <p className="mb-2  text-white"><span className="font-semibold text-md lg:text-xl">Click to upload</span> or drag and drop</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" multiple onChange={handleImageChange} className="hidden" />
      </label>
    </div>
    
        <form className=" mx-auto w-[80%] lg:w-3/4 text-black mt-4" >
      {/* Basic Details */}

      <div className="mb-5">
        <label htmlFor="username" className="relative block mb-2 text-md font-semibold text-white-900 dark:text-black">
         Username<span className='absolute top-0 text-red-500 font-bold text-lg'>*</span>
        </label>
        <input
          type="text"
          name="username"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={formData.username || ""}
          onChange={handleFormData}
          placeholder='Username'
          required
          
        />
      </div>

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
      <div className={`mb-5 ${!formData.propertyFor ? 'hidden' : 'block'}`}>
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
          {formData.propertyFor}
          <option value="">Property type</option>
                  {
            formData.propertyFor == "sale" && (
                <>
                <option value="house">House</option>
                <option value="townhouse">Townhouse</option>
                <option value="plot">Plot</option>
                <option value="duplex">Duplex</option>
                <option value="commercial">Commercial</option>
                </>
            )

          }

          {
            formData.propertyFor == "rent" && (
                <>
                <option value="apartment">Apartment</option>
                <option value="commercial">Commercial</option>
                <option value="flatmates">Flat Mates</option>
                </>
            )
          }
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
        <label htmlFor="contactno" className="relative block mb-2 text-md font-semibold text-white-900 dark:text-black">
          Contact Mobile No.<span className='absolute top-0 text-red-500 font-bold text-lg'>*</span>
        </label>
        <input
          type="text"
          name="contactno"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={formData.contactno || ""}
          onChange={handleFormData}
          placeholder='Contact Mobile No.'
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
        <label htmlFor="bhk" className="relative  block mb-2 text-md font-semibold text-white-900 dark:text-black">
          BHK<span className='absolute top-0 text-red-500 font-bold text-lg'>*</span>
        </label>
        <input
          type="text"
          name="bhk"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={formData.bhk || ""}
          onChange={handleFormData}
          placeholder=' Property BHK'
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="city" className="relative block mb-2 text-md font-semibold text-white-900 dark:text-black">
          City<span className='absolute top-0 text-red-500 font-bold text-lg'>*</span>
        </label>
        <select
          name="city"
          className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={formData.city || ""}
          onChange={handleFormData}
          required
        >
          <option value="">Select</option>
          <option value="indore">Indore</option>
          <option value="pune">Pune</option>
         
        </select>
      </div>


      <div className={`mb-5 ${!formData.city ? 'hidden' : 'block'}`}>
      <label htmlFor="landmark" className="relative block mb-2 text-md font-semibold text-white-900 dark:text-black">
        Property Landmark<span className='absolute top-0 text-red-500 font-bold text-lg'>*</span>
      </label>
      <select
        name="landmark"
        className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        value={formData.landmark || ""}
        onChange={handleFormData}
        required
      >
        {formData.city && landmark[formData.city] ? (
    <>
      
      <option value="" disabled>Select Property Landmark</option>
      {landmark[formData.city].map((location, index) => (
        <option key={index} value={location}>
          {location}
        </option>
      ))}
    </>
  ) : null}
      </select>
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
            checked={formData.parkingAvailable || false}
            //value={formData.parkingAvailable}
            onChange={handleFormDataCheckedBox}
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

      <div className={`mb-5 text-${errorColor} flex justify-center font-semibold `}>
            
            {showError}


      </div>
      <div className="text-center md:text-left flex items-center justify-center">
         
            {submitButtonStatus?(
               <div 
               className="mt-4 bg-blue-600 hover:bg-blue-700 w-full py-4 text-white uppercase rounded text-xs tracking-wider"
               
             >
            
            <div role="status" className=" w-full flex justify-center items-center ">
            <svg aria-hidden="true" className="inline flex justify-center w-4 h-4 text-white animate-spin  fill-black " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          </div>
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
