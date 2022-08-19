module.exports.getDownloadUrl = function ({ kapitanVersion, pythonVersion }) {
  const url = `https://github.com/humaans/setup-kapitan-action/raw/master/bin/kapitan-${kapitanVersion}-py${pythonVersion}.pex`

  return url
}
