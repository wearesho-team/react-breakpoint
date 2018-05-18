import * as React from "react";

import { SmartBreakpoint } from "./SmartBreakpoint";

export class OnTabletDesktop extends React.Component {
    public render(): React.ReactNode {
        return (
            <SmartBreakpoint match={["min-width: 768px"]}>
                {this.props.children}
            </SmartBreakpoint>
        );
    }
}
