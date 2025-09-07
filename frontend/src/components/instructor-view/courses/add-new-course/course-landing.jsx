import React, { useContext } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import FormControls from '@/components/common-form/form-controls'
import { courseLandingPageFormControls } from '@/config'
import { InstructorContext } from '@/context/instructor-context'

const CourseLanding = () => {

  const {courseLandingFormData, setcourseLandingFormData} = useContext(InstructorContext)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Landing Page</CardTitle>
        <CardContent>
          <FormControls 
            formControls={courseLandingPageFormControls}
            formData={courseLandingFormData}
            setFormData={setcourseLandingFormData}  
          />
        </CardContent>
      </CardHeader>
    </Card>
  )
}

export default CourseLanding
