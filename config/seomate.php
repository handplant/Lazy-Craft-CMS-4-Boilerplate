<?php
use craft\helpers\App;

return [
    'siteName' => App::env('SITE_NAME'),
    'defaultProfile' => 'default',
    'fieldProfiles' => [
        'default' => [
            'title' => ['seoTitle', 'title'],
            'description' => ['seoDescription', 'teaser'],
            'image' => ['seoImage']
        ],
    ],
    'sitemapEnabled' => true,
    'sitemapConfig' => [
        'elements' => [
            'home' => ['changefreq' => 'weekly', 'priority' => 0.5],
            'news' => ['changefreq' => 'weekly', 'priority' => 1],
            'pages' => ['changefreq' => 'weekly', 'priority' => 0.5],
        ],
    ],
];
