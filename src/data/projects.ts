export type ProjectCategory = 'Companies' | 'Apps' | 'Community' | 'Experiments' | 'Open Source';

export type Project = {
	name: string;
	category: ProjectCategory;
	years: string;
	status: string;
	role: string;
	oneLiner: string;
	detail: string;
	link?: string;
};

export const projects: Project[] = [
	{
		name: 'Insightera',
		category: 'Companies',
		years: '2009–2013',
		status: 'Acquired by Marketo',
		role: 'First employee',
		oneLiner: 'Marketing technology startup, joined as employee #1.',
		detail:
			'Worked across product, customer success, marketing automation, and personalization. Acquired by Marketo in 2013.',
		link: 'https://www.f6s.com/member/yanircalisar1',
	},
	{
		name: 'Marketo — Real-Time Personalization',
		category: 'Companies',
		years: '2013–2016',
		status: 'Acquired the Insightera product',
		role: 'Technical Product Lead [VERIFY TITLE]',
		oneLiner: 'Enterprise marketing automation at global scale.',
		detail:
			'Continued the Insightera product line inside Marketo, working on personalization, integrations, and enterprise implementation.',
	},
	{
		name: 'Aptrinsic',
		category: 'Companies',
		years: '[ADD DATES]',
		status: 'Acquired by Gainsight',
		role: 'Full Stack Developer',
		oneLiner: 'A product experience company — hands back on the keyboard.',
		detail: 'Worked as a developer, later acquired by Gainsight. [ADD WHAT WAS BUILT]',
	},
	{
		name: 'Calisar Solutions',
		category: 'Companies',
		years: '2016–2019',
		status: 'Wound down into Whatslly/Tuvis focus',
		role: 'Founder',
		oneLiner: '~15 lean SaaS tools for marketing and CRM teams.',
		detail:
			'Built focused, often interface-free tools solving one problem each — analytics, attribution, automation, data sync. Several released as open source.',
		link: 'https://github.com/yanirclsr/MarTech',
	},
	{
		name: 'Touchpoints',
		category: 'Open Source',
		years: 'Under Calisar Solutions',
		status: 'Released',
		role: 'Creator',
		oneLiner: 'Marketing attribution that ships raw data, not another dashboard.',
		detail:
			'Built on the idea that large companies already have BI tools — they need clean data, not one more interface.',
	},
	{
		name: 'Pabushka',
		category: 'Experiments',
		years: '[ADD YEARS]',
		status: 'No longer active',
		role: '[ADD ROLE]',
		oneLiner: 'An early pub venture — real customers, cash flow, and operations.',
		detail: '[ADD LOCATION] [ADD STORY OF HOW IT STARTED] [ADD WHY IT ENDED]',
	},
	{
		name: 'The bar-pouring robot',
		category: 'Experiments',
		years: 'Early career',
		status: 'Prototype',
		role: 'Builder',
		oneLiner: 'A robot that moves along a bar and pours drinks.',
		detail: 'Built after completing a bartending course — an early sign of combining physical experiences with technology.',
	},
	{
		name: 'The CMO Confessions',
		category: 'Community',
		years: '2016–2019 [VERIFY]',
		status: '~2,000 members',
		role: 'Founder',
		oneLiner: 'A Tel Aviv community for senior marketing leaders.',
		detail: 'Informal meetups, often in local bars, where marketing leaders traded real experiences rather than polished case studies.',
		link: 'https://www.meetup.com/CMO-Confessions-TLV/',
	},
	{
		name: 'Whatslly',
		category: 'Companies',
		years: '2019–2021',
		status: 'Renamed to Tuvis',
		role: 'Co-founder & CEO',
		oneLiner: 'WhatsApp meets CRM — built in 24 hours, first customer in a week.',
		detail: 'The original product connecting salespeople\'s WhatsApp conversations to company CRM systems.',
	},
	{
		name: 'Tuvis',
		category: 'Companies',
		years: '2021–2024',
		status: 'Founder & Director — stepped down as CEO in 2024',
		role: 'Co-founder',
		oneLiner: 'Enterprise messaging, compliance, and CRM platform. $11M raised.',
		detail: 'Grew from a WhatsApp-CRM bridge into a full enterprise compliance and security platform serving major Latin American enterprises.',
		link: 'https://tuvis.com/',
	},
	{
		name: 'EyeronAI',
		category: 'Experiments',
		years: '2024–2026 [CONFIRM STATUS]',
		status: '[CONFIRM WHETHER ACTIVE]',
		role: 'Founder',
		oneLiner: 'Enterprise governance for employee generative-AI usage.',
		detail: 'Concept for centralized, secure access and control over generative AI tools inside a company. [ADD CURRENT STATUS]',
	},
	{
		name: 'Races.co.il',
		category: 'Apps',
		years: '2026–',
		status: 'Live',
		role: 'Founder',
		oneLiner: 'One place to discover running, cycling, triathlon and swim events in Israel.',
		detail: 'Built because finding race information meant searching a dozen scattered websites and social posts. Includes a companion iOS app.',
		link: 'https://races.co.il/',
	},
	{
		name: 'Races — iOS app',
		category: 'Apps',
		years: 'May 2026',
		status: 'Live on the App Store',
		role: 'Founder',
		oneLiner: 'Race discovery and calendars, in your pocket.',
		detail: 'The mobile companion to Races.co.il.',
		link: 'https://apps.apple.com/il/app/%D7%A8%D7%99%D7%99%D7%A1-%D7%96/id6767002677',
	},
	{
		name: 'Manashir',
		category: 'Apps',
		years: 'June 2026',
		status: 'Live on the App Store',
		role: 'Founder',
		oneLiner: 'Live, synchronized lyrics and chords for group music sessions.',
		detail: 'Open a session, get a code, and everyone singing along sees the same lyrics and chords in real time — with one-click transposition.',
		link: 'https://apps.apple.com/il/app/manashir-%D7%A9%D7%A8%D7%99%D7%9D-%D7%95%D7%9E%D7%A0%D7%92%D7%A0%D7%99%D7%9D-%D7%91%D7%99%D7%97%D7%93/id6759396128',
	},
	{
		name: 'Chord simplification system',
		category: 'Experiments',
		years: 'Built for Manashir',
		status: 'Feature',
		role: 'Creator',
		oneLiner: 'Turns C#7sus4 into C#7 — complex chords made playable.',
		detail: 'A simplification system reducing complex chord notation down to X, Xm, and X7 so casual players can keep up.',
	},
	{
		name: '4divers',
		category: 'Apps',
		years: 'July 2026',
		status: 'Live on the App Store',
		role: 'Founder',
		oneLiner: 'A digital logbook and dive-buddy network for divers.',
		detail: 'Built from his own experience as a PADI Divemaster — digital dive logging, certification import, and dive-site and buddy discovery.',
		link: 'https://apps.apple.com/il/app/4divers/id6779240100',
	},
	{
		name: '40 Cities',
		category: 'Experiments',
		years: 'Ongoing [VERIFY PROJECT NAME]',
		status: 'In progress',
		role: 'Runner',
		oneLiner: 'A personal project: run at least 10K in 40 different cities.',
		detail: 'Started around age 38 — travel, running, and reflection combined. [ADD CITY LIST] [ADD MAP]',
	},
	{
		name: 'אהבה ברחבה',
		category: 'Community',
		years: 'July 28, 2026',
		status: 'Upcoming',
		role: 'Organizer',
		oneLiner: 'A free community music event in Tel Aviv, built around Tu B\'Av and songs about love.',
		detail: 'A community event first — musicians are welcome, but the point is bringing people together, not performing. [ADD REGISTRATION LINK]',
	},
];

export const projectCategories: ProjectCategory[] = ['Companies', 'Apps', 'Community', 'Experiments', 'Open Source'];
