var fs = require("fs"),
  _ = require("lodash");

function extractData(filename) {
  if (filename.match(/.*\.json$/)) { //check for json file
    content = fs.readFileSync('resources/' + filename);
    resource_name = filename.match(/(.*)\.json$/)[1]
    result = {}
    result[resource_name] = JSON.parse(content); // let the JSON parsing errors be raised
    return result;
  } else {
    return {};
  }
};

fs.readdir("resources/", function(err, files) {
  if (err) {
    return console.error(err);
  }

  data = {};

  console.log(files);

  contents = files.map(function(file) {
    return extractData(file);
  });

  contents.forEach(function(content) {
    keys = _.keys(content);
    if (keys.length == 1 && !_.has(data, keys[0])) { // 1 resource per file and no resource should have multiple files
      _.merge(data, content);
    } else {
      console.error("Invalid file");
    }
  });

  fs.writeFile("data.json", JSON.stringify(data), function(err) {
    if (err) {
      return console.error(err);
    }
  });
});
