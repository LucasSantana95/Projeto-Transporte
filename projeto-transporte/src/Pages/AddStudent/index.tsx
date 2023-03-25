import { Form } from "../../Components/Form"
import { StudentContext } from "../../Contexts/StudentContext"

export const AddStudent = () =>{
    return (
        <StudentContext.Consumer>
            {(value)=>(
                <Form changedStudent={value.changedStudent}/>
            )}
        </StudentContext.Consumer>
    )
}