Deployment notes
================

This repo is only for the builds to deploy.
Create a new build with aureliacli and commit and push the new build.

```
au build --env prod
```

Then deployit with ansible to the inqbus server.
