
const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page

// "use client";

// import React, { useState } from "react";
// import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// // import router from "next/router";
// import Link from 'next/link'
// // import { useRouter } from 'next/navigation'


// // Step 1 Component
// /* // @ts-ignore 
// */
// const StepOne: React.FC<StepOneProps> = ({ nextStep }) => (
//   <>
//     <CardContent>
//       <h2 className="text-lg font-bold text-gray-900 mb-4">Hello! Let’s start with your business name</h2>
//       <div className="mb-6">
//         <label className="block text-sm font-medium text-gray-800 mb-2" htmlFor="business-name">
//           Your Business Name <span className="text-red-500">*</span>
//         </label>
//         <Input id="business-name" placeholder="Business Name" className="w-full" />
//       </div>
//       <div>
//         <h3 className="text-sm font-semibold text-gray-800 mb-4">
//           What is your business type<span className="text-red-500">*</span>
//         </h3>
//         <RadioGroup>
//           <div className="flex items-center space-x-2 mb-4">
//             <RadioGroupItem id="registered-company" value="registered-company" />
//             <label htmlFor="registered-company" className="text-sm text-gray-700">
//               Registered Business
//             </label>
//           </div>
//           <div className="flex items-center space-x-2">
//             <RadioGroupItem id="private-person" value="private-person" />
//             <label htmlFor="private-person" className="text-sm text-gray-700">
//               Non-registered Business
//             </label>
//           </div>
//         </RadioGroup>
//       </div>
//     </CardContent>
//     <CardFooter>
//       <div className="flex flex-col sm:flex-row sm:items-center">
//         <Button className="w-full bg-danger text-white" onClick={nextStep}>
//           Continue →
//         </Button>
//       </div>
//     </CardFooter>
//   </>
// );

// // Step 2 Component
// // ts-expect-error
// const StepTwo = ({ previousStep, nextStep }) => (
//   <>
//     <CardContent>
//       <h2 className="text-lg font-bold text-gray-900 mb-4">What kind of service do you offer?</h2>
//       <p className="text-sm text-gray-600 mb-6">Select the category that best fits your business.</p>
//       <div className="mb-6">
//         <label className="block text-sm font-medium text-gray-800 mb-2" htmlFor="business-category">
//           Your Business Category <span className="text-red-500">*</span>
//         </label>
//         <Input id="business-category" placeholder="Select Category" className="w-full" />
//       </div>
//     </CardContent>
//     <CardFooter className="flex justify-between">
//       <Button className="bg-gray-200 text-gray-800 hover:bg-gray-100" onClick={previousStep}>
//         ← Back
//       </Button>
//       <Button className="bg-danger text-white" onClick={nextStep}>
//         Continue →
//       </Button>
//     </CardFooter>
//   </>
// );

// // Step 3 Component
// // ts-expect-error
// const StepThree = ({ previousStep, nextStep }) => (
//   <>
//     <CardContent>
//       <h2 className="text-lg font-bold text-gray-900 mb-4">What’s your business contact details?</h2>
//       <p className="text-sm text-gray-600 mb-6">Potential customers will reach your business through the contact details you provide.</p>
//       <div className="grid grid-cols-12 gap-4">
//         <div className="col-span-12 sm:col-span-6">
//           <label className="block text-sm font-medium text-gray-800 mb-2" htmlFor="business-email">
//             Email <span className="text-red-500">*</span>
//           </label>
//           <Input id="business-email" placeholder="Your Business Email" className="w-full" />
//         </div>
//         <div className="col-span-12 sm:col-span-6">
//           <label className="block text-sm font-medium text-gray-800 mb-2" htmlFor="business-phone">
//             Phone <span className="text-red-500">*</span>
//           </label>
//           <Input id="business-phone" placeholder="Your Business Phone" className="w-full" />
//         </div>
//         <div className="col-span-12">
//           <label className="block text-sm font-medium text-gray-800 mb-2" htmlFor="business-whatsapp">
//             WhatsApp
//           </label>
//           <Input id="business-whatsapp" placeholder="Your WhatsApp Number" className="w-full" />
//         </div>
//       </div>
//     </CardContent>
//     <CardFooter className="flex justify-between">
//       <Button className="bg-gray-200 text-gray-800 hover:bg-gray-100" onClick={previousStep}>
//         ← Back
//       </Button>
//       <Button className="bg-danger text-white" onClick={nextStep}>
//         Continue →
//       </Button>
//     </CardFooter>
//   </>
// );

// // Step 4 Component
// // ts-expect-error
// const StepFour = ({ previousStep, nextStep }) => (
//   <>
//     <CardContent>
//       <h2 className="text-lg font-bold text-gray-900 mb-4">Where’s your business located?</h2>
//       <div className="grid grid-cols-12 gap-4">
//         <div className="col-span-12">
//           <label className="block text-sm font-medium text-gray-800 mb-2" htmlFor="business-address">
//             Address <span className="text-red-500">*</span>
//           </label>
//           <Input id="business-address" placeholder="Business Address" className="w-full" />
//         </div>
//         <div className="col-span-12 sm:col-span-6">
//           <label className="block text-sm font-medium text-gray-800 mb-2" htmlFor="business-state">
//             State <span className="text-red-500">*</span>
//           </label>
//           <Input id="business-state" placeholder="State" className="w-full" />
//         </div>
//         <div className="col-span-12 sm:col-span-6">
//           <label className="block text-sm font-medium text-gray-800 mb-2" htmlFor="business-phone">
//             City/Area <span className="text-red-500">*</span>
//           </label>
//           <Input id="business-city" placeholder="City" className="w-full" />
//         </div>

//       </div>

//     </CardContent>
//     <CardFooter className="flex justify-between">
//       <Button className="bg-gray-200 text-gray-800 hover:bg-gray-100" onClick={previousStep}>
//         ← Back
//       </Button>
//       <Button className="bg-danger text-white" onClick={nextStep}>
//         Continue →
//       </Button>
//     </CardFooter>
//   </>
// );

// // Step 5 Component
// // ts-expect-error
// const StepFive = ({ previousStep, nextStep }) => (
//   <>
//     <CardContent>
//       <h2 className="text-lg font-bold text-gray-900 mb-4">When’s your business working hours?</h2>
//       <p className="text-sm text-gray-600 mb-6"> Set your business availability hours so customers know exactly when you&#39;re open and ready to serve them.
//       </p>
//       <div>
//         <Input placeholder="Business Description" className="w-full" />
//       </div>
//     </CardContent>
//     <CardFooter className="flex justify-between">
//       <Button className="bg-gray-200 text-gray-800 hover:bg-gray-100" onClick={previousStep}>
//         ← Back
//       </Button>
//       <Button className="bg-danger text-white" onClick={nextStep}>
//         Continue →
//       </Button>
//     </CardFooter>
//   </>
// );

// // Step 6 Component
// // ts-expect-error
// const StepSix = ({ previousStep, nextStep }) => (
//   <>
//     <CardContent>
//       <h2 className="text-lg font-bold text-gray-900 mb-4">Upload images of your previous work</h2>
//       <p className="text-sm text-gray-600 mb-6">Give potential clients things to look at about your previous works.</p>
//       <div>
//         <Input type="file" placeholder="Business Description" className="w-full" />
//       </div>
//     </CardContent>
//     <CardFooter className="flex justify-between">
//       <Button className="bg-gray-200 text-gray-800 hover:bg-gray-100" onClick={previousStep}>
//         ← Back
//       </Button>
//       <Button className="bg-danger text-white" onClick={nextStep}>
//         Continue →
//       </Button>
//     </CardFooter>
//   </>
// );

// // ts-expect-error
// const StepSeven = ({ previousStep }) => (
//   <>
//     <CardContent>
//       <h2 className="text-lg font-bold text-gray-900 mb-4">Review and Submit</h2>
//       <p className="text-sm text-gray-600 mb-6">Ensure all information is accurate before submission.</p>
//     </CardContent>
//     <CardFooter className="flex justify-between">
//       <Button className="bg-gray-200 text-gray-800 hover:bg-gray-100" onClick={previousStep}>
//         ← Back
//       </Button>
//       {/*<Button className="bg-green-600 text-white" type="button" onClick={() => router.push('/listing/dashboard')}>*/}
//       {/*  Submit*/}
//       {/*</Button>*/}
//       <Link href="/listing/dashboard" className="w-full sm:w-auto py-2 px-4 bg-green-600 text-white font-medium text-sm rounded-md hover:bg-gray-50 hover:border-red-600 hover:text-red-600 transition-all duration-300 border-2 border-transparent sm:mr-4 text-center">
//         Submit
//       </Link>
//     </CardFooter>
//   </>
// );

// // Main BusinessListing Component
// export default function BusinessListing() {

//   const [step, setStep] = useState(1);

//   const nextStep = () => setStep((prevStep) => prevStep + 1);
//   const previousStep = () => setStep((prevStep) => prevStep - 1);

//   return (
//     <div className="flex justify-center items-start min-h-screen bg-gray-50 py-12">
//       <Card className="w-full max-w-2xl">
//         <CardHeader>
//           <CardTitle className="text-xl text-center font-semibold">Business Listing</CardTitle>
//           <hr />
//         </CardHeader>

//         {step === 1 && <StepOne nextStep={nextStep} />}
//         {step === 2 && <StepTwo previousStep={previousStep} nextStep={nextStep} />}
//         {step === 3 && <StepThree previousStep={previousStep} nextStep={nextStep} />}
//         {step === 4 && <StepFour previousStep={previousStep} nextStep={nextStep} />}
//         {step === 5 && <StepFive previousStep={previousStep} nextStep={nextStep} />}
//         {step === 6 && <StepSix previousStep={previousStep} nextStep={nextStep} />}
//         {step === 7 && <StepSeven previousStep={previousStep} />}
//       </Card>
//     </div>
//   );
// };


// // export default BusinessListing;