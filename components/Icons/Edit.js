import styled from "styled-components";
import {EditOutline} from "@styled-icons/evaicons-outline/EditOutline";
import ThemesApp from "../../config/themes.json";

export const IconEdit = styled(EditOutline)`
    color: ${ThemesApp.colors.edit};
    width: 25px;
`;