import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Delete, Edit } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const InstructorCourses = () => {

  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader className={'flex justify-between flex-row items-center'}>
        <CardTitle className={'text-3xl font-extrabold'}>All Courses</CardTitle>
        <Button onClick={() => navigate('/instructor/create-new-course')} className={'p-6'}>Create New Courses</Button>
      </CardHeader>
      <CardContent>
        <div className={'overflow-x-auto'}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course Name</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">React.JS</TableCell>
                <TableCell>100</TableCell>
                <TableCell>1000 Rs</TableCell>
                <TableCell className="text-right">
                  <Button variant='ghost' size='sm'>
                    <Edit className='h-8 w-8'></Edit>
                  </Button>
                  <Button variant='ghost' size='sm'>
                    <Delete className='h-8 w-8'></Delete>
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

export default InstructorCourses
