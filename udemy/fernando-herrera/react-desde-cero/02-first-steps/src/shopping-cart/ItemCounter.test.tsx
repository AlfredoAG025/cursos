import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter', () => {
    test('should render with default values', () => {
        const itemName = 'control de nintendo';

        render(<ItemCounter name={itemName} />);

        expect(screen.getByText(itemName)).toBeDefined();
        expect(screen.getByText(itemName)).not.toBeNull();
    });

    test('should render with custom quantity', () => {
        const itemName = 'control de nintendo';
        const quantity = 10;

        render(<ItemCounter name={itemName} quantity={quantity} />);

        expect(screen.getByText(quantity)).toBeDefined();
    });

    test('should increase count when +1 button is pressed', () => {
        render(<ItemCounter name={'Test item'} quantity={1} />);

        const [buttonAdd] = screen.getAllByRole('button');
        fireEvent.click(buttonAdd);
        expect(screen.getByText('2')).toBeDefined();
    });

    test('should decrease count when -1 button is pressed', () => {
        const quantity = 5;
        render(<ItemCounter name={'Test item'} quantity={quantity} />);

        const [, buttonDecrease] = screen.getAllByRole('button');
        fireEvent.click(buttonDecrease);

        expect(screen.getByText('4')).toBeDefined();
    });

    test('should not decrease count when -1 button is pressed and quantity is 1', () => {
        const quantity = 1;
        render(<ItemCounter name={'Test item'} quantity={quantity} />);

        const [, buttonDecrease] = screen.getAllByRole('button');
        fireEvent.click(buttonDecrease);

        expect(screen.getByText('1')).toBeDefined();
    });

    test('should change to red with count is 1', () => {
        const quantity = 1;
        const itemName = 'Test item'
        render(<ItemCounter name={itemName} quantity={quantity} />);

        const itemText = screen.getByText(itemName);
        expect(itemText.style.color).toBe('red');
    });

    test('should change to black with count is greater than 1', () => {
        const quantity = 2;
        const itemName = 'Test item'
        render(<ItemCounter name={itemName} quantity={quantity} />);

        const itemText = screen.getByText(itemName);
        expect(itemText.style.color).toBe('black');
    });
});