import * as React from "react";

import { SmartBreakpoint } from "./SmartBreakpoint";

export class OnTablet extends React.Component {
    public render(): React.ReactNode {
        return (
            <SmartBreakpoint match={["min-width: 768px", "max-width: 1023"]}>
                {this.props.children}
            </SmartBreakpoint>
        );
    }
}
