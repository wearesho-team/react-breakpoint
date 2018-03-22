import * as React from "react";
import * as PropTypes from "prop-types";

export interface SmartBreakpointProps {
    match: string[];
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

    constructor(props) {
        super(props);

        if (!this.props.delay) {
            this.state = {
                matches: this.isMatch
            };
        } else {
            this.state = {
                matches: false
            };

            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.setState({
                    matches: this.isMatch
                });
            }, this.props.delay);
        }
    }

    public componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    public componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    public render(): any {
        return this.state.matches && this.props.children;
    }

    protected handleResize = () => {
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
