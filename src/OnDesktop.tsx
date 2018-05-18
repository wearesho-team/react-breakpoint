import * as React from "react";

import { SmartBreakpoint } from "./SmartBreakpoint";

export class OnDesktop extends React.Component {
    public render(): React.ReactNode {
        return (
            <SmartBreakpoint match={["min-width: 1024px"]}>
                {this.props.children}
            </SmartBreakpoint>
        );
    }
}