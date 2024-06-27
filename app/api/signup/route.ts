import User from "@/models/User"
import { genSalt, hash} from 'bcryptjs'

type SignupRequest = {
    email:string,
    password:string,
}

export async function POST(request:Request) {
    try {
        const body : SignupRequest = await request.json()
        const user = await User.findOne({
            email:body.email
        })
        if(user){
            return new Response("User with same email already exists!",{
                status:400
            })
        }
        const salt = await genSalt(10)
        const newPass = await hash(body.password,salt);
        body.password = newPass;
        const user2save = new User({
            ...body
        })
        await user2save.save()
        return new Response("success!",{status:200})
    } catch (error) {
        return new Response(JSON.stringify(error),{status:500})
    }    
}