import * as React from "react";

import { SmartBreakpoint } from "./SmartBreakpoint";

export class OnMobileTablet extends React.Component {
    public render(): React.ReactNode {
        return (
            <SmartBreakpoint match={["max-width: 1023px"]}>
                {this.props.children}
            </SmartBreakpoint>
        );
    }
}
