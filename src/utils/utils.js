import CryptoJS from 'crypto-js';
export default {//加密
	encrypt(data, keyStr) {
		let realKey = keyStr ? keyStr : CryptoJS.SHA1('50d6c185-c026-4ebb-ae75-21b522c205c0');
		realKey = CryptoJS.SHA1(realKey).toString().substring(0, 32); //真正的key
		let encrypt = CryptoJS.AES.encrypt(data, CryptoJS.enc.Hex.parse(realKey), {
			mode: CryptoJS.mode.ECB,
			padding: CryptoJS.pad.Pkcs7
		});
		return encrypt.ciphertext.toString(CryptoJS.enc.Base64);
	},
	//解密
	decrypt(word, keyStr) {
		keyStr = keyStr ? keyStr : '50d6c185-c026-4ebb-ae75-21b522c205c0';
		let key  = CryptoJS.enc.Utf8.parse(keyStr);//Latin1 w8m31+Yy/Nw6thPsMpO5fg==
		let decrypt = CryptoJS.AES.decrypt(word, key, {mode:CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
		return CryptoJS.enc.Utf8.stringify(decrypt).toString();
	}
};