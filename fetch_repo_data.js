const { exec } = require('child_process');
const util = require('util');
const execAsync = util.promisify(exec);

async function getParentData(repoName, owner) {
  try {
    const { stdout } = await execAsync(`gh api repos/${owner}/${repoName} --jq '{fork: .fork, parent: .parent.html_url, parent_owner: .parent.owner.login, parent_name: .parent.name}'`);
    return JSON.parse(stdout);
  } catch (error) {
    console.error(`Error fetching parent for ${repoName}:`, error.message);
    return null;
  }
}

async function main() {
  // Read the repository data from the previous command
  const repos = require('./repo_data.json');
  const updatedRepos = [];
  
  for (const repo of repos) {
    let updatedRepo = { ...repo };
    
    if (repo.fork && !repo.parent) {
      const parentData = await getParentData(repo.name, 'hah23255');
      if (parentData && parentData.parent) {
        updatedRepo.parent = parentData.parent;
        updatedRepo.parent_owner = parentData.parent_owner;
        updatedRepo.parent_name = parentData.parent_name;
      }
    }
    
    updatedRepos.push(updatedRepo);
  }
  
  console.log(JSON.stringify(updatedRepos, null, 2));
}

main().catch(console.error);
