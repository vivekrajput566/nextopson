export const fetchSinglePropertyData = async (slug: any) => {
    console.log(slug, "slug");
    console.log("fetchSinglePropertyData");
    try {
        console.log("fetchSinglePropertyData try");
        const form = new FormData();
        const productId = slug
        form.append("productId", productId);
        console.log("inside try");
        const res = await fetch('http://localhost:3000/api/backend/product-details',
            {
                method: "POST",
                body: form,
                cache: "no-cache"
            }
        );
        if (!res.ok) {
            console.error("Failed to fetch data from fetchSinglePropertyData:", res.status, res.statusText);
            return null;
        }
        const data = await res.json();
        console.log("data from fetch", data);
        return data
    } catch (error) {
        console.error("Error during fetch:", error);
        return null;
    }
}
export const fetchSingleCityData = async (slug: any) => {
    console.log(slug, "slug");
    console.log("fetchSingleCityData");
    try {
        console.log("fetchSinglePropertyData try");
        const form = new FormData();
        const cityName = slug
        form.append("inputValue", cityName);
        console.log("inside try");
        const res = await fetch('http://localhost:3000/api/backend/searchInput',
            {
                method: "POST",
                body: form,
                cache: "no-cache"
            }
        );
        if (!res.ok) {
            console.error("Failed to fetch data from fetchSinglePropertyData:", res.status, res.statusText);
            return null;
        }
        const data = await res.json();
        console.log("data from fetch", data);
        return data
    } catch (error) {
        console.error("Error during fetch:", error);
        return null;
    }
}
export const fecthCategoriesData=async()=>{
    try {
        console.log("inside try");
        const res = await fetch('http://localhost:3000/api/backend/cities',
        { method: "POST", cache: "no-cache" }
        );
        
        if (!res.ok) {
          console.error("Failed to fetch data:", res.status, res.statusText);
          return null;
        }
    
        const data = await res.json();
        // console.log("data from fetch", data);
        return data;
      } catch (error) {
        console.error("Error during fetch:", error);
        return null;
      }
}

export const fecthDropDownData=async()=>{
    try {
        console.log("inside try");
        const res = await fetch('http://localhost:3000/api/backend/categories',
        { method: "POST", cache: "no-cache" }
        );
        
        if (!res.ok) {
          console.error("Failed to fetch data:", res.status, res.statusText);
          return null;
        }
    
        const data = await res.json();
        // console.log("data from fetch", data);
        return data;
      } catch (error) {
        console.error("Error during fetch:", error);
        return null;
      }
}

export async function fetchProjectsData() {
    console.log("hi");
  
    try {
      console.log("inside try");
      const res = await fetch('http://localhost:3000/api/backend/showProperties',
      { method: "POST", cache: "no-cache" }
      );
      
      if (!res.ok) {
        console.error("Failed to fetch data:", res.status, res.statusText);
        return null;
      }
  
      const data = await res.json();
      // console.log("data from fetch", data);
      return data;
    } catch (error) {
      console.error("Error during fetch:", error);
      return null;
    }
  }
