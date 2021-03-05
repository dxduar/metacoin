module.exports = {
  networks: {
	  1: {
      addressUrl: 'https://etherscan.io/address/',
      txUrl: 'https://etherscan.io/tx/',
      metacoin: '0x4c6ec08cf3fc987c6c4beb03184d335a2dfc4042',
      relayHub: '0x515e39f12590a94B102903363336AF9761ebF621',
      paymaster: '0x8FE9BDC125F26bf50F969cb32c4dcF3a353EA02B',
      forwarder: '0xa530F85085C6FE2f866E7FdB716849714a89f4CD'
    },
    42: {
      addressUrl: 'https://dashboard.tenderly.co/contract/kovan/',
      txUrl: 'https://dashboard.tenderly.co/tx/kovan/',
      // addressUrl: 'https://kovan.etherscan.io/address/',
      // txUrl: 'https://kovan.etherscan.io/tx/',
      metacoin: '0x75f23C8241a9CEac032429fB94455102922C02C6',
      relayHub: '0xE9dcD2CccEcD77a92BA48933cb626e04214Edb92',
      paymaster: '0x083082b7Eada37dbD8f263050570B31448E61c94',
      forwarder: '0x0842Ad6B8cb64364761C7c170D0002CC56b1c498'
    },
    3: {
      addressUrl: 'https://dashboard.tenderly.co/contract/ropsten/',
      txUrl: 'https://dashboard.tenderly.co/tx/ropsten/',
      // addressUrl: 'https://ropsten.etherscan.io/address/',
      // txUrl: 'https://ropsten.etherscan.io/tx/',
      metacoin: '0x49139BdC9d484068851d2862ef8233c4D31e679b',
      relayHub: '0x29e41C2b329fF4921d8AC654CEc909a0B575df20',
      paymaster: '0x8057c0fb7089BB646f824fF4A4f5a18A8d978ecC',
      forwarder: '0x25CEd1955423BA34332Ec1B60154967750a0297D'
    },
    4: {
      addressUrl: 'https://dashboard.tenderly.co/contract/rinkeby/',
      txUrl: 'https://dashboard.tenderly.co/tx/rinkeby/',
      // addressUrl: 'https://rinkeby.etherscan.io/address/',
      // txUrl: 'https://rinkeby.etherscan.io/tx/',
      metacoin: '0xeEaAF1746224399CecE52228831B6CaCea18769D',
      relayHub: '0x53C88539C65E0350408a2294C4A85eB3d8ce8789',
      paymaster: '0x43d66E6Dce20264F6511A0e8EEa3f570980341a2',
      forwarder: '0x956868751Cc565507B3B58E53a6f9f41B56bed74'
    }
  }
}
