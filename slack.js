/**
*
* slackにメッセージを飛ばす
*
*/
function slack_message() {
  // 表示名前を取得
  var name = document.getElementById('name').value;
  // 表示メッセージを取得
  var message = document.getElementById('message').value;
  // チャンネル名を取得 <link|名前>でリンクを貼ることもできる 例：<http://tokyoghoul.jp/|東京喰種映画サイト>
  var channel = document.getElementById('channel').value;
  // 送信するメッセージの作成
  var payload = JSON.stringify({'text' : message, 'username' : name});
  // var payload = JSON.stringify({'text' : message, 'username' : name, 'channel' : channel});
  // http通信オブジェクトの作成
  var request = new XMLHttpRequest ();
  // slackのwebhookが発行したURLにPOSTを送信
  request.open ('POST', 'https://hooks.slack.com/services/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');
  // headerは固定、他のheaderは送信できない
  request.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded');
  request.send (payload);
}
