import * as React from "react";

import { SmartBreakpoint } from "./SmartBreakpoint";

export class OnMobile extends React.Component {
    public render(): React.ReactNode {
        return (
            <SmartBreakpoint match={["max-width: 767px"]}>
                {this.props.children}
            </SmartBreakpoint>
        );
    }
}
