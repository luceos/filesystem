<?php

namespace FoF\Filesystem\Content;

use Flarum\Frontend\Document;
use FoF\Filesystem\Manager;
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
            'fof-filesystem-adapters',
            $this->manager->adapters()->all()->toArray()
        );

        Arr::set(
            $document->payload['settings'],
            'fof-filesystem-requirements',
            $this->manager->requirements()
        );
    }
}
