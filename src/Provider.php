<?php

namespace FoF\FilesystemDrivers;

use Flarum\Foundation\AbstractServiceProvider;
use FoF\FilesystemDrivers\Event\DriverLoading;
use Illuminate\Contracts\Events\Dispatcher;
use FoF\FilesystemDrivers\Drivers;

class Provider extends AbstractServiceProvider
{
    protected $defaultAdapters = [
        Drivers\Aliyun::class,
        Drivers\Aws::class,
        Drivers\Azure::class,
        Drivers\DigitalOcean::class,
        Drivers\Dropbox::class,
        Drivers\Ftp::class,
        Drivers\GridFs::class,
        Drivers\Local::class,
        Drivers\Rackspace::class,
        Drivers\Sftp::class,
        Drivers\Webdav::class
    ];

    public function register()
    {
        /** @var Dispatcher $events */
        $events = $this->app->make(Dispatcher::class);
        $events->listen(DriverLoading::class, function (DriverLoading $event) {
            $this->defaultAdapters($event);
        });
    }

    protected function defaultAdapters(DriverLoading $event)
    {
        foreach ($this->defaultAdapters as $adapter) {
            $event->drivers->push($this->app->make($adapter));
        }
    }
}
