# Chapter 3: Manual Deployment & Rollback

## Summary

This chapter covers the manual deployment and rollback process for a web
application.

The deployment process includes environment configuration using a
`.env.example` file while keeping sensitive `.env` credentials out of
version control. The application is prepared for production by installing
dependencies and creating a production build.

PM2 is used as the process manager to run the application in the background
and support automatic restarts. The deployment is verified using PM2 status
checks and a local application test.

A failure drill is also performed by deploying a deliberately broken release
and restarting the application. The rollback procedure then restores the
previous stable release using the release symlink and PM2 restart.

This workflow demonstrates safe deployment, failure handling, and quick
rollback to a stable application version with minimal or zero downtime.