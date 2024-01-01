import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import Login from "../../backend/login-signup/login";



 export const AuthOptions ={

    providers: [ 
        CredentialsProvider({
          
          name: "Credentials",
          
          credentials: {},
          async authorize(credentials, req) {
           
            try{
               
                    
            const isValidLogin=await Login(credentials.mobileno,credentials.password);
           // console.log(isValidLogin)
            const user = {mobileno:credentials.mobileno};
            console.log(user)
           
            
            return user
            }
            catch(error){
             //   console.log("blblblbllblblb"+error)
                throw new Error("Invalid mobile no or password")
            }
          
          }
        })
      ],
      secret: process.env.NEXTAUTH_SECRET,

   session:{
 
    strategy:"jwt",
    maxAge: 60*60*24*30*12

   },

   secret:process.env.NEXTAUTH_SECRET,


    pages:{

      signIn:'/login',

    }

   

}

 const handler = NextAuth(AuthOptions);

export {handler as GET, handler as POST};
