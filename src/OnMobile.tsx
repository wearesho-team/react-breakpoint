import * as React from "react";

import { Smart } from "./Smart";

export const OnMobile: React.FunctionComponent = (props) => (
    <Smart match={["max-width: 767px"]}>
        {props.children}
    </Smart>
);
