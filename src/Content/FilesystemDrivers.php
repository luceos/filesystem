<?php

namespace FoF\FilesystemDrivers\Content;

use Flarum\Frontend\Document;
use FoF\FilesystemDrivers\Manager;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface as Request;

class FilesystemDrivers
{
    /**
     * @var Manager
     */
    private $manager;

    public function __construct(Manager $manager)
    {
        $this->manager = $manager;
    }

    public function __invoke(Document $document, Request $request)
    {
        Arr::set(
            $document->payload['settings'],
            'fof-filesystem-drivers.adapters',
            $this->manager->adapters()->all()->toArray()
        );
    }
}
