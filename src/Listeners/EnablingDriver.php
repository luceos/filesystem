<?php

namespace FoF\Filesystem\Listeners;

use Flarum\Settings\Event\Saving;
use FoF\Filesystem\Manager;
use Illuminate\Support\Arr;

class EnablingDriver
{
    public function handle(Saving $event)
    {
        $enabled = Arr::get($event->settings, 'fof-filesystem-adapters-enabled');

        if ($enabled === null) {
            return;
        }

        /** @var Manager $manager */
        $manager = app(Manager::class);

        foreach (explode(',', $enabled) as $adapter) {
            $driver = $manager->retrieve($adapter);

            // @todo validate that dependencies are installed
            // @todo validate that the rules are met
            // @todo or allow override on per extension level?!
        }
    }
}
