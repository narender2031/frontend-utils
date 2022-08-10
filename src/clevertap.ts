type Region = 'eu1' | 'in1' | 'sg1' | 'us1' | 'sk1';

let clevertap: any;

export async function ctInit(
    id: string, 
    region: Region | undefined,
    proxy: string = '',
    optOut: boolean = false,
    useIP: boolean = false
  ) {
    if (!window) return;

    const clevertapInit = await import('clevertap-web-sdk');
    clevertap = clevertapInit.default;

    clevertap.init(id, region, proxy);

    clevertap.privacy.push({ optOut: optOut }); //set the flag to true, if the user of the device opts out of sharing their data
    clevertap.privacy.push({ useIP: useIP }); //set the flag to true, if the user agrees to share their IP data
    clevertap.spa = true;

    return clevertap;
}

export function getClevertapSessionId() {
	return clevertap?.getCleverTapID();
};
