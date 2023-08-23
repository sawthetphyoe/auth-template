import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com",
                },
                password: {label: "Password", type: "password"},
            },
            async authorize(credentials) {
                return {id: "1", name: "Admin", email: "admin@admin.com"};
            },
        }),
    ],
};
