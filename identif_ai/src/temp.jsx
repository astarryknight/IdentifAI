import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Temp() {
    return (
        <>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl">Identif<span className="text-transparent bg-gradient-to-tr from-blue-800 to-pink-400 bg-clip-text">AI</span></h1>
            <h3 className="scroll-m-20 text-2xl text-slate-600 font-semibold tracking-tight">Face the future of student ID</h3>
            <div className="flex flex-row mt-[2rem] justify-center">
                <Button className="mr-[0.5rem]">Try it out</Button>
                <Button variant="secondary" className="">Learn More</Button>
            </div>
        </>
    )
}
