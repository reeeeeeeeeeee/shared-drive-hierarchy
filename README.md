# 共有ドライブ配下のフォルダ一覧をツリー表示するGASプログラム

以下手順に従って、プログラムを実行できます。

### ① listFolderTree関数内の<共有ドライブのIDを指定>に、ツリー表示したい共有ドライブのIDを指定
> const sharedDrive = DriveApp.getFolderById("<共有ドライブのIDを指定>");

GASプログラム実行者が閲覧権限以上を保持する共有ドライブのIDを指定してください。

### ② GASプログラムを実行
listFolderTree関数を指定して、GASプログラムを実行