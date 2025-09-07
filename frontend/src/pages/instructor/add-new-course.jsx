import React from 'react'
import {Button} from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import CourseCurriculum from '@/components/instructor-view/courses/add-new-course/course-curriculum'
import CourseLanding from '@/components/instructor-view/courses/add-new-course/course-landing'
import CourseSettings from '@/components/instructor-view/courses/add-new-course/course-settings'

const AddNewCoursePage = () => {
  return (
    <div className='container mx-auto p-4'>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-extrabold mb-5'>Create A New Course</h1>
        <Button className='text-sm tracking-wider font-bold px-8'>SUBMIT</Button>
      </div>
      <Card>
        <CardContent>
            <div className='container mx-auto p-4'>
                <Tabs defaultValue='curriculum' className={'space-y-4'}>
                    <TabsList>
                        <TabsTrigger value='curriculum'>Curriculum</TabsTrigger>
                        <TabsTrigger value='course-landing-page'>Course Landing Page</TabsTrigger>
                        <TabsTrigger value='settings'>Settings</TabsTrigger>
                    </TabsList>
                    <TabsContent value='curriculum'>
                        <CourseCurriculum></CourseCurriculum>
                    </TabsContent>
                    <TabsContent value='course-landing-page'>
                        <CourseLanding></CourseLanding>
                    </TabsContent>
                    <TabsContent value='settings'>
                        <CourseSettings></CourseSettings>
                    </TabsContent>
                </Tabs>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AddNewCoursePage
