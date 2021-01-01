// data taken from materials converted to json format.
const stages = [
	{
		OpportunityStageID: 74,
		OpportunityStageName: 'Lead',
		Order: 1,
	},
	{
		OpportunityStageID: 8,
		OpportunityStageName: 'Initial contact',
		Order: 2,
	},
	{
		OpportunityStageID: 132,
		OpportunityStageName: 'Needs Analysis',
		Order: 5,
	},
	{
		OpportunityStageID: 11,
		OpportunityStageName: 'Qualification',
		Order: 10,
	},
	{
		OpportunityStageID: 9,
		OpportunityStageName: 'Proposal',
		Order: 20,
	},
	{
		OpportunityStageID: 10,
		OpportunityStageName: 'Negotiation',
		Order: 30,
	},
	{
		OpportunityStageID: 73,
		OpportunityStageName: 'Close',
		Order: 100,
	},
];

const ops = [
	{
		ContactID: 1044,
		FullName: 'Aileen Witt',
		OpportunityName: 'Checking bad gateway',
		OpportunityID: 2205,
		OpportunityStageID: 74,
		OpportunityValue: 1234,
		Order: 1,
	},
	{
		ContactID: 6739,
		FullName: 'Aaron Smith',
		OpportunityName: 'testssss',
		OpportunityID: 2245,
		OpportunityStageID: 74,
		OpportunityValue: 3312,
		Order: 1,
	},
	{
		ContactID: 6739,
		FullName: 'Aaron Smith',
		OpportunityName: 'test 2',
		OpportunityID: 2267,
		OpportunityStageID: 74,
		OpportunityValue: 1715,
		Order: 1,
	},
	{
		ContactID: 15888,
		FullName: 'Abby Green',
		OpportunityName: 'q1',
		OpportunityID: 2224,
		OpportunityStageID: 74,
		OpportunityValue: 73,
		Order: 1,
	},
	{
		ContactID: 15936,
		FullName: 'Aaron Alansen',
		OpportunityName: 'New One',
		OpportunityID: 2272,
		OpportunityStageID: 8,
		OpportunityValue: 2112,
		Order: 2,
	},
	{
		ContactID: 6739,
		FullName: 'Aaron Smith',
		OpportunityName: 'Planning training',
		OpportunityID: 2246,
		OpportunityStageID: 8,
		OpportunityValue: 0,
		Order: 2,
	},
	{
		ContactID: 15889,
		FullName: 'Aaron Jones',
		OpportunityName: 'aaaa',
		OpportunityID: 2226,
		OpportunityStageID: 8,
		OpportunityValue: 388,
		Order: 2,
	},
	{
		ContactID: 3819,
		FullName: 'Abigail Clements',
		OpportunityName: 'Abi clements OPP',
		OpportunityID: 2230,
		OpportunityStageID: 8,
		OpportunityValue: 50,
		Order: 2,
	},
	{
		ContactID: 6739,
		FullName: 'Aaron Smith',
		OpportunityName: 'this is a new one',
		OpportunityID: 2231,
		OpportunityStageID: 8,
		OpportunityValue: 9999,
		Order: 2,
	},
	{
		ContactID: 15899,
		FullName: 'Adams Aandrew',
		OpportunityName: 'zcxvzx',
		OpportunityID: 2187,
		OpportunityStageID: 8,
		OpportunityValue: 0,
		Order: 2,
	},
	{
		ContactID: 1062,
		FullName: 'Tony Radford',
		OpportunityName: 'Auto Translation',
		OpportunityID: 25,
		OpportunityStageID: 132,
		OpportunityValue: 284,
		Order: 5,
	},
	{
		ContactID: 6478,
		FullName: 'Camilla Glorioso',
		OpportunityName: 'Translation software annual license',
		OpportunityID: 2152,
		OpportunityStageID: 132,
		OpportunityValue: 2200,
		Order: 5,
	},
	{
		ContactID: 2095,
		FullName: 'Aaaron Andrews',
		OpportunityName: 'test',
		OpportunityID: 2194,
		OpportunityStageID: 11,
		OpportunityValue: 616,
		Order: 10,
	},
	{
		ContactID: 4523,
		FullName: 'Elon Smith',
		OpportunityName: 'Test',
		OpportunityID: 2266,
		OpportunityStageID: 11,
		OpportunityValue: 1688,
		Order: 10,
	},
	{
		ContactID: 6910,
		FullName: 'Wez Country',
		OpportunityName: 'Auto translation packages xxx',
		OpportunityID: 2126,
		OpportunityStageID: 9,
		OpportunityValue: 216,
		Order: 20,
	},
	{
		ContactID: 1060,
		FullName: 'Jasper Sellers',
		OpportunityName: 'German - French monthly',
		OpportunityID: 1045,
		OpportunityStageID: 73,
		OpportunityValue: 670,
		Order: 100,
	},
	{
		ContactID: 4720,
		FullName: 'Andrei Civsky',
		OpportunityName: 'testing the new product',
		OpportunityID: 2222,
		OpportunityStageID: 73,
		OpportunityValue: 222,
		Order: 100,
	},
	{
		ContactID: 15899,
		FullName: 'Adams Aandrew',
		OpportunityName: 'Test product select',
		OpportunityID: 2244,
		OpportunityStageID: 73,
		OpportunityValue: 3312,
		Order: 100,
	},
	{
		ContactID: 7618,
		FullName: 'Aileen Peters',
		OpportunityName: 'Training',
		OpportunityID: 2264,
		OpportunityStageID: 73,
		OpportunityValue: 0,
		Order: 100,
	},
	{
		ContactID: 6739,
		FullName: 'Aaron Smith',
		OpportunityName: 'Another service',
		OpportunityID: 2265,
		OpportunityStageID: 73,
		OpportunityValue: 86.94,
		Order: 100,
	},
	{
		ContactID: 2195,
		FullName: 'Ahmed Craig',
		OpportunityName: 'Quant = 0',
		OpportunityID: 2225,
		OpportunityStageID: 73,
		OpportunityValue: 8,
		Order: 100,
	},
	{
		ContactID: 15888,
		FullName: 'Abby Green',
		OpportunityName: 'test 3',
		OpportunityID: 2268,
		OpportunityStageID: 73,
		OpportunityValue: 763,
		Order: 100,
	},
	{
		ContactID: 2220,
		FullName: 'Abbot Shelton',
		OpportunityName: 'Test 6',
		OpportunityID: 2269,
		OpportunityStageID: 73,
		OpportunityValue: 15,
		Order: 100,
	},
	{
		ContactID: 4523,
		FullName: 'Elon Smith',
		OpportunityName: 'product no unit',
		OpportunityID: 2270,
		OpportunityStageID: 73,
		OpportunityValue: 192,
		Order: 100,
	},
];

// first we need to sort the data if we want table format. rows eh.
const sortData = (stages, ops) => {
	const containerObj = {};
	for (let i = 0; i < stages.length; i++) {
		containerObj[stages[i].OpportunityStageName] = [];
		for (let x = 0; x < ops.length; x++) {
			if (stages[i].OpportunityStageID == ops[x].OpportunityStageID) {
				console.log(ops[x]);
				containerObj[stages[i].OpportunityStageName] = [
					...containerObj[stages[i].OpportunityStageName],
					ops[x],
				];
			}
		}
	}
	let longest;
	for (const value of Object.values(containerObj)) {
		if (value.length > longest || !longest) {
			longest = value.length;
		}
	}
	return { containerObj, longest };
};

const tableGenerator = (stages, ops) => {
	console.log('i run');
	const table = document.createElement('table');
	const thead = document.createElement('thead');
	const headerRow = document.createElement('tr');
	const tbody = document.createElement('tbody');
	for (let i = 0; i < stages.length; i++) {
		const th = document.createElement('th');
		th.id = stages[i].OpportunityStageID;
		th.className = 'headerCell';
		th.textContent = stages[i].OpportunityStageName;
		headerRow.append(th);
	}

	const { containerObj, longest } = sortData(stages, ops);
	for (let x = 0; x < longest; x++) {
		const bodyRow = document.createElement('tr');
		for (let i = 0; i < stages.length; i++) {
			const td = document.createElement('td');
			const cellData = containerObj[stages[i].OpportunityStageName][x];
			td.className = 'bodyCell';
			if (cellData) {
				td.id = cellData.ContactID;
				td.setAttribute('title', 'Click to copy');
				console.log(cellData.FullName);
				td.textContent = cellData.FullName;
			}
			bodyRow.append(td);
		}
		tbody.append(bodyRow);
	}
	thead.append(headerRow);
	table.append(thead);
	table.append(tbody);
	document.getElementById('root').append(table);
};
tableGenerator(stages, ops);

// below is code responsible for copy on click and notifications, not really needed

const showNotification = (val) => {
	const succcess = document.createElement('div');
	succcess.className = 'notif ok';
	succcess.textContent = 'Copied ok';
	const err = document.createElement('div');
	err.className = 'notif notok';
	err.textContent = "Couldn't copy";
	const notifEnum = {
		true: succcess,
		false: err,
	};
	const ourNotif = notifEnum[val];
	document.body.append(ourNotif);
	ourNotif.classList.add('fade-out');
	ourNotif.onanimationend = (e) => {
		ourNotif.parentNode.removeChild(ourNotif);
	};
};

const copyCell = async (e) => {
	console.log('copy cell');
	const element = e.target;
	console.log(element.className);
	if (element.className !== 'bodyCell') {
		return;
	}
	const copyText = element.textContent;
	console.log(copyText);
	if (!navigator.clipboard) {
		fallbackCopyTextToClipboard(copyText);
		return;
	}
	if (!copyText) {
		showNotification(false);
		return;
	}
	try {
		await navigator.clipboard.writeText(copyText);
		showNotification(true);
	} catch (err) {
		showNotification(false);
	}
};

function fallbackCopyTextToClipboard(text) {
	const textArea = document.createElement('textarea');
	textArea.value = text;

	// Avoid scrolling to bottom
	textArea.style.top = '0';
	textArea.style.left = '0';
	textArea.style.position = 'fixed';

	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();

	try {
		const successful = document.execCommand('copy');
		const msg = successful ? 'successful' : 'unsuccessful';
		console.log(`Fallback: Copying text command was ${msg}`);
		showNotification(true);
	} catch (err) {
		console.error('Fallback: Oops, unable to copy', err);
		showNotification(false);
	}

	document.body.removeChild(textArea);
}

document.addEventListener('click', copyCell);
