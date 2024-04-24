import React from 'react'

function Content() {
  return (
    <>
                <div className='border-2 border-red-600 text-gray-500 p-5 ' >
                <div className="container mx-auto">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                        <nav className="text-sm">
                            <ol className="flex items-center space-x-2">
                                <li className="breadcrumb-item">
                                    <a href="./" className="text-blue-500">Home</a>
                                </li>
                                <li className="breadcrumb-item text-gray-500" aria-current="page">
                                    Dashboard
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className='grid grid-cols-4 gap-4 my-5'>
                    <div className='border-2 border-gray-100 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
                        <div className="flex items-center justify-between p-3">
                            <div className=''><p className='text-sm'>ENROLLMENT</p><p className='text-lg font-semibold'>2102101160</p></div>
                            <div className=''>icon</div>
                        </div>
                    </div>
                    <div className='border-2 border-gray-100 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
                        <div className="flex items-center justify-between p-3">
                            <div className=''><p className='text-sm'>BRANCH</p><p className='text-lg font-semibold'>Information Technology</p></div>
                            <div className=''>icon</div>
                        </div>
                    </div>
                    <div className='border-2 border-gray-100 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
                        <div className="flex items-center justify-between p-3">
                            <div className=''><p className='text-sm'>SEMESTER</p><p className='text-lg font-semibold'>6</p></div>
                            <div className=''>icon</div>
                        </div>
                    </div>
                    <div className='border-2 border-gray-100 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
                        <div className="flex items-center justify-between p-3">
                            <div className=''><p className='text-sm'>SUBJECTS</p><p className='text-lg font-semibold'>5 </p></div>
                            <div className=''>icon</div>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-4 '>
                    <div className='p-4 flex flex-col items-center justify-content gap-4 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
                        <div><img className="size-36 bg-cover bg-center rounded-full" src="img/person.jpg" alt="" /><p>NAME OF THE STUDENT</p></div>
                        <button disabled className='text-white bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>Active</button>
                        <p>Enrollment:210210116000</p>
                        <p>Sem:6</p>
                        <p>Mobile No: 1234567890</p>
                        <p>Email: abc@email.com</p>
                        <button className='text-white bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>View more details </button>
                    </div>
                </div>

                

            </div>
    </>
  )
}

export default Content