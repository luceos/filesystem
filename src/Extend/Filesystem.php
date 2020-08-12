<?php

namespace FoF\Filesystem\Extend;

use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use FoF\Extend\Extend\ExtensionSettings;
use FoF\Filesystem\Extension\DriverRequirement;
use FoF\Filesystem\Manager;
use Illuminate\Contracts\Container\Container;

class Filesystem implements ExtenderInterface
{
    protected $settingKey;
    protected $configure;

    public function __construct(string $settingKey)
    {
        $this->settingKey = $settingKey;
    }

    public function extend(Container $container, Extension $extension = null)
    {
        $requirement = (new DriverRequirement($extension, $this->settingKey));

        if ($this->configure) {
            tap($requirement, $this->configure);
        }

        (new ExtensionSettings)
            ->addKey($requirement->getSettingKey(), $requirement->getDefault() ?? 'local')
            ->extend($container, $extension);

        $container->resolving(Manager::class, function (Manager $manager) use ($requirement) {
            $manager->addDriverRequirement($requirement);
        });
    }

    public function configure(callable $configure)
    {
        $this->configure = $configure;
        return $this;
    }
}
