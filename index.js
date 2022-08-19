const fs = require('fs')
const core = require('@actions/core')
const tc = require('@actions/tool-cache')
const { getDownloadUrl } = require('./lib/utils')

function isInstalled(toolPath) {
  return toolPath !== undefined && toolPath !== ''
}

async function installVersion(version, { pythonVersion }) {
  const downloadUrl = getDownloadUrl({ kapitanVersion: version, pythonVersion })
  const path = await tc.downloadTool(downloadUrl, './kapitan')

  fs.chmodSync(path, '0755')
  return tc.cacheFile(path, 'kapitan', 'kapitan', version)
}

async function setup() {
  try {
    // Get version of tool to be installed
    const kapitanVersion = core.getInput('version')
    const pythonVersion = core.getInput('python-version')

    let toolPath = tc.find('kapitan', kapitanVersion)
    if (!isInstalled(toolPath)) {
      toolPath = await installVersion(kapitanVersion, { pythonVersion })
    }
    core.info(`Adding ${toolPath} to path`)
    core.addPath(toolPath)
  } catch (e) {
    core.setFailed(e)
  }
}

module.exports = setup

if (require.main === module) {
  setup()
}
