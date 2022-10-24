import Image from 'next/image'
import logo from '../public/logo.png'
import NavLink from './utills/NavLink'

function Nav() {
    return (
        <div className='flex justify-between p-2.5 pl-5 items-center bg-black'>
            {/* Nav Left / Img */}
            <Image src={logo} alt=""
                width={85}
                height={85}
                objectFit='contain'
            />
            {/* Nav Right / Links*/}
            <div className='flex'>
                <NavLink linkName="About" />
                <NavLink linkName="Services" />
                <NavLink linkName="Donate" />
                {/* <NavLink linkName="" /> */}
            </div>
        </div>
    )
}

export default Nav