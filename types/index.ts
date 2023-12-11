import { LinkTypeEnum } from '../enum';

export type footerType = {
	header?: footerStaticType;
	children?: footerLinkType[];
};

export type footerStaticType = {
	text?: string;
	className?: string;
	icon?: React.ReactNode;
	styles?: React.CSSProperties;
	metadata?: Record<string, any>;
	type?: LinkTypeEnum.STATIC;
};

export type footerLinkType = {
	href?: string;
	text?: string;
	className?: string;
	icon?: React.ReactNode;
	styles?: React.CSSProperties;
	metadata?: Record<string, any>;
	type?: LinkTypeEnum.Link;
};
