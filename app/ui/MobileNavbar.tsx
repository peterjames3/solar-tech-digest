"use client";
import clsx from 'clsx';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, AlignJustify } from 'lucide-react';

export default function MobileNavbar(){
    const [isOpen, setIsOpen ] = useState(false);
    const pathname = usePathname();
    const Menu = [
       
        { name: 'Articles', href: '/'},
        { name: 'Batteries & Inverters', href: '/inverter'},
        { name: 'Solar Panel', href: '/solarpanel'},
        { name: 'News', href:'/news'},
        { name: 'Contact Us', href:'/contact'}
    ]
    return(
        <div >
            {
                !isOpen ? (
                    <button onClick={()=> setIsOpen(!isOpen)} type="button" title="humburger open icon" className="hover:cursor-pointer transition-all delay-300"> <AlignJustify /></button>
                ):(
                    <button onClick={()=> setIsOpen(!isOpen)} type="button"  title='humburger close icon'>  <X /></button>
                  
                )
            }

        </div>
    )
}