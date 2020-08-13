<?php

namespace FoF\Filesystem;

use FoF\Filesystem\Drivers\Driver;
use FoF\Filesystem\Event\DriverLoading;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;

class Drivers
{
    public function get(string $key)
    {
        return $this->all()->get($key);
    }

    public function installed(string $key): bool
    {
         $class = $this->get($key);

         return $class ? class_exists($class) : false;
    }

    public function all(array $requirements): Collection
    {
        $drivers = collect([]);

        event(new DriverLoading($drivers));

        return $drivers
            ->keyBy('name')
            ->map(function (Driver $driver) use ($requirements) {
                $driver->inUse(in_array($driver->name, Arr::pluck($requirements, 'uses')));
                return $driver;
            });
    }
}
