export type NowItem = {
	name: string;
	what: string;
	link?: string;
	linkLabel?: string;
};

/** What Yanir is working on these days — shown in the "Now" section. */
export const nowItems: NowItem[] = [
	{
		name: 'Races.co.il',
		what: 'Every running, trail, triathlon, cycling and swim event in Israel in one place — dates, course maps, registration and results.',
		link: 'https://races.co.il/',
		linkLabel: 'races.co.il',
	},
	{
		name: 'Manashir · מה נשיר',
		what: 'Accurate lyrics and chords for Israeli songs, credited to their creators, with a "magic box" that suggests what to play next.',
		link: 'https://manashir.co.il/',
		linkLabel: 'manashir.co.il',
	},
	{
		name: 'Ormilio',
		what: 'Same song, same line, sing together: the words of songs and readings on every phone and the big screen at once. One person leads, everyone follows — no app to install.',
		link: 'https://ormilio.com/',
		linkLabel: 'ormilio.com',
	},
	{
		name: 'Release Candidate',
		what: 'A tech news podcast for people who build, buy and secure software — three episodes a week, AI-voiced hosts, every story checked by a human producer, each ending with a startup idea from the day\'s news.',
		link: 'https://open.spotify.com/show/6L8Xansl4TX8smYQ9sMecl',
		linkLabel: 'Listen on Spotify',
	},
	{
		name: 'Run 7.10 · רצים7.10',
		what: 'On October 7, people across Israel meet, remember, and run 7.10 km together.',
		link: 'https://run710.co.il/',
		linkLabel: 'run710.co.il',
	},
	{
		name: 'Sunset Jam TLV',
		what: 'Started with two friends playing music on Bograshov Beach; now a community of nearly 400 people who meet by the sea at sunset to play, sing and connect. No stage, no audience, no expectations.',
	},
];
