<?php

namespace FoF\Filesystem;

use FoF\Filesystem\Event\DriverLoading;
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

    public function all(): Collection
    {
        $drivers = collect([]);

        event(new DriverLoading($drivers));

        return $drivers->keyBy('name');
    }
}
