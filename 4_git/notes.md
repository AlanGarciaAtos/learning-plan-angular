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

## Local Development

1. Open index.html in your browser
2. Have fun
3. testing branch
