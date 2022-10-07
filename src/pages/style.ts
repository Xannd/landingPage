import styled from 'styled-components'

export const Container = styled.div`
    display: flex;

    > div{
        width:50%;

        img {
            width: 80%;
        }
    }

    h1 {
        color: #1E255E;
        font-size: 3.375rem;
        font-weight: 700;

    }

    h6{
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        padding-right: 30%;
        margin-top:5%;
        text-align: left;
        color: rgba(30, 37, 94, 0.7);
    }
`

export const ColumnImage = styled.div`
    text-align: right;
    position: relative;

`