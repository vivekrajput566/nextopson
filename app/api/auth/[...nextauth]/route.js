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
                console.log("heheheheh");
            await Login(credentials.mobileno,credentials.password);
            //const user = {...credentials }
           
            
            return null
            }
            catch(error){
                console.log(error)
                throw new Error("not a valid user")
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
