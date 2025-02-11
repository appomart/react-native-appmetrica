const { createRunOncePlugin } = require('@expo/config-plugins')
const pkg = require('@appomart/react-native-appmetrica/package.json')

const withAppMetrica = (config) => config

module.exports = createRunOncePlugin(withAppMetrica, pkg.name, pkg.version)
