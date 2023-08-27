export const convertDateV1 = (unixTimestamp: number): string => {
  const date = new Date(unixTimestamp * 1000); // Konversi ke milidetik
  const day = date.getDate();
  const month = date.getMonth() + 1; // Ingat bulan dimulai dari 0
  const year = date.getFullYear();

  // Format tanggal, bulan, dan tahun dengan 2 digit jika perlu
  const formattedDay = ("0" + day).slice(-2);
  const formattedMonth = ("0" + month).slice(-2);

  // Hasilkan tanggal dalam format dd/mm/yyyy
  const formattedDate = formattedDay + "/" + formattedMonth + "/" + year;
  return formattedDate;
};
