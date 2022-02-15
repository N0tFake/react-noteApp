import styled from "styled-components";

export const Grid = styled.div`
    width: 80%;
    display: inline-grid;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 649px){
        justify-items: center;
        grid-template-columns: repeat(1, 1fr);
    }

    @media (min-width: 650px) and (max-width: 1080px){
        justify-items: center;
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1081px) and (max-width: 1300px){
        justify-items: center;
        grid-template-columns: repeat(3, 1fr);
    }

`



