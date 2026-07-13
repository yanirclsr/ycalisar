export type Race = {
	date: string;
	name: string;
	distance: string;
	result: string;
	note?: string;
};

export const races: Race[] = [
	{
		date: 'Dec 2024',
		name: 'Eilat Olympic Triathlon',
		distance: 'Olympic distance',
		result: '3:20:00',
	},
	{
		date: 'Jan 3, 2025',
		name: 'Tiberias Half Marathon',
		distance: '21.1K',
		result: '[ADD OFFICIAL RESULT]',
	},
	{
		date: 'Feb 14, 2025',
		name: 'Or Yehuda 10K',
		distance: '10K',
		result: '~48:00 [VERIFY]',
	},
	{
		date: 'Feb 28, 2025',
		name: 'Tel Aviv Marathon — first marathon',
		distance: '42.2K',
		result: '[ADD OFFICIAL RESULT]',
		note: 'Run in support of Make-A-Wish Israel.',
	},
	{
		date: 'Apr 5, 2025',
		name: 'Prague Half Marathon',
		distance: '21.1K',
		result: '[ADD OFFICIAL RESULT]',
		note: 'Connected to Make-A-Wish UK.',
	},
	{
		date: 'Sep 21, 2025',
		name: 'Berlin Marathon',
		distance: '42.2K',
		result: '3:57:59',
		note: 'First sub-4-hour marathon, run in ~27°C heat.',
	},
	{
		date: 'Nov 23, 2025',
		name: 'Thessaloniki 10K',
		distance: '10K',
		result: '[ADD OFFICIAL RESULT]',
	},
	{
		date: 'Feb 6, 2026',
		name: 'Dead Sea Half Marathon',
		distance: '21.1K',
		result: '[ADD OFFICIAL RESULT]',
		note: 'Target was ~1:45.',
	},
	{
		date: 'Feb 27, 2026',
		name: 'Tel Aviv Marathon — one year later',
		distance: '42.2K',
		result: '3:23:54',
		note: 'Down from a first marathon in 2025 to sub-4 in Berlin to 3:24 — a year of real progress.',
	},
	{
		date: 'Apr 17, 2026',
		name: 'Kinneret 70.3',
		distance: 'Half Ironman distance',
		result: '[CONFIRM EVENT STATUS AND RESULT]',
	},
	{
		date: 'Jun 6, 2026',
		name: 'Petah Tikva Night Race',
		distance: '5K',
		result: '[ADD OFFICIAL RESULT]',
	},
];

export const marathonProgression = [
	{ label: 'Tel Aviv 2025 (first marathon)', result: '[ADD RESULT]' },
	{ label: 'Berlin 2025', result: '3:57:59' },
	{ label: 'Tel Aviv 2026', result: '3:23:54' },
];
