import { LinkTypeEnum } from '../enum';
import { footerType } from '../types';

export const footerLinkContent: footerType[] = [
	{
		header: {
			text: 'discover',
			className: '',
			type: LinkTypeEnum.STATIC,
		},
		children: [
			{
				text: 'for men',
				className: '',
				href: '',
				type: LinkTypeEnum.Link,
			},
			{
				text: 'for women',
				className: '',
				href: '',
				type: LinkTypeEnum.Link,
			},
			{
				text: 'for seniors',
				className: '',
				href: '',
				type: LinkTypeEnum.Link,
			},
			{
				text: 'for kids',
				className: '',
				href: '',
				type: LinkTypeEnum.Link,
			},
		],
	},
	{
		header: {
			text: 'help',
			className: '',
			type: LinkTypeEnum.STATIC,
		},
		children: [
			{
				text: 'customers support',
				className: '',
				href: '',
				type: LinkTypeEnum.Link,
			},
			{
				text: 'delivery detail',
				className: '',
				href: '',
				type: LinkTypeEnum.Link,
			},
			{
				text: 'terms & conditions',
				className: '',
				href: '',
				type: LinkTypeEnum.Link,
			},
			{
				text: 'privacy policy',
				className: '',
				href: '',
				type: LinkTypeEnum.Link,
			},
		],
	},
	{
		header: {
			text: 'faq',
			className: '',
			type: LinkTypeEnum.STATIC,
		},
		children: [
			{
				text: 'account',
				className: '',
				href: '',
				type: LinkTypeEnum.Link,
			},
			{
				text: 'manage deliveries',
				className: '',
				href: '',
				type: LinkTypeEnum.Link,
			},
			{
				text: 'orders',
				className: '',
				href: '',
				type: LinkTypeEnum.Link,
			},
			{
				text: 'payment',
				className: '',
				href: '',
				type: LinkTypeEnum.Link,
			},
		],
	},
	{
		header: {
			text: 'resources',
			className: '',
			type: LinkTypeEnum.STATIC,
		},
		children: [
			{
				text: 'how to order',
				className: '',
				href: '',
				type: LinkTypeEnum.Link,
			},
			{
				text: 'choose and eyeglasses',
				className: '',
				href: '',
				type: LinkTypeEnum.Link,
			},
			{
				text: 'lenses and coatings',
				className: '',
				href: '',
				type: LinkTypeEnum.Link,
			},
			{
				text: 'bug-light protect lense',
				className: '',
				href: '',
				type: LinkTypeEnum.Link,
			},
		],
	},
];
