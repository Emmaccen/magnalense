import React from 'react';

type SvgIconProps = {
	className?: string;
	width?: string;
	height?: string;
};

const TwitterIcon: React.FC<SvgIconProps> = ({
	className = '',
	width = '12',
	height = '10',
	...props
}: SvgIconProps) => {
	return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M11.207 1.983a5.102 5.102 0 0 1-1.327.373c.466-.28.838-.722 1.001-1.257a5.045 5.045 0 0 1-1.466.558A2.32 2.32 0 0 0 7.739.936a2.285 2.285 0 0 0-2.282 2.28c0 .187.023.35.07.513A6.522 6.522 0 0 1 .801 1.331C.615 1.681.5 2.053.5 2.472c0 .791.396 1.49 1.024 1.909A2.694 2.694 0 0 1 .476 4.1v.024a2.3 2.3 0 0 0 1.839 2.258c-.187.046-.396.07-.606.07-.14 0-.302-.024-.442-.047.303.908 1.14 1.583 2.142 1.583a4.658 4.658 0 0 1-2.84.978c-.187 0-.373 0-.536-.023a6.478 6.478 0 0 0 3.515 1.024c4.214 0 6.518-3.492 6.518-6.518v-.303a4.18 4.18 0 0 0 1.141-1.164Z"
				fill="#000"
			/>
		</svg>
	);
};
export default TwitterIcon;
