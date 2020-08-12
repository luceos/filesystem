<?php

namespace FoF\Filesystem\Drivers;

class Rackspace extends Driver
{
    public $name = 'rackspace';
    public $class = \League\Flysystem\Rackspace\RackspaceAdapter::class;
    public $rules = [
    ];
}
