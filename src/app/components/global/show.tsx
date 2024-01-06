import React from 'react';

type Props<T> = {
	when: boolean;
	children: React.ReactNode;
	fallback?: React.ReactNode;
};

/**
 * The `Show` component conditionally renders its children based on the value of the `when` prop.
 *
 * @template T - The type of the `when` prop.
 *
 * @param {Object} props - React component properties.
 * @param {T | boolean} props.when - The condition to determine whether to render the children.
 * @param {React.ReactNode} props.children - A function that takes the value of `when` and returns the JSX to be rendered.
 * @param {React.ReactNode} [props.fallback] - The fallback content to render when the condition is not met.
 *
 * @example
 * // Usage in a React component
 * const MyComponent = () => {
 *   const condition = true;
 *
 *   return (
 *     <Show when={condition} fallback={<div>Condition is not met!</div>}>
 *       <div>Condition is true!</div>
 *     </Show>
 *   );
 * }
 */
const Show = <T,>({ when, children, fallback }: Props<T>) => {
	return <React.Fragment>{when ? children : fallback ?? null}</React.Fragment>;
};

export default Show;
