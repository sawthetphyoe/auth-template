import Link from "next/link";


export default function NavBar() {
    return <div className={'w-full border-b border-gray-500 h-20 absolute top-0 left-0'}>
        <header className={"max-w-6xl w-full mx-auto h-full items-center flex justify-between"}>
            <ul className={"flex gap-8"}>
                <li className={"hover:underline underline-offset-4 hover:text-amber-500"}>
                    <Link href={'/'}>Home</Link>
                </li>
                <li className={"hover:underline underline-offset-4 hover:text-amber-500"}>
                    <Link href={'about'}>About</Link>
                </li>
                <li className={"hover:underline underline-offset-4 hover:text-amber-500"}>
                    <Link href={'products'}>Products</Link>
                </li>
                <li className={"hover:underline underline-offset-4 hover:text-amber-500"}>
                    <Link href={'/contact-us'}>Contact Us</Link>
                </li>
            </ul>
            <ul className={"flex gap-8"}>
                <li className={"hover:underline underline-offset-4 hover:text-amber-500"}>
                    <Link href={'login'}>Login</Link>
                </li>
                <li className={"hover:underline underline-offset-4 hover:text-amber-500"}>
                    <Link href={'signup'}>Sign Up</Link>
                </li>

            </ul>
        </header>
    </div>
}
