<?php

namespace FoF\Filesystem\Drivers;

use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Support\Arrayable;

abstract class Driver implements Arrayable
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
    /** @var bool Driver is in use by any of the requirements. */
    public $inUse = false;

    /**
     * Whether the driver is available for use.
     * You can validate stored settings to prevent a faulty
     * driver from being used.
     *
     * @return bool
     */
    public function isAvailable(): bool
    {
        return $this->isInstalled();
    }
    public function isEnabled(): bool
    {
        /** @var SettingsRepositoryInterface $settings */
        $settings = app(SettingsRepositoryInterface::class);
        $enabled = explode(',', $settings->get('fof-filesystem-adapters-enabled') ?? '');

        return in_array(
            $this->name,
            $enabled
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

    public function inUse(bool $inUse = true)
    {
        $this->inUse = $inUse;
        return $this;
    }

    /**
     * Whether the driver is in use by any of the requirements.
     *
     * @return bool
     */
    public function isInUse(): bool
    {
        return $this->inUse;
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
        $attributes['enabled'] = $this->isEnabled();

        return $attributes;
    }
}
