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
import "./main.css"
import facialrec from "./assets/facial_rec.png"
//import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

//charts
import { Bar, BarChart, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useRef } from 'react';


export default function Home() {

    const navigate = useNavigate();

    const chartData = [
        { month: "5", participants: 3 },
        { month: "4", participants: 2 },
        { month: "3", participants: 2 },
        { month: "2", participants: 1 },
        { month: "1", participants: 1 },
    ]

    const chartConfig = {
        participants: {
            label: "participants",
            color: "hsl(226 100% 50%)",
        },
    }

    return (
        <>
            <div className="h-[100vh] flex flex-col justify-center">
                <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-8xl">Identif<span className="text-transparent bg-gradient-to-tr from-blue-800 to-pink-400 bg-clip-text">AI</span></h1>
                <h3 className="scroll-m-20 text-2xl text-muted-foreground font-semibold tracking-tight">Face the future of student ID</h3>
                <div className="flex flex-row mt-[2rem] justify-center">
                    <Button className="mr-[0.5rem]" onClick={() => { navigate('/form') }}>Try it out</Button>
                    <Button variant="secondary" className="" >Learn More</Button>
                </div>
                <div className="scroll-down text-4xl mb-[10rem]">
                    <svg id="svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#0F0F0F"></path> </g></svg>
                </div>
            </div>
            <div className="h-[fit-content] w-[100%] bg-gradient-to-b from-slate-100 to-white">
                <div className='bg-transparent flex flex-col lg:flex-row h-[100%]'>
                    <div className="py-[1.5rem] lg:py-[8rem] px-[1.5rem] lg:px-[3.5rem] text-left flex flex-col w-[100%] lg:w-[50%] h-[100%] justify-center text-black bg-transparent">
                        <h2 className="scroll-m-20 pb-2 text-3xl lg:text-5xl font-semibold tracking-tight first:mt-0">Effortless access for students, powered by advanced AI.</h2>
                        <p className="text-lg">IdentifAI combines advanced AI with streamlined technology to make campus access effortless. Using an ESP32 camera and Python-powered scripts with OpenCV and face_recognition libraries, the system processes video feeds to recognize students instantly. By uploading their name, ID, and photo through the web portal, students are seamlessly added to the network, ensuring smooth, card-free identification across campus.</p>
                    </div>
                    <div className="bg-transparent py-[1.5rem] lg:py-[6rem] px-[.5rem] lg:px-[3.5rem] flex flex-col w-[100%] lg:w-[50%] h-[100%] justify-center items-center">
                        <img className="w-[40rem]" src={facialrec}></img>
                    </div>
                </div>
            </div>
            <div className="h-[fit-content] w-[100%] bg-white">
                <div className='flex flex-col-reverse lg:flex-row w-[100%] h-[100%]'>
                    <div className="py-[1.5rem] lg:py-[8rem] px-[1rem] lg:px-[5rem] flex flex-col w-[100%] lg:w-[50%] h-[100%] justify-center items-center bg-white">
                        <Card>
                            <CardHeader>
                                <CardTitle>Usefulness of IdentifAI</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={chartConfig}>
                                    <BarChart accessibilityLayer data={chartData}>
                                        <XAxis
                                            dataKey="month"
                                            tickLine={false}
                                            axisLine={false}
                                            tickMargin={8}
                                            tickFormatter={(value) => value.slice(0, 3)}
                                        />
                                        <Bar dataKey="participants" fill="var(--color-desktop)" radius={4} />
                                    </BarChart>
                                </ChartContainer>
                            </CardContent>
                            <CardFooter className="flex-col items-start gap-2 text-sm">
                                <div className="leading-none text-muted-foreground">
                                    Data from a random survey of NJIT Students
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="py-[1.5rem] lg:py-[8rem] px-[1.5rem] lg:px-[5rem] text-left text-black lg:text-black bg-white lg:bg-white p-[2rem] flex flex-col w-[100%] lg:w-[50%] h-[100%] justify-center">
                        <h2 className="scroll-m-20 pb-2 text-3xl lg:text-5xl font-semibold tracking-tight first:mt-0">Designed with Students in Mind.</h2>
                        <p className="text-lg">IdentifAI was born from student feedback highlighting the frustrations of traditional ID verification methods. Many found carrying and scanning ID cards to be inconvenient and time-consuming, especially during busy campus hours. By introducing a hands-free, cutting-edge solution, this project aims to simplify daily routines and enhance the overall campus experience with effortless and innovative technology.</p>
                    </div>
                </div>
            </div>
            <div className="h-[.3rem] w-[100%] bg-gradient-to-l from-blue-800 to-pink-400"></div>
            <div className="h-[fit-content] py-[1.5rem] lg:py-[8rem] px-[1rem] lg:px-[5rem] w-[100%] bg-black text-white">
                <div className='flex flex-col justify-center align-center items-center h-[100%]'>
                    <div className="text-center p-[2rem] flex flex-col w-[100%] lg:w-[80%] h-[100%] justify-center">
                        <h2 className="scroll-m-20 pb-2 text-xl lg:text-5xl font-semibold font-serif tracking-tight first:mt-0">“IdentifAI will be a game changer for college campuses. Getting into my dorm is a hassle, especially when my hands are full or I can't find my ID card. With IdentifAI, I just walk up to the camera, and I’m in—no stress, no delays. It will make my campus life so much easier!”</h2>
                        <p>— Aron C., Senior</p>
                    </div>
                </div>
            </div>
            <div className="h-[fit-content] w-[100%] bg-white text-black text-left">
                <p className="mt-0 ml-[0.5rem] text-sm">© 2024 IdentifAI</p>
            </div>
        </>
    )
}
