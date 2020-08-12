<?php

namespace FoF\Filesystem\Drivers;

class Webdav extends Driver
{
    public $name = 'webdav';
    public $class = \League\Flysystem\WebDAV\WebDAVAdapter::class;
    public $rules = [
    ];
}
