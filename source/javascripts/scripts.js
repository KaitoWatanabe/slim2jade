function replacer(match, p1, p2, p3, p4, offset, string) {
  console.log(match);
  return '('+p1+p2+')\n';
}

var attrs = ['src', 'href']

$('#convert').click(function(event) {
  console.time('convert');
  var regexp = new RegExp('\\s+('+attrs.join('|')+'=)(.*)\\n*', 'mg');
  console.log(regexp);
  var source = $('#source').val();
  $('#build').val(source.replace(regexp, replacer))
});
