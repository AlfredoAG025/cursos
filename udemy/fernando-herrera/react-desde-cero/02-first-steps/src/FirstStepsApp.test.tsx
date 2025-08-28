import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

describe('FirstStepApp', () => {
    test('should match snapshot', () => {
        const { container } = render(<FirstStepsApp />);
        expect(container).toMatchSnapshot();
        screen.debug();
    });
});