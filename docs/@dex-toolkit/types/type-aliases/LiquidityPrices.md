[**@dex-toolkit/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@dex-toolkit/types](../README.md) / LiquidityPrices

# Type Alias: LiquidityPrices\<TFormat\>

> **LiquidityPrices**\<`TFormat`\>: `object`

Represents the prices between two tokens in a liquidity pool.

## Type Parameters

• **TFormat** *extends* [`TradeFormat`](TradeFormat.md)

## Type declaration

### aTokenPerBToken

> **aTokenPerBToken**: [`TradeFormatValue`](TradeFormatValue.md)\<`TFormat`\>

The price of Token A per Token B.

### bTokenPerAToken

> **bTokenPerAToken**: [`TradeFormatValue`](TradeFormatValue.md)\<`TFormat`\>

The price of Token B per Token A.

## Defined in

packages/types/src/liquidity.types.ts:48