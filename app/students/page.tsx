import Link from "next/link";
import CurrentFilter from './CurrentFilter';
interface StudentsPageProps {
    searchParams:{
        branch?:string,
        sort?:string
    }
}

const students = [
    {id:1,name:"Abhishek Kumar Singh",branch:"CSE",cgpa:'8.5'},
    {id:2,name:"Prashantha Kumar Singh",branch:"CSE",cgpa:'8.9'},
    {id:3,name:"Vishal Patel",branch:"ME",cgpa:'8'},
    {id:4,name:"Raj Yadav",branch:"ME",cgpa:'9'},
    {id:5,name:"Yeshu Anand",branch:"EEE",cgpa:'7.5'},
    {id:6,name:"Ram Kumar",branch:"CE",cgpa:'6.5'},
]

export default async function StudentsPage({searchParams}:StudentsPageProps) {
    const {branch,sort} = await searchParams;

    let filtered = students;

    if(branch){
        filtered = filtered.filter(student => student.branch === branch);
    }

    if(sort === 'asc'){
        filtered = [...filtered].sort((a,b) => b.cgpa.localeCompare(a.cgpa));
    }

    return(
        <div>
            <h1>Student Page</h1>
            <div style={{display:'flex', gap:'20px'}}>
                <Link href="/students">All</Link>
                <Link href="/students?branch=CSE">CSE</Link>
                <Link href="/students?branch=EEE">EEE</Link>
                <Link href="/students?branch=ME">ME</Link>
                <Link href="/students?branch=CE">CE</Link>
                <Link href="/students?sort=asc">sort</Link>
            </div>

            <p>
                Current filter : <b>{branch || "All"}</b> 
                | Sort : {" "} <b>{sort || "Default"}</b>
            </p>

            <ul>
                {
                    filtered.map(student =>(
                        <li key={student.id} style={{listStyle:'none'}}>
                            <div style={{border: '1px solid black' , width:'auto'}}>
                                <h2>{student.name}</h2>
                                <p>Branch: {student.branch}</p>
                                <p>CGPA : {student.cgpa}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>

            <CurrentFilter/>

        </div>
    )

}

