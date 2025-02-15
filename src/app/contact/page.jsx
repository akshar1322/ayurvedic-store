import React from 'react'
import ContactUs from '../components/section/ContactUs'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

function page() {
  return (
    <>
        <main>
            <Navbar/>
              <nav className="text-sm p-4 text-yellow-50 mt-5 mb-4">
                <a href="/" className="hover:underline">Home</a> &gt;
                <a href="/contact" className="hover:underline p-1">ContactUs</a>
              </nav>
              <div>
                  <ContactUs/>
              </div>
             <Footer/>
        </main>
    </>
  )
}

export default page
