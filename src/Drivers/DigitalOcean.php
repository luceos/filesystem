<?php

namespace FoF\FilesystemDrivers\Drivers;

use FoF\FilesystemDrivers\Driver;

class DigitalOcean extends Driver
{
    public $name = 'do';
    public $class = \League\Flysystem\AwsS3v3\AwsS3Adapter::class;
    public $rules = [
        'credentials.key' => 'required|string',
        'credentials.secret' => 'required|string',
        'region' => 'required|string',
        'version' => 'string',
        'bucket' => 'required|string',
        'path-prefix' => 'string'
    ];
}
