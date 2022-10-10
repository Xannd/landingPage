import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 210px;
    height: 210px;
    border-radius: 18px;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    left: 5%;
    padding: 3%;
    animation: showOnPage .5s linear forwards;
    opacity:0;
    bottom: -50px;

    > div{
        display:flex;
        justify-content: space-between;
        align-items: center;

        strong{
            font-weight: 500;
        }
    }

    @keyframes showOnPage{
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
            bottom: 0;
        }
    }
`

function generateBars(){
    const amountBars = Array.from(Array(12).keys())

    let styleSpan: any = [];

    amountBars.forEach((item)=> {
        styleSpan.push(`
            > div:nth-child(${item + 1}) {
                width:3%;
                height:100%;
                display:flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                div{
                    background-color: #EFF3FE;
                    width:100%;
                    height:85%;
                    border-radius: 5px;
                    display:flex;
                    align-items: flex-end;
                
                    span{
                        background-color: #5236FF;
                        display: block;
                        width: 101.5%;
                        height:0%;
                        animation: animationHeightChart 1s linear forwards;
                        max-height:${Math.ceil(Math.random() * 100)}%;
                        border-radius: 5px;
                    }
                }

                small {
                    color: #BACCFD;
                    font-size:0.625rem;
                    margin-top:.3rem;
                }
            }    
        `)
    })

    return styleSpan.join("")

}

export const Chart = styled.div`
    margin-top:12%;
    height:75%;
    
    ${generateBars()}

    @keyframes animationHeightChart{
        from {
            height: 0%;
        }

        to {
            height: 85%;
        }
    }
`