# GitHub Pages Deployment Guide

Follow these steps to deploy your Next.js portfolio to GitHub Pages.

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `portfolio` or `suyog-pipliwal.github.io`)
   - If you use `username.github.io`, it will be at `https://username.github.io`
   - If you use any other name, it will be at `https://username.github.io/repo-name`
5. Make it **public** (required for free GitHub Pages)
6. **Don't** initialize with README, .gitignore, or license
7. Click "Create repository"

## Step 2: Initialize Git and Push to GitHub

Open terminal in your project directory and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit"

# Add your GitHub repository as remote
# Replace USERNAME and REPO_NAME with your actual values
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Configure Next.js for Static Export

The project is already configured for static export. The `next.config.ts` file has been updated.

## Step 4: Set Up GitHub Actions

A GitHub Actions workflow file (`.github/workflows/deploy.yml`) has been created. This will automatically:
- Build your site when you push to main
- Deploy it to GitHub Pages

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - **Source**: `GitHub Actions`
5. Save the settings

## Step 6: Deploy

1. Push any changes to trigger the deployment:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

2. Go to the **Actions** tab in your repository
3. You should see a workflow running
4. Wait for it to complete (usually 2-3 minutes)
5. Once complete, your site will be live at:
   - `https://USERNAME.github.io` (if repo is `username.github.io`)
   - `https://USERNAME.github.io/REPO_NAME` (if repo has a different name)

## Step 7: Update Base Path (If Needed)

If your repository is NOT named `username.github.io`, you need to update the base path:

1. The `next.config.ts` already has a placeholder for `basePath`
2. Uncomment and set it to your repository name:
   ```typescript
   basePath: '/your-repo-name',
   ```
3. Commit and push the changes

## Troubleshooting

- **404 errors**: Make sure the base path in `next.config.ts` matches your repository name
- **Build fails**: Check the Actions tab for error messages
- **Site not updating**: Clear browser cache or wait a few minutes for CDN to update
- **Images not loading**: Ensure all images are in the `public` folder

## Custom Domain (Optional)

If you want to use a custom domain:
1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings with your custom domain

