import React from 'react';

type Props = {
	className?: string;
	width?: string;
	height?: string;
};

const FacebookIcon = ({ className, width, height }: Props) => {
	const svgStyle = className ?? '';
	const svgWidth = width ?? '8';
	const svgHeight = height ?? '13';

	return (
		<svg
			className={svgStyle}
			width={svgWidth}
			height={svgHeight}
			viewBox={`0 0 ${svgWidth} ${svgHeight}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2.709 12.304V6.75H.839V4.586h1.87V2.99C2.709 1.138 3.84.129 5.492.129c.792 0 1.472.059 1.67.085V2.15H6.016c-.898 0-1.072.427-1.072 1.054v1.382h2.143l-.28 2.164H4.945v5.554H2.709Z"
				fill="#000"
			/>
		</svg>
	);
};
export default FacebookIcon;
