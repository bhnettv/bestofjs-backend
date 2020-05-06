const { runTasks } = require("../task-runner");

const updateProjects = require("./projects/update-github-data.task");
const buildProjects = require("./projects/build-projects-files.task");
const updateHeroes = require("./hall-of-fame/update-github-heroes.task");
const buildHeroes = require("./hall-of-fame/build-heroes.task");
const notify = require("./notify.task");

const isGitHubDeployment = process.env.VERCEL_GITHUB_DEPLOYMENT;

console.log({ isGitHubDeployment });

if (isGitHubDeployment) {
  console.info(`No build process to trigger after a branch is pushed`);
  process.exit(0);
}

// Compose the tasks that need to be run every day
runTasks([updateProjects, buildProjects, updateHeroes, buildHeroes, notify]);
