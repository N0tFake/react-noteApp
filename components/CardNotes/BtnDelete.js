import styled from "styled-components";
import ThemesApp from "../../config/themes.json";
import { lighten } from 'polished'

export const BtnDelete = styled.button`
    background: ${ThemesApp.colors.backgroundSecond};
    padding: 10px;
    border: none;
    border-radius: 50px;


    &:hover {
        box-shadow: 1px 1px 5px black;

    }

    &:active {
        background: ${ lighten(0.4, ThemesApp.colors.cancel) };
    }
`