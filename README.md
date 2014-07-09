# Prometheus, a Drupal Installation Profile
If you're a frontend developer looking for a nice starting point for your Drupal theming and site building projects, then Prometheus might be a good fit. It's an installation profile that includes quite a lot of configuration on the backend, while trying not to do too much with the theme.

Prometheus is what I use with my projects and the things you'll find included are configuration and theming tasks that I need to do on ~80% of the projects I work on. It's been a huge time saver.

A demo of Prometheus is [here](http://dev-prometheus.gotpantheon.com/).

## Quick Overview

Prometheus is the name of this installation profile - or starter site, if you like. It includes a theme called Atlas that uses Sass and Compass to help with the CSS chores. You can still use both the theme and installation profile if you don't know either, but you will get more value if you do.

The Sass files are structured according to [SMACSS](https://smacss.com/) principles which means the rules are divided up in a modular way - one for views, one for blocks, etc. This makes things much more maintainable and if you don't like the way I've handled something, you can easily chuck the file and replace it with your own without touching the rest.

## Basic Principles

This starter site was created with a few principles in mind. The first is that I wanted to include common configuration and site building tasks because starting from scratch every time is such a waste of time.

The second principle is to eliminate unnecessary markup and CSS. I've done this mostly by modifying default  template files and removing core CSS files. At this writing, this task is ~90% complete.

The third principle is to avoid grid/CSS frameworks as well as reflexively looking for modules to accomplish&nbsp;frontend tasks. For my take on grid frameworks, [this post](http://css-tricks.com/dont-overthink-it-grids/) by Chris Coyier says it better than I ever could, but the point is you probably don't need a big honkin' framework. That said, if you have a favorite grid framework, it will be a snap adding it.

With regard to reflexively looking for modules to solve frontend tasks, let me clarify. Sometimes a Drupal module is the way to go, no doubt. But not always. For example, this installation profile has a responsive dropdown menu that isn't powered by a module. I've included Superfish in the package if that's what you prefer, but I think it's overkill for most sites, so I didn't use it by default.

## Next Steps

Although the installation profile isn't done, it works pretty well as of this writing. I'll be putting more polish on things, adding [Gulp tasks](http://gulpjs.com/) as well as adding to the responsive Panels layouts that come with Atlas theme. I'll also be adding to the documentation.

If you try Prometheus out and you think it sounds pretty good, consider helping me with the project. I'm looking for  [collaborators](https://github.com/friendlymachine/prometheus) who can help me improve it, point out where I've gone astray and generally make Prometheus an awesome starting point for Drupal projects.

Longer term, I'd love to get it on Drupal.org, but because it uses Features for config, I'm not sure if/when that will happen. I'd love help on that, though, if you are able to provide guidance.
