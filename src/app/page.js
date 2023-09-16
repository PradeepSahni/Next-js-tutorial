'use client'

import Link from "next/link";
import  {useRouter} from "next/navigation";

export default function Home() {
  const navigate = useRouter();
  const getData = ()=>{
    alert("apple");
  }
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/login">Go to Login page</Link>
      <br/>
      <br/>
      <Link href="/about">Go to About page</Link>
      <br/>
      <br/>
      <button onClick={()=> navigate.push('/login')}>Go to  Login page</button>
      <button onClick={()=> navigate.push('/about')}>Go to  About page</button>
    </div>
  )
}
