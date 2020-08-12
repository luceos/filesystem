<?php

namespace FoF\Filesystem\Drivers;

use FoF\Filesystem\Driver;

class Dropbox extends Driver
{
    public $name = 'dropbox';
    public $class = \Spatie\FlysystemDropbox\DropboxAdapter::class;
    public $rules = [
    ];
}
