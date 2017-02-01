## Welcome
<!DOCTYPE html>
<html>

  <head>
    <meta charset="utf-8">
    <title>Main website</title>
  </head>

  <body>
    <ul id="user"></ul>


    <script src="/bower_components/jquery/dist/jquery.js" charset="utf-8"></script>
    <script src="/bower_components/underscore/underscore.js" charset="utf-8"></script>
    <script src="/bower_components/gh3/gh3.js" charset="utf-8"></script>
    <script type="text/javascript">
      var k33g = new Gh3.User("snappyrobotics");
      var userInfos = $("#user");
      k33g.fetch(function (err, resUser) {
        if (err) {
          throw "outch ..."
        }
        _.each(_.keys(resUser), function (prop) {
          userInfos.append(
            $('<li>').append(prop + " : " + resUser[prop])
          );
        });
        var k33gRepositories = new Gh3.Repositories(k33g);
        k33gRepositories.fetch({
          // page: 5,
          // per_page: 5,
          // direction: "desc"
        }, "next", function (err, res) {
          if (err) {
            throw "outch ..."
          }
          console.log("Repositories", k33gRepositories);
        });
      });
    </script>
  </body>

</html>
