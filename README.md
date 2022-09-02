<p>
<img src="web/assets/GM-1500.svg" width="200px"/>
</p>

<h1>Lazy Craft CMS 4 Boilerplate</h1>

Simple lazy responsive starter kit for CraftCMS 4 Projects.


<img src="web/assets/screenshot-light.png"  width="50%"/><img src="web/assets/screenshot-dark.png"  width="50%"/>



## Requirements

RTFM [Craft CMS 4 Requirements](https://craftcms.com/docs/4.x/requirements.html)

## Configs

Duplicate the .env.example file as .env and do your settings! Be sure that your `SITE_URL` points to the `/web` directory.

## DB

Use the boilerplate.sql as starting point. Create a new database with the settings from your .env file and import the boilerplate.sql into it. The login credentials are: admin:superuser

## Development

* `npm run watch` start local dev server
* `npm run production` build

Check `webpack.mix.js` and [Laravel Mix Documentation](https://laravel-mix.com/) for more Informations!

## Whats inside?

###Stack

* [Craft CMS](https://craftcms.com/)
* [Laravel Mix](https://laravel-mix.com/)
* [TailwindCSS](https://tailwindcss.com/)
* [Alpine.js](https://alpinejs.dev/) 
* [Sprig/htmx](https://htmx.org/) 
* [GraphQL](https://graphql.org/)

###Plugins (free)

* [Empty Coalesce](https://plugins.craftcms.com/empty-coalesce?craft4)
* [Elements Panel](https://plugins.craftcms.com/elements-panel?craft4)
* [Mix](https://plugins.craftcms.com/mix?craft4) 
* [Redactor](https://plugins.craftcms.com/redactor?craft4) 
* [Seomate](https://plugins.craftcms.com/seomate?craft4) 
* [Sprig](https://plugins.craftcms.com/sprig?craft4) 
* [Super Table](https://plugins.craftcms.com/super-table?craft4) 
* [Typed link field](https://plugins.craftcms.com/typedlinkfield?craft4) 

###Sections

* Single - Home
* Structure - Pages (Page Default, Page News Index)
* Structure - Navigation
* Channel - News

###Categories

* News Categories

###Highlights

* ContentBuilder (Text, Images, Cards, Teaser, Accordion)
* Native Image Transform Twig Component with webp, lazyloading and srcset support
* Sprig/htmx news pagination (pages or loadmore button)
* Simple Alpinejs/GraphQL News Counter
* Darkmode
* EagerLoading
* Tailwind Form Style Testpage
* Seo Fields

## Do you need more than a lazy boilerplate?

Check out [CraftCMS Baukasten](https://github.com/davidhellmann/craftcms-baukasten) from [David Hellmann](https://github.com/davidhellmann)