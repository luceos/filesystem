<?php

namespace FoF\Filesystem\Drivers;

class Aws extends Driver
{
    public $name = 'aws';
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
