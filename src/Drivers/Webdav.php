<?php

namespace FoF\FilesystemDrivers\Drivers;

use FoF\FilesystemDrivers\Driver;

class Webdav extends Driver
{
    public $name = 'webdav';
    public $class = \League\Flysystem\WebDAV\WebDAVAdapter::class;
    public $rules = [
    ];
}
