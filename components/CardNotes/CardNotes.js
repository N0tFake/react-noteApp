import styled from "styled-components";
import ThemesApp from "../../config/themes.json";


export const CardNote = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 10px;
    margin-bottom: 20px;
    background: ${ThemesApp.colors.backgroundSecond};
    position: relative;

    &:hover{
        border: 2px solid ${ThemesApp.colors.primary};
        box-shadow: 2px 2px 6px;
    }

    #p-card {
        white-space: pre-line;       
    }

    .ButtonDelete, .ButtonEdit {
        display: none;
    }

    &:hover .ButtonDelete {
        display: inline;
        position: absolute;
        bottom: 5px;
        right: 5px;
    }

    &:hover .ButtonEdit {
        display: inline;
        position: absolute;
        bottom: 5px;
        left: 5px;
    }
`