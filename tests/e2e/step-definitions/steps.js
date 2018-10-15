import { client } from 'nightwatch-api';
import { Given, Then } from 'cucumber';


Given('/a loaded and rendered homepage$/', async () => {
    await client.url('http://localhost:8080/#/');
});

When('/^I enter a Password$/', async () => {
    await client.elements('input[type=password]')[0].value('somePassword');
});

Then('/^the password should be obfuscated$/', async () => {
    await client.elements('input[type=password]')[0].getValue('input[type=password]', (value) => {
        client.assert(value === '••••••••••••');
    });
});