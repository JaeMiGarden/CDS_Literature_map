module.exports = {
  apps : [{
    name: "node",
    wathc: true,
    script: "npx babel-node init.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
