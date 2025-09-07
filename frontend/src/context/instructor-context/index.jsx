import { createContext, useState } from "react";
import { courseCurriculumInitialFormData, courseLandingInitialFormData } from "@/config";

export const InstructorContext = createContext(null);

export default function InstructorProvider({ children }) {

    const [courseLandingFormData, setcourseLandingFormData] = useState(courseLandingInitialFormData)
    const [courseCurriculumFormData, setcourseCurriculumFormData] = useState(courseCurriculumInitialFormData)

    return <InstructorContext.Provider
        value = {{courseLandingFormData,
                setcourseLandingFormData,
                courseCurriculumFormData, 
                setcourseCurriculumFormData
        }}
    >{children}</InstructorContext.Provider>
}
