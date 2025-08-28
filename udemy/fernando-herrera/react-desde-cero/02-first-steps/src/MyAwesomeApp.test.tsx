import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";

import { render, screen } from "@testing-library/react";

describe('MyAwesomeApp', () => {
    test('should render first name & last name', () => {
        const { container } = render(<MyAwesomeApp />);

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        expect(h1?.innerHTML).toContain('Freddy');
        expect(h3?.innerHTML).toContain('Arroyo');
    });

    test('should render first name & last name - screen', () => {
        render(<MyAwesomeApp />);
        // screen.debug();

        // const h1 = screen.getByRole('heading', {level: 1});
        const h1 = screen.getByTestId('first-name-title');
        expect(h1?.innerHTML).toContain('Freddy');
    });

    test('should match snapshot', () => {
        const {container} = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot();
    });

    test('should match snapshot - screen', () => {
        render(<MyAwesomeApp />);
        expect(screen.getByTestId('div-app')).toMatchSnapshot();
        screen.debug();
    });
});