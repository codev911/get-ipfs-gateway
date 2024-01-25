import { getLiveGateway } from '../lib';

test('get live gateway urls from ipfs url protocol', async () => {
	const url =
		'ipfs://bafybeiged4aroumss7u646yl5rzq5xawlvni7velqmwgau6jhxqcpgtf44/metamask-wallet.svg';
	const result = await getLiveGateway(url);
	console.log(result);
	await expect(await result).not.toBe(url);
});
