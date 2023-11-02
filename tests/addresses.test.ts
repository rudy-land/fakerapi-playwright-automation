import { test, expect } from '@playwright/test';

test('should retrieve one Address', async ({ request }) => {
    // Note: once AddressResource is implemented, this will loook like: addressResource.requestGet(quantity)
    const anAddress = await request.get(`/api/v1/addresses?_quantity=1`);

    // Response should be successful
    expect(anAddress.ok()).toBeTruthy();

    // Should return 200 and one record
    expect(await anAddress.json()).toEqual(expect.objectContaining({
        "code": 200, // Once "data/addressesData is implemented, these magic numbers will be replaced
        "total": 1
      }));
});

test('should retrieve multiple Addresses', async ({ request }) => {
    const anAddress = await request.get(`/api/v1/addresses?_quantity=5`);

    // Response should be successful
    expect(anAddress.ok()).toBeTruthy();

    // Should return 200 and 5 records
    expect(await anAddress.json()).toEqual(expect.objectContaining({
        "code": 200,
        "total": 5
      }));
});
