<?php
$name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');
?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>送信内容の確認</title>
</head>
<body>
  <h1>ご入力ありがとうございました</h1>
  <p><strong>お名前：</strong><?php echo $name; ?></p>
  <p><strong>メールアドレス：</strong><?php echo $email; ?></p>
  <p><strong>メッセージ：</strong><br><?php echo nl2br($message); ?></p>
</body>
</html>
