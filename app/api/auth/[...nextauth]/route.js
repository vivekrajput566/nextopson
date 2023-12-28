import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import Login from "@/app/backend/login-signup/login";



 export const AuthOptions ={

    providers: [ 
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          
          credentials: {},
          async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            try{
               
                    
            const isValidLogin=await Login(credentials.mobileno,credentials.password);
           // console.log(isValidLogin)
            const user = {mobileno:credentials.mobileno};
           
            
            return user
            }
            catch(error){
             //   console.log("blblblbllblblb"+error)
                throw new Error("Invalid mobile no or password")
            }
          
          }
        })
      ],
   //   secret: process.env.NEXTAUTH_SECRET,

   session:{
 
    strategy:"jwt",

   },

   secret:process.env.NEXTAUTH_SECRET,


    pages:{

      signIn:'/login',

    }

   

}

 const handler = NextAuth(AuthOptions);

export {handler as GET, handler as POST};
