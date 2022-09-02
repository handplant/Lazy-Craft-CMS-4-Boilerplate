
<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\helpers\App;

$isDev = App::env('CRAFT_ENVIRONMENT') === 'dev';
$isProd = App::env('CRAFT_ENVIRONMENT') === 'production';

return [
    'aliases' => [
        '@web' => App::env('SITE_URL'),
        '@webroot' => dirname(__DIR__) . '/web',
    ],
    'allowUpdates' => (bool)App::env('ALLOW_UPDATES'),
    'allowAdminChanges' => (bool)App::env('ALLOW_ADMIN_CHANGES'),
    'backupOnUpdate' => (bool)App::env('BACKUP_ON_UPDATE'),
    'devMode' => (bool)App::env('DEV_MODE'),
    'enableTemplateCaching' => (bool)App::env('ENABLE_TEMPLATE_CACHING'),
    'isSystemLive' => (bool)App::env('IS_SYSTEM_LIVE'),
    'resourceBasePath' => dirname(__DIR__) . '/web/cpresources',
    'runQueueAutomatically' => (bool)App::env('RUN_QUEUE_AUTOMATICALLY'),
    'testToEmailAddress' => App::env('TEST_MAIL') ?: null,
    'enableGraphqlCaching' => (bool)App::env('ENABLE_GQL_CACHING'),
    // Craft config settings from constants
    'maxRevisions' => 5,
    'cacheDuration' => false,
    'defaultSearchTermOptions' => [
        'subLeft' => true,
        'subRight' => true,
    ],
    'defaultWeekStartDay' => 1,
    'defaultTokenDuration' => 86400,
    'enableCsrfProtection' => true,
    'errorTemplatePrefix' => '_errors/',
    'limitAutoSlugsToAscii' => true,
    'autosaveDrafts' => true,
    'convertFilenamesToAscii' => true,
    'generateTransformsBeforePageLoad' => true,
    'maxCachedCloudImageSize' => 3000,
    'maxUploadFileSize' => '100M',
    'omitScriptNameInUrls' => true,
    'useEmailAsUsername' => false,
    'usePathInfo' => true,
    'preventUserEnumeration' => true,
];