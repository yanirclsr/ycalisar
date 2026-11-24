export type Race = {
	date: string;
	name: string;
	distance: string;
	result: string;
	note?: string;
};

/** Personal bests, from https://races.co.il/u/yanir (plus the Eilat Olympic triathlon). */
export const racesProfileUrl = 'https://races.co.il/u/yanir';

export const races: Race[] = [
	{ date: 'Jun 4, 2026', name: 'Petah Tikva Night Race', distance: '5K', result: '20:40', note: 'Personal best — 4:08/km.' },
	{ date: 'May 8, 2026', name: 'Givat Shmuel Race', distance: '10K', result: '42:29', note: 'Personal best — 4:15/km.' },
	{ date: 'Feb 6, 2026', name: 'Dead Sea Half Marathon', distance: 'Half marathon (21.1K)', result: '1:38:09', note: 'Personal best — 4:39/km.' },
	{
		date: 'Feb 27, 2026',
		name: 'Tel Aviv Marathon',
		distance: 'Marathon (42.2K)',
		result: '3:23:31',
		note: 'Personal best — 4:49/km. One year after a first marathon in Tel Aviv, and down from 3:57:59 in Berlin.',
	},
	{ date: 'Dec 2024', name: 'Eilat Olympic Triathlon', distance: 'Olympic distance triathlon', result: '3:20:00' },
];

export const marathonProgression = [
	{ label: 'Tel Aviv 2025', result: 'First finish' },
	{ label: 'Berlin 2025', result: '3:57:59' },
	{ label: 'Tel Aviv 2026', result: '3:23:31' },
];
