import React from 'react';

interface Props<T> {
	each: T[];
	children: (item: T, index: number) => React.ReactNode;
}

/**
 * CustomFor component provides a way to iterate over an array
 * and render custom content for each item.
 *
 * @template T - The type of each item in the array.
 *
 * @param {Object} props - React component properties.
 * @param {T[]} props.each - The array of items to iterate over.
 * @param {(item: T, index: number) => React.ReactNode} props.children -
 *   A function that takes an item and its index and returns the JSX to be rendered.
 *
 * @example
 * // Usage in a React component
 * const MyComponent = () => {
 *   const items = ['Item 1', 'Item 2', 'Item 3'];
 *
 *   return (
 *     <div>
 *       <h1>List of Items</h1>
 *       <CustomFor each={items}>
 *         {(item, index) => <div key={index}>{item}</div>}
 *       </CustomFor>
 *     </div>
 *   );
 * }
 */

const CustomFor = <T,>({ each, children }: Props<T>) => {
	return (
		<React.Fragment>
			{each.map((item: T, index: number) => (
				<React.Fragment key={index}>{children(item, index)}</React.Fragment>
			))}
		</React.Fragment>
	);
};

export default CustomFor;
