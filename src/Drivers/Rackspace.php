<?php

namespace FoF\Filesystem\Drivers;

use FoF\Filesystem\Driver;

class Rackspace extends Driver
{
    public $name = 'rackspace';
    public $class = \League\Flysystem\Rackspace\RackspaceAdapter::class;
    public $rules = [
    ];
}
