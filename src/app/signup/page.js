import Link from "next/link";

export default function LoginPage() {

    return <div className={"flex max-w-md mx-auto w-full flex-col gap-5"}>
        <h1 className={"text-center text-3xl"}>Sign Up</h1>
        <div className={"flex flex-col w-full gap-1"}>
            <label htmlFor={"login-email"} className={"text-base cursor-pointer"}>Email</label>
            <input type={"email"} id={"login-email"} className={"w-full rounded-sm text-base p-2 text-black"}/>
        </div>
        <div className={"flex flex-col w-full gap-1"}>
            <label htmlFor={"login-password"} className={"text-base cursor-pointer"}>Password</label>
            <input type={"email"} id={"login-password"} className={"w-full rounded-sm text-base p-2 text-black"}/>
        </div>
        <button className={"bg-amber-500 text-black px-3 py-2 rounded-md hover:opacity-75"}>Sign Up</button>
        <button className={"text-amber-500 underline hover:opacity-75 underline-offset-4 self-end"}
        >
            <Link href={'login'}>
                Go to Login
            </Link>
        </button>
        <span className={"py-6 text-amber-100 font-semibold blockt text-center"}>OR</span>
        <button
            className={"border border-amber-500 rounded-lg p-3 text-amber-500 font-semibold hover:opacity-75"}>Continue
            with
            Google
        </button>
        <button
            className={"border border-amber-500 rounded-lg p-3 text-amber-500 font-semibold hover:opacity-75"}>Continue
            with
            Facebook
        </button>
    </div>
}