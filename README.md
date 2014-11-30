### Creating a post
```hexo new "<post_name>"```

They are located in ```source/_posts```. I've already generated 10
and they just need content copied in from the old site.

### Issue and todo
- Jamie is creating a favicon for SVIP, need to use here too

### Getting hexo
- If on mac, it's worth getting the Xcode developer tools
- npm install -g hexo

### Checking how it looks
```
hexo generate
hexo server
localhost:4343
```

### Sorting out the theme
- cd themes
- git clone git@github.com:ConnorAtherton/svip-light-theme.git
- mv svip-light-theme svip-light/ (it needs to be svip-light in order to be recognised)

Don't worry about 404's. They get handled properly when it is deployed.