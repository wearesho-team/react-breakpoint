import * as React from "react";

export interface WrapperProps extends React.HTMLProps<HTMLDivElement> {
    match: Array<string>;
}

export const Wrapper: React.FC<WrapperProps> = (props) => {
    const {match, ...childProps} = props;
    const className = match.join("").replace(/[^\d\w]/g, "");
    const media = match.map((query) => `(${query})`).join(" and ");
    const style = `.${className} { display: none; } @media ${media} { .${className} { display: inline; } }`;

    return (
        <React.Fragment>
            <style scoped>{style}</style>
            <div {...childProps} className={className}>{childProps.children}</div>
        </React.Fragment>
    )
};
