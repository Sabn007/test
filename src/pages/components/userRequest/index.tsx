import React, { useState } from "react";
import MainLayout from "../../../container/dashboardLayout";

const  UserRequest = () => {

  const [tab,setTab] = useState('shipper')
  return (
    <MainLayout>
      <main className="flex p-5 w-full gap-4">
        <div className="flex flex-col ">
        <div className="flex text-sm w-1/2 font-medium text-center text-gray-500 dark:text-gray-400">
        <ul className="flex text-sm w-1/2 font-medium text-center text-gray-500 dark:text-gray-400">
        
          <li className="mr-2" onClick={()=>setTab('shipper')}>
            <span
              className="inline-block py-3 px-4 text-white bg-blue-600 rounded-lg active"
              aria-current="page"
            >
              Shipper
            </span>
          </li>
          <li className="mr-2" onClick={()=>setTab('carrier')}>
            <span className="inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
              Carrier
            </span>
          </li>
          <li className="mr-2" onClick={()=>setTab('vehicle')}>
            <span className="inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
              Vehicle
            </span>
          </li>
          <li className="mr-2" onClick={()=>setTab('driver')}>
            <span className="inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
              Driver
            </span>
          </li>
          </ul>
        </div>
        
        <div className="flex justify-between my-4">
       {tab === 'shipper' && (
        <>
           <div>
           <h1>Shipper ID</h1>
           <ul>
             <li>133</li>
             <li>133</li>
           </ul>
         </div>
         <div>
           <h1>Shipper Name</h1>
           <ul>
             <li>Gorkha Beverage Pvt. Ltd</li>
             <li>Gorkha Beverage Pvt. Ltd</li>
           </ul>
         </div>
         </>
       )}
       {tab === 'carrier' && (
        <>
           <div>
           <h1>Carrier ID</h1>
           <ul>
             <li>133</li>
             <li>133</li>
           </ul>
         </div>
         <div>
           <h1>Carrier Name</h1>
           <ul>
             <li>Gorkha Beverage Pvt. Ltd</li>
             <li>Gorkha Beverage Pvt. Ltd</li>
           </ul>
         </div>
         </>
       )}
       {tab === 'vehicle' && (
        <>
           <div>
           <h1>Vehicle ID</h1>
           <ul>
             <li>133</li>
             <li>133</li>
           </ul>
         </div>
         <div>
           <h1>Vehicle Name</h1>
           <ul>
             <li>Gorkha Beverage Pvt. Ltd</li>
             <li>Gorkha Beverage Pvt. Ltd</li>
           </ul>
         </div>
         </>
       )}
       {tab === 'driver' && (
        <>
           <div>
           <h1>Driver ID</h1>
           <ul>
             <li>133</li>
             <li>133</li>
           </ul>
         </div>
         <div>
           <h1>Driver Name</h1>
           <ul>
             <li>Gorkha Beverage Pvt. Ltd</li>
             <li>Gorkha Beverage Pvt. Ltd</li>
           </ul>
         </div>
         </>
       )}
        </div>
        </div>

        {tab === 'shipper' && (
          <div className="border-2 w-full p-4 mx-3">
          <div className="rounded-sm box__shadow p-3">
            <h1>Shipper Detail Information</h1>
          </div>
          <div className="rounded-sm box__shadow p-3 my-4">
            <h1>Contact Detail</h1>
            <ul className="my-4">
              <li>First Name: Sabin</li>
              <li>Contact Number: 9854545415</li>
            </ul>
            <h1>Organization Detail</h1>
            <ul className="my-4">
              <li>Organization: Gorkha Beverages Pvt.Ltd</li>
              <li>First Name: Sabin</li>
              <li>Contact Number: 9854545415</li>
            </ul>
          </div>
          <div className="flex justify-end my-4 ">
            <button className="rounded-sm box__shadow px-8 py-3 text-green-600">
              Verify
            </button>
          </div>
          <div className="rounded-sm box__shadow p-3">
            Send a feedback message. . . . .{" "}
          </div>
          <div className="flex justify-end my-4 ">
            <button className="rounded-sm box__shadow px-8 py-3 text-red-600">
              Reject with message
            </button>
          </div>
        </div>
        )}
        {tab === 'carrier' && (
          <div className="border-2 w-full p-4 mx-3">
          <div className="rounded-sm box__shadow p-3">
            <h1>Carrier Detail Information</h1>
          </div>
          <div className="rounded-sm box__shadow p-3 my-4">
            <h1>Contact Detail</h1>
            <ul className="my-4">
              <li>First Name: Sabin</li>
              <li>Contact Number: 9854545415</li>
              <li>Address: Ramnagar, Hetauda-10, Makwanpur, Bagmati Province</li>
            </ul>
            <h1>Transport Comapny Detail</h1>
            <ul className="my-4">
              <li> Name: Sabin</li>
              <li>VAT/PAN: 9854545415</li>
            </ul>
          </div>
          <div className="flex justify-end my-4 ">
            <button className="rounded-sm box__shadow px-8 py-3 text-green-600">
              Verify
            </button>
          </div>
          <div className="rounded-sm box__shadow p-3">
            Send a feedback message. . . . .{" "}
          </div>
          <div className="flex justify-end my-4 ">
            <button className="rounded-sm box__shadow px-8 py-3 text-red-600">
              Reject with message
            </button>
          </div>
        </div>
        )}
        {tab === 'vehicle' && (
          <div className="border-2 w-full p-4 mx-3">
          <div className="rounded-sm box__shadow p-3">
            <h1>Vehicle Detail Information</h1>
          </div>
          <div className="rounded-sm box__shadow p-3 my-4">
            <h1>Contact Detail</h1>
            <ul className="my-4">
              <li>First Name: Sabin</li>
              <li>Contact Number: 9854545415</li>
            </ul>
            <h1>Organization Detail</h1>
            <ul className="my-4">
              <li>Organization: Gorkha Beverages Pvt.Ltd</li>
              <li>First Name: Sabin</li>
              <li>Contact Number: 9854545415</li>
            </ul>
          </div>
          <div className="flex justify-end my-4 ">
            <button className="rounded-sm box__shadow px-8 py-3 text-green-600">
              Verify
            </button>
          </div>
          <div className="rounded-sm box__shadow p-3">
            Send a feedback message. . . . .{" "}
          </div>
          <div className="flex justify-end my-4 ">
            <button className="rounded-sm box__shadow px-8 py-3 text-red-600">
              Reject with message
            </button>
          </div>
        </div>
        )}
        {tab === 'driver' && (
          <div className="border-2 w-full p-4 mx-3">
          <div className="rounded-sm box__shadow p-3">
            <h1>Shipper Detail Information</h1>
          </div>
          <div className="rounded-sm box__shadow p-3 my-4">
            <h1>Contact Detail</h1>
            <ul className="my-4">
              <li>First Name: Sabin</li>
              <li>Contact Number: 9854545415</li>
            </ul>
            <h1>Organization Detail</h1>
            <ul className="my-4">
              <li>Organization: Gorkha Beverages Pvt.Ltd</li>
              <li>First Name: Sabin</li>
              <li>Contact Number: 9854545415</li>
            </ul>
          </div>
          <div className="flex justify-end my-4 ">
            <button className="rounded-sm box__shadow px-8 py-3 text-green-600">
              Verify
            </button>
          </div>
          <div className="rounded-sm box__shadow p-3">
            Send a feedback message. . . . .{" "}
          </div>
          <div className="flex justify-end my-4 ">
            <button className="rounded-sm box__shadow px-8 py-3 text-red-600">
              Reject with message
            </button>
          </div>
        </div>
        )}
      </main>
    </MainLayout>
  );
}

export default UserRequest;
