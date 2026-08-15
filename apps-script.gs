/**
 * Recebe as respostas da Vigília e grava numa planilha do Google.
 *
 * Como usar: veja o passo a passo em COMO-PUBLICAR.md
 * Resumo: crie uma planilha, abra Extensões > Apps Script, apague o que
 * estiver lá, cole este arquivo inteiro e publique como app da web.
 */

const ABA = 'Respostas';

function doPost(e) {
  try {
    const texto = ((e && e.parameter && e.parameter.resposta) || '').trim();
    if (!texto) return json({ ok: false, erro: 'resposta vazia' });

    aba().appendRow([new Date(), texto]);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, erro: String(err) });
  }
}

/** Abrir a URL do app no navegador cai aqui. Serve para testar se está no ar. */
function doGet() {
  return json({ ok: true, status: 'no ar', respostas: aba().getLastRow() - 1 });
}

function aba() {
  const planilha = SpreadsheetApp.getActiveSpreadsheet();
  let folha = planilha.getSheetByName(ABA);

  if (!folha) {
    folha = planilha.insertSheet(ABA);
    folha.appendRow(['Data', 'Resposta']);
    folha.setColumnWidth(1, 150);
    folha.setColumnWidth(2, 700);
    folha.getRange('A1:B1').setFontWeight('bold');
    folha.setFrozenRows(1);
    folha.getRange('B:B').setWrap(true);
  }
  return folha;
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
