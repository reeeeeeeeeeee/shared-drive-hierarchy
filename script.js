/**
 * 共有ドライブ配下のフォルダツリーを生成し、ログに出力する
 */
function listFolderTree() {
  // 共有ドライブIDを指定して、共有ドライブオブジェクトを取得する
  const sharedDrive = DriveApp.getFolderById("<共有ドライブのIDを指定>");
  // 共有ドライブ配下のフォルダツリーを生成する
  const treeStructure = getFolderTree(sharedDrive, "", 0);
  // 生成した共有ドライブ配下のフォルダ構成を出力する
  Logger.log(treeStructure);
}

/**
 * 起点となるフォルダ配下のフォルダ一覧からフォルダツリーの文字列を生成する
 * @param {object} folder ツリー生成の起点となるフォルダ
 * @param {string} indent ツリー階層表示のためのインデント文字列
 * @param {number} stage 現在の階層
 * @returns 
 */
function getFolderTree(folder, indent, stage) {
  // 「インデント文字列＋フォルダ名＋現在の階層の場所」を文字列として生成
  let tree = indent + folder.getName() + "(" + stage + ")/\n";
  // folder配下のフォルダ一覧を取得するためのクエリ
  const query = "'" + folder.getId() + "' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false";
  // クエリを使って、フォルダ一覧を取得
  const subFolders = DriveApp.searchFolders(query);
  // フォルダ一覧をループでぶん回す
  while (subFolders.hasNext()) {
    let subFolder = subFolders.next();
    // 再起的にフォルダ配下のサブフォルダの階層を文字列化
    tree += getFolderTree(subFolder, indent + "  ", stage + 1);
  }
  return tree;
}