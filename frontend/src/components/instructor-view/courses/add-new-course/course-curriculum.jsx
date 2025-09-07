import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InstructorContext } from '@/context/instructor-context'
import React, { useContext } from 'react'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { courseCurriculumInitialFormData } from '@/config';
const CourseCurriculum = () => {

  const { courseCurriculumFormData, setcourseCurriculumFormData } = useContext(InstructorContext);

  function handleNewLecture() {
    setcourseCurriculumFormData([
      ...courseCurriculumFormData,
      {
        ...courseCurriculumInitialFormData[0]
      }
    ])
  }

  function handleCourseTitleChange(event, currentIndex) {
    let copyCourseCurriculumFormData = [...courseCurriculumFormData];
    //console.log(copyCourseCurriculumFormData);
    copyCourseCurriculumFormData[currentIndex] = {
      ...copyCourseCurriculumFormData[currentIndex],
      title: event.target.value
    }
    //console.log(copyCourseCurriculumFormData);
    setcourseCurriculumFormData(copyCourseCurriculumFormData);
  }

  function handleFreePreviewChange(currentValue, currentIndex) {
    console.log(currentValue, currentIndex);
    let copyCourseCurriculumFormData = [...courseCurriculumFormData];
    //console.log(copyCourseCurriculumFormData);
    copyCourseCurriculumFormData[currentIndex] = {
      ...copyCourseCurriculumFormData[currentIndex],
      freePreview: currentValue
    }
    //console.log(copyCourseCurriculumFormData);
    setcourseCurriculumFormData(copyCourseCurriculumFormData);

  }

  function handleSingleLectureUpload(event, currentIndex) {
    
  }
  console.log(courseCurriculumFormData);


  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Course Curriculum</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={handleNewLecture}>Add Lecture</Button>
        <div className='mt-4 space-y-4'>
          {
            courseCurriculumFormData.map((item, index) => (
              <div className='border p-5 rounded-md'>
                <div className='flex gap-5 items-center'>
                  <h3 className='font-semibold'>Lecture {index + 1}</h3>
                  <Input
                    name={`title-${index + 1}`}
                    placeholder='Enter Lecture Title'
                    className={'max-w-96'}
                    onChange={(event) => handleCourseTitleChange(event, index)}
                    value={courseCurriculumFormData[index]?.title}
                  >
                  </Input>
                  <div className='flex items-center space-x-2'>
                    <Switch
                      onCheckedChange={(value) => handleFreePreviewChange(value, index)}
                      checked={courseCurriculumFormData[index]?.freePreview}
                      id={`freePreview-${index + 1}`}
                    >
                    </Switch>
                    <Label htmlFor={`freePreview-${index + 1}`}>Free Preview</Label>
                  </div>
                </div>
                <div className='mt-6'>
                  <Input
                    type='file'
                    accept='video/*'
                    className={'mb-4'}
                    onChange={(event)=> handleSingleLectureUpload(event, index)}
                  >

                  </Input>
                </div>
              </div>
            ))
          }
        </div>
      </CardContent>
    </Card>
  )
}

export default CourseCurriculum
