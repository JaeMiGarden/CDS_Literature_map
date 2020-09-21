module.exports = {
  apps : [{
    name: "node",
    script: "npx babel-node init.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
