<?php

namespace FoF\FilesystemDrivers\Extend;

use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use Illuminate\Contracts\Container\Container;

class Singleton implements ExtenderInterface
{
    /**
     * @var string
     */
    private $class;
    /**
     * @var null
     */
    private $concrete;

    public function __construct(string $class, $concrete = null)
    {
        $this->class = $class;
        $this->concrete = $concrete;
    }

    public function extend(Container $container, Extension $extension = null)
    {
        $container->singleton($this->class, $this->concrete);
    }
}
