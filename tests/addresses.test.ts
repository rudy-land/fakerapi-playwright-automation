import { test, expect } from '@playwright/test';
import { AddressResource } from '../resources/addressResource';
import { addressData } from './data/addressesData';

const addressResource = new AddressResource();

test('TC-01: should retrieve one Address', async ({ request }) => {
    const addressRequest = await request.get(addressResource.requestGet(addressData.tc01.quantity));

    // Response should be successful
    expect(addressRequest.ok()).toBeTruthy();

    // Should return 200 and one record
    expect(await addressRequest.json()).toEqual(expect.objectContaining(addressData.tc01.expectedResult));
});

test('TC-02: should retrieve multiple Addresses', async ({ request }) => {
    const addressRequest = await request.get(addressResource.requestGet(addressData.tc02.quantity));

    // Response should be successful
    expect(addressRequest.ok()).toBeTruthy();

    // Should return 200 and 5 records
    expect(await addressRequest.json()).toEqual(expect.objectContaining(addressData.tc02.expectedResult));
});
