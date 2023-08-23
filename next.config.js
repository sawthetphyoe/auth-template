/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GITHUB_ID: "",
        GITHUB_SECRET: "",
        NEXTAUTH_URL: "http://localhost:3000",
        NEXTAUTH_SECRET: "37697520e2b319fcfcb25d9fbffd81006ca25b1aa503d07e87add373d76ef1e8"
    },
}

module.exports = nextConfig
