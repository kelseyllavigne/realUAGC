$(document).ready(function () {
    var url = 'http://localhost:3001/posts'

    $(document).ready(function () {
        $('#btnLoad').on('click', loadPosts);
        $('#btnAdd').on('click', savePost);
        loadPosts();
    });

    function savePost(e) {
        e.preventDefault();
        var postObj = $('#frm').serialize();
        $.ajax({
          url: url,
          method: "POST",
          success: function(msg) {
            debugger;
            loadPosts();
          },
          failure: function(resp) {
            alert("This did not add. Try again. You can do it!");
          }
        })
    }

    function loadPosts() {
      $.ajax({
        url: url,
        method: 'GET',
        success: function(resp) {
          convertResponseToHTML(resp);
        },
        failure: function(resp) {
          alert("This did not load. Try again. You can do it!");
        }
      })
   }

    function convertResponseToHTML(resp) {
        var html = '';

        for (var i = 0; i < resp.length; i++) {
            var post = resp[i];
            var postHTML = '<div class="post">';
            postHTML += '<img src="' + post.pic + '"/>';
            postHTML += '<div class="content">';
            postHTML += '<h3>' + post.name + '</h3>';
            postHTML += '<p>' + post.body + '</p>';
            postHTML += "</div>";

            postHTML += "</div>";

            html += postHTML;

        }
        $("#main").html(html);
        return html;
    }
});
