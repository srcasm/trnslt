[trnslt](http://trnslt.com)
=================

**trnslt** provides a simple and flexible way of sharing localized and translated versions of your site with almost no coding skills and no changes to the backend of your website.


How to use trnslt on your site
-----------

It's only two steps.

1. Simply download **trnslt.js** and put it on your site or include the following in your header on your site:
   `<script type="text/javascript" src="http://trnslt.srcasm.com/trnslt.js"></script>`

2. Add the proper classes to your page. Add the class `trnslt` **and** any language you'd like. For example:
 * `en` for English
 * `fr` for French
 * `de` for German

3. You thought there would be a step 3. Seriously, that's it. Now browse to your site and add `?trnslt=de` to your URL to see the German version.


FAQ and Advanced Features
---------------
1. How does trnslt choose the default lanugage?

   > trnslt will default to English (en) automatically. If you'd like to specify the default lanugage, simply add the following block before adding **trnslt** to the top of your site.
   >
   > `<script>var trnsltDefaultLanguage = "de"; </script>`
   
2. What happens if I add **trnslt** to a page without any `trnslt` classes?

   Don't worry, if we find no blocks with the class of `trnslt` we won't do anything to your page.


Twitter account
---------------

Keep up to date on announcements and more by following @srcasm on Twitter, [@srcasm](http://twitter.com/srcasm).



Need help?
------------

Have a question? Email Jesse at jmiddleton -at- gmail -dot- com.



Copyright and license
---------------------

Copyright 2012 Jesse Middleton

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this work except in compliance with the License.
You may obtain a copy of the License in the LICENSE file, or at:

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
