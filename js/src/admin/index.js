import addFilesystemPane from './addFilesystemPane';

app.initializers.add('fof-filesystem', app => {
  addFilesystemPane();
});
