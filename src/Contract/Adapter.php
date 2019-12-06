<?php

namespace FoF\FilesystemDrivers\Contract;

interface Adapter
{
    public function isEnabled(): bool;

    public function isInstalled(): bool;

    public function isPublic(): bool;
}
