import { connect } from "@/Dbconfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect();

async function POST(request:NextRequest){
    // route will be : http://localhost:5000/api/users/signup pr post req 
try {
    const reqBody = request.json(); //body ka req ko handle krne k trika /no use of middleware
const {userName , email, password} = reqBody;
//validation
console.log(reqBody)
    
} catch (error) {
    console.log(error)
}
}