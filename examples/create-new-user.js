const { default: KcAdminClient } = require('keycloak-admin');

async function start() {
  const kcAdminClient = new KcAdminClient({
    realmName: 'ceria',
  });

  try {
    // Authorize with username / password
    await kcAdminClient.auth({
      grantType: 'client_credentials',
      clientId: 'internal-service',
      clientSecret: '49719294-4cb6-48b8-99d4-b7ac55f38fc0',
    });

    // Create new user
    try {
      await kcAdminClient.users.create({
        username: '081225088579',
        email: 'rheza.satria.ta@gmail.com',
        requiredActions: ['VERIFY_EMAIL']
      });
    } catch(e) {
      console.log(e.response.data)
    }

    const user = await kcAdminClient.users.findOne('081225088578')
    console.log('user: ', user)
  } catch(e) {
    console.log(e)
  }
}

start()
