'use client'
import Link from "next/link";
import { useRouter } from  'next/navigation'
export default function Home() {
  const navigate = useRouter();
  const getData = ()=>{
    alert("apple");
  }
  return (
    <div>
      <h1>Login Page</h1>
      <br/><br/>
      <br/>
      <Link href="/">Go to Home page</Link>
      <br/>
      <br/>
      <Link href="/about">Go to About page</Link>
      <br/>
      <br/>
      <button onClick={()=> navigate.push('/')}>Go to  Home page</button>
      <button onClick={()=> navigate.push('/about')}>Go to  About page</button>
    </div>
  )
}
