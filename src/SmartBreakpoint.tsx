import * as React from "react";
import * as PropTypes from "prop-types";

export interface SmartBreakpointProps {
    match: string[];
    delay?: number;
}

export const SmartBreakpointPropTypes = {
    match: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    delay: PropTypes.number,
};

export interface SmartBreakpointState {
    matches: boolean;
}

export class SmartBreakpoint extends React.Component<SmartBreakpointProps, SmartBreakpointState> {
    public static propTypes = SmartBreakpointPropTypes;
    public readonly state: SmartBreakpointState = {
        matches: false,
    };
    public timer: any;

    public componentDidMount() {
        window.addEventListener("resize", this.handleResize);

        if (this.props.delay) {
            clearTimeout(this.timer);
            this.timer = setTimeout(this.handleResize);
        } else {
            this.handleResize();
        }
    }

    public componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
        clearTimeout(this.timer);
    }

    public render(): any {
        if (!this.state.matches) {
            return null;
        }

        return this.props.children;
    }

    protected handleResize = () => {
        const matches = this.isMatch;

        if (matches === this.state.matches) {
            return;
        }

        this.setState({
            matches,
        });
    }

    private get isMatch(): boolean {
        return this.props.match.every((query: string) => window.matchMedia(`(${query})`).matches)
    }
}
