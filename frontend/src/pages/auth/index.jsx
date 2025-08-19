import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { GraduationCap } from 'lucide-react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import CommonForm from '@/components/common-form'
import { signInFormControls, signUpFormControls } from '@/config'
import { CardDescription, CardTitle, CardHeader, Card, CardContent } from '@/components/ui/card'
import { AuthContext } from '@/context/auth-context'

const AuthPage = () => {

  const [activeTab, setActiveTab] = useState('signin');
  const { signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    handleRegisterUser,
    handleLoginUser
  } = useContext(AuthContext)

  function handleTabChange(value) {
    setActiveTab(value);
  }

  function checkIfSignInFormIsValid() {
    return signInFormData &&
      signInFormData.userEmail.trim() !== '' &&
      signInFormData.password.trim() !== ''
  }

  function checkIfSignUpFormIsValid() {
    return signUpFormData &&
      signUpFormData.userName.trim() !== '' &&
      signUpFormData.userEmail.trim() !== '' &&
      signUpFormData.password.trim() !== ''
  }
  console.log(signInFormData);
  console.log(signUpFormData)

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='px-4 lg:px-6 h-14 flex items-center border-b'>
        <Link to={'/'} className='flex items-center justify-center'>
          <GraduationCap className='h-8 w-8 mr-4' />
          <span className='font-extrabold text-xl'>Learn & Grow</span>
        </Link>
      </header>

      <div className='flex utems-center justify-center min-h-screen bg-background pt-10'>
        <Tabs value={activeTab}
          defaultValue='signin'
          onValueChange={handleTabChange}
          className='w-full max-w-md'
        >
          <TabsList className='grid w-full grid-cols-2 '>
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Card className='p-6 space-y-4'>
              <CardHeader>
                <CardTitle>Sign In To Your Account</CardTitle>
                <CardDescription>Enter Your Email And Password To Access Your Account</CardDescription>
              </CardHeader>
              <CardContent className='space-y-2'>
                <CommonForm formControls={signInFormControls} buttonText={'Sign In'}
                  formData={signInFormData}
                  setFormData={setSignInFormData}
                  isButtonDisabled={!checkIfSignInFormIsValid()}
                  handleSubmit={handleLoginUser}/>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card className='p-6 space-y-4'>
              <CardHeader>
                <CardTitle>Create Your Account</CardTitle>
                <CardDescription>Enter Your Details To Get Started</CardDescription>
              </CardHeader>
              <CardContent className='space-y-2'>
                <CommonForm formControls={signUpFormControls} buttonText={'Sign Up'}
                  formData={signUpFormData}
                  setFormData={setSignUpFormData}
                  isButtonDisabled={!checkIfSignUpFormIsValid()} 
                  handleSubmit={handleRegisterUser}/>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </div>

    </div>
  )
}

export default AuthPage
