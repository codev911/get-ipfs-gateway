import { getAllGateway } from '../lib';

test('get all gateway urls from ipfs url protocol', () => {
	const result = getAllGateway(
		'ipfs://bafybeiged4aroumss7u646yl5rzq5xawlvni7velqmwgau6jhxqcpgtf44/metamask-wallet.svg'
	);
	expect(result).toStrictEqual([
		'https://ipfs.io/ipfs/bafybeiged4aroumss7u646yl5rzq5xawlvni7velqmwgau6jhxqcpgtf44/metamask-wallet.svg',
		'https://cloudflare-ipfs.com/ipfs/bafybeiged4aroumss7u646yl5rzq5xawlvni7velqmwgau6jhxqcpgtf44/metamask-wallet.svg',
		'https://gateway.ipfs.io/ipfs/bafybeiged4aroumss7u646yl5rzq5xawlvni7velqmwgau6jhxqcpgtf44/metamask-wallet.svg',
		'https://ipfs.runfission.com/ipfs/bafybeiged4aroumss7u646yl5rzq5xawlvni7velqmwgau6jhxqcpgtf44/metamask-wallet.svg',
		'https://bafybeiged4aroumss7u646yl5rzq5xawlvni7velqmwgau6jhxqcpgtf44.ipfs.dweb.link/metamask-wallet.svg',
		'https://bafybeiged4aroumss7u646yl5rzq5xawlvni7velqmwgau6jhxqcpgtf44.ipfs.nftstorage.link/metamask-wallet.svg',
		'https://bafybeiged4aroumss7u646yl5rzq5xawlvni7velqmwgau6jhxqcpgtf44.ipfs.w3s.link/metamask-wallet.svg',
		'https://bafybeiged4aroumss7u646yl5rzq5xawlvni7velqmwgau6jhxqcpgtf44.ipfs.cf-ipfs.com/metamask-wallet.svg',
		'https://bafybeiged4aroumss7u646yl5rzq5xawlvni7velqmwgau6jhxqcpgtf44.ipfs.4everland.io/metamask-wallet.svg',
		'https://bafybeiged4aroumss7u646yl5rzq5xawlvni7velqmwgau6jhxqcpgtf44.ipfs.gw3.io/metamask-wallet.svg',
	]);
});
