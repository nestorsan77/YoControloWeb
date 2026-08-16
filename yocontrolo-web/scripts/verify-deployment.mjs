import { verifySite } from './site-checks.mjs';

const deploymentUrl = process.argv[2];
if (!deploymentUrl) {
  throw new Error('Usage: npm run test:deployment -- https://deployment.example');
}

let lastError;
for (let attempt = 1; attempt <= 6; attempt += 1) {
  try {
    await verifySite(deploymentUrl);
    console.log(`Deployment checks passed for ${deploymentUrl}`);
    process.exit(0);
  } catch (error) {
    lastError = error;
    if (attempt < 6) {
      console.warn(`Deployment check ${attempt}/6 failed; retrying in 5 seconds.`);
      await new Promise((resolve) => setTimeout(resolve, 5_000));
    }
  }
}

throw lastError;
