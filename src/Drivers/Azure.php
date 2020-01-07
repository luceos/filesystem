<?php

namespace FoF\FilesystemDrivers\Drivers;

use FoF\FilesystemDrivers\Driver;

class Azure extends Driver
{
    public $name = 'azure';
    public $class = \League\Flysystem\Azure\AzureAdapter::class;
    public $rules = [
        'endpoint' => 'required|string',
        'container' => 'required|string'
    ];
}
