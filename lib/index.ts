import axios from 'axios';
import https from 'https';

const gateways: string[] = [
	'https://ipfs.io/ipfs/{hash}',
	'https://{hash}.ipfs.dweb.link',
	'https://{hash}.ipfs.nftstorage.link',
	'https://{hash}.ipfs.w3s.link',
	'https://{hash}.ipfs.4everland.io',
	'https://gateway.pinata.cloud/ipfs/{hash}',
	'https://ipfs.quicknode.com/ipfs/{hash}',
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

export const getAllLiveGateway = async (
	ipfsUrl: string,
	timeout?: number
): Promise<string[]> => {
	const listLoop: unknown[] = [];
	const finalUrl: string[] = [];
	const getHash = ipfsUrl.replace('ipfs://', '');
	const dataHash = getHash.split('/');

	let urlGet = gateways[0].replace('{hash}', dataHash[0]);

	for (let index = 1; index < dataHash.length; index++) {
		urlGet = urlGet + '/' + dataHash[index];
	}

	listLoop.push(axios.get(urlGet, { timeout: 3000 }));
	gateways.forEach(async item => {
		const dataHash = getHash.split('/');
		let url = item.replace('{hash}', dataHash[0]);

		for (let index = 1; index < dataHash.length; index++) {
			url = url + '/' + dataHash[index];
		}

		finalUrl.push(url);
		listLoop.push(
			axios.head(url, { timeout: timeout || 3000 })
		);
	});

	const result = await Promise.allSettled(listLoop);
	const fullfilled: string[] = [];

	for (let index = 1; index < result.length; index++) {
		if (result[index - 1].status === 'fulfilled') {
			fullfilled.push(finalUrl[index]);
		}
	}

	return fullfilled;
};

export const getLiveGateway = async (
	ipfsUrl: string,
	timeout?: number
): Promise<string> => {
	const finalUrl = getAllGateway(ipfsUrl);
	const rto = timeout || 5000;
	const fullfilled: string[] = await getAllLiveGateway(ipfsUrl, rto);

	if (fullfilled.length > 0) {
		return fullfilled[0];
	} else {
		return finalUrl[1];
	}
};
