import styled from "styled-components";
import ThemesApp from "../../config/themes.json";
import { darken } from 'polished'

export const EmptyNotes = styled.div`
    text-align: center;
    color: ${darken(0.05, ThemesApp.colors.background)};
    font-size: 25px;
    font-weight: bold;
    text-shadow: 1px 1px 1px rgba(255,255,255, .2);
`