import { test, expect } from '@playwright/test';

test('should retrieve one Address', async ({ request }) => {
    const anAddress = await request.get(`/repos/api/v1/addresses?_quantity=1`);
    expect(anAddress.ok()).toBeTruthy();
});
