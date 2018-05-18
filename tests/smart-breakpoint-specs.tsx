import * as React from "react";

import { expect } from "chai";
import { mount, ReactWrapper } from "enzyme";
import { SmartBreakpointProps, SmartBreakpoint } from "../src/SmartBreakpoint";

const mock = (matches: boolean) => {
    window.matchMedia = () => ({ matches } as any);
}

describe("<SmartBreakpoint />", () => {

    let wrapper: ReactWrapper<SmartBreakpointProps>;
    beforeEach(() => {
        mock(false);
        wrapper = mount(<SmartBreakpoint match={["abc"]}>1</SmartBreakpoint>, { context });
    });

    it("should not render children if media query not match", () => {
        mock(false);
        expect(wrapper.children()).to.have.length(0);
    });

    it("should render children if media query matches", () => {
        expect(wrapper.getDOMNode()).to.not.exist;
        mock(true);
        wrapper.unmount().mount();
        expect(wrapper.getDOMNode()).to.exist;
    });

    // Add tests with timer-mocking
});
