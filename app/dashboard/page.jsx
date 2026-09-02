"use client";

import { useRouter } from "next/navigation";

export default function DashboardPage(){
    const router = useRouter();

    function handleSubmit(){
        router.push('/');
    }

    return(
        <div style={{paddingBottom:"20px"}}>
            <h1>Dashboard Page</h1>
            <p>Welcome to Dashboard page !</p>
            <button onClick={handleSubmit} >Go To Home</button>
        </div>
    )
}