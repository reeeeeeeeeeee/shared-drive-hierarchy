function listFolderTree() {
  const folder = DriveApp.getFolderById("0AC7Clg-QEUrvUk9PVA");
  const treeStructure = getFolderTree(folder, "", 0);
  Logger.log(treeStructure);
}

function getFolderTree(folder, indent, stage) {
  let tree = indent + folder.getName() + "(" + stage + ")/\n";
  
  // フォルダのみをクエリで抽出
  const query = "'" + folder.getId() + "' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false";
  const subFolders = DriveApp.searchFolders(query);

  while (subFolders.hasNext()) {
    let subFolder = subFolders.next();
    tree += getFolderTree(subFolder, indent + "  ", stage+1);
  }

  return tree;
}