# ethereum-Homework1
### (20%) 1. Please compare hash function and cryptographic hash function and give an example.
1. cryptographic hash function是hash function的一種。但hash function不是cryptographic hash function。
2. cryptographic hash function需要private key，而且可以透過private key解密得到原文(cryptographic hash function可逆) 
3. hash function不需要有key，也無法逆向解出原始輸入(hash function不可逆)  

例1： 大明用hash function加密一段文字發給小明，小明無法逆向得到原始的明文    
例2： 大明用cryptographic hash function加密一段文字給小明，而且是用非對稱式加密，小明拿到密文之後可以用自己的private key解密看到明文。  

### What is HD Wallet, BIP32, BIP39 and BIP44?
* BIP32：定義 Hierarchical Deterministic wallet (簡稱 “HD Wallet”)，是一個系統可以從單一個 seed 產生一樹狀結構儲存多組 keypairs（私鑰和公鑰）。好處是可以方便的備份、轉移到其他相容裝置（因為都只需要 seed），以及分層的權限控制等。

* BIP39：將 seed 用方便記憶和書寫的單字表示。一般由 12 個單字組成，稱為 mnemonic code(phrase)，中文稱為助記詞或助記碼。

* BIP44：基於 BIP32 的系統，賦予樹狀結構中的各層特殊的意義。讓同一個 seed 可以支援多幣種、多帳戶等。

### What is RFC 6979 for?
用於確定性的產生保密且唯一的k值
k = SHA256(d + HASH(m));
其中，d是私鑰，m是消息，我們一般會對消息的HASH進行簽名，因此這裡HASH(m)。
