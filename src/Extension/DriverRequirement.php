<?php

namespace FoF\FilesystemDrivers\Extension;

class DriverRequirement
{
    /**
     * @var string
     */
    private $settingKey;

    private $ignore = [];

    private $public = false;

    private $default = null;

    private $title = null;

    private $description = null;

    public function __construct(string $settingKey)
    {
        $this->settingKey = $settingKey;
    }

    /**
     * Ignore specific filesystem drivers.
     *
     * @param array $drivers
     * @return $this
     */
    public function ignore(array $drivers)
    {
        $this->ignore = $drivers;

        return $this;
    }

    /**
     * Require a filesystem driver which is able to share files publicly with a url.
     *
     * @param bool $public
     * @return $this
     */
    public function public(bool $public = true)
    {
        $this->public = $public;

        return $this;
    }

    public function default(string $driver)
    {
        $this->default = $driver;

        return $this;
    }

    /**
     * @return string
     */
    public function getSettingKey(): string
    {
        return $this->settingKey;
    }

    /**
     * @return null|string
     */
    public function getDefault()
    {
        return $this->default;
    }

    /**
     * Short description or locale key for this extension filesystem.
     *
     * @param string $title
     * @return $this
     */
    public function title(string $title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Long description or locale key for this extension filesystem.
     *
     * @param string $description
     * @return $this
     */
    public function description(string $description)
    {
        $this->description = $description;

        return $this;
    }
}
