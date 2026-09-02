"use client";

import { useSearchParams } from "next/navigation";

const students = [
    {id:1,name:"Abhishek Kumar Singh",branch:"CSE",cgpa:'8.5'},
    {id:2,name:"Prashantha Kumar Singh",branch:"CSE",cgpa:'8.9'},
    {id:3,name:"Vishal Patel",branch:"ME",cgpa:'8'},
    {id:4,name:"Raj Yadav",branch:"ME",cgpa:'9'},
    {id:5,name:"Yeshu Anand",branch:"EEE",cgpa:'7.5'},
    {id:6,name:"Ram Kumar",branch:"CE",cgpa:'6.5'},
]

export default function CurrentFilter(){
    const searchParams = useSearchParams();
    const branch = searchParams.get("branch");
    const sort = searchParams.get("sort");
    

    let filterd = students;

    if(branch){
        filterd = filterd.filter(student => student.branch===branch);
    }

    if(sort ==='asc'){
        filterd = [...filterd].sort((a,b)=>b.cgpa.localeCompare(a.cgpa));
    }

    return (
        <div>
            <p>Current Filter : <b>{branch || "All"} </b> | 
                 Sort : <b>{sort || "Default"}</b>
            </p>

            <ul>
                {
                    filterd.map(student =>(
                        <div key={student.id}>
                            <h3>{student.name}</h3>
                            <p><b>Branch : </b>{student.branch}</p>
                            <p><b>CGPA : </b>{student.cgpa}</p>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}