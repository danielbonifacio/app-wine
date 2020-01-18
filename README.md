---
description: First app run
---

# Getting started

Welcome to the 2nd most important Wine's project. If you're reading this, you have been invited to something big. Be happy about it!

### Basics

There are some basic premises that you'll need to follow, during your staging on Wine's App.

* Every component must me on right pattern, without exceptions
* You must configure your environment like the rest of the team
* All Pull Requests will be reviewed by, at least, two developers, and you're one of them
* Everything must be in english \(docs, commits, branches, PRs, comments, variable names, etc.\) 

### Environment

To avoid some known problems, we decided to standardize the most important things, like our IDE, package manager, extensions, tools, etc.

First of all, install yarn:

```bash
brew install yarn
```

Next, add ESLint and react native globally:

```bash
yarn global add eslint
yarn global add react-native
```

Now install C**ocoapods** and W**atchman:**

```bash
brew install cocoapods
brew install watchman
```

Now you're able to install pods:

```bash
cd ios && pod install && cd ..
```

### IDE

You must use Visual Studio Code. It's not optional.

Install the following extensions:

* vscode-styled-components
* ESLint
* Image preview
* GitLens

### Package manager

As you probably noticed, we're using Yarn package manager on this project. We got some problems with NPM in the past, so we decided to only use Yarn. Btw, you should use - and love - it 😊

### Contributing

We are following something based on GitFlow to standardize our contributions. To contribute, you must follow the below steps:

1. Checkout to the most recent release branch
2. From this branch, create your branch\
3. Do the stuff that you need to do
4. Commit using the Commitizen pattern
5. Push changes to the remote repo
6. Open a Pull Request
7. Fix the requested changes, if they exists
8. Push it again
9. Wait for merge

#### Branches nomenclature

Here are a few examples that how you should name your branches:

* `feature/wineup-list-ui-improvement`
* `hotfix/winelist-infinite-scroll-bug`
* `feature/checkout-googlepay`

#### Pull Request nomenclature

* \[Feature\] Wineup: List UI Improvement
* \[Hotfix\] Winelist: Infinite scroll bug
* \[Feature\] Checkout: GooglePay

