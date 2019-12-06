# Filesystem drivers

## Implementation

As an **extension developer** you can add an Extender to your `extend.php` with which you
set up a requirement for a filesystem implementation. To do so, load the `ConfigureFilesystem`
extender:

```php
use FoF\FilesystemDrivers\Extend\ConfigureFilesystem;

return [
    (new ConfigureFilesystem('your-extension-filesystem'))
    // ..
];
```

From now on you can retrieve the most suitable filesystem driver using the Manager class:

```php
use FoF\FilesystemDrivers\Manager;

app(Manager::class)->retrieve('your-extension-filesystem');
```
