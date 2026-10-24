import assert from 'node:assert/strict';
import { genericAdapter, createAdapterRegistry, classifyExampleFile } from '@x12i/financial-adapters';

const registry = createAdapterRegistry([genericAdapter]);
const adapter = registry.get(genericAdapter.adapterId);
assert.equal(adapter.validatedLocalFiling, false);
assert(adapter.fields.some(field => field.target === 'accountKey.accountId'));
assert.equal(classifyExampleFile('trial-balance.xlsx'), 'workbook');
console.log({ id: adapter.adapterId, profile: adapter.primaryProfileId, fields: adapter.fields });
