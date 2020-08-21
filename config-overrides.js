module.exports = (config) => {
  // console.log('object :>> ', config);
  config.resolve.alias['@'] = `src`;
  return config;
}
