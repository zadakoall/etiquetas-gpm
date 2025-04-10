import * as XLSX from "xlsx";

export const loadBaseExcel = async () => {
  const res = await fetch("/data/base-etiquetas.xlsx");
  const data = await res.arrayBuffer();
  const workbook = XLSX.read(data);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(sheet);
};

export const parseUploadedExcel = async (file) => {
  const data = await file.arrayBuffer();
  const workbook = XLSX.read(data);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(sheet).map(row => row.NOMBRE?.toUpperCase()?.trim());
};
