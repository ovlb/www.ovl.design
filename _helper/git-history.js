import simpleGit from 'simple-git'

const git = simpleGit()

async function getChanges(pageData) {
  const options = {
    file: pageData.inputPath,
  }

  try {
    const history = await git.log(options)

    return history.all
  } catch (e) {
    console.log(e)
    return null
  }
}

export { getChanges }
export default { getChanges }
