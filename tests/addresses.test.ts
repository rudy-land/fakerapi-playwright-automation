import { test, expect } from '@playwright/test';

test('should retrieve one Address', async ({ request }) => {
    const anAddress = await request.get(`/api/v1/addresses?_quantity=1`);
    console.log(anAddress.url());
    expect(anAddress.ok()).toBeTruthy();
});
