import { getAllLiveGateway } from '../lib';

test('get all live gateway urls from ipfs url protocol', async () => {
	const url =
		'ipfs://bafybeiged4aroumss7u646yl5rzq5xawlvni7velqmwgau6jhxqcpgtf44/metamask-wallet.svg';
	const result = await getAllLiveGateway(url);
	console.log(result);
	expect(result).toStrictEqual(expect.anything());
});
