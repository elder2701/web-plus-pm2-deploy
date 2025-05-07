const dotenv = require('dotenv');

dotenv.config({ path: './.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REPOSITORY, DEPLOY_REF,
} = process.env;

module.exports = {
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPOSITORY,
      path: DEPLOY_PATH,
      'post-deploy': `cd frontend && /home/${DEPLOY_USER}/.nvm/versions/node/v14.21.3/bin/node /home/${DEPLOY_USER}/.nvm/versions/node/v14.21.3/bin/npm ci && /home/${DEPLOY_USER}/.nvm/versions/node/v14.21.3/bin/node /home/${DEPLOY_USER}/.nvm/versions/node/v14.21.3/bin/npm run build`
    },
  },
};
