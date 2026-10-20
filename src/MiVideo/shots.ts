// Montaje de "Mi video" siguiendo estilo.md.
// Las duraciones van en corcheas del tempo de la música, para que los cortes
// caigan en el beat. Si cambia la canción, basta con cambiar BPM.

// Tempo del vídeo de referencia (estilo.md §2). Cambiar al de la canción final.
export const BPM = 93.75;

export type ShotType = "A" | "B";

export type Shot = {
  name: string;
  type: ShotType;
  // Segundo del archivo original en el que empieza el plano.
  srcStart: number;
  // Duración en corcheas.
  eighths: number;
};

// A = persona a cámara, B = producto. Alternancia estricta como en la referencia.
export const SHOTS: Shot[] = [
  { name: "Entrada en la calle", type: "A", srcStart: 0.05, eighths: 5 },
  { name: "Primer plano buscando", type: "A", srcStart: 1.75, eighths: 3 },
  { name: "Hielo en el vaso", type: "B", srcStart: 3.2, eighths: 8 },
  { name: "Reacción 1", type: "A", srcStart: 6.6, eighths: 3 },
  { name: "Vertido de leche", type: "B", srcStart: 10.2, eighths: 4 },
  { name: "Reacción 2", type: "A", srcStart: 12.6, eighths: 3 },
  { name: "Espresso", type: "B", srcStart: 13.95, eighths: 4 },
  { name: "Saludo", type: "A", srcStart: 16.1, eighths: 3 },
  { name: "Espuma", type: "B", srcStart: 17.9, eighths: 4 },
  { name: "Gesto OK", type: "A", srcStart: 20.0, eighths: 3 },
  { name: "Rodaja de naranja", type: "B", srcStart: 26.8, eighths: 4 },
  { name: "Gesto OK 2", type: "A", srcStart: 23.9, eighths: 3 },
  { name: "Romero", type: "B", srcStart: 30.2, eighths: 4 },
  { name: "Reacción 3", type: "A", srcStart: 33.0, eighths: 3 },
  { name: "Soplete", type: "B", srcStart: 36.4, eighths: 5 },
  { name: "Mirada de lado", type: "A", srcStart: 28.65, eighths: 3 },
  // La mano tapa el vaso y lo saca del encuadre; queda la mesa vacía.
  { name: "Retirada del vaso", type: "B", srcStart: 42.4, eighths: 9 },
];

// Cierre: congelado del último fotograma, oscurecido, con logo y @usuario.
export const END_CARD_EIGHTHS = 13;

// Segundos (dentro del plano final) en los que entra el título:
// 0,9 s después de que el vaso sale del encuadre (~43,9 s en el original).
export const TITLE_IN_FINAL_SHOT = 44.8 - 42.4;

export const eighthsToFrames = (eighths: number, fps: number) =>
  Math.round(((eighths * 30) / BPM) * fps);

export const getTimeline = (fps: number) => {
  let acc = 0;
  const shots = SHOTS.map((shot) => {
    const from = eighthsToFrames(acc, fps);
    acc += shot.eighths;
    const to = eighthsToFrames(acc, fps);
    return { ...shot, from, durationInFrames: to - from };
  });
  const endFrom = eighthsToFrames(acc, fps);
  const endTo = eighthsToFrames(acc + END_CARD_EIGHTHS, fps);
  return {
    shots,
    endCard: { from: endFrom, durationInFrames: endTo - endFrom },
    durationInFrames: endTo,
  };
};
