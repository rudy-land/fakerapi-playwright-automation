export class AddressResource {
    readonly addressesUrl: string;

    constructor() {
        this.addressesUrl = `/api/v1/addresses`;
    }

	requestGet(quantity: string) 	{
		return this.addressesUrl + `?_quantity=${quantity}`;
	}    
}
