export const signUpFormControls = [
    {
        name: 'userName',
        label: 'User Name',
        placeholder: 'Enter Your User Name',
        type: 'text',
        componentType: 'input'
    },
    {
        name: 'userEmail',
        label: 'Email Address',
        placeholder: 'Enter Your Email Address',
        type: 'email',
        componentType: 'input'
    },
    {
        name: 'password',
        label: 'Password',
        placeholder: 'Enter Your Password',
        type: 'password',
        componentType: 'input'
    },
]

export const signInFormControls = [
   
    {
        name: 'userEmail',
        label: 'Email Address',
        placeholder: 'Enter Your Email Address',
        type: 'email',
        componentType: 'input'
    },
    {
        name: 'password',
        label: 'Password',
        placeholder: 'Enter Your Password',
        type: 'password',
        componentType: 'input'
    },
]

export const initialSignInFormData = {
    userEmail : "",
    password: ""
}

export const initialSignUpFormData = {
    userName : "",
    userEmail : "",
    password: ""
}