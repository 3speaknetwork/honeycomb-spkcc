require('dotenv').config();
const ENV = process.env;

const username = ENV.ACCOUNT || 'regardspk';
const active = ENV.ACTIVE || '';
const follow = ENV.follow || 'regardspk';
const poav_address = ENV.POA_URL || "ws://validator.dlux.io"
const msowner = ENV.msowner || '';
const mspublic = ENV.mspublic || '';
const memoKey = ENV.memo || '';
const hookurl = ENV.discordwebhook || '';
const NODEDOMAIN = ENV.DOMAIN || 'https://spktoken.dlux.io' //where your API lives
const acm = ENV.account_creator || false //account creation market ... use your accounts HP to claim account tokens
const mirror = ENV.mirror || false //makes identical posts, votes and IPFS pins as the leader account
const port = ENV.PORT || 3001;
const pintoken = ENV.pintoken || ''
const pinurl = ENV.pinurl || '';
const status = ENV.status || true
const dbcs = ENV.DATABASE_URL || '';
const BlackListURL = ENV.BLACKLIST_URL || "http://localhost:5050"
const dbmods = ENV.DATABASE_MODS || []; //list of moderators to hide posts in above db
const snapcs = ENV.SNAPBASE_URL || "http://65.108.66.120:8002"; // get a public facing snapshot server
const history = ENV.history || 3600
const stream = ENV.stream || 'irreversible'
const mode = ENV.mode || 'normal'
const timeoutStart = ENV.timeoutStart || 180000
const timeoutContinuous = ENV.timeoutContinuous || 30000


// testing configs for replays
const mirrorNet = ENV.mirrorNet || false
const override = ENV.override || 0 //69116600 //will use standard restarts after this blocknumber
const engineCrank =
  ENV.startingHash || "QmWh6F8DKyDjRxkvgrh89Ssjh9zoNtm8UYS3CztppiWFHj"; //but this state will be inserted before

// third party configs
const rta = ENV.rta || '' //rtrades account : IPFS pinning interface
const rtp = ENV.rtp || '' //rtrades password : IPFS pinning interface

const ipfshost = ENV.ipfshost || "hiveipfs.rishipanthee.com"; //IPFS upload/download provider provider
const ipfsport = ENV.ipfsport || '5001' //IPFS upload/download provider provider

const ipfsLinks = ENV.ipfsLinks
  ? ENV.ipfsLinks.split(" ")
  : [
      "http://ipfs:8080/ipfs/",
      "http://localhost:8080/ipfs/",
      "https://ipfs.3speak.tv/ipfs/",
      "https://infura-ipfs.io/ipfs/",
      "https://ipfs.alloyxuast.co.uk/ipfs/",
      "https://ipfs1.alloyxuast.tk/ipfs/"
    ];

const ipfsprotocol = ENV.ipfsprotocol || 'https' //IPFS upload/download protocol
//node market config > 2500 is 25% inflation to node operators, this is currently not used
const bidRate = ENV.BIDRATE || 500 // your vote for the dex fee 500 = 0.500% Max 1000

//HIVE CONFIGS
var startURL = ENV.STARTURL || "https://hive-api.dlux.io/";
var clientURL = ENV.APIURL || "https://hive-api.dlux.io/";
const clients = ENV.clients ? ENV.clients.split(" ") : [
  "https://hive-api.dlux.io/",
  //"https://api.c0ff33a.uk/",
  "https://rpc.ecency.com/",
  "https://hived.emre.sh/",
  //"https://rpc.ausbit.dev/",
  "https://api.hive.blog/",

];

//!!!!!!! -- THESE ARE COMMUNITY CONSTANTS -- !!!!!!!!!//
//TOKEN CONFIGS -- ALL COMMUNITY RUNNERS NEED THESE SAME VALUES
const starting_block = 62313601; //from what block does your token start
const prefix = 'spkcc_' //Community token name for Custom Json IDs
const TOKEN = 'LARYNX' //Token name
const precision = 3 //precision of token
const tag = 'spk' //the fe.com/<tag>/@<leader>/<permlink>
const jsonTokenName = 'larynx' //what customJSON in Escrows and sends is looking for
const leader = 'regardspk' //Default account to pull state from, will post token
const ben = '' //Account where comment benifits trigger token action
const delegation = '' //account people can delegate to for rewards
const delegationWeight = 1000 //when to trigger community rewards with bens
const msaccount = 'spk-cc' //account controlled by community leaders
const msPubMemo = 'STM5GNM3jpjWh7Msts5Z37eM9UPfGwTMU7Ksats3RdKeRaP5SveR9'
const msPriMemo = '5KDZ9fzihXJbiLqUCMU2Z2xU8VKb9hCggyRPZP37aprD2kVKiuL'
const msmeta = ''
const mainAPI = 'spktoken.dlux.io' //leaders API probably
const mainRender = '' //data and render server
const mainFE = '3speak.tv' //frontend for content
const mainIPFS = 'ipfs.3speak.tv' //IPFS service
const mainICO = '' //Account collecting ICO HIVE
const footer = ''//`\n[Find us on Discord](https://discord.gg/Beeb38j)`
const hive_service_fee = 100 //HIVE service fee for transactions in Hive/HBD in centipercents (1% = 100)
const rollup_ops = [
  'channel_update',
  'channel_close'
];
const votable = [
  "spk_cycle_length", //power down cycle, 4 x times this number in blocks for a full power down
  "dex_fee", //percent withheld to pay collateral holders
  "dex_max", //percent of collateral the largest open order can be
  "dex_slope", //penalty of max for lower priced open orders (50% means a open order at half price would be subject to 25% lower max rate)
  "spk_rate_lpow", 
  "spk_rate_ldel",
  "spk_rate_lgov",
  "max_coll_members",  //number of accounts that can provide liquidity and share rewards
  "broca_refill", // blocks until full
  "IPFSRate", // min amount to open a channel
  "channel_bytes", // bytes per broca
  "channel_min", //min amount a channel can have (spam filter)
  "flags_to_penalty", //over this number an account forfiet all gains that period
  "penalty_blocks", // how long it takes to remove a flag
  "validators", // number of validators
  "spk_val",
  "spk_dex",
  "spk_liq",
  "vals_target",
  "nodeRate", // validator share of new larynx
]
const features = {
    pob: false, //proof of brain
    delegate: false, //delegation
    daily: true,
    liquidity: false, //liquidity
    ico: true, //ico
    dex: true, //dex
    nft: false, //nfts
    state: true, //api dumps
    claimdrop: false, //claim drops
    inflation: true //inflation
}
const featuresModel = {
            claim_id: 'claim',
            claim_S: 'Airdrop',
            claim_B: true,
            claim_json: 'drop',
            rewards_id: 'shares_claim',
            rewards_S: 'Rewards',
            rewards_B: true,
            rewards_json: 'claim',
            rewardSel: false,
            reward2Gov: false,
            send_id: 'send',
            send_S: 'Send',
            send_B: true,
            send_json: 'send',
            powup_id: 'power_up',
            powup_B: false,
            pow_val: '',
            powdn_id: 'power_down',
            powdn_B: false,
            powsel_up: false,
            govup_id: 'gov_up',
            govup_B: true,
            gov_val: '',
            govsel_up: true,
            govdn_id: 'gov_down',
            govdn_B: true,
            node: {
              id: 'node_add',
              opts: [{
                  S: 'Domain',
                  type: 'text',
                  info: 'https://no-trailing-slash.com',
                  json: 'domain',
                  val: ''
                }
              ],
            }
          }
const adverts = [
    'https://camo.githubusercontent.com/954558e3ca2d68e0034cae13663d9807dcce3fcf/68747470733a2f2f697066732e627573792e6f72672f697066732f516d64354b78395548366a666e5a6748724a583339744172474e6b514253376359465032357a3467467132576f50'
]
const detail = {
                name: 'Larynx Miner Token',
                symbol: 'LARYNX',
                icon: 'https://www.dlux.io/img/dlux-hive-logo-alpha.svg',
                supply:'Hive 1:1 Airdrop',
                wp:`https://docs.google.com/document/d/1_jHIJsX0BRa5ujX0s-CQg3UoQC2CBW4wooP2lSSh3n0/edit?usp=sharing`,
                ws:`https://www.dlux.io`,
                be:`https://hiveblockexplorer.com/`,
                text: `Larynx is a token that is used to mine SPK.`
            }

//Aditionally on your branch, look closely at dao, this is where tokenomics happen and custom status posts are made

let config = {
  username,
  active,
  dbmods,
  poav_address,
  msowner,
  mspublic,
  memoKey,
  follow,
  NODEDOMAIN,
  hookurl,
  status,
  history,
  dbcs,
  mirror,
  bidRate,
  engineCrank,
  port,
  pintoken,
  pinurl,
  clientURL,
  startURL,
  clients,
  acm,
  rta,
  rtp,
  override,
  ipfshost,
  ipfsprotocol,
  ipfsport,
  ipfsLinks,
  starting_block,
  prefix,
  leader,
  msaccount,
  msPubMemo,
  msPriMemo,
  msmeta,
  ben,
  adverts,
  delegation,
  delegationWeight,
  TOKEN,
  precision,
  tag,
  mainAPI,
  jsonTokenName,
  mainFE,
  mainRender,
  mainIPFS,
  mainICO,
  detail,
  footer,
  hive_service_fee,
  features,
  snapcs,
  stream,
  mode,
  featuresModel,
  timeoutStart,
  timeoutContinuous,
  rollup_ops,
  mirrorNet,
  votable,
  BlackListURL
};

module.exports = config;