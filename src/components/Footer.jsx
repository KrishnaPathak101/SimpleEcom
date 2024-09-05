import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-green-400 p-5'>
        <div className=' grid grid-cols-3'>
            <div>
                <h1>INFORMATION</h1>
                <br />
                <div className=' grid grid-cols-2'>
                    <div>
                        <ol className=' flex-col gap-y-5'>
                            <li>About Us</li>
                            <li>Cancellation Policy</li>
                            <li>General Terms & Conditions</li>
                            <li>Grievance Redressal Policy</li>
                            <li>Return/Refund Policy</li>
                            <li>Shipping Policy</li>
                        </ol>
                    </div>
                    <div>
                        <ol>
                        <li>Blogs</li>
                        <li>Contact Us</li>
                        <li>Caution Notice</li>
                        <li>Faq</li>
                        <li>Privacy Policy</li>
                        <li>Site Map</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div>
                <h1>Subscribe Our Newsletter</h1>
                <br />
                <div>
                    <input placeholder='Enter your email id' className=' border-2 bg-white px-5 py-2 rounded-full' type="text" />
                    <br />
                </div>
                <div>
                    <h1>Follow on Social Media</h1>
                    <br />
                    <div className=' flex gap-5'>
                        <div className=' rounded-full font-bold w-[50px] h-[50px] bg-white text-center'>f</div>
                        <div className=' rounded-full font-bold w-[50px] h-[50px] bg-white text-center'>i</div>
                        <div className=' rounded-full font-bold w-[50px] h-[50px] bg-white text-center'>y</div>
                        <div className=' rounded-full font-bold w-[50px] h-[50px] bg-white text-center'>p</div>
                        <div className=' rounded-full font-bold w-[50px] h-[50px] bg-white text-center'>x</div>
                    </div>
                </div>
            </div>
            <div>
                <h1>CONTACT US</h1>
                <br />
                <div>
                    <div>Patanjali Ayurved Limited,
                        Haridwar, Uttarakhand - 249405
                    </div>
                    <div>
                        1860-1800-180 & 01334-610111
                    </div>
                    <div>
                        Timing: Mon to Sat 6 am to 8 pm
                    </div>
                    <div>
                        customercare@orderme.co.in
                    </div>
                    <div>
                        <p className=' font-bold'>Download the Apps</p>
                        <br />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer