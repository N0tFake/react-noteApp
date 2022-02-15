import styled from "styled-components";
import ThemesApp from "../../config/themes.json";

export const TextArea = styled.textarea`
    width: 250px;
    height: 250px;

    padding: 10px;

    border: none;
    border-radius: 10px;

    background: ${ThemesApp.colors.backgroundSecond};

    &:focus {
    outline: none;
    border: 2px solid ${ThemesApp.colors.primary}
    }

`