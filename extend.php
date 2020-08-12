<?php

namespace FoF\Filesystem;

use Flarum\Extend\Frontend;

return [
    new Extend\Provider(Provider::class),
    (new Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->content(Content\FilesystemDrivers::class)
];
