<?php

namespace FoF\Filesystem\Drivers;

use FoF\Filesystem\Driver;

class Azure extends Driver
{
    public $name = 'azure';
    public $class = \League\Flysystem\Azure\AzureAdapter::class;
    public $rules = [
        'endpoint' => 'required|string',
        'container' => 'required|string'
    ];
}
