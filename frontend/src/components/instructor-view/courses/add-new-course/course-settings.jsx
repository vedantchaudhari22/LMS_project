import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { useContext } from 'react'
import { InstructorContext } from '@/context/instructor-context'
import { mediaUploadService } from '@/services'

const CourseSettings = () => {

  const {courseLandingFormData, setcourseLandingFormData} = useContext(InstructorContext)
  
  async function handleImageUploadChange(event){
    const selectedImage = event.target.files[0];
    if(selectedImage){
      const imageFormData = new FormData();
      imageFormData.append('file', selectedImage);

      try {
        const response = await mediaUploadService(imageFormData);
        console.log('response ',response);
        if(response?.success){
          setcourseLandingFormData({
            ...courseLandingFormData,
            image: response?.data?.url
          })
        }
        
      } catch (error) {
        console.log(error);
        
      }
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Settings</CardTitle>
      </CardHeader>
      <CardContent>
        {
          courseLandingFormData?.image ?
          <img src={courseLandingFormData?.image}/>
          : 
           <div className='flex flex-col gap-3'>
          <Label>Upload Course Image</Label>
          <Input type='file' accept='image/*' onChange={handleImageUploadChange}></Input>
        </div>
        }   
      </CardContent>
    </Card>
  )
}

export default CourseSettings
