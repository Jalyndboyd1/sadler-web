import background from "../home.jpg"
import Image from "next/image"
import TypeWriter from "./utills/TypeWriter"

function HomePage() {
    return (
        <div className='flex flex-col items-center mt-10'>
            <TypeWriter />
            <Image src={background} alt='' height='620px' objectFit='contain' />
        </div>
    )
}

export default HomePage