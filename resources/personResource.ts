export class PersonResource {
    readonly personsUrl: string;

    constructor() {
        this.personsUrl = `/api/v1/persons`;
    }

	requestGet(quantity: string, gender?: string, bdayStart?: string, bdayEnd?: string) 	{
		return this.personsUrl + `?_quantity=${quantity}&_gender=${gender}&_bdayStart=${bdayStart}&_bdayEnd=${bdayEnd}`;
	}    
}
