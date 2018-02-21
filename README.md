# Tumblr Link Fix
Tumblr Link Fix is a userscript that changes Tumblr's link decoration from a gradient image background to text decoration, so that it shows up on a wider range of systems.

## Motivation

Currently (2018-02-21), Tumblr decorates regular links on its "dashboard" using a gradient image background. This decoration may not show up on certain monitors or when using non-standard zoom levels, affecting user experience and accessibility. The Tumblr Link Fix userscript attempts to resolve these issues by instead using text decoration to decorate links, which will hopefully display on more systems.

The cause of this issue was brought to my attention by [this post by Tumblr user lockrum](https://lockrum.tumblr.com/post/171030022375/). Thanks!

## Installing

Install a userscript add-on for your browser, such as [Greasemonkey](http://www.greasespot.net/) or [Tampermonkey](https://tampermonkey.net), and follow your add-on's instructions for installing userscripts to add [tumblrLinkFix.user.js](https://github.com/faokryn/tumblr-link-fix/raw/master/tumblrLinkFix.user.js).

## Result

The following screenshots demonstrate the effect of the Tumblr Link Fix userscript on a post with links, displayed on a system affected by the described bug:

Without the Tumblr Link Fix Userscript:

![Post Without the Tumblr Link Fix Userscript](https://raw.githubusercontent.com/faokryn/tumblr-link-fix/images/before.png)

With the Tumblr Link Fix Userscript:

![Post With the Tumblr Link Fix Userscript](https://raw.githubusercontent.com/faokryn/tumblr-link-fix/images/after.png)

Tumblr Link Fix attempts to match the appearance of vanilla Tumblr as closely as possible, changing only the method used to achieve this appearance. The following screenshot shows a post with links on a system unaffected by the described bug, with one link showing the default Tumblr style (top) and one manually changed to match the Tumblr Link Fix style (bottom):

![Comparision Between Styles](https://raw.githubusercontent.com/faokryn/tumblr-link-fix/images/compare.png)

## Contributing

If you find any bugs, find somewhere Tumblr Link Fix doesn't work, or can think of a way to improve Tumblr Link Fix, please feel free to [open an issue](https://github.com/faokryn/tumblr-link-fix/issues) or a pull request.
