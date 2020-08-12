<?php

namespace FoF\Filesystem;

use Flarum\Extend\Frontend;
use Flarum\Extend\Locales;

return [
    new Extend\Provider(Provider::class),
    (new Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->content(Content\FilesystemDrivers::class),
    new Locales(__DIR__ . '/resources/locale')
];
