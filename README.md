# blitzio

Mike F's approved personal homepage. Static Astro output, local DM Sans, stationary astronaut and a progressively enhanced Three.js horizon. No runtime API or analytics service.

Use Node 24 and pnpm 11.25.0. Run `pnpm install --frozen-lockfile`, `pnpm build`, `node scripts/check-static-output.cjs`, and `pnpm preview`. Only `dist/` is a publication artifact.

## GitHub Pages

No push trigger is configured. The manual workflow defaults to publish=false, which only builds, checks and uploads an artifact with one-day retention. Publishing requires explicit approval, main in blitzio/blitzio-site, the full approved commit SHA in approved_sha, and Pages already configured separately for blitzio.com using GitHub Actions. The deploy job alone receives pages:write and id-token:write. Actions use immutable SHAs, checkout does not persist credentials, and installation uses the frozen lockfile.

After separately approved repository creation, configure default workflow permissions read-only, disable workflow PR approval, and restrict the github-pages environment to main. This workflow does not create repositories, claim domains, change DNS or configure a custom domain. No CNAME file is needed for this custom Actions deployment. The repository-default subpath URL is not a substitute preview for this root-domain build.

## Rights and attribution

The full DM Sans SIL OFL and Three.js MIT notices are in public/. NASA image provenance and media usage terms are recorded in public/image-sources.txt. Retain these notices in builds. The site owner confirmed publication rights for the supplied avatar artwork. No project-wide license for the original site code or artwork is granted by this README.

## Production address and indexing

Production is fixed to https://blitzio.com/ with root asset paths. Canonical is https://blitzio.com/. Robots metadata permits index and follow, robots.txt allows crawling and points to a single-page sitemap. These requests do not guarantee search indexing. The separate staging repository keeps its own repository path and noindex policy. Domain association and DNS changes require separate approval.
