<?php

namespace FoF\FilesystemDrivers\Extension;

class DriverRequirement
{
    /**
     * @var string
     */
    private $settingKey;

    private $ignore = [];

    public function __construct(string $settingKey)
    {
        $this->settingKey = $settingKey;
    }

    public function ignore(array $drivers)
    {
        $this->ignore = $drivers;

        return $this;
    }
}
