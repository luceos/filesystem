<?php

namespace FoF\Filesystem\Drivers;

class GridFs extends Driver
{
    public $name = 'gridfs';
    public $class = \League\Flysystem\GridFS\GridFSAdapter::class;
    public $rules = [
    ];
}
