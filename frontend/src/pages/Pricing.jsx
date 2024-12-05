// // import React from 'react';

// // const Pricing = () => {
// //   return (
// //     <>
// //     <div className='bg-[#f2e4d4] py-12'>
// //       <div className=" min-h-screen min-w-screen  px-4 sm:px-6 lg:px-8 bg-[#f2e4d4]">
// //         <div className="text-center">
// //           <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Pricing</h2>
// //           <p className="mt-4 text-xl text-gray-500">Choose the plan that's right for your smart home.</p>
// //         </div>
// //         <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
// //           <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col justify-between hover:bg-gray-50 hover:scale-110 transition-all duration-300">
// //             <div>
// //               <h3 className="text-xl font-medium text-gray-900">Basic</h3>
// //               <p className="mt-4 flex items-baseline text-gray-900">
// //                 <span className="text-5xl font-extrabold tracking-tight">$29</span>
// //                 <span className="ml-1 text-xl font-semibold">/month</span>
// //               </p>
// //               <ul role="list" className="mt-8 space-y-5">
// //                 <li className="flex items-start">
// //                   <div className="flex-shrink-0">
// //                     <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                     </svg>
// //                   </div>
// //                   <p className="ml-3 text-base text-gray-700">Voice control of basic smart home devices</p>
// //                 </li>
// //                 <li className="flex items-start">
// //                   <div className="flex-shrink-0">
// //                     <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                     </svg>
// //                   </div>
// //                   <p className="ml-3 text-base text-gray-700">Automated scheduling and routines</p>
// //                 </li>
// //                 <li className="flex items-start">
// //                   <div className="flex-shrink-0">
// //                     <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                     </svg>
// //                   </div>
// //                   <p className="ml-3 text-base text-gray-700">Mobile app integration</p>
// //                 </li>
// //               </ul>
// //             </div>
// //             <div className="mt-8">
// //               <button type="button" className="w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
// //                 Get started
// //               </button>
// //             </div>
// //           </div>

// //           <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col justify-between hover:bg-gray-50 hover:scale-110 transition-all duration-300">
// //             <div>
// //               <h3 className="text-xl font-medium text-gray-900">Standard</h3>
// //               <p className="mt-4 flex items-baseline text-gray-900">
// //                 <span className="text-5xl font-extrabold tracking-tight">$49</span>
// //                 <span className="ml-1 text-xl font-semibold">/month</span>
// //               </p>
// //               <ul role="list" className="mt-8 space-y-5">
// //                 <li className="flex items-start">
// //                   <div className="flex-shrink-0">
// //                     <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                     </svg>
// //                   </div>
// //                   <p className="ml-3 text-base text-gray-700">Advanced voice commands</p>
// //                 </li>
// //                 <li className="flex items-start">
// //                   <div className="flex-shrink-0">
// //                     <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                     </svg>
// //                   </div>
// //                   <p className="ml-3 text-base text-gray-700">Integration with additional smart devices</p>
// //                 </li>
// //                 <li className="flex items-start">
// //                   <div className="flex-shrink-0">
// //                     <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                     </svg>
// //                   </div>
// //                   <p className="ml-3 text-base text-gray-700">Usage analytics and reporting</p>
// //                 </li>
// //               </ul>
// //             </div>
// //             <div className="mt-8">
// //               <button type="button" className="w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
// //                 Get started
// //               </button>
// //             </div>
// //           </div>

// //           <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col justify-between hover:bg-gray-50 hover:scale-110 transition-all duration-300">
// //             <div>
// //               <h3 className="text-xl font-medium text-gray-900">Premium</h3>
// //               <p className="mt-4 flex items-baseline text-gray-900">
// //                 <span className="text-5xl font-extrabold tracking-tight">$99</span>
// //                 <span className="ml-1 text-xl font-semibold">/month</span>
// //               </p>
// //               <ul role="list" className="mt-8 space-y-5">
// //                 <li className="flex items-start">
// //                   <div className="flex-shrink-0">
// //                     <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                     </svg>
// //                   </div>
// //                   <p className="ml-3 text-base text-gray-700">Professional installation and onboarding</p>
// //                 </li>
// //                 <li className="flex items-start">
// //                   <div className="flex-shrink-0">
// //                     <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                     </svg>
// //                   </div>
// //                   <p className="ml-3 text-base text-gray-700">24/7 customer support</p>
// //                 </li>
// //                 <li className="flex items-start">
// //                   <div className="flex-shrink-0">
// //                     <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                     </svg>
// //                   </div>
// //                   <p className="ml-3 text-base text-gray-700">Remote access and control</p>
// //                 </li>
// //               </ul>
// //             </div>
// //             <div className="mt-8">
// //               <button type="button" className="w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
// //                 Get started
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Pricing;










// import React from 'react';
// import HeroNav from '../HeroNav';

// const Pricing = () => {
//   return (
//     <>
//     <div className='bg-[#f2e4d4]'>
//       <div className='pt-4 pb-4 pl-14 pr-14'>
//         <HeroNav />
//       </div>
//       <div className=" min-h-screen min-w-screen pt-12 px-4 sm:px-6 lg:px-8 bg-[#f2e4d4]">
//         <div className="text-center">
//           <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Pricing</h2>
//           <p className="mt-4 text-xl text-gray-500">Choose the plan that's right for your smart home.</p>
//         </div>
//         <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
//           <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col justify-between hover:bg-gray-50 hover:scale-110 transition-all duration-300">
//             <div>
//               <h3 className="text-xl font-medium text-gray-900">Basic</h3>
//               <p className="mt-4 flex items-baseline text-gray-900">
//                 <span className="text-5xl font-extrabold tracking-tight">$29</span>
//                 <span className="ml-1 text-xl font-semibold">/month</span>
//               </p>
//               <ul role="list" className="mt-8 space-y-5">
//                 <li className="flex items-start">
//                   <div className="flex-shrink-0">
//                     <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="ml-3 text-base text-gray-700">Voice control of basic smart home devices</p>
//                 </li>
//                 <li className="flex items-start">
//                   <div className="flex-shrink-0">
//                     <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="ml-3 text-base text-gray-700">Automated scheduling and routines</p>
//                 </li>
//                 <li className="flex items-start">
//                   <div className="flex-shrink-0">
//                     <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="ml-3 text-base text-gray-700">Mobile app integration</p>
//                 </li>
//               </ul>
//             </div>
//             <div className="mt-8">
//               <button type="button" className="w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//                 Get started
//               </button>
//             </div>
//           </div>

//           <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col justify-between hover:bg-gray-50 hover:scale-110 transition-all duration-300">
//             <div>
//               <h3 className="text-xl font-medium text-gray-900">Standard</h3>
//               <p className="mt-4 flex items-baseline text-gray-900">
//                 <span className="text-5xl font-extrabold tracking-tight">$49</span>
//                 <span className="ml-1 text-xl font-semibold">/month</span>
//               </p>
//               <ul role="list" className="mt-8 space-y-5">
//                 <li className="flex items-start">
//                   <div className="flex-shrink-0">
//                     <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="ml-3 text-base text-gray-700">Advanced voice commands</p>
//                 </li>
//                 <li className="flex items-start">
//                   <div className="flex-shrink-0">
//                     <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="ml-3 text-base text-gray-700">Integration with additional smart devices</p>
//                 </li>
//                 <li className="flex items-start">
//                   <div className="flex-shrink-0">
//                     <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="ml-3 text-base text-gray-700">Usage analytics and reporting</p>
//                 </li>
//               </ul>
//             </div>
//             <div className="mt-8">
//               <button type="button" className="w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//                 Get started
//               </button>
//             </div>
//           </div>

//           <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col justify-between hover:bg-gray-50 hover:scale-110 transition-all duration-300">
//             <div>
//               <h3 className="text-xl font-medium text-gray-900">Premium</h3>
//               <p className="mt-4 flex items-baseline text-gray-900">
//                 <span className="text-5xl font-extrabold tracking-tight">$99</span>
//                 <span className="ml-1 text-xl font-semibold">/month</span>
//               </p>
//               <ul role="list" className="mt-8 space-y-5">
//                 <li className="flex items-start">
//                   <div className="flex-shrink-0">
//                     <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="ml-3 text-base text-gray-700">Professional installation and onboarding</p>
//                 </li>
//                 <li className="flex items-start">
//                   <div className="flex-shrink-0">
//                     <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="ml-3 text-base text-gray-700">24/7 customer support</p>
//                 </li>
//                 <li className="flex items-start">
//                   <div className="flex-shrink-0">
//                     <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="ml-3 text-base text-gray-700">Remote access and control</p>
//                 </li>
//               </ul>
//             </div>
//             <div className="mt-8">
//               <button type="button" className="w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//                 Get started
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default Pricing;
















import React from 'react';
import HeroNav from '../HeroNav';

const Pricing = () => {
  return (
    <>
      <div className='bg-[#fbf7f0]'>
        <div className='pt-4 pb-4 pl-14 pr-14'>
          <HeroNav />
        </div>
        <div className="min-h-screen min-w-screen pt-12 px-4 sm:px-6 lg:px-8 bg-[#fbf7f0]">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[#1d4b3e] sm:text-4xl">Pricing</h2>
            <p className="mt-4 text-xl text-gray-500">Choose the plan that's right for your smart home.</p>
          </div>
          <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col justify-between hover:bg-gray-50 hover:scale-110 transition-all duration-300">
              <div>
                <h3 className="text-xl font-medium text-[#1d4b3e]">Basic</h3>
                <p className="mt-4 flex items-baseline text-[#1d4b3e]">
                  <span className="text-5xl font-extrabold tracking-tight">$29</span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-5">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-[#1d4b3e]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Voice control of basic smart home devices</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-[#1d4b3e]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Automated scheduling and routines</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-[#1d4b3e]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Mobile app integration</p>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <button type="button" className="w-full bg-[#1d4b3e] border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-[#1d4b3e] hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1d4b3e]">
                  Get started
                </button>
              </div>
            </div>

            <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col justify-between hover:bg-gray-50 hover:scale-110 transition-all duration-300">
              <div>
                <h3 className="text-xl font-medium text-[#1d4b3e]">Standard</h3>
                <p className="mt-4 flex items-baseline text-[#1d4b3e]">
                  <span className="text-5xl font-extrabold tracking-tight">$49</span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-5">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-[#1d4b3e]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Advanced voice commands</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-[#1d4b3e]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Integration with additional smart devices</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-[#1d4b3e]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Usage analytics and reporting</p>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <button type="button" className="w-full bg-[#1d4b3e] border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-[#1d4b3e] hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1d4b3e]">
                  Get started
                </button>
              </div>
            </div>

            <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col justify-between hover:bg-gray-50 hover:scale-110 transition-all duration-300">
              <div>
                <h3 className="text-xl font-medium text-[#1d4b3e]">Premium</h3>
                <p className="mt-4 flex items-baseline text-[#1d4b3e]">
                  <span className="text-5xl font-extrabold tracking-tight">$99</span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-5">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-[#1d4b3e]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Professional installation and onboarding</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-[#1d4b3e]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Priority customer support</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-[#1d4b3e]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Exclusive features and updates</p>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <button type="button" className="w-full bg-[#1d4b3e] border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-[#1d4b3e] hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1d4b3e]">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
