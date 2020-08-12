<?php

namespace FoF\Filesystem\Drivers;

class Dropbox extends Driver
{
    public $name = 'dropbox';
    public $class = \Spatie\FlysystemDropbox\DropboxAdapter::class;
    public $rules = [
    ];
}
