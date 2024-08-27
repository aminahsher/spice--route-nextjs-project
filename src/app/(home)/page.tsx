import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import ProductCard, { Product } from "./components/productCard";


const products:Product[]= [
  {
    id:'1',
    name: "Dahi baray",
    description: "made with fresh ingredients and full-cream yogurt",
    image:"/i1.jpg",
price:200,

  },
  {
    id:'2',
    name: "Samosa",
    description: "made with fresh ingredients.",
    image:"/samosa.jpg",
price:200,

  },
  {
    id:'3',
    name: "Gol Gappay",
    description: "made with fresh ingredients.",
    image:"/gol.jpg",
price:200,

  },
  {
    id:'4',
    name: "Kheer",
    description: "made with fresh ingredients",
    image:"/kheer.jpg",
price:200,

  },
  {
    id:'5',
    name: "Channa chaat",
    description: "made with fresh ingredients.",
    image:"/chaatbhalay.jpg",
price:200,

  },
  {
    id:'6',
    name: "paan",
    description: "made with fresh ingredients.",
    image:"/paan.jpg",
price:200,

  },
  {
    id:'7',
    name: "falooda",
    description: "made with fresh ingredients.",
    image:"/falooda.jpg",
price:200,

  },
  {
    id:'8',
    name: "Jalebi",
    description: "made with fresh ingredients.",
    image:"/jalebi.jpg",
price:200,

  },
  
  
  
  
]

export default function Home() {
  return (
     <>
     <section className="bg-white">
      <div className="container flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black font-sans leading-2">
            Savoury Bites and Sweet Delights <br />
            <span className="font-normal text-clip"> by  </span>
            <span className="text-primary">Spice Route!!</span>

          </h1>
          <p className="text-2xl mt-8 mx-w-lg leading-snug">   delievry in 25 mins!</p>

          <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold">Get your Order Now</Button>
        </div>
       
        <div>
          <Image src={"/dahi baray.jpg"} alt="food" width={400} height={400} className=" h-[20rem] w-80 mt-10 rounded-md"/>
        </div>
      </div>
     </section>
     <section>
     <div className="container py-8">
     <Tabs defaultValue="account" className="">
  <TabsList>
    <TabsTrigger value="saltish bite" className="text-md">Savory</TabsTrigger>
    <TabsTrigger value="sweet delight" className="text-md">Sweet Delight</TabsTrigger>
  </TabsList>
  <TabsContent value="saltish bite">
   <div className="grid grid-cols-4 gap-4 mt-4">
   {
      products.map((product)=>( <ProductCard product={product} key= {product.id}/>))
    }
   </div>
   
  </TabsContent>
  <TabsContent value="sweet delight">
  <div className="grid grid-cols-4 gap-4 mt-4">
   {
      products.map((product)=>( <ProductCard product={product} key= {product.id}/>))
    }
   </div>
  </TabsContent>
</Tabs>
     </div>


     </section>

     </>
  );
}
