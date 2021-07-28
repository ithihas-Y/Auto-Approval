import Web3 from 'web3'

const web3 = new Web3('wss://mainnet.infura.io/ws/v3/b3866b1857994f17b06df9cd3d915610')


const event = web3.eth.subscribe('logs',{
    address:'0x3301ee63fb29f863f2333bd4466acb46cd8323e6',
    topics:[' 0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925']
})

event.on('data',()=>{
    console.log
})


