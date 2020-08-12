<?php

namespace FoF\Filesystem;

use FoF\Filesystem\Contract\Adapter;
use FoF\Filesystem\Extension\DriverRequirement;

class Manager
{
    protected $requirements = [];
    /**
     * @var Drivers
     */
    private $adapters;

    public function __construct(Drivers $adapters)
    {
        $this->adapters = $adapters;
    }

    public function addDriverRequirement(DriverRequirement $requirement)
    {
        $this->requirements[] = $requirement;

        return $this;
    }

    public function adapters(): Drivers
    {
        return $this->adapters;
    }

    public function requirements(): array
    {
        return collect($this->requirements)->toArray();
    }

    public function retrieve(string $key): ?Driver
    {
        return $this->adapters->get($key);
    }
}
