import Logo from '../../molecules/Logo'
import Menu from '../Menu'
import Button from '../../atoms/Button'

import * as S from './styled'


const Header = () => {
    return(
        <S.Box>
            <Logo/>
            <Menu/>
            <Button/>
        </S.Box>
    )
}

export default Header;