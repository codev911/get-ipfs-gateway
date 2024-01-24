import { getLiveGateway } from '../lib';

test('get live gateway urls from ipfs url protocol', () => {
	const url =
		'ipfs://bafybeiged4aroumss7u646yl5rzq5xawlvni7velqmwgau6jhxqcpgtf44/metamask-wallet.svg';
	const result = getLiveGateway(url);
	expect(result).not.toBe(url);
});
