import Header from '../../organisms/Header'
import * as S from './style'


type FrontendProps = {
    children: React.ReactNode
}

const Frontend = ({children}:FrontendProps ) => {
    return(
        <S.Container>
            <Header/>
        </S.Container>
    )
}

export default Frontend;