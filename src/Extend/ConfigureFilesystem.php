<?php

namespace FoF\FilesystemDrivers\Extend;

use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use FoF\Extend\Extend\ExtensionSettings;
use FoF\FilesystemDrivers\Extension\DriverRequirement;
use FoF\FilesystemDrivers\Manager;
use Illuminate\Contracts\Container\Container;

/**
 * @mixin DriverRequirement
 */
class ConfigureFilesystem implements ExtenderInterface
{
    private $requirement;

    public function __construct(string $settingKey)
    {
        $this->requirement = new DriverRequirement($settingKey);
    }

    public function extend(Container $container, Extension $extension = null)
    {
        (new ExtensionSettings)
            ->addKey($this->requirement->getSettingKey(), $this->requirement->getDefault() ?? 'local')
            ->extend($container, $extension);

        $container->resolving(Manager::class, function (Manager $manager) {
            $manager->addDriverRequirement($this->requirement);
        });
    }

    public function __call($name, $arguments)
    {
        return call_user_func_array([$this->requirement, $name], $arguments);
    }
}
