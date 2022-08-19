const core = require('@actions/core')
const tc = require('@actions/tool-cache')
const { getDownloadUrl } = require('./lib/utils')

async function setup() {
  try {
    // Get version of tool to be installed
    const kapitanVersion = core.getInput('version')
    const pythonVersion = core.getInput('python-version')

    // Download the specific version of the tool
    const downloadUrl = getDownloadUrl({ kapitanVersion, pythonVersion })
    await tc.downloadTool(downloadUrl, './kapitan')

    // Expose the tool by adding it to the PATH
    core.addPath('./')
  } catch (e) {
    core.setFailed(e)
  }
}

module.exports = setup

if (require.main === module) {
  setup()
}