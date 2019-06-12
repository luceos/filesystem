<?php

namespace FoF\FilesystemDrivers;

use FoF\FilesystemDrivers\Extension\DriverRequirement;

class Manager
{
    protected $requirements = [];

    public function addDriverRequirement(DriverRequirement $requirement)
    {
        $this->requirements[] = $requirement;

        return $this;
    }
}
