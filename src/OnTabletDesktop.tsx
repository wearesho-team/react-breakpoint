import * as React from "react";

import { Smart } from "./Smart";

export const OnTabletDesktop: React.FunctionComponent = (props) => (
    <Smart match={["min-width: 768px"]}>
        {props.children}
    </Smart>
);
