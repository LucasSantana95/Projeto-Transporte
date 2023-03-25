import { createContext, useState } from "react";
import { IStudent } from "../Interfaces/IStudent";

type studentContextType = {
    changedStudent : IStudent | undefined,
    setChangedStudent : React.Dispatch<React.SetStateAction<IStudent | undefined>>
}
export const StudentContext = createContext({} as studentContextType)

export const StudentProvider = ({children} : {children : React.ReactElement}) =>{
    const [changedStudent , setChangedStudent] = useState<IStudent>()
    return <StudentContext.Provider
    value={ {changedStudent , setChangedStudent}}>{children}</StudentContext.Provider>
}