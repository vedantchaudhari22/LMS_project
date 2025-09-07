import { createContext, useState } from "react";
import { courseCurriculumInitialFormData, courseLandingInitialFormData } from "@/config";

export const InstructorContext = createContext(null);

export default function InstructorProvider({ children }) {

    const [courseLandingFormData, setcourseLandingFormData] = useState(courseLandingInitialFormData);

    const [courseCurriculumFormData, setcourseCurriculumFormData] = useState(courseCurriculumInitialFormData);

    const [mediaUploadProgress, setMediaUploadProgress] = useState(false);



    return <InstructorContext.Provider
        value = {{courseLandingFormData,
                setcourseLandingFormData,
                courseCurriculumFormData, 
                setcourseCurriculumFormData,
                mediaUploadProgress, 
                setMediaUploadProgress
        }}
    >{children}</InstructorContext.Provider>
}
