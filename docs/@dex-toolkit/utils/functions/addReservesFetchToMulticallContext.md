[**@dex-toolkit/utils v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@dex-toolkit/utils](../README.md) / addReservesFetchToMulticallContext

# Function: addReservesFetchToMulticallContext()

> **addReservesFetchToMulticallContext**(`context`, `token`, `baseToken`, `factoryAddress`): `any`

Updates the multicall context to include reserve fetching for price calculation.

## Parameters

• **context**: `any`

The existing multicall context

• **token**: `Token`

The token to price

• **baseToken**: `Token`

The token to price against (e.g., USDT)

• **factoryAddress**: `string`

The factory contract address

## Returns

`any`

Updated multicall context

## Defined in

[packages/utils/src/utils/price.utils.ts:153](https://github.com/niZmosis/dex-toolkit/blob/3d8b41b44787b30fbea5de3ab4737662ffb61bc8/packages/utils/src/utils/price.utils.ts#L153)
