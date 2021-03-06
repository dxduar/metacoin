#!/usr/bin/env node

const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/f19c5e0f2fd047e9bc14b5fdd5577e5b'))

web3.eth.sendTransaction({ from: web3.eth.accounts[0], to: '0xFdb044f5197D43e26b91A303481Ab463A103BbC4', value: 1e19 })
