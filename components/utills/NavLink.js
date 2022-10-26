import Link from 'next/link'
import { useRouter } from 'next/router'

function NavLink({ linkName }) {
    const href = linkName.toLowerCase()

    return (<div className='mr-5 text-white'>
        <Link href={`/${href}`} >{linkName}</Link>
    </div>)
}

export default NavLink