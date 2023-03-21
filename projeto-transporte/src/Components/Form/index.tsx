import { Button } from '../Button'
import { BackButton } from '../BackButton'
import * as S from './styles'

export const Form = () =>{
    return (
        <S.Container>
            <BackButton/>
            <S.Content>
                <S.Title>Adicione um Novo Aluno</S.Title>
                <S.SubTitle>*Todos os Campos são Obrigatórios</S.SubTitle>
                <S.Input>
                    <label>Nome Completo:</label>
                    <input type={'text'} id='name'/>
                </S.Input>
                <S.Input>
                    <label>Escola:</label>
                    <input type={'text'} id='school'/>
                </S.Input>
                <S.Input>
                    <label>Turno:</label>
                    <select id='shift'>
                        <option>Selecione o Turno</option>
                        <option value={'morning'}>Manhâ</option>
                        <option value={'afternoon'}>Tarde</option>
                    </select>
                </S.Input>
                <S.Input>
                    <label>Endereço:</label>
                    <input type={'text'} id={'address'}/>
                </S.Input>
                <Button>Cadastrar</Button>
            </S.Content>
        </S.Container>
    )
}