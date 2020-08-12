<?php

namespace FoF\Filesystem\Drivers;

class Local extends Driver
{
    public $name = 'local';
    public $class = \League\Flysystem\Adapter\Local::class;
    public $rules = [
        'target' => 'required|string'
    ];
    public $offSite = false;
}
