import { test, expect } from '@playwright/test';
import { PersonResource } from '../resources/personResource';
import { personData } from './data/personsData';

const personResource = new PersonResource();

test('TC-01: should retrieve one female person', async ({ request }) => {
    const personRequest = await request.get(personResource.requestGet(
        personData.tc01.quantity,
        personData.tc01.gender
    ));

    // Response should be successful
    expect(personRequest.ok()).toBeTruthy();

    const body = await personRequest.json();
    const data = body.data;

    // Should return 200 and one record
    expect(await personRequest.json()).toEqual(expect.objectContaining(personData.tc01.expectedResult));

    // Should return a female person
    expect(data[0]).toHaveProperty('gender', personData.tc01.gender);

});

test('TC-02: should retrieve one male person', async ({ request }) => {
    const personRequest = await request.get(personResource.requestGet(
        personData.tc02.quantity,
        personData.tc02.gender
    ));

    // Response should be successful
    expect(personRequest.ok()).toBeTruthy();

    const body = await personRequest.json();
    const data = body.data;

    // Should return 200 and one record
    expect(await personRequest.json()).toEqual(expect.objectContaining(personData.tc02.expectedResult));

    // Should return a male person
    expect(data[0]).toHaveProperty('gender', personData.tc02.gender);

});