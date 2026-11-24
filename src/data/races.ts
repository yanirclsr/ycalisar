export type Race = {
	date: string;
	name: string;
	distance: string;
	result: string;
	pace?: string;
};

export const racesProfileUrl = 'https://races.co.il/u/yanir';

/** Personal bests from races.co.il/u/yanir, plus the Eilat Olympic triathlon. */
export const races: Race[] = [
	{ date: 'Feb 27, 2026', name: 'Tel Aviv Marathon', distance: 'Marathon', result: '3:23:31', pace: '4:49/km' },
	{ date: 'Feb 6, 2026', name: 'Dead Sea Marathon', distance: 'Half marathon', result: '1:38:09', pace: '4:39/km' },
	{ date: 'May 8, 2026', name: 'Givat Shmuel Race', distance: '10 km', result: '42:29', pace: '4:15/km' },
	{ date: 'Jun 4, 2026', name: 'Petah Tikva Night Race', distance: '5 km', result: '20:40', pace: '4:08/km' },
	{ date: 'Dec 2024', name: 'Eilat Triathlon', distance: 'Olympic triathlon', result: '3:20:00' },
];
