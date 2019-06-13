import * as React from "react";
import { Wrapper } from "./Wrapper";

export interface SmartProps {
    match: Array<string>;
    delay?: number;
}

const isMatch = (match: Array<string>): boolean => {
    return "undefined" === typeof window
        || match.every((query: string) => window.matchMedia(`(${query})`).matches);
};

export const Smart: React.FC<SmartProps> = ({match, delay, children}) => {
    const [matches, setMatches] = React.useState<boolean>(true);
    const handleResize = React.useCallback(() => setMatches(isMatch(match)), [isMatch, match]);

    React.useEffect(() => {
        if (!delay) {
            handleResize();
        }
        const timeout = setTimeout(handleResize, delay);
        return () => clearTimeout(timeout);
    }, []);

    React.useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [match, setMatches, matches]);

    if (!matches) {
        return null;
    }

    return <Wrapper match={match}>{children}</Wrapper>;
};
