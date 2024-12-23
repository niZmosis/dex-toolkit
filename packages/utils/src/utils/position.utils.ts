import { UniswapPositionManagerV3Types } from '@dex-toolkit/types'

export const defaultPositionManagerMethodMapV3: UniswapPositionManagerV3Types.MethodNameMap =
  {
    DOMAIN_SEPARATOR: 'DOMAIN_SEPARATOR',
    PERMIT_TYPEHASH: 'PERMIT_TYPEHASH',
    WETH9: 'WETH9',
    approve: 'approve',
    balanceOf: 'balanceOf',
    baseURI: 'baseURI',
    burn: 'burn',
    collect: 'collect',
    createAndInitializePoolIfNecessary: 'createAndInitializePoolIfNecessary',
    decreaseLiquidity: 'decreaseLiquidity',
    factory: 'factory',
    getApproved: 'getApproved',
    increaseLiquidity: 'increaseLiquidity',
    isApprovedForAll: 'isApprovedForAll',
    mint: 'mint',
    multicall: 'multicall',
    name: 'name',
    ownerOf: 'ownerOf',
    permit: 'permit',
    positions: 'positions',
    refundETH: 'refundETH',
    safeTransferFrom: 'safeTransferFrom',
    selfPermit: 'selfPermit',
    selfPermitAllowed: 'selfPermitAllowed',
    selfPermitAllowedIfNecessary: 'selfPermitAllowedIfNecessary',
    selfPermitIfNecessary: 'selfPermitIfNecessary',
    setApprovalForAll: 'setApprovalForAll',
    supportsInterface: 'supportsInterface',
    sweepToken: 'sweepToken',
    symbol: 'symbol',
    tokenByIndex: 'tokenByIndex',
    tokenOfOwnerByIndex: 'tokenOfOwnerByIndex',
    tokenURI: 'tokenURI',
    totalSupply: 'totalSupply',
    transferFrom: 'transferFrom',
    uniswapV3MintCallback: 'uniswapV3MintCallback',
    unwrapWETH9: 'unwrapWETH9',
  } as const
