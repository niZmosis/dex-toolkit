[**@dex-toolkit/types v1.0.0**](../../../README.md) • **Docs**

***

[Documentation v1.0.0](../../../../../packages.md) / [@dex-toolkit/types](../../../README.md) / [UniswapPoolV3Types](../README.md) / Contract

# Interface: Contract

## Methods

### burn()

> **burn**(`tickLower`, `tickUpper`, `amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Payable: false
Constant: false
StateMutability: nonpayable
Type: function

#### Parameters

• **tickLower**: `BigNumberish`

Type: int24, Indexed: false

• **tickUpper**: `BigNumberish`

Type: int24, Indexed: false

• **amount**: `BigNumberish`

Type: uint128, Indexed: false

• **overrides?**: [`ContractTransactionOverrides`](../../../type-aliases/ContractTransactionOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:277](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L277)

***

### collect()

> **collect**(`recipient`, `tickLower`, `tickUpper`, `amount0Requested`, `amount1Requested`, `overrides`?): `Promise`\<`ContractTransaction`\>

Payable: false
Constant: false
StateMutability: nonpayable
Type: function

#### Parameters

• **recipient**: `string`

Type: address, Indexed: false

• **tickLower**: `BigNumberish`

Type: int24, Indexed: false

• **tickUpper**: `BigNumberish`

Type: int24, Indexed: false

• **amount0Requested**: `BigNumberish`

Type: uint128, Indexed: false

• **amount1Requested**: `BigNumberish`

Type: uint128, Indexed: false

• **overrides?**: [`ContractTransactionOverrides`](../../../type-aliases/ContractTransactionOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:294](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L294)

***

### collectProtocol()

> **collectProtocol**(`recipient`, `amount0Requested`, `amount1Requested`, `overrides`?): `Promise`\<`ContractTransaction`\>

Payable: false
Constant: false
StateMutability: nonpayable
Type: function

#### Parameters

• **recipient**: `string`

Type: address, Indexed: false

• **amount0Requested**: `BigNumberish`

Type: uint128, Indexed: false

• **amount1Requested**: `BigNumberish`

Type: uint128, Indexed: false

• **overrides?**: [`ContractTransactionOverrides`](../../../type-aliases/ContractTransactionOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:311](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L311)

***

### factory()

> **factory**(`overrides`?): `Promise`\<`string`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:323](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L323)

***

### fee()

> **fee**(`overrides`?): `Promise`\<`number`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<`number`\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:330](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L330)

***

### feeGrowthGlobal0X128()

> **feeGrowthGlobal0X128**(`overrides`?): `Promise`\<`BigNumber`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:337](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L337)

***

### feeGrowthGlobal1X128()

> **feeGrowthGlobal1X128**(`overrides`?): `Promise`\<`BigNumber`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:344](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L344)

***

### flash()

> **flash**(`recipient`, `amount0`, `amount1`, `data`, `overrides`?): `Promise`\<`ContractTransaction`\>

Payable: false
Constant: false
StateMutability: nonpayable
Type: function

#### Parameters

• **recipient**: `string`

Type: address, Indexed: false

• **amount0**: `BigNumberish`

Type: uint256, Indexed: false

• **amount1**: `BigNumberish`

Type: uint256, Indexed: false

• **data**: `BytesLike`

Type: bytes, Indexed: false

• **overrides?**: [`ContractTransactionOverrides`](../../../type-aliases/ContractTransactionOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:355](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L355)

***

### increaseObservationCardinalityNext()

> **increaseObservationCardinalityNext**(`observationCardinalityNext`, `overrides`?): `Promise`\<`ContractTransaction`\>

Payable: false
Constant: false
StateMutability: nonpayable
Type: function

#### Parameters

• **observationCardinalityNext**: `BigNumberish`

Type: uint16, Indexed: false

• **overrides?**: [`ContractTransactionOverrides`](../../../type-aliases/ContractTransactionOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:369](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L369)

***

### initialize()

> **initialize**(`sqrtPriceX96`, `overrides`?): `Promise`\<`ContractTransaction`\>

Payable: false
Constant: false
StateMutability: nonpayable
Type: function

#### Parameters

• **sqrtPriceX96**: `BigNumberish`

Type: uint160, Indexed: false

• **overrides?**: [`ContractTransactionOverrides`](../../../type-aliases/ContractTransactionOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:380](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L380)

***

### liquidity()

> **liquidity**(`overrides`?): `Promise`\<`BigNumber`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:390](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L390)

***

### maxLiquidityPerTick()

> **maxLiquidityPerTick**(`overrides`?): `Promise`\<`BigNumber`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:397](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L397)

***

### mint()

> **mint**(`recipient`, `tickLower`, `tickUpper`, `amount`, `data`, `overrides`?): `Promise`\<`ContractTransaction`\>

Payable: false
Constant: false
StateMutability: nonpayable
Type: function

#### Parameters

• **recipient**: `string`

Type: address, Indexed: false

• **tickLower**: `BigNumberish`

Type: int24, Indexed: false

• **tickUpper**: `BigNumberish`

Type: int24, Indexed: false

• **amount**: `BigNumberish`

Type: uint128, Indexed: false

• **data**: `BytesLike`

Type: bytes, Indexed: false

• **overrides?**: [`ContractTransactionOverrides`](../../../type-aliases/ContractTransactionOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:409](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L409)

***

### observations()

> **observations**(`parameter0`, `overrides`?): `Promise`\<[`ObservationsResponse`](ObservationsResponse.md)\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **parameter0**: `BigNumberish`

Type: uint256, Indexed: false

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<[`ObservationsResponse`](ObservationsResponse.md)\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:424](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L424)

***

### observe()

> **observe**(`secondsAgos`, `overrides`?): `Promise`\<[`ObserveResponse`](ObserveResponse.md)\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **secondsAgos**: `BigNumberish`[]

Type: uint32[], Indexed: false

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<[`ObserveResponse`](ObserveResponse.md)\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:435](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L435)

***

### positions()

> **positions**(`parameter0`, `overrides`?): `Promise`\<[`PositionsResponse`](PositionsResponse.md)\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **parameter0**: `BytesLike`

Type: bytes32, Indexed: false

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<[`PositionsResponse`](PositionsResponse.md)\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:446](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L446)

***

### protocolFees()

> **protocolFees**(`overrides`?): `Promise`\<[`ProtocolFeesResponse`](ProtocolFeesResponse.md)\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<[`ProtocolFeesResponse`](ProtocolFeesResponse.md)\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:456](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L456)

***

### setFeeProtocol()

> **setFeeProtocol**(`feeProtocol0`, `feeProtocol1`, `overrides`?): `Promise`\<`ContractTransaction`\>

Payable: false
Constant: false
StateMutability: nonpayable
Type: function

#### Parameters

• **feeProtocol0**: `BigNumberish`

Type: uint8, Indexed: false

• **feeProtocol1**: `BigNumberish`

Type: uint8, Indexed: false

• **overrides?**: [`ContractTransactionOverrides`](../../../type-aliases/ContractTransactionOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:465](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L465)

***

### slot0()

> **slot0**(`overrides`?): `Promise`\<[`Slot0Response`](Slot0Response.md)\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<[`Slot0Response`](Slot0Response.md)\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:476](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L476)

***

### snapshotCumulativesInside()

> **snapshotCumulativesInside**(`tickLower`, `tickUpper`, `overrides`?): `Promise`\<[`SnapshotCumulativesInsideResponse`](SnapshotCumulativesInsideResponse.md)\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **tickLower**: `BigNumberish`

Type: int24, Indexed: false

• **tickUpper**: `BigNumberish`

Type: int24, Indexed: false

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<[`SnapshotCumulativesInsideResponse`](SnapshotCumulativesInsideResponse.md)\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:485](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L485)

***

### swap()

> **swap**(`recipient`, `zeroForOne`, `amountSpecified`, `sqrtPriceLimitX96`, `data`, `overrides`?): `Promise`\<`ContractTransaction`\>

Payable: false
Constant: false
StateMutability: nonpayable
Type: function

#### Parameters

• **recipient**: `string`

Type: address, Indexed: false

• **zeroForOne**: `boolean`

Type: bool, Indexed: false

• **amountSpecified**: `BigNumberish`

Type: int256, Indexed: false

• **sqrtPriceLimitX96**: `BigNumberish`

Type: uint160, Indexed: false

• **data**: `BytesLike`

Type: bytes, Indexed: false

• **overrides?**: [`ContractTransactionOverrides`](../../../type-aliases/ContractTransactionOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:501](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L501)

***

### tickBitmap()

> **tickBitmap**(`parameter0`, `overrides`?): `Promise`\<`BigNumber`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **parameter0**: `BigNumberish`

Type: int16, Indexed: false

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:516](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L516)

***

### tickSpacing()

> **tickSpacing**(`overrides`?): `Promise`\<`number`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<`number`\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:526](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L526)

***

### ticks()

> **ticks**(`parameter0`, `overrides`?): `Promise`\<[`TicksResponse`](TicksResponse.md)\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **parameter0**: `BigNumberish`

Type: int24, Indexed: false

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<[`TicksResponse`](TicksResponse.md)\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:534](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L534)

***

### token0()

> **token0**(`overrides`?): `Promise`\<`string`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:544](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L544)

***

### token1()

> **token1**(`overrides`?): `Promise`\<`string`\>

Payable: false
Constant: true
StateMutability: view
Type: function

#### Parameters

• **overrides?**: [`ContractCallOverrides`](../../../type-aliases/ContractCallOverrides.md)

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/types/src/abis/uniswap-pool-v3.types.ts:551](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/types/src/abis/uniswap-pool-v3.types.ts#L551)
