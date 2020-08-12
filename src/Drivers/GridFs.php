<?php

namespace FoF\Filesystem\Drivers;

use FoF\Filesystem\Driver;

class GridFs extends Driver
{
    public $name = 'gridfs';
    public $class = \League\Flysystem\GridFS\GridFSAdapter::class;
    public $rules = [
    ];
}
