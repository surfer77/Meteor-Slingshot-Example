Slingshot.fileRestrictions("myFileUploads", {
  allowedFileTypes: ["video/png", "image/jpeg", "image/gif"],
  maxSize: null,
});


Slingshot.createDirective("myFileUploads", Slingshot.S3Storage, {
  AWSAccessKeyId: "AKIAI7XH62LZZT7QPFOQ",
  AWSSecretAccessKey: "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",
  bucket: "videocollectionfs",
  acl: "public-read-write",
  region: "us-west-1",

  authorize: function () {
    if (!this.userId) {
      var message = "Please login before posting files";
      throw new Meteor.Error("Login Required", message);
    }

    return true;
  },

  key: function (file) {
    //Store file into a directory by the user's username.
    return file.name;
  }

});