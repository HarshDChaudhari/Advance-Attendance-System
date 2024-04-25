import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Login from '../login/Login'

const SignUp = () => {

    function onChange(value) {
        console.log("Captcha value:", value);
      }

    return (
        <>
            <section className="flex flex-col items-center pt-6">
                <div
                    className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">Create an
                            account
                        </h1>
                        <htmlForm className="space-y-4 md:space-y-6" method="POST">

                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Full Name</label>
                                <input type="string" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="" required="" />
                            </div>
                            <div>
                                <label htmlFor="enrollmentNo" className="block mb-2 text-sm font-medium text-gray-900 ">Enrollment Number</label>
                                <input type="string" name="enrollmentNo" id="enrollmentNo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="" required="" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email Id</label>
                                <input type=" email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="" required="" />
                            </div>

                            <div>
                            <label htmlFor="college" className="block mb-2 text-sm font-medium text-gray-900 " >College </label>
                            <select name="branchcollege" id="branchcollege" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 ">
                               <option value="1">021 A</option>
                               <option value="2">075 B</option>
                               <option value="3">007 C</option>
                               <option value="4">008 D</option>
                            </select>
                            </div>

                            <div>
                            <label htmlFor="branch" className="block mb-2 text-sm font-medium text-gray-900 " >Branch  </label>
                            <select name="branch" id="branch" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 ">
                               <option value="1">Information Technology</option>
                               <option value="2">Mechanical Engineering</option>
                               <option value="3">Production Engineering</option>
                               <option value="4">Computer Engineering</option>
                            </select>
                            </div>

                            <div>
                                <label htmlFor="phoneNo" className="block mb-2 text-sm font-medium text-gray-900 ">Phone Number</label>
                                <input type="string" name="phoneNo" id="phoneNo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="" required="" />
                            </div>

                            <div>
                                <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 " >Gender:  </label>
                                    <div className='flex gap-2'>
                                      <input type="radio" value="1 " name="gender" /> Male
                                      <input type="radio" value="2" name="gender" /> Female
                                      <input type="radio" value="3" name="gender" /> Other
                                    </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input type="String" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm Password</label>
                                <input type="String" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " required="" />
                            </div>
                            <div>
                            {/* <ReCAPTCHA
                                sitekey="6LcK_JopAAAAAB9Z4Z2cNqA2yqQPOu0z5keAFEAc"
                                onChange={onChange}
                            /> */}
                            </div>
                            <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "><a href="/">Create an account</a></button>
                            <p className="text-sm font-light text-gray-500 ">Already have an account? 
                            <a className="font-medium text-indigo-600 hover:underline " href="/login"> Login here</a>
                            </p>
                        </htmlForm>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp