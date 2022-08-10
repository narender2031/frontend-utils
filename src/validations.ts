import { pincodes } from './constants/pincode'

export const isValidName = (name: string): boolean => {
	const namePattern = new RegExp(/^[A-Za-z\s]{1,}[.\][A-Za-z\s]{0,}$/u);
	if (!name) return false;
	return (
		namePattern.test(name) && !name.includes('[') && !name.includes(']') && !name.includes('..')
	);
};

export const isValidEmail = (email: string) => {
	const emailPattern = new RegExp(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
	return emailPattern.test(String(email).toLowerCase());
};

export const supportedValuesRegexes = {
	NAME: new RegExp(/[^a-zA-Z.\s]/g),
	TEXT: new RegExp(/[^a-zA-Z\s]/g),
	NUMBER: new RegExp(/[^\d]/g),
	EXPIRY_DATE: new RegExp(/[^\d/]/g),
	CARD: new RegExp(/[^\d\s]/g),
	ADDRESS: new RegExp(/[^a-zA-Z\d\s#&'()+,\-./]/g),
	PAN: new RegExp(/[^A-Za-z0-9]/g),
    DOB: new RegExp(/[^\d/]/g),
};


export function isValidPincode(pincode: string) {
	let state;
	for (const key in pincodes) {
		let isValidPincode = new RegExp(key).test(pincode);

		if (isValidPincode) {
			state = pincodes[key];
			break;
		}
	}

	return state ? true : false;
}
