import * as React from "react";

import { Smart } from "./Smart";

export const OnTablet: React.FunctionComponent = (props) => (
    <Smart match={["min-width: 768px", "max-width: 1023px"]}>
        {props.children}
    </Smart>
);
