Talks = new Mongo.Collection("talks");
Talks.attachSchema(new SimpleSchema({
  talkName: {
    type: String,
    label: "Talk Name",
    max: 150
  },
  date: {
    type: Date,
    label: "Date",
    //placeholder: "Pick a Date",
    autoform: {
      type:"pickadate"
      //timezoneId: "America/New_York"
    }
  },
  talkKeywords: {
    type: String,
    label: "Keywords",
    max: 100
  },
  description: {
    type: String,
    label: "Description",
    optional: true,
    max: 100
  },
  url: {
    type: String,
    label: "URL",
    optional: true,
    max: 250
  }
}));
