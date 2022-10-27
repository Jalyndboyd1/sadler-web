import Image from "next/image"
import aboutImg from '/public/about.jpg'
import howTop from '/public/laptop.png'
import whyLeft from '/public/phone.jpg'

function About() {
    return (
        <div className='flex flex-col justify-between items-center'>
            <div className='flex items-center justify-between px-28 py-20 mt-20'>
                {/* image left */}
                <Image src={aboutImg} alt='' height='380px' width='380px' objectFit='contain' />
                {/* description right */}
                <div>
                    <h1 className='font-light text-3xl ml-20'>
                        Sadler is building a focus on protecting
                        your abuse clients with modern technology in the world of
                        social services!
                    </h1>
                </div>
            </div>
            <div className="p-10 flex flex-col items-center bg-[url('../public/wave.png')] bg-cover bg-center w-full">
                {/* How Does Sadler Provide Safety through Tech? */}
                {/* how-top (image)*/}
                <Image src={howTop} alt='' height='220px' width='220px' objectFit='contain' />
                {/* how-bottom (description)*/}
                <h1 className='font-light text-4xl mt-20 w-96 text-black text-center'>
                    Sadler helps your organization by creating computer and mobile applications
                    that will
                    provide easier advocation and case management for you and your clients!
                </h1>
            </div>
            <div className='flex items-center justify-evenly  bg-sadler-purple w-full pt-20'>
                {/* why left */}
                <Image src={whyLeft} alt='' height='440px' width='440px' />
                {/* why right */}
                <h1 className='font-light text-4xl m-20 w-96 text-white text-center'>
                    {/* Why Sadler Description */}
                    Assist more clients per quarter with Sadler technology and in turn
                    provide better lives to more individuals seeking assistance.
                </h1>
            </div>
        </div>
    )
}

export default About