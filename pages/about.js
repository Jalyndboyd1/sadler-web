import Image from "next/image"
import aboutImg from '../public/about.jpg'

function About() {
    return (
        <div>
            <div className='flex items-center justify-between px-28 py-20'>
                {/* image left */}
                <Image src={aboutImg} alt='' height='380px' width='380px' objectFit='contain' />
                {/* description right */}
                <div>
                    <h1 className='font-light text-3xl ml-20'>
                        Sadler is building a focus on protecting
                        our abuse clients with modern technology in the world of
                        social services!
                    </h1>
                </div>
            </div>
            <div className="h-96 bg-[url('../public/wave.png')] bg-cover bg-center">
                {/* words */}
            </div>
        </div>
    )
}

export default About