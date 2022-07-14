# Git

(Git cheatsheet)[https://education.github.com/git-cheat-sheet-education.pdf]

command: la (Shows every file, event the hidden one. ex: .git)

## Pull Request

```css
git push --set-upstream origin feature-notes
```

## Branching

```css
git checkout -b "name of the branch"

```

It can happen in development you need to make a feature instead of making a branch called "feature".
It's better to make specific. `feature/new-product-etc`, `feature-11-something`.

It's the same but it's shorter **--set-upstream = -u**

### Deleting a branch

When you already merge a branch to main, you can deleted the "feature" branch.

```css
git branch -d "name of the branch"

```

### Mergin branch

While having a branch, and you want to merge it. Change to the branch you want to merge.
It's better to create a PR, but in this case maybe there is a conflict.

```css
git merge main

```

In the next image is an example of branching (simple)
(Basic Git branching)[https://i.postimg.cc/GtrgCLhv/Basic-git-branch-workflow.png]

<hr>

### Git workflows practical

The perfect commit. We have 3 files a perfect commit would be file 1 and 2. File 3 in another commit.
<br>
It's better to do a lot of small commits than few humongous commits.

**The perfect commit message**

1- Subject = concise summary of what happened <br>
2- Body = more detailed explanation

- What is now different than before?
- What's the reason for the change?
- Is tehre anythong to watch out for / anything
  particularly remarkable?

_**Example**_ <br>
Add captcha for email signup
Email signups now require a captcha to be completed:

- signup.php uses our captcha library
- invalid signup attempts are now blocked

**Git** will tell you when happens a conflict.

It can occur a merge conflict while integrating commits from different sources
``` git merge, rebase, pull, stash apply, cherry-pick ````
How to solve it? Simply clean up the file!

How to undo a conflict and start over
You can always undo and start fresh!

`git merge --abort` <br> `git rebase --abort`

**Merge** and **rebase** they're different
`git rebase branch-B`

> **Do NOT Rebase on commits that you've already pshed/shared on a remote repository**

Instead, use it for cleaning up for your local commit history before merging it into a shared team branch

<hr>

### Git Workflows Strategies

GitHub Flow

1- Proyect have a singular main branch
2- Created a new branch with the features
3- Make a PR, team discuss it
4- Deploy and then merge

### Git flow

In the next image is an example of a worflow (simple)
(Basic Git flow)[https://i.postimg.cc/d1c42sCg/Basic-git-workflow.png]

> **_Keywords:_** Main, develop, feature, release and hotfix

- Long lived branches
- Simultaneous development
- New features & current releases

- When you want to release make a release branch, by branching off the latest release branch and cherry-picking the features you want on it.
- For hotfixes, branch of the latest release branch, fix, merge back into it. Once the crisis is over, merge the hotfix branch into master as well.

You can even add tags! Github recognized it. (Ex: v1.2, v1.3.4, and so on)
