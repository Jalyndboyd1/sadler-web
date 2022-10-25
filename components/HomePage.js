import TypeWriter from "./utills/TypeWriter"
import Image from "next/image"
import helpServices from '../public/homepage-left.jpg'
import techServices from '../public/homepage-right.jpg'
import { Tooltip } from "@mui/material"
import Link from "next/link"

function HomePage() {
    return (
        <div className='flex flex-col items-center mt-10'>
            <TypeWriter />
            {/* div with both images */}
            <div className='flex align-center justify-between mt-1'>
                <Tooltip title='Help Services' followCursor>
                    <div>
                        <Link href='/help-services'>
                            <Image src={helpServices} alt='' height='420px' objectFit='contain' className='cursor-pointer' width='390px' />
                        </Link>
                    </div>
                </Tooltip>
                <Tooltip title='Tech Services' followCursor>
                    <div>
                        <Link href='/tech-services'>
                            <Image src={techServices} alt='' height='420px' objectFit='contain' className='cursor-pointer' width='390px' />
                        </Link>
                    </div>
                </Tooltip>
            </div>
        </div>
    )
}

export default HomePage