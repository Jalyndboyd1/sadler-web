import { Facebook, Instagram, AlternateEmail } from '@mui/icons-material/';
import upArrow from '/public/upArrow.png'
import Image from 'next/image';

function Footer() {
    return (
        <div className='h-10 flex items-center justify-between p-7 bg-[#5f6769] text-white'>
            {/* footer left */}
            <div>
                © Sadler 2021
            </div>
            {/* footer right */}
            <div className='w-32 flex items-center justify-between'>
                {/* socials / contact info */}
                <Facebook sx={{
                    cursor: 'pointer',
                    transition: '200ms'

                }} className='social__icons' />
                <Instagram sx={{
                    cursor: 'pointer',
                    transition: '200ms'

                }} className='social__icons' />
                <AlternateEmail sx={{
                    cursor: 'pointer',
                    transition: '200ms'

                }} className='social__icons' />
                <Image src={upArrow} alt='Scroll Up' height='30px' width='30px' style={{
                    cursor: 'pointer'
                }} />
            </div>
        </div>
    )
}

export default Footer