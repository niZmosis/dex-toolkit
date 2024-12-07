import type { TokenClass } from '@dex-toolkit/types'

import {
  AAVEToken,
  AVAXToken,
  AVIAToken,
  BIDToken,
  BLASTToken,
  BNBToken,
  CAKEToken,
  CELOToken,
  COMPToken,
  COQToken,
  CUSDToken,
  DAIToken,
  DFORCEToken,
  ENJOYToken,
  ESEToken,
  ETHCoin,
  FUNToken,
  HEXToken,
  IMAGINEToken,
  INCToken,
  JOEToken,
  LINKToken,
  MKRToken,
  MOBIToken,
  NRGToken,
  NYAToken,
  PEPEToken,
  PLSCoin,
  PLSXToken,
  PNGToken,
  POLToken,
  RDNTToken,
  REPToken,
  RINGToken,
  SKLToken,
  SUSHIToken,
  UNIToken,
  USDBToken,
  USDCToken,
  USDTToken,
  WAVAXToken,
  WBNBToken,
  WBTCToken,
  WETHToken,
  WIFToken,
  WNRGToken,
  WPLSToken,
  WPOLToken,
  XVSToken,
  YOLOToken,
  YTSToken,
  ZKToken,
  ZROToken,
} from './configs/index'

export const tokenClasses: Record<string, TokenClass> = {
  AAVE: AAVEToken,
  AVAX: AVAXToken,
  AVIA: AVIAToken,
  BID: BIDToken,
  BLAST: BLASTToken,
  BNB: BNBToken,
  CAKE: CAKEToken,
  CELO: CELOToken,
  COMP: COMPToken,
  COQ: COQToken,
  CUSD: CUSDToken,
  DAI: DAIToken,
  DFORCE: DFORCEToken,
  ENJOY: ENJOYToken,
  ESE: ESEToken,
  ETH: ETHCoin,
  FUN: FUNToken,
  HEX: HEXToken,
  IMAGINE: IMAGINEToken,
  INC: INCToken,
  JOE: JOEToken,
  LINK: LINKToken,
  MKR: MKRToken,
  MOBI: MOBIToken,
  NRG: NRGToken,
  NYA: NYAToken,
  PEPE: PEPEToken,
  PLS: PLSCoin,
  PLSX: PLSXToken,
  PNG: PNGToken,
  MATIC: POLToken,
  RDNT: RDNTToken,
  REP: REPToken,
  RING: RINGToken,
  SKL: SKLToken,
  SUSHI: SUSHIToken,
  UNI: UNIToken,
  USDB: USDBToken,
  USDC: USDCToken,
  USDT: USDTToken,
  WAVAX: WAVAXToken,
  WBNB: WBNBToken,
  WBTC: WBTCToken,
  WETH: WETHToken,
  WIF: WIFToken,
  WNRG: WNRGToken,
  WPLS: WPLSToken,
  WMATIC: WPOLToken,
  XVS: XVSToken,
  YOLO: YOLOToken,
  YTS: YTSToken,
  ZK: ZKToken,
  ZRO: ZROToken,
}
