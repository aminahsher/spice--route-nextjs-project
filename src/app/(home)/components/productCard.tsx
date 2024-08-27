import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};
type propTypes = { product: Product };
const ProductCard = ({ product }: propTypes) => {
  return (
    <div>
      <Card className="border-none rounded-xl">
        <CardHeader className="flex items-center justify-center">
          <Image src={product.image} alt="golgappy" height={150} width={150} className="rounded-md" />  
        </CardHeader>
        
        <CardContent>
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="mt-2">{product.description}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <p>
            <span>From </span>
            <span className="font-bold">pkr {product.price}</span>
          </p>

          <Dialog>
            <DialogTrigger
              className="bg-orange-200 hover:bg-orange-300 text-orange-500 py-2 px-6 rounded-full shadow hover:shadow-lg
           outline-none focus:outline-none ease-linear transition-all duration-150"
            >
              Choose
            </DialogTrigger>
            <DialogContent className="max-w-3xl p-0">
               <div className="flex ">
                <div className="w-1/3 bg-white rounded p-8 items-center justify-center">
                    <Image src={"/food.png"} alt={product.name} height={450} width={450}/>
                </div>
                <div className="w-2/3 p-8">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="mt-1">{product.description}</p>

                <h4 className="mt-6">Choose the serving size</h4>

                <RadioGroup defaultValue="small" className="grid grid-cols-3 gap-4 mt-2">
          <div>
            <RadioGroupItem
              value="small"
              id="small"
              className="peer sr-only"
              aria-label="small"
            />
            <Label
              htmlFor="small"
              className="flex flex-col items-center justify-between rounded-md border-2  bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
               
              Small
            </Label>
          </div>

          <div>
            <RadioGroupItem
              value="medium"
              id="medium"
              className="peer sr-only"
              aria-label="medium"
            />
            <Label
              htmlFor="medium"
              className="flex flex-col items-center justify-between rounded-md border-2  bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
             
              Medium
            </Label>
          </div>

          <div>
            <RadioGroupItem
              value="large"
              id="large"
              className="peer sr-only"
              aria-label="large"
            />
            <Label
              htmlFor="large"
              className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
             
              Large
            </Label>
          </div>
        </RadioGroup>

                </div>
               </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
