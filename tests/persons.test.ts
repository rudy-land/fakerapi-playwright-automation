import { test, expect } from '@playwright/test';

test('should retrieve one female person', async ({ request }) => {
    const aPerson = await request.get(`/api/v1/persons?_quantity=1&_gender=female`);

    // Response should be successful
    expect(aPerson.ok()).toBeTruthy();

    const body = await aPerson.json();
    const data = body.data;

    // Should return 200 and one record
    expect(await aPerson.json()).toEqual(expect.objectContaining({
        "code": 200,
        "total": 1,
    }));

    // Should return a female person
    expect(data[0]).toHaveProperty('gender', 'female');

});

test('should retrieve one male person', async ({ request }) => {
    const aPerson = await request.get(`/api/v1/persons?_quantity=1&_gender=male`);

    // Response should be successful
    expect(aPerson.ok()).toBeTruthy();

    const body = await aPerson.json();
    const data = body.data;

    // Should return 200 and one record
    expect(await aPerson.json()).toEqual(expect.objectContaining({
        "code": 200,
        "total": 1,
    }));

    // Should return a male person
    expect(data[0]).toHaveProperty('gender', 'male');

});