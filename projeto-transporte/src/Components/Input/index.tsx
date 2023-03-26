import * as S from './styles'

interface IInput {
    inputType : string,
    inputName : string,
    label : string
    onChange : (key : string, value : string)=> void
}
export const Input = ({inputType, inputName, label, onChange} : IInput) => {
    return (
        <S.Container>
            <S.Label>{label}</S.Label>
            <S.Input type={inputType} name={inputName} onChange={(e)=>{onChange(e.target.name,e.target.value)}}/>
        </S.Container>
    )
}