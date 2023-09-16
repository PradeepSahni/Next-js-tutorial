'use client'
import Link from "next/link";
import { useRouter } from  'next/navigation'

export default function Home() {
  const navigate = useRouter();
  return (
    <div>
      <h1>About Page</h1>
      <br/><br/>
      <br/>
      <Link href="/">Go to Home page</Link>
      <br/>
      <br/>
      <Link href="/login">Go to Login page</Link>
      <br/>
      <br/>
      <button onClick={()=> navigate.push('/')}>Go to  Home page</button>
      <button onClick={()=> navigate.push('/login')}>Go to  Login page</button>
    </div>
  )
}
