import React from "react";
import Link from "next/link";

const Navbar=()=>
{
    return(
        <div>
          <ul className="flex justify-between px-10 py-0 bg-indigo-900 font-semibold text-stone-50 space-x-11">
          <nav>
            <div>
              <button>
              <h1 className="flex justify-between hover:bg-black">Download App Via SMS</h1>
              </button>
              </div>
                </nav>
                <nav className="flex justify-end">
                  
                  <ul className="flex space-x-3">
                    <button>
                <li className="hover:bg-black"> اردو</li>
                </button>
                <button>
                <li className="hover:bg-black">Sign Up</li>
                </button>
                <button>
                <li className="hover:bg-black">Sign In</li>
                </button>
                </ul>
              
            
            </nav>
            </ul>
          <nav className="bg-indigo-900 h-20 px 3 flex justify-evenly font-semibold text-stone-50">
      
            <div className="flex justify-around">
            <Link href="/Home"><img
                src='/log.png' alt='logo'
                className="w-40 h-30 object-top rounded-none"
                />
                </Link>
              <div>
              <h1></h1>
              </div>
              <div>
              <ul className=" flex justify-around space-x-12 py-8 width to-100%">
              <li className="hover:bg-black focus:ring-violet"><Link href="/usedcars"> Used Cars</Link></li>
              <li className="hover:bg-black focus:ring-violet"><Link href="/newcars"> New Cars</Link></li>
              <li className="hover:bg-black focus:ring-violet"><Link href="bikes"> Bikes</Link></li>
              <li className="hover:bg-black focus:ring-violet"><Link href="autostore"> Auto Store</Link></li>
              <li className="hover:bg-black focus:ring-violet"><Link href="videos"> Videos</Link></li>
              <li className="hover:bg-black focus:ring-violet"><Link href="forums"> Forums</Link></li>
              <li className="hover:bg-black focus:ring-violet"><Link href="blog"> Blog</Link></li>
              <li className="hover:bg-black focus:ring-violet"><Link href=""> More</Link></li>
              <li> <button className="bg-red-700 hover:bg-black rounded-1xl text-1xl text-center  font-semibold hover:to-black">Post An Ad</button></li>
              </ul>
              </div>
              </div>
          </nav>
        </div>    
)
}
export default Navbar