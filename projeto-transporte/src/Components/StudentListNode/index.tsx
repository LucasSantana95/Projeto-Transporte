import { useNavigate } from "react-router-dom"
import { IStudent } from "../../Interfaces/IStudent"
import { StudentServices } from "../../Services/StudentServices"
import { StudentContext } from "../../Contexts/StudentContext"

export const StudentListNode = ({ item }: { item: IStudent }) => {
    const navigate = useNavigate()

    const handleDelete = () => {
        if (window.confirm('Deseja realmente remover esse aluno?')) {
            if (item._id) {
                StudentServices.deleteStudent(item._id)
            }
            alert('Aluno Removido com sucesso')
            window.location.reload()
        }
    }
    return (
        <StudentContext.Consumer>
            {(value)=>(
                <section>
                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>School:</strong> {item.school}</p>
                <p><strong>Shift:</strong> {item.shift}</p>
                <p><strong>Address:</strong> {item.address}</p>
                <p><strong>Value:</strong> {item.value}</p>
                <div>
                    <button onClick={()=>{
                        value.setChangedStudent(item)
                        navigate('/addstudent')
                        }}>Alterar
                    </button>
                    <button onClick={handleDelete}>Deletar</button>
                </div>
            </section>
            )}
        </StudentContext.Consumer>
    )
}