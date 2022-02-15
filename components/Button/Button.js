import styled from "styled-components";
import ThemesApp from "../../config/themes.json";
import { lighten, darken } from 'polished'

const bgColor = ThemesApp.colors.background;

export const Button = styled.button`
    color: ${ThemesApp.colors.backgroundSecond};
    font-weight: bold;
    font-size: 1em;
    background: ${props => lighten(0.1, props.color)};
    box-shadow: 0px 2px  0 ${darken(0.05, bgColor)}, 2px 4px 6px ${darken(0.02, bgColor)};
    transition: all 350ms linear;
    margin: 1em;
    padding: 1.25em 3em;
    border: 1px solid ${darken(0.05, bgColor)};
    border-radius: ${props => props.radius};

    &:hover{
        background: ${darken(0.02, bgColor)};
        border: 1px solid rgba(0, 0, 0, .05);
        box-shadow: 1px 1px 2px rgba(255,255,255, .2);
        transition: all 250ms linear;
    }
`

'#F564A9'