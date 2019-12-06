<?php

namespace FoF\FilesystemDrivers;

use Flarum\Settings\SettingsRepositoryInterface;
use FoF\FilesystemDrivers\Contract\Adapter;
use Illuminate\Support\Fluent;

/**
 * @property string $name
 * @property array|null $rules
 * @property string $class
 */
abstract class Driver extends Fluent implements Adapter
{
    public function isEnabled(): bool
    {
        /** @var SettingsRepositoryInterface $settings */
        $settings = app(SettingsRepositoryInterface::class);

        return in_array(
            $settings->get('fof.filesystem-drivers.enabled_drivers') ?? [],
            $this->name
        );
    }

    public function isInstalled(): bool
    {
        return class_exists($this->class);
    }

    public function isPublic(): bool
    {
        return false;
    }
}
