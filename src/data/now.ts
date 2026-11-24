export type NowItem = {
	name: string;
	kind: string;
	what: string;
	link?: string;
	linkLabel?: string;
};

/** What Yanir is working on these days — shown in the "Now" section. */
export const nowItems: NowItem[] = [
	{
		name: 'Races.co.il',
		kind: 'Website + iOS',
		what: 'Every running, trail, triathlon, cycling and swimming race in Israel, with dates, course maps, registration links and results. Before it, finding a race meant checking a dozen sites and Facebook groups.',
		link: 'https://races.co.il/',
		linkLabel: 'races.co.il',
	},
	{
		name: 'Manashir (מה נשיר)',
		kind: 'Website + iOS',
		what: 'Lyrics and chords for Israeli songs, credited to their writers through ACUM. Complex chords simplify to X, Xm and X7 so a beginner can keep up.',
		link: 'https://manashir.co.il/',
		linkLabel: 'manashir.co.il',
	},
	{
		name: 'Ormilio',
		kind: 'Web app',
		what: 'One person leads a song or reading; the current line appears on every phone in the room and on the big screen at once. Nothing to install. Free for small groups.',
		link: 'https://ormilio.com/',
		linkLabel: 'ormilio.com',
	},
	{
		name: 'Release Candidate',
		kind: 'Podcast',
		what: 'Tech news for people who build, buy and secure software. Monday, Wednesday and Friday. The hosts are AI voices; a human producer checks every story against its published source. Each episode ends with a startup idea from that day\'s news.',
		link: 'https://open.spotify.com/show/6L8Xansl4TX8smYQ9sMecl',
		linkLabel: 'Listen on Spotify',
	},
	{
		name: 'Run 7.10 (רצים7.10)',
		kind: 'Community run',
		what: 'Every October 7, groups across Israel meet and run 7.10 km together in memory of the people killed that day. I lived in Kfar Aza for three years while studying.',
		link: 'https://run710.co.il/',
		linkLabel: 'run710.co.il',
	},
	{
		name: 'Sunset Jam TLV',
		kind: 'Community',
		what: 'Two friends started playing music on Bograshov Beach at sunset. Now nearly 400 people come to play, sing or listen. No stage and no audience; whoever shows up plays.',
	},
];
