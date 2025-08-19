import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { checkAuthService, loginService, registerService } from "@/services";
import { createContext, useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {

    const [signInFormData, setSignInFormData] = useState(initialSignInFormData)
    const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData)
    const [auth, setAuth] = useState({
        authenticate: false,
        user: null
    })

    const handleRegisterUser = async (e) => {
        e.preventDefault();
        const data = await registerService(signUpFormData);
        return data;
        //console.log(data);
    }

    const handleLoginUser = async (e) => {
        e.preventDefault();
        const data = await loginService(signInFormData);
        console.log(data, "datadatadatadatadata");

        if (data.success) {
            //sessionStorage.setItem("accessToken", data.data.accessToken); // ✅ Store plain string
            sessionStorage.setItem(
                "accessToken",
                JSON.stringify(data.data.accessToken)
            );

            setAuth({
                authenticate: true,
                user: data.data.user,
            });
        } else {
            setAuth({
                authenticate: false,
                user: null,
            });
        }
    }

    const checkAuthUser = async () => {
        const data = await checkAuthService();

        if(data.success){
            setAuth({
                authenticate: true,
                user: data.data.user
            });
        }
        else{
            setAuth({
                authenticate: false,
                user: null
            })
        }
    }

    useEffect(()=>{
        checkAuthUser();
    },[])

    console.log(auth);
    

    return <AuthContext.Provider value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegisterUser,
        handleLoginUser,
        auth
    }}>{children}</AuthContext.Provider>
}

