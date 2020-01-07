<?php

namespace FoF\FilesystemDrivers\Drivers;

use FoF\FilesystemDrivers\Driver;

class Rackspace extends Driver
{
    public $name = 'rackspace';
    public $class = \League\Flysystem\Rackspace\RackspaceAdapter::class;
    public $rules = [
    ];
}
