'use client'
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import TextField from './Elements/TextField'
import { storeSchema } from '@/lib/baseSchema'
import { saveStore } from '@/lib/queries/query'
import { useSession } from 'next-auth/react'
import { AppContext } from '@/context/AppContext'
import { storeType } from '@/lib/type'

const StoreForm = () => {
    const { data: session } = useSession()
    const { setStores, stores } = useContext(AppContext)
    const [errorMsg, setErrorMsg] = useState("")
    const { values, errors, handleChange, handleSubmit, touched, resetForm, handleBlur } = useFormik({
        initialValues: {
            name: ''
        },
        validateOnBlur: true,
        onSubmit: async (values) => {
            if (session && session.user) {
                const userId = session.user.id
                await saveStore(userId, values.name)
                    .then((data) => {
                        if (data.msg) {
                            setErrorMsg(`${data.msg}`)
                        } else {
                            alert(`${(data as storeType).name} added...`)
                            setStores([...stores!, data as storeType])
                            resetForm()
                            setErrorMsg("")
                        }
                    })
                    .catch(error => console.log("error", error))
            }
        },
        validationSchema: storeSchema
    })
    return (
        <form onSubmit={handleSubmit} className='mt-4 flex flex-col gap-4'>
            <p className='text-sm lg:text-base italic text-center'>You're about to add a new store 📝</p>
            <span className={`text-xs text-red-400 italic text-center duration-300 ease-in-out ${errorMsg ? 'block' : 'hidden'}`}>{errorMsg}</span>
            <div className='flex flex-col gap-3'>
                <TextField
                    type='text'
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.name}
                    value={values.name}
                    errorMsg={errors.name}
                    label='Store name'
                    placeholder='Example Amazon...'
                />
                <div className='flex justify-center w-full'>
                    <button type='submit' className='bg-blue-color px-6 lg:px-7 py-1 lg:py-2 rounded-lg font-semibold'>add</button>
                </div>
            </div>
        </form>
    )
}

export default StoreForm
