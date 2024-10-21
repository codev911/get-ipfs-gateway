# public-ipfs-gateway
Get Public IPFS gateway url easily.

## Install
1. Via NPM : `npm i public-ipfs-gateway`
2. Via Yarn : `yarn add public-ipfs-gateway`

## Import
1. CJS : `const { getAllGateway, getLiveGateway, getAllLiveGateway } = require('public-ipfs-gateway')`
2. ESM : `import { getAllGateway, getLiveGateway, getAllLiveGateway } from 'public-ipfs-gateway'`

### A. getAllGateway
```JavaScript
    import { getAllGateway } from 'public-ipfs-gateway';
    // if use commonjs use this :
    // const { getAllGateway } = require('public-ipfs-gateway');

    // example url
    const url = 'ipfs://bafybeiged4aroumss7u646yl5rzq5xawlvni7velqmwgau6jhxqcpgtf44/metamask-wallet.svg';

    // example function for test
    function test(){
        console.log(getAllGateway(url));
    }
    test();

    // result will be like
    // [
	// 	'https://ipfs.io/ipfs/bafybeiged4aroumss7u646yl5rzq5xawlvni7velqmwgau6jhxqcpgtf44/metamask-wallet.svg',
	// 	'https://cloudflare-ipfs.com/ipfs/bafybeiged4aroumss7u646yl5rzq5xawlvni7velqmwgau6jhxqcpgtf44/metamask-wallet.svg',
	// 	...
	// ]
```

### B. getLiveGateway
```JavaScript
    import { getLiveGateway } from 'public-ipfs-gateway';
    // if use commonjs use this :
    // const { getLiveGateway } = require('public-ipfs-gateway');

    // example url
    const url = 'ipfs://bafybeiged4aroumss7u646yl5rzq5xawlvni7velqmwgau6jhxqcpgtf44/metamask-wallet.svg';

    // example function for test
    async function test(){
        console.log(await getLiveGateway(url));
    }
    test();

    // result will be like
    // https://ipfs.io/ipfs/bafybeiged4aroumss7u646yl5rzq5xawlvni7velqmwgau6jhxqcpgtf44/metamask-wallet.svg
```
Default timeout is 3000ms, you can set custom timeout by add additional param like `await getLiveGateway(url, 5000)`.

### C. getAllLiveGateway
```JavaScript
    import { getAllLiveGateway } from 'public-ipfs-gateway';
    // if use commonjs use this :
    // const { getAllLiveGateway } = require('public-ipfs-gateway');

    // example url
    const url = 'ipfs://bafybeiged4aroumss7u646yl5rzq5xawlvni7velqmwgau6jhxqcpgtf44/metamask-wallet.svg';

    // example function for test
    async function test(){
        console.log(await getAllLiveGateway(url));
    }
    test();

    // result will be like
    // [
	// 	'https://ipfs.io/ipfs/bafybeiged4aroumss7u646yl5rzq5xawlvni7velqmwgau6jhxqcpgtf44/metamask-wallet.svg',
	// 	'https://cloudflare-ipfs.com/ipfs/bafybeiged4aroumss7u646yl5rzq5xawlvni7velqmwgau6jhxqcpgtf44/metamask-wallet.svg',
	// 	...
	// ]
```
Default timeout is 3000ms, you can set custom timeout by add additional param like `await getLiveGateway(url, 5000)`.