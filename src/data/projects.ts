export type ProjectGroup = 'Companies' | 'Jobs' | 'Apps' | 'Communities' | 'Side projects';

export type Project = {
	name: string;
	group: ProjectGroup;
	years: string;
	text: string;
	link?: string;
	linkLabel?: string;
};

/** Everything not already listed under "What I'm working on". */
export const projects: Project[] = [
	{
		name: 'Tuvis (formerly Whatslly)',
		group: 'Companies',
		years: '2019–2024',
		text: 'Founder and CEO. WhatsApp messaging, compliance and CRM integration for regulated enterprises. $11M seed; 150+ customers in 10 countries.',
		link: 'https://tuvis.com/',
		linkLabel: 'tuvis.com',
	},
	{
		name: 'Calisar Solutions',
		group: 'Companies',
		years: '2016–2019',
		text: 'About 15 single-purpose SaaS tools for marketing and CRM teams. Wound down when Whatslly took over.',
		link: 'https://github.com/yanirclsr/MarTech',
		linkLabel: 'Code on GitHub',
	},
	{
		name: 'Pabushka',
		group: 'Companies',
		years: '2010–2013',
		text: 'A pub I founded in Kfar Aza while studying at Sapir College.',
	},
	{
		name: 'Aptrinsic',
		group: 'Jobs',
		years: '2017–2018',
		text: 'Full-stack developer. Product-experience software; acquired by Gainsight.',
	},
	{
		name: 'Marketo',
		group: 'Jobs',
		years: '2013–2016',
		text: 'Technical Product Lead for real-time personalization, the product Marketo bought with Insightera.',
	},
	{
		name: 'Insightera',
		group: 'Jobs',
		years: '2009–2013',
		text: 'First employee. Marketing personalization; acquired by Marketo in 2013.',
	},
	{
		name: '4divers',
		group: 'Apps',
		years: '2026',
		text: 'Dive log, certification import, and dive-site and buddy search for iPhone. Built from my own log as a PADI Divemaster.',
		link: 'https://apps.apple.com/il/app/4divers/id6779240100',
		linkLabel: 'App Store',
	},
	{
		name: 'Races for iOS',
		group: 'Apps',
		years: '2026',
		text: 'The Races.co.il calendar and results on iPhone.',
		link: 'https://apps.apple.com/il/app/%D7%A8%D7%99%D7%99%D7%A1-%D7%96/id6767002677',
		linkLabel: 'App Store',
	},
	{
		name: 'Manashir for iOS',
		group: 'Apps',
		years: '2026',
		text: 'A session leader shares a code; everyone sees the same lyrics and chords, transposed with one tap.',
		link: 'https://apps.apple.com/il/app/manashir-%D7%A9%D7%A8%D7%99%D7%9D-%D7%95%D7%9E%D7%A0%D7%92%D7%A0%D7%99%D7%9D-%D7%91%D7%99%D7%97%D7%93/id6759396128',
		linkLabel: 'App Store',
	},
	{
		name: 'אהבה ברחבה',
		group: 'Communities',
		years: 'July 28, 2026',
		text: 'A free Tu B\'Av evening of love songs in Tel Aviv. You did not need an instrument to join.',
	},
	{
		name: 'The CMO Confessions',
		group: 'Communities',
		years: '2016–2019',
		text: 'Tel Aviv meetups for senior marketers, usually in a bar, about what actually happened rather than case studies. About 2,000 members.',
		link: 'https://www.meetup.com/CMO-Confessions-TLV/',
		linkLabel: 'Meetup page',
	},
	{
		name: 'Touchpoints',
		group: 'Side projects',
		years: 'Calisar Solutions',
		text: 'Open-source marketing attribution that outputs raw data for the BI tools a company already has, instead of another dashboard.',
	},
	{
		name: 'Chord simplifier',
		group: 'Side projects',
		years: 'Manashir',
		text: 'Reduces chords like C#7sus4 to C#7, so every song can be played with X, Xm and X7.',
	},
	{
		name: '40 Cities',
		group: 'Side projects',
		years: 'Since age 38',
		text: 'Running at least 10 km in 40 different cities.',
	},
	{
		name: 'Bar-pouring robot',
		group: 'Side projects',
		years: 'Early career',
		text: 'Rolls along a bar and pours drinks. Built after a bartending course.',
	},
];

export const projectGroups: ProjectGroup[] = ['Companies', 'Jobs', 'Apps', 'Communities', 'Side projects'];
