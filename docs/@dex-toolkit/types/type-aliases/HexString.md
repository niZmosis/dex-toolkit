[**@dex-toolkit/types v1.0.0**](../README.md) • **Docs**

***

[Documentation v1.0.0](../../../packages.md) / [@dex-toolkit/types](../README.md) / HexString

# Type Alias: HexString

> **HexString**: `string` & [`HexStringBrand`](HexStringBrand.md)

Represents a string that is a valid hexadecimal representation.
Used to differentiate regular strings from strings that specifically represent hex values.

## Example

```typescript
const hexString: HexString = '0x123abc' as HexString;
```

## Defined in

packages/types/src/dex-number.types.ts:19