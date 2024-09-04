import React from 'react'
import Image from 'next/image'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import Link from 'next/link'
import { Phone, ShoppingBasket } from 'lucide-react'
import { Button } from '../ui/button'
import { ModeToggle } from '../toggle'

const Header = () => {
  return (
    
     <header className='bg-orange-200'>
        <nav className='container py-2 flex items-center justify-between'>
       
            <div className='flex items-center space-x-4'>
            <ModeToggle/> 
                <Image src= {"/food.png" } alt= "logo" width={100} height={100} className='h-20 w-20 rounded-full'/>
                <Select>
  <SelectTrigger className="w-[150px] focus:ring-0">
    <SelectValue placeholder=" Select food items" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Savoury Bite</SelectItem>
    <SelectItem value="dark">Sweet Delight</SelectItem>
 
    <SelectItem value="system"></SelectItem>
     
  </SelectContent>
</Select>
            

            </div>
            <div className='flex items-center gap-4'>
                <ul className='flex items-center font-medium space-x-4'>
                    <li>
                        <Link className='hover:text-primary'  href={"/"}>Menu</Link>
                    </li>
                    <li>
                        <Link className='hover:text-primary' href={"/"}>Orders</Link>
                    </li>
                </ul>
                
                <div className='relative'>
                    <Link href={"/cart"} className='hover:text-primary'>
                    <ShoppingBasket  />
                    </Link>
                    <span className='absolute -top-4 -right-5 h-5 w-5 flex items-center rounded-full bg-primary font-bold text-white'>
                        3

                    </span>
                
                </div>
                <div className='flex items-center gap-x-2 ml-12'>
                <Phone />
                <span>092012345</span>
                </div>
                <Button className='h-6 rounded-md px-2'> LogOut</Button>
               

            </div>
        </nav>
     </header>
    
  )
}

export default Header
