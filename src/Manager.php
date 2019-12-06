<?php

namespace FoF\FilesystemDrivers;

use FoF\FilesystemDrivers\Contract\Adapter;
use FoF\FilesystemDrivers\Extension\DriverRequirement;

class Manager
{
    protected $requirements = [];
    /**
     * @var Adapters
     */
    private $adapters;

    public function __construct(Adapters $adapters)
    {
        $this->adapters = $adapters;
    }

    public function addDriverRequirement(DriverRequirement $requirement)
    {
        $this->requirements[] = $requirement;

        return $this;
    }

    public function adapters(): Adapters
    {
        return $this->adapters;
    }

    public function retrieve(string $key): ?Adapter
    {

    }
}
