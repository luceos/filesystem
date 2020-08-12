<?php

namespace FoF\Filesystem\Drivers;

class Aliyun extends Driver
{
    public $name = 'aliyun';
    public $class = \Aliyun\Flysystem\AliyunOss\AliyunOssAdapter::class;
    public $rules = [
        'endpoint' => 'required|string',
        'access-id' => 'required|string',
        'access-key' => 'required|string',
        'bucket' => 'required|string',
        'path-prefix' => 'string'
    ];
}
