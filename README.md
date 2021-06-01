**Always squash before merging**

on main branch:  git pull --rebase
on dev branch:  - git rebase main
                - git merge-base main [your brnach name]
                - git rebase [commit code]
                - git add -A
                - git commit -m "nice commit msg"
                - git push -f
