import * as React from "react";
import * as PropTypes from "prop-types";

export interface SmartBreakpointProps {
    match: Array<string>;
    delay?: number;
}

export const SmartBreakpointPropTypes = {
    match: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    delay: PropTypes.number
};

export interface SmartBreakpointState {
    matches: boolean;
}

export class SmartBreakpoint extends React.Component<SmartBreakpointProps, SmartBreakpointState> {
    public static propTypes = SmartBreakpointPropTypes;

    public timer: any;
    public readonly state: SmartBreakpointState = {
        matches: true
    };

    public componentDidMount() {
        addEventListener("resize", this.handleResize);

        if (!this.props.delay) {
            return this.setState({
                matches: this.isMatch
            });
        }

        this.setState({
            matches: false
        });

        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.setState({
                matches: this.isMatch
            });
        }, this.props.delay);

    }

    public componentWillUnmount() {
        removeEventListener("resize", this.handleResize);
    }

    public render(): any {
        return this.state.matches && this.props.children;
    }

    protected handleResize = (): void => {
        if (this.isMatch === this.state.matches) {
            return;
        }

        this.setState({
            matches: this.isMatch
        });
    }

    private get isMatch(): boolean {
        return this.props.match.every((query: string) => window.matchMedia(`(${query})`).matches);
    }
}
