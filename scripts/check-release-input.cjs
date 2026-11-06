const assert=require('node:assert/strict');
assert.equal(process.env.GITHUB_REPOSITORY,'blitzio/blitzio-site','Wrong production repository');
assert.equal(process.env.GITHUB_REF,'refs/heads/main','Production runs must use main');
assert.match(process.env.GITHUB_SHA||'',/^[a-f0-9]{40}$/,'Expected full source SHA');
assert.ok(['true','false'].includes(process.env.PUBLISH),'Explicit publish choice required');
if(process.env.PUBLISH==='true')assert.equal(process.env.APPROVED_SHA,process.env.GITHUB_SHA,'Publishing requires the exact approved source SHA');
console.log(JSON.stringify({repository:process.env.GITHUB_REPOSITORY,sha:process.env.GITHUB_SHA,publish:process.env.PUBLISH==='true'}));
