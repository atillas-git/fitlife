import User from "@/models/User";
import { compare } from "bcryptjs";
import { AuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export interface NSession extends Session {
    id?: string;
    accessToken?: string | unknown;
  }
  
const authConfig : AuthOptions={
    secret: process.env.NEXTAUTH_SECRET,
    providers:[
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
              email: { label: "Email", type: "email" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                if (!credentials || !credentials.email || !credentials.password) {
                    return null;
                }
                const user = await User.findOne({
                    email:credentials?.email
                })
                if(!user){
                    return null;
                }
                const compared = await compare(credentials?.password ?? "",user.password)
                if(!compared){
                    return null;
                }
                return user;
            }
        })
    ],
    callbacks: {
        async jwt({ token, account, user }) {
          if (account) {
            token.accessToken = account.access_token;
          }
          return token;
        },
        async session({ session, token, user }) {
          (session as NSession).accessToken = token.accessToken;
          (session as NSession).id = token.sub;
          return session;
        },
    },
    pages:{
        signIn:"/auth/login"
    }
}
export default authConfig;