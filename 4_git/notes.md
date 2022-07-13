# Git

(Git cheatsheet)[https://education.github.com/git-cheat-sheet-education.pdf]

command: la (Shows every file, event the hidden one. ex: .git)

## Branching

```css
git checkout -b "name of the branch"

```

It can happen in development you need to make a feature instead of making a branch called "feature".
It's better to make specific. `feature/new-product-etc`, `feature-11-something`

It's the same but it's shorter **--set-upstream = -u**

### Deleting a branch

When you already merge a branch to main, you can deleted the "feature" branch.

```css
git branch -d "name of the branch"

```

## Local Development

1. Open index.html in your browser
