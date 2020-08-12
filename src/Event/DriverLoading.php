<?php

namespace FoF\Filesystem\Event;

use Illuminate\Support\Collection;

class DriverLoading
{
    /**
     * @var Collection
     */
    public $drivers;

    public function __construct(Collection &$drivers)
    {
        $this->drivers = $drivers;
    }
}
