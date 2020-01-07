<?php

namespace FoF\FilesystemDrivers\Drivers;

use FoF\FilesystemDrivers\Driver;

class Dropbox extends Driver
{
    public $name = 'dropbox';
    public $class = \Spatie\FlysystemDropbox\DropboxAdapter::class;
    public $rules = [
    ];
}
