<?php

namespace FoF\FilesystemDrivers;

use Flarum\Settings\SettingsRepositoryInterface;

abstract class Driver
{
    /** @var string Slug of driver name, also used for translation keys. */
    public $name;

    /** @var array Validation rules. */
    public $rules = [];

    /** @var string Fully qualified class name that the Driver depends on to work. */
    public $class;

    /** @var bool Generates links for public use. */
    public $public = true;

    /** @var bool Driver stores files off site. */
    public $offSite = true;

    /**
     * Whether the driver is available for use.
     *
     * @return bool
     */
    public function isAvailable(): bool
    {
        // whether settings are all validated
    }

    /**
     * Whether the driver is in use by one or more extensions.
     *
     * @info Checks all registered Requirements and sees whether Extension is still installed.
     *
     * @return bool
     */
    public function isInUse(): bool
    {
        /** @var SettingsRepositoryInterface $settings */
        $settings = app(SettingsRepositoryInterface::class);

        return in_array(
            $this->name,
            $settings->get('fof.filesystem-drivers.enabled_drivers') ?? []
        );
    }

    /**
     * Whether required packages are installed.a
     *
     * @return bool
     */
    public function isInstalled(): bool
    {
        return empty($this->class) || class_exists($this->class);
    }

    public function toArray(): array
    {
        $attributes = [
            'name' => $this->name,
            'class' => $this->class,
            'public' => $this->public,
            'rules' => $this->rules,
            'off-site' => $this->offSite
        ];

        $attributes['available'] = $this->isAvailable();
        $attributes['in-use'] = $this->isInUse();
        $attributes['installed'] = $this->isInstalled();

        return $attributes;
    }
}
