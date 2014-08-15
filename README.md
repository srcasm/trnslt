[trnslt](http://trnslt.com)
=================

**trnslt** provides a simple and flexible way of sharing localized and translated versions of your site with almost no coding skills and no changes to the backend of your website.

*trnslt is not for automatically translating your site. It's useful when you've got someone who is going to create a localized version of your content. You can use trnslt to offer two versions of your site without any major overhauls.*

How to use trnslt on your site
-----------
It's only two steps.

1. Simply download **trnslt.js** and include it in the header:
   `<script type="text/javascript" src="//yourdomain.com/trnslt.js"></script>`

2. Add the proper classes to your page. Add the class `trnslt` **and** any language you'd like. For example:
 * `en` for English
 * `fr` for French
 * `de` for German

3. You thought there would be a step 3. Seriously, that's it. Now browse to your site and add `?trnslt=de` to your URL to see the German version.


Show me an example, please
-----------
Easy, take a look at the example below where two paragraphs have been translated (one is the English version, one is German).

> ...
> `<div class="content">`
> `  <div class="en trnslt">This is my English sentence.</div>`
> `  <div class="de trnslt">Das ist mein deutscher satz.</div>`
> `</div>`
> `...`

Include that on a page with trnslt.js and you're all set. If you load the page with `?trnslt=de` as the query string you'll see the second div. Otherwise, you'll see the first.

FAQ and Advanced Features
---------------
1. How does trnslt choose the default lanugage?

   > trnslt will default to English (en) automatically. If you'd like to specify the default lanugage, simply add the following block before including **trnslt.js**.
   >
   > `<script>var trnsltDefaultLanguage = "de"; </script>`
   
2. What happens if I add **trnslt** to a page without any `trnslt` classes?

   > Don't worry, if we find no blocks with the class of `trnslt` we won't do anything to your page.
   
3. What if I'd like to have **trnslt** work with subdomains instead of a query string?

   > Glad you asked! You don't have to change a thing if you'd already got wildcard DNS setup. If you don't, follow [this guide](http://ma.tt/2003/10/wildcard-dns-and-sub-domains/) and you're good to go.
   >
   >Visit your site by going to `http://de.yoursite.com` and voila, your lanugage shows up.


Twitter account
---------------

Keep up to date on announcements and more by following @srcasm on Twitter, [@srcasm](http://twitter.com/srcasm).



Need help?
------------

Have a question? Email Jesse at jmiddleton -at- gmail -dot- com.



Copyright and license
---------------------

Copyright 2014 Jesse Middleton

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this work except in compliance with the License.
You may obtain a copy of the License in the LICENSE file, or at:

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
