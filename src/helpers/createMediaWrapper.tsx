import * as React from "react";
import styled, { StyledComponentClass } from "styled-components";

export const createMediaWrapper = (match: Array<string>) => {
    return styled.div`{
        display: none;
        @media ${match.map((query) => `(${query})`).join(" and ")} {
            display: inline;
        }
    }`;
}
