import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    left:12%;
    background: #daaaff;
    color: #fff;
    width: 154px;
    height:77px;
    border-radius: 12px;
    text-align: left;
    padding: 2%;
    overflow: hidden;
    animation: showOnPageCard 0.5s linear forwards;
    animation-delay: .5s;
    opacity:0;
    top:10%;
    
    
    small{
        font-size: 0.938rem;
    }

    div{
        display: flex;
        align-items: center;
        
        span{
            font-size: 1.563rem;
            font-weight: 400;
            margin-right:1%;
        }
    }

    i{
        width: 154px;
        height: 77px;
        position: absolute;
        left: 0;
        top: 0;

        &.circle1{
            left: 65%;
            top: -25%;
            border-radius: 50px;
            background: rgba(255, 255, 255, 0.3);
        }

        &.circle2{
            left: 27%;
            top: -90%;
            border:1px solid rgba(255, 255, 255, 0.3);
            transform: rotate(-72.7deg);
            border-radius: 50px;
        }

        &.circle3{
            left: 45%;
            top: 65%;
            background: rgba(255, 255, 255, 0.2);
            transform: rotate(45deg);
            border-radius: 50px;

        }
    }

    @keyframes showOnPageCard{
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
            top: 21%;
        }
    }
`