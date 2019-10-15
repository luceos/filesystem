<?php

namespace FoF\FilesystemDrivers;

use Flarum\Foundation\AbstractServiceProvider;
use FoF\FilesystemDrivers\Event\DriverLoading;
use Illuminate\Contracts\Events\Dispatcher;

class Provider extends AbstractServiceProvider
{
    protected $defaultAdapters = [
        'local' => \League\Flysystem\Adapter\Local::class,
        'aliyun' => \Aliyun\Flysystem\AliyunOss\AliyunOssAdapter::class,
        'azure' => \League\Flysystem\Azure\AzureAdapter::class,
        'aws' => \League\Flysystem\AwsS3v3\AwsS3Adapter::class,
        'dospaces' => \League\Flysystem\AwsS3v3\AwsS3Adapter::class,
        'dropbox' => \Spatie\FlysystemDropbox\DropboxAdapter::class,
        'ftp' => \League\Flysystem\Adapter\Ftp::class,
        'gridfs' => \League\Flysystem\GridFS\GridFSAdapter::class,
        'rackspace' => \League\Flysystem\Rackspace\RackspaceAdapter::class,
        'sftp' => \League\Flysystem\Sftp\SftpAdapter::class,
        'webdav' => \League\Flysystem\WebDAV\WebDAVAdapter::class,
    ];

    public function register()
    {
        /** @var Dispatcher $events */
        $events = $this->app->make(Dispatcher::class);
        $events->listen(DriverLoading::class, function (DriverLoading $event) {
            $this->defaultAdapters($event);
        });
    }

    protected function defaultAdapters(DriverLoading $event)
    {
        foreach ($this->defaultAdapters as $name => $class) {
            $event->drivers->push(new Driver());
        }
    }
}
