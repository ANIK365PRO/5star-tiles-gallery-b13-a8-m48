'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({href, children}) => {
    const pathName = usePathname()
    // console.log('pathName', pathName)
    const isActive = href === pathName


    return (
       <Link href={href}
       className={`${isActive && 'border-b-2 border-green-500'}`}
       >{children}</Link>
    );
};

export default NavLink;