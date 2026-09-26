# Publish this project on GitHub

Suggested repository name: `mot-a-mot`.
Suggested description: `French vocabulary trainer for Chinese speakers · daily review, pronunciation, examples and word origins`.
Suggested topics: `french`, `language-learning`, `vocabulary`, `react`, `typescript`.

1. Create an empty public repository in your own GitHub account. The root LICENSE and data licensing notice already exist; do not replace them with GitHub's generated license.
2. Extract this source archive. It contains no original Git history, environment secrets or user progress. Do not copy the original private project directory over it.
3. From the extracted project, initialize a fresh history and publish:

```sh
git init -b main
git add .
git commit -m "Initial open-source release"
git remote add origin https://github.com/YOUR_ACCOUNT/mot-a-mot.git
git push -u origin main
```

Replace `YOUR_ACCOUNT` with your account. Authenticate through GitHub's normal sign-in or CLI flow; never commit a token.

CI will install dependencies, test and build. For hosting, deploy the resulting `dist/` directory over HTTPS. Publishing the repository does not automatically host the app. Keep the data attribution visible.

Enable private vulnerability reporting in the repository settings, and optionally enable Issues and Discussions. The existing private hosted app and its cloud database are separate from this release.
