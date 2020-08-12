<?php

namespace FoF\Filesystem;

use FoF\Filesystem\Contract\Adapter;
use FoF\Filesystem\Extension\DriverRequirement;

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

    public function requirements(): array
    {
        return collect($this->requirements)->toArray();
    }

    public function retrieve(string $key): ?Adapter
    {

    }
}
