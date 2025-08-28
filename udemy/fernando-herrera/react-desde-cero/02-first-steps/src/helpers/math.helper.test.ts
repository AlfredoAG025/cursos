import { describe, expect, test } from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';

describe('add', () => {
    test('should add two positive numbers', () => {
        const a = 1;
        const b = 3;

        const result = add(a, b);

        expect(result).toBe(a + b);
    });

    test('should add two negative numbers', () => {
        const a = -2;
        const b = -4;

        const result = add(a, b);
        expect(result).toBe(a + b);
    });
});

describe('subtract', () => {
    test('should subtract two positive numbers', () => {
        const a = 4;
        const b = 5;

        const result = subtract(a, b);
        expect(result).toBe(a - b);
    });

    test('should subtract two negative numbers', () => {
        const a = -5;
        const b = -9;

        const result = subtract(a, b);
        expect(result).toBe(a - b);
    });
});

describe('multiply', () => {
    test('should multiply two positive numbers', () => {
        const a = 4;
        const b = 5;

        const result = multiply(a, b);
        expect(result).toBe(a * b);
    });

    test('should multiply two negative numbers and then multiply by 2', () => {
        const a = -5;
        const b = -9;

        let result = multiply(a, b);
        result = multiply(result, 2);
        expect(result).toBe(a * b * 2);
    });
});

describe('divide', () => {
    test('should divide two positive numbers', () => {
        const a = 9;
        const b = 3;

        const result = divide(a, b);
        expect(result).toBe(a / b);
    });
});