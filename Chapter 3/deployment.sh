# Chapter 3 - Manual Deployment & Rollback

echo "Starting deployment..."

# Step 1: Install dependencies
echo "Installing dependencies..."
npm install

# Step 2: Create production build
echo "Creating production build..."
npm run build

# Step 3: Verify build output
echo "Checking build output..."
ls -la ./dist

# Step 4: Restart application using PM2
echo "Restarting application..."
pm2 restart landing-page

# Step 5: Check PM2 status
echo "Checking application status..."
pm2 status

# Step 6: Test application
echo "Testing application..."
curl http://localhost:3000

echo "Deployment completed."
