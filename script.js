function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function filterLoudTracks(arr, threshold) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > threshold) {
      result.push(arr[i]);
    }
  }
  return result;
}

function runVolumeAnalysis() {
  const rawName = prompt("Введите ваше имя:");
  if (rawName === null) {
    return;
  }

  const userName = rawName.trim() !== "" ? rawName.trim() : "Гость";
  alert(`Привет, ${userName}! Запускаем анализ громкости треков.`);

  const trackVolumes = [70, 74, 86, 88, 96, 108];
  console.log("Исходный массив громкости треков (дБ):", trackVolumes);

  const totalSum = calculateSum(trackVolumes);
  const averageVolume = Math.round((totalSum / trackVolumes.length) * 10) / 10;

  const loudTracks = filterLoudTracks(trackVolumes, 90);
  console.log("Громкие треки (> 90 дБ):", loudTracks);

  const quietTracks = [];
  let quietCount = 0;

  for (let i = 0; i < trackVolumes.length; i++) {
    if (trackVolumes[i] <= 75) {
      quietTracks.push(trackVolumes[i]);
      quietCount++;
    }
  }

  const quietAverage = quietCount > 0 
    ? Math.round((calculateSum(quietTracks) / quietCount) * 10) / 10 
    : 0;

  alert(`Средняя громкость – ${averageVolume} дБ, ${loudTracks.length} треков – громкие`);

  console.log(`Тихие треки (≤ 75 дБ): найдено ${quietCount} шт. (${quietTracks.join(", ")} дБ)`);
  console.log(`Средняя громкость тихих треков: ${quietAverage} дБ`);

  const maxVolume = findMax(trackVolumes);
  console.log(`Максимальная громкость: ${maxVolume} дБ`);

  if (maxVolume >= 105) {
    console.log("Такая громкость может повредить слух – используйте наушники с ограничением");
  }
}