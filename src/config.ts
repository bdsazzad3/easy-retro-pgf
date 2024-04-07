import { getAddress } from "viem";
import * as allChains from "viem/chains";

export const metadata = {
  title: "EasyRPGF",
  description: "Open-source Retro Public Goods Funding platform",
  url: "https://easy-retro-pgf.vercel.app",
  image: "/api/og",
};

export const config = {
  logoUrl: "",
  pageSize: 3 * 4,
};

export const nativeToken = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
export const allo = {
  alloAddress: getAddress(process.env.NEXT_PUBLIC_ALLO2_ADDRESS!),
  strategyAddress: getAddress(process.env.NEXT_PUBLIC_STRATEGY_ADDRESS!),
};

export const theme = {
  colorMode: "light",
};

export const networks = {
  mainnet: "mainnet",
  optimism: "optimism",
  optimismSepolia: "optimismSepolia",
  arbitrum: "arbitrum",
  linea: "linea",
  sepolia: "sepolia",
  base: "base",
  baseGoerli: "baseGoerli",
  celo: "celo",
} as const;

export const eas = {
  contracts: {
    [networks.mainnet]: {
      eas: "0xA1207F3BBa224E2c9c3c6D5aF63D0eb1582Ce587",
      registry: "0xA7b39296258348C78294F95B872b282326A97BDF",
    },
    [networks.arbitrum]: {
      eas: "0xbD75f629A22Dc1ceD33dDA0b68c546A1c035c458",
      registry: "0xA310da9c5B885E7fb3fbA9D66E9Ba6Df512b78eB",
    },
    [networks.celo]: {
      eas: "0x72E1d8ccf5299fb36fEfD8CC4394B8ef7e98Af92",
      registry: "0x5ece93bE4BDCF293Ed61FA78698B594F2135AF34",
      schemas: {
        metadata:
          "0xf01bd22db2b104f6a7096f3625307b1c03b863b73f08e71557ebf1adc20cf1bf",
        approval:
          "0xe2636f31239f7948afdd9a9c477048b7fc2a089c347af60e3aa1251e5bf63e5c",
      },
    },
    [networks.linea]: {
      eas: "0xaEF4103A04090071165F78D45D83A0C0782c2B2a",
      registry: "0x55D26f9ae0203EF95494AE4C170eD35f4Cf77797",
    },
    [networks.sepolia]: {
      eas: "0xC2679fBD37d54388Ce493F1DB75320D236e1815e",
      registry: "0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0",
    },
    default: {
      eas: "0x4200000000000000000000000000000000000021",
      registry: "0x4200000000000000000000000000000000000020",
      schemas: {
        approval:
          "0x858e0bc94997c072d762d90440966759b57c8bca892d4c9447d2eeb205f14c69",
        metadata:
          "0xd00c966351896bd3dc37d22017bf1ef23165f859d7546a2aba12a01623dec912",
      },
    },
  },
};

export const supportedNetworks = Object.values(networks).map((chain) => ({
  ...allChains[chain],
  chain,
}));
export const networkNames = Object.fromEntries(
  supportedNetworks.map((network) => [network.chain, network.name]),
);

export const easApiEndpoints = {
  [networks.mainnet]: "https://easscan.org/graphql",
  [networks.optimism]: "https://optimism.easscan.org/graphql",
  [networks.optimismSepolia]: "https://optimism-sepolia.easscan.org/graphql",
  [networks.arbitrum]: "https://arbitrum.easscan.org/graphql",
  [networks.linea]: "https://linea.easscan.org/graphql",
  [networks.sepolia]: "https://sepolia.easscan.org/graphql",
  [networks.base]: "https://base.easscan.org/graphql",
  [networks.baseGoerli]: "https://base-goerli.easscan.org/graphql",
  [networks.celo]: "https://celo.easscan.org/graphql",
} as const;

export const impactCategories = {
  ETHEREUM_INFRASTRUCTURE: { label: "Ethereum Infrastructure" },
  OPEN_SOURCE: { label: "Web3 Open Source Software" },
  COMMUNITY_EDUCATION: { label: "Web3 Community & Education" },
  COLLECTIVE_GOVERNANCE: { label: "Collective Governance" },
  OP_STACK: { label: "OP Stack" },
  DEVELOPER_ECOSYSTEM: { label: "Developer Ecosystem" },
  END_USER_EXPERIENCE_AND_ADOPTION: { label: "End user UX" },
} as const;
