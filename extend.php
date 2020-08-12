<?php

namespace FoF\Filesystem;

use Flarum\Extend\Event;
use Flarum\Extend\Frontend;
use Flarum\Extend\Locales;
use Flarum\Settings\Event\Saving;

return [
    new Extend\Provider(Provider::class),
    (new Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->content(Content\FilesystemDrivers::class),
    new Locales(__DIR__ . '/resources/locale'),
    (new Event())->listen(Saving::class, Listeners\EnablingDriver::class)
];
