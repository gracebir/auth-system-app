'use client'

import { timeServiceSchema } from "@/lib/baseSchema"
import { useFormik } from "formik"
import TimeField from "./Elements/TimeField"
import { Button } from "./Elements/Button"
import { typeTimeServiceForm } from "@/lib/type"
import { saveTimeService } from "@/lib/queries/timeService"

export const TimeServiceForm = ({
  setTimeSevices,
  timeServices,
  dayId
}:typeTimeServiceForm) => {
    const {values, handleBlur, handleChange, handleSubmit, touched, errors} = useFormik({
        initialValues: {
            startHour:'',
            endHour:''
        },
        validateOnBlur:true,
        onSubmit: async (values) => {
          if(dayId){
            const timeService = await saveTimeService({dayId, startHour: values.startHour,endHour:values.endHour})
            setTimeSevices([...timeServices, timeService])
          }
        },
        validationSchema: timeServiceSchema
    })
  return (
    <form className="flex flex-col gap-3 p-2 rounded-lg border border-blue-500" onSubmit={handleSubmit}>
            <TimeField
            value={values.startHour}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.startHour}
            placeholder="01:00"
            name="startHour"
            label="Start Hour"
            type="text"
            errorMsg={errors.startHour}
            />
            <TimeField
            value={values.endHour}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.endHour}
            placeholder="09:00 or 21:30"
            name="endHour"
            label="Start Hour"
            type="text"
            errorMsg={errors.endHour}
            />
            <Button text={"set"}/>
    </form>
  )
}
