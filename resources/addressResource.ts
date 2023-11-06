export class AddressResource {
    readonly addressUrl: string;

    constructor() {
        this.addressUrl = `/api/v1/addresses`;
    }

	requestGet(quantity: string) 	{
		return this.addressUrl + `?_quantity=${quantity}`;
	}    
}
