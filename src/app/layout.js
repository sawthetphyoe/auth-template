import './globals.css'
import {Inter} from 'next/font/google'
import NavBar from "@/components/NavBar";
import NextAuthProvider from "@/components/NextAuthProvider";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Next Auth Template',
    description: 'Generated by create next app',
}


const MainLayout = ({children}) => {

    return <NextAuthProvider>
        <NavBar/>
        <main className={"flex h-screen w-screen justify-center items-center"}>
            {children}
        </main>
    </NextAuthProvider>
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <MainLayout>
            {children}
        </MainLayout>
        </body>
        </html>
    )
}
