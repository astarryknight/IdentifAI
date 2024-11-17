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

//charts
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
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

export default function Temp() {

    const chartData = [
        { month: "5", participants: 50 },
        { month: "4", participants: 25, mobile: 200 },
        { month: "3", participants: 12, mobile: 120 },
        { month: "2", participants: 3, mobile: 190 },
        { month: "1", participants: 0, mobile: 130 },
    ]

    const chartConfig = {
        participants: {
            label: "participants",
            color: "hsl(var(--chart-1))",
        },
        mobile: {
            label: "Mobile",
            color: "hsl(var(--chart-2))",
        },
    }

    return (
        <>
            <div className="h-[100vh] flex flex-col justify-center">
                <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-7xl">Identif<span className="text-transparent bg-gradient-to-tr from-blue-800 to-pink-400 bg-clip-text">AI</span></h1>
                <h3 className="scroll-m-20 text-2xl text-muted-foreground font-semibold tracking-tight">Face the future of student ID</h3>
                <div className="flex flex-row mt-[2rem] justify-center">
                    <Button className="mr-[0.5rem]">Try it out</Button>
                    <Button variant="secondary" className="">Learn More</Button>
                </div>
            </div>
            <div className="h-[fit-content] py-[1.5rem] lg:py-[8rem] px-[1rem] lg:px-[5rem] w-[100%] bg-slate-100">
                <div className='flex flex-col lg:flex-row h-[100%]'>
                    <div className="text-left p-[2rem] flex flex-col w-[100%] lg:w-[50%] h-[100%] justify-center">
                        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Effortless access for students, powered by advanced AI.</h2>
                        <p>IdentifAI combines advanced AI with streamlined technology to make campus access effortless. Using an ESP32 camera and Python-powered scripts with OpenCV and face_recognition libraries, the system processes video feeds to recognize students instantly. By uploading their name, ID, and photo through a secure web portal, students are seamlessly added to the network, ensuring smooth, card-free identification across campus.</p>
                    </div>
                    <div className="flex flex-col w-[100%] lg:w-[50%] h-[100%] justify-center items-center">
                        <img className="w-[40rem]" src={facialrec}></img>
                    </div>
                </div>
            </div>
            <div className="h-[fit-content] py-[1.5rem] lg:py-[8rem] px-[1rem] lg:px-[5rem] w-[100%] bg-white">
                <div className='flex flex-col-reverse lg:flex-row w-[100%] h-[100%]'>
                    <div className="flex flex-col w-[100%] lg:w-[50%] h-[100%] justify-center items-center">
                        <Card>
                            <CardHeader>
                                <CardTitle>Usefulness of IdentifAI</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={chartConfig}>
                                    <LineChart
                                        accessibilityLayer
                                        data={chartData}
                                        margin={{
                                            left: 12,
                                            right: 12,
                                        }}
                                    >
                                        <CartesianGrid vertical={false} />
                                        <XAxis
                                            dataKey="month"
                                            tickLine={false}
                                            axisLine={false}
                                            tickMargin={8}
                                            tickFormatter={(value) => value.slice(0, 3)}
                                        />
                                        <ChartTooltip
                                            cursor={false}
                                            content={<ChartTooltipContent hideLabel />}
                                        />
                                        <Line
                                            dataKey="participants"
                                            type="natural"
                                            stroke="var(--color-participants)"
                                            strokeWidth={2}
                                            dot={{
                                                fill: "var(--color-participants)",
                                            }}
                                            activeDot={{
                                                r: 6,
                                            }}
                                        />
                                    </LineChart>
                                </ChartContainer>
                            </CardContent>
                            <CardFooter className="flex-col items-start gap-2 text-sm">
                                <div className="leading-none text-muted-foreground">
                                    Data from a random survey of NJIT Students
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="text-left p-[2rem] flex flex-col w-[100%] lg:w-[50%] h-[100%] justify-center">
                        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Designed with Students in Mind.</h2>
                        <p>IdentifAI was born from student feedback highlighting the frustrations of traditional ID verification methods. Many found carrying and scanning ID cards to be inconvenient and time-consuming, especially during busy campus hours. By introducing a hands-free, cutting-edge solution, this project aims to simplify daily routines and enhance the overall campus experience with effortless and innovative technology.</p>
                    </div>
                </div>
            </div>
            <div className="h-[fit-content] py-[1.5rem] lg:py-[8rem] px-[1rem] lg:px-[5rem] w-[100%] bg-slate-100">
                <div className='flex flex-col justify-center align-center items-center h-[100%]'>
                    <div className="text-center p-[2rem] flex flex-col w-[70%] h-[100%] justify-center">
                        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold font-serif tracking-tight first:mt-0">“IdentifAI has been a game-changer for me! Getting into my dorm used to be a hassle, especially when my hands were full or I couldn’t find my ID card. Now, I just walk up to the camera, and I’m in—no stress, no delays. It’s made my campus life so much easier!”</h2>
                        <p>— Alex R., Sophomore</p>
                    </div>
                </div>
            </div>
        </>
    )
}
