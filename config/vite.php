<?php

use craft\helpers\App;

$useDevServer = App::env('CRAFT_ENVIRONMENT') === 'dev' && App::env('VITE_USE_DEV_SERVER');

return [
    'checkDevServer' => $useDevServer,
    'devServerInternal' => 'http://localhost:3000/',
    'devServerPublic' => Craft::getAlias('@web') . ':3000',
    'errorEntry' => 'src/js/app.js',
    'manifestPath' => Craft::getAlias('@webroot') . '/dist/.vite/manifest.json',
    'serverPublic' => Craft::getAlias('@web')  . '/dist/',
    'useDevServer' => $useDevServer,
];