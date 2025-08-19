import React from 'react'
import { Button } from '../ui/button'
import FormControls from './form-controls'

const CommonForm = ({ handleSubmit, 
    buttonText, 
    formControls = [],
     formData, 
     setFormData, 
     isButtonDisabled = false,
}) => {

    return (
        <form onSubmit={handleSubmit}className='space-y-5'>
        <FormControls formControls={formControls} formData={formData} setFormData={setFormData}/>
        <Button disabled={isButtonDisabled} type="submit" className='w-full bg-gray-600 hover:bg-gray-700 hover:rounded-4xl'>{buttonText || 'Submit'}</Button>
        </form>
    )
}

export default CommonForm
