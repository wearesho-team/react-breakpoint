import * as React from "react";

import { Smart } from "./Smart";

export const OnDesktop: React.FunctionComponent = (props) => (
    <Smart match={[ "min-width: 1023px" ]}>
        {props.children}
    </Smart>
);
