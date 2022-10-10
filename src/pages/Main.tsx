import Frontend from '../templates/Frontend';
import ProductInformation from '../organisms/ProductInformation'
import ProductStats from '../organisms/ProductStats'

import * as S from './style'

function Main() {
  return (
    <Frontend>
      <S.Container>
        <ProductInformation/>
        <ProductStats/>
      </S.Container>
    </Frontend>
  );
}

export default Main;
