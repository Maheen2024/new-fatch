import { groq } from "next-sanity";



export const allProduct = groq`*[_type == "car"]{
         type,
         pricePerDay,
         transmission,
         "imageUrl": image.asset->url,
         fuelCapacity,
         seatingCapacity,
         name,
         slug
       }`
export const fore = groq`*[type == "car"][0..8]`;
