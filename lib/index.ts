import axios from 'axios';

const gateways: string[] = [
	'https://ipfs.io/ipfs/{hash}',
	'https://cloudflare-ipfs.com/ipfs/{hash}',
	'https://gateway.ipfs.io/ipfs/{hash}',
	'https://ipfs.runfission.com/ipfs/{hash}',
	'https://{hash}.ipfs.dweb.link',
	'https://{hash}.ipfs.nftstorage.link',
	'https://{hash}.ipfs.w3s.link',
	'https://{hash}.ipfs.cf-ipfs.com',
	'https://{hash}.ipfs.4everland.io',
	'https://{hash}.ipfs.gw3.io',
];

export const getAllGateway = (ipfsUrl: string): string[] => {
	const finalUrl: string[] = [];
	const getHash = ipfsUrl.replace('ipfs://', '');

	gateways.forEach(async item => {
		const dataHash = getHash.split('/');
		let url = item.replace('{hash}', dataHash[0]);

		for (let index = 1; index < dataHash.length; index++) {
			url = url + '/' + dataHash[index];
		}

		finalUrl.push(url);
	});

	return finalUrl;
};

export const getLiveGateway = async (
	ipfsUrl: string,
	timeout?: number
): Promise<string> => {
	const listLoop: unknown[] = [];
	const finalUrl: string[] = [];
	const getHash = ipfsUrl.replace('ipfs://', '');

	gateways.forEach(async item => {
		const dataHash = getHash.split('/');
		let url = item.replace('{hash}', dataHash[0]);

		for (let index = 1; index < dataHash.length; index++) {
			url = url + '/' + dataHash[index];
		}

		finalUrl.push(url);
		listLoop.push(axios.head(url, { timeout: timeout || 5000 }));
	});

	const result = await Promise.allSettled(listLoop);
	const fullfilled: string[] = [];

	for (let index = 0; index < result.length; index++) {
		if (result[index].status === 'fulfilled') {
			fullfilled.push(finalUrl[index]);
		}
	}

	if (fullfilled.length > 0) {
		return fullfilled[0];
	} else {
		return finalUrl[1];
	}
};
