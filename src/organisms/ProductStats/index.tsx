import CardActivity from '../../molecules/CardActivity';
import HeroHeaderImage from '../../assets/images/hero-header-image.svg'
import * as S from './style'

const ProductStats = () => {
    return(
        <S.Container>
            <CardActivity/>
            <img src={HeroHeaderImage} alt="Imagem de uma mulher fazendo uma pesquisa" />
          </S.Container>
    )
}

export default ProductStats;