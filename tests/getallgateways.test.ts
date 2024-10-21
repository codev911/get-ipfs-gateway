import { getAllGateway } from '../lib';

test('get all gateway urls from ipfs url protocol', () => {
	const result = getAllGateway(
		'ipfs://bafybeiged4aroumss7u646yl5rzq5xawlvni7velqmwgau6jhxqcpgtf44/metamask-wallet.svg'
	);
	expect(result).toStrictEqual(expect.anything());
});
