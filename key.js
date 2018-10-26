// npm-library
const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;
const EC = require('elliptic').ec;
const assert = require('assert');
// keypair
const wallet = Wallet.generate();
 
// privKey
const privKey = wallet.getPrivateKey();
console.log("privKey:", privKey);
 
// pubKey
const pubKey = wallet.getPublicKey();
console.log("pubKey:", pubKey);

// address
let address = wallet.getAddressString();
console.log("address:", address);

console.log("======================================");
console.log("(30%) a. Can you print the private/public key with hex string representation? Please give us an example.");
// Hex Format PrivKey
const HexprivKey = wallet.getPrivateKey().toString('hex');
console.log("privKey:", HexprivKey);
 
// Hex Format PubKey
const HexpubKey = wallet.getPublicKey().toString('hex');
console.log("pubKey:", HexpubKey);

console.log("======================================");
console.log("(20%) b. In addition, if we don’t want to use the getAddressString() to get the address, how can we obtain the address by hashing the public key?");

try {
    const ec = new EC('secp256k1');

    // Decode private key
    const key = ec.keyFromPrivate(HexprivKey, 'hex');

    // Convert to uncompressed format
    const publicKey = key.getPublic().encode('hex').slice(2);

    // Now apply keccak
    const address = keccak256(Buffer.from(publicKey, 'hex')).slice(64 - 40);

    console.log(`Public Key: 0x${publicKey}`);
    console.log(`Address: 0x${address.toString()}`);
  } catch (err) {
    console.log(err);
  }
console.log("======================================");
console.log("(30%) c. There is a file called Keystore that is used to encrypt the private key and save in a JSON file. Can you generate a Keystore with the password “nccu”? You can find the details about Keystore below.");
const keystore = wallet.toV3("nccu");
console.log(keystore);








