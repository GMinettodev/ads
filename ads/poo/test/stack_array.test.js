const { Stack } = require('../stack_object'); // Import the Stack class

describe('Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack(); // Create a new Stack instance before each test
    });

    test('should be empty on initialization', () => {
        expect(stack.isEmpty()).toBe(true); // Test that the stack is empty
        expect(stack.size()).toBe(0); // Test that the size is 0
    });

    test('should push elements onto the stack', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.size()).toBe(3); // Test the size after pushing elements
        expect(stack.peek()).toBe(3); // Test the top element
    });

    test('should pop elements from the stack', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.pop()).toBe(3); // Test popping the last pushed element
        expect(stack.size()).toBe(2); // Test the size after popping
        expect(stack.peek()).toBe(2); // Test the new top element
    });

    test('should return undefined when popping from an empty stack', () => {
        expect(stack.pop()).toBe(undefined); // Pop from an empty stack should return undefined
    });

    test('should clear the stack', () => {
        stack.push(1);
        stack.push(2);
        stack.clear(); // Clear the stack

        expect(stack.isEmpty()).toBe(true); // Test that the stack is empty
        expect(stack.size()).toBe(0); // Test that the size is 0
    });

    test('should return the last element without removing it', () => {
        stack.push(1);
        stack.push(2);

        expect(stack.peek()).toBe(2); // Test the top element
        expect(stack.size()).toBe(2); // Ensure size remains unchanged
    });

    test('toString should return elements in a comma-separated format', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.toString()).toBe('1,2,3'); // Test the string representation
    });

    test('toString should return empty string for empty stack', () => {
        expect(stack.toString()).toBe(''); // Test the string representation of an empty stack
    });
});