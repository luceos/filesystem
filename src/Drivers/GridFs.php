<?php

namespace FoF\FilesystemDrivers\Drivers;

use FoF\FilesystemDrivers\Driver;

class GridFs extends Driver
{
    public $name = 'gridfs';
    public $class = \League\Flysystem\GridFS\GridFSAdapter::class;
    public $rules = [
    ];
}
