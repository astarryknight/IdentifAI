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


function ImageCarousel({ images, setImages }) {
    if (images.length > 0) {
        return (
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-sm"
            >
                <CarouselContent>
                    {images.map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <div className="flex flex-col h-[100%] w-[100%]">
                                            <img className="grow content-center" src={images[index][0]} />
                                            <Button className="w-[100%] mt-[1rem]" onClick={() => {
                                                let a = [...images]
                                                a.splice(index, 1)
                                                setImages(a)
                                            }}>Delete</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))
                    }
                </CarouselContent >
                <CarouselPrevious />
                <CarouselNext />
            </Carousel >
        );
    }
}

function Page({ page, images, setImages, responses, setResponses }) {

    function handleChange(e) {
        let inp = e.target
        let f = inp.files[0];
        loadImage(f)
        //is this doing anything
        let a = [...images];
        setImages(a)
    }

    function log(...m) {
        console.log(...m)
    }

    function loadImage(f) {

        img = document.getElementById('img')
        console.log(images)

        if (!f.type.startsWith('image/'))
            return log('that\'s not an image! ignoring...');
        let u = URL.createObjectURL(f);
        console.log(u)
        img.onload = () => {
            img.onload = img.onerror = null;
            // do whatever with the image here...
            log('img loaded!');

            // render the image on an OffscreenCanvas to convert to JPEG, then display in the image element
            let c = new OffscreenCanvas(img.width, img.height);
            let ctx = c.getContext('2d');
            ctx.drawImage(img, 0, 0);
            c.convertToBlob({
                type: 'image/jpeg',
                quality: 60
            }).then(b => {
                let u = URL.createObjectURL(b);
                log('\nrendered img as jpeg!\nBlob URL:', u);
                img.src = u;
                images.push([u, b]);
                log("JFDKJSKFJKSDJFKSJDKFJSDF")
                console.log(images)
            }).catch(e => {
                log('error rendering img:', e);
            })
        };
        img.onerror = () => {
            img.onload = img.onerror = null;
            // catch errors if the uploaded file doesn't load
            log('loading error!');
        }
        console.log("WHYY")
    }

    if (page == 0) {
        return (
            <div className='flex w-[30rem] flex-col justify-center items-center'>
                <div className='flex w-[100%] mb-[1rem]'>
                    <div className="flex flex-col items-start justify-start gap-1.5 w-[100%]">
                        <Input onChange={handleChange} id="picture" type="file" className="flex h-[10rem] w-[100%] items-center justify-center rounded-md border border-dashed text-sm" />
                    </div>
                </div>
                <ImageCarousel images={images} setImages={setImages} />
            </div>
        )
    } else {
        return (
            <div className='flex w-[30rem] flex-col justify-center items-center'>
                <Label className="flex flex-row justify-start w-[100%]">Name&nbsp;<span className="text-red-600">*</span></Label>
                <Input id="name" className="mb-[1rem]" placeholder="John Doe" onChange={() => {
                    let l = [...responses];
                    l[0] = document.getElementById('name').value;
                    setResponses(l);
                }} />
                <Label className="flex flex-row justify-start w-[100%]" >ID Number&nbsp;<span className="text-red-600">*</span></Label>
                <Input id="id" placeholder="31601234" onChange={() => {
                    let l = [...responses];
                    l[1] = document.getElementById('id').value;
                    setResponses(l);
                }} />
            </div >
        )
    }
}

function App() {
    const [count, setCount] = useState(0)
    const [images, setImages] = useState([])
    const [page, setPage] = useState(0)
    const [responses, setResponses] = useState(["", ""])

    return (
        <>
            <img id="img"></img>
            <h1 className="flex scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">{page == 0 ? "1. Upload Pictures" : "2. Personal Information"}</h1>
            <Page page={page} images={images} setImages={setImages} responses={responses} setResponses={setResponses} />
            <div className="w-[100%] flex mt-[1rem]">
                <Button disabled={page == 0 ? true : false} className="grow mr-[0.5rem]" onClick={() => {
                    //(page == 1) && setPage(0)
                    if (page == 1) {
                        setPage(0)
                    }
                }}>Back</Button>
                <Button disabled={images.length > 0 ? false : true} className="grow" onClick={() => {
                    if (page == 0) {
                        setPage(1)
                    } else {
                        let l = [...images]
                        let r = []
                        for (i in l) {
                            let file = i[1]

                            const reader = new FileReader();
                            reader.addEventListener(
                                "load",
                                () => {
                                    // convert image file to base64 string
                                    preview.src = reader.result;
                                },
                                false,
                            );

                            if (file) {
                                reader.readAsDataURL(file);
                            }

                            r.push(reader.result)
                        }
                        let object = {
                            "name": responses[0],
                            "id": responses[1],
                            "images": images
                        }
                        console.log(object)
                    }
                }}>{page == 0 ? "Next" : "Submit"}</Button>
            </div >
        </>
    )
}

export default App
