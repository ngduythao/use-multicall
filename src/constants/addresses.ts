import { SupportedChainId } from '../enums'

export type AddressMap = {
  [chainId in SupportedChainId]: string
}

export const WNATIVE_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  [SupportedChainId.AVALANCHE]: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
  [SupportedChainId.BSC_MAINET]: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  [SupportedChainId.POLYGON_MAINET]: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  [SupportedChainId.ARBITRUM_ONE]: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
  [SupportedChainId.OPTIMISM]: '0x4200000000000000000000000000000000000006',
  [SupportedChainId.FUJI]: '',
  [SupportedChainId.MUMBAI]: ''
}

export const WNATIVE_PRCE_FEEDS_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
  [SupportedChainId.AVALANCHE]: '0x0A77230d17318075983913bC2145DB16C7366156',
  [SupportedChainId.BSC_MAINET]: '0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE',
  [SupportedChainId.POLYGON_MAINET]: '0xAB594600376Ec9fD91F8e885dADF0CE036862dE0',
  [SupportedChainId.ARBITRUM_ONE]: '0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612',
  [SupportedChainId.OPTIMISM]: '0x13e3Ee699D1909E989722E753853AE30b17e08c5',
  [SupportedChainId.FUJI]: '0x5498BB86BC934c8D34FDA08E81D444153d0D06aD',
  [SupportedChainId.MUMBAI]: '0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada',
}

export const V2_ROUTER_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', // Uniswap
  [SupportedChainId.AVALANCHE]: '0x60aE616a2155Ee3d9A68541Ba4544862310933d4', // TraderJoe
  [SupportedChainId.BSC_MAINET]: '0x10ED43C718714eb63d5aA57B78B54704E256024E', // Pancakeswap
  [SupportedChainId.POLYGON_MAINET]: '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff', // QuickSwap
  [SupportedChainId.ARBITRUM_ONE]: '',
  [SupportedChainId.OPTIMISM]: '',
  [SupportedChainId.FUJI]: '',
  [SupportedChainId.MUMBAI]: ''
}

