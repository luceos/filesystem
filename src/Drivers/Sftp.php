<?php

namespace FoF\Filesystem\Drivers;

use FoF\Filesystem\Driver;

class Sftp extends Driver
{
    public $name = 'sftp';
    public $class = \League\Flysystem\Sftp\SftpAdapter::class;
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
