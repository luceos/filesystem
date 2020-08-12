<?php

namespace FoF\Filesystem\Drivers;

use FoF\Filesystem\Driver;

class Ftp extends Driver
{
    public $name = 'ftp';
    public $class = \League\Flysystem\Adapter\Ftp::class;
    public $rules = [
        'host' => 'required|string',
        'username' => 'required|string',
        'password' => 'required|string',
        /** optional config settings */
        'port' => 'int',
        'root' => 'string',
        'passive' => 'bool',
        'ssl' => 'bool',
        'timeout' => 'int',
    ];
}
