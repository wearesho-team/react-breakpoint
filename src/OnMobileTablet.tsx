import * as React from "react";

import { Smart } from "./Smart";

export const OnMobileTablet: React.FunctionComponent = (props) => (
    <Smart match={["max-width: 1023px"]}>
        {props.children}
    </Smart>
);
