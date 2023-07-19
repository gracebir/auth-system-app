'use client'
import { Header } from "@/components/Header"
import StoreCard from "@/components/StoreCard"
import { BsArrowRight } from 'react-icons/bs'
import { useContext, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { AppContext } from "@/context/AppContext"
import StoreForm from "@/components/StoreForm"

function Authenticated() {
  const { stores } = useContext(AppContext)
  const [collapse, setCollapse] = useState(false)
  return (
    <>
      <Header />
      <main className="w-full mt-6 lg:mt-8">
        <div className="max-w-6xl mx-auto lg:px-2 px-4 flex gap-6 lg:gap-5 flex-col">
          <h1 className="text-xl lg:text-2xl font-bold text-gray-200 text-center tex-start">Manage your store here</h1>
          <div className="lg:border w-full lg:border-gray-700 rounded-lg px-5 py-4 grid gap-6 sm:grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 flex flex-col gap-3 sm:col-span-1">
              <p className="italic text-center lg:text-start text-gray-400">Start managing for store by clicking on plus button</p>
              <div className="flex flex-col gap-3 lg:gap-4 items-center ">
                <BsArrowRight size={24} className="lg:block hidden" />
                <button onClick={() => setCollapse(!collapse)} className={`duration-300 transition-all ${collapse ? 'px-3 py-3 rounded-full text-gray-200 border border-blue-300 hover:border-blue-color' : 'px-4 lg:px-6 py-2 border border-blue-900 hover:border-blue-color rounded-lg'}`}>
                  {collapse ? <IoMdClose className="text-white" /> : "Add a new store"}
                </button>
              </div>
              {collapse && (
                <div className="rounded-lg px-3 py-2 lg:px-4 lg:py-3 border border-blue-400">
                  <StoreForm />
                </div>
              )}
            </div>
            <div className="lg:col-span-3 flex flex-col gap-3 sm:col-span-1">
              {stores && stores.map((store) => (
                <StoreCard key={store.id} name={store.name} id={store.id!} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Authenticated
