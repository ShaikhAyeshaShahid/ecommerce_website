import { defineQuery } from "next-sanity";

export const allProducts = defineQuery(`
   *[_type == "products"]{
  _id,
  name,
  price,
  description,
  "imageUrl": image.asset->url,
  category,
  discountPercent,
  new,
  colors,
  sizes
}`
)

export const fourProducts = defineQuery(`
   *[_type == "products"] | order(_createdAt desc)[0...4]{
  _id,
  name,
  price,
  description,
  "imageUrl": image.asset->url,
  category,
  discountPercent,
  new,
  colors,
  sizes
}`
 )


 export const singleProduct = defineQuery(`
  *[_type == "products" && _id == $id][0]{
    name,
    price,
    description,
    "imageUrl": image.asset->url,
    category,
    discountPercent,
    new,
    colors,
    sizes
  }
`
)