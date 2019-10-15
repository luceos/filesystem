import addFilesystemPane from './addFilesystemPane';

app.initializers.add('fof-filesystem-drivers', app => {
  addFilesystemPane();
});
