# Estilo de edición

Fuente: «Video de ejemplo.mp4» (Drive › Claude › Video editar).
Original: 720x1280, 30 fps, HEVC, 21,6 s. Audio AAC 44,1 kHz estéreo de 19,8 s; los últimos 1,8 s del vídeo no tienen audio.
Medido con ffmpeg: fotogramas a 2 fps, detección de planos (umbral 0,12 y 0,25), detalle a 10 fps en 0–2 s y 15,4–19 s, espectrograma, EBU R128 y signalstats.
Las coordenadas están escaladas a nuestro lienzo de **1080x1920**.
Todo lo marcado con **[SUPOSICIÓN]** no se puede medir en el vídeo de referencia.

---

## 1. Estructura

| # | Entrada → salida (s) | Duración | Tipo | Contenido |
|---|---|---|---|---|
| 1 | 0,00 → 1,90 | 1,90 | A | Plano general en contrapicado: la persona camina hacia cámara. Gráfico del sombrero 0,0–0,8 s |
| 2 | 1,90 → 3,00 | 1,10 | A | Plano medio corto, mano en la frente («buscando») |
| 3 | 3,00 → 5,47 | 2,47 | B | Barista echa sirope rojo en el vaso |
| 4 | 5,47 → 6,47 | 1,00 | A | Reacción a cámara |
| 5 | 6,47 → 7,40 | 0,93 | B | Primer plano, vertido de mango |
| 6 | 7,40 → 8,40 | 1,00 | A | Reacción |
| 7 | 8,40 → 9,53 | 1,13 | B | Vertido (vaso más lleno) |
| 8 | 9,53 → 10,37 | 0,84 | A | Reacción |
| 9 | 10,37 → 11,43 | 1,06 | B | Vertido |
| 10 | 11,43 → 12,30 | 0,87 | A | Reacción |
| 11 | 12,30 → 13,50 | 1,20 | B | Vertido final |
| 12 | 13,50 → 14,83 | 1,33 | B | Tapa y pajita |
| 13 | 14,83 → 15,57 | 0,74 | A | Reacción |
| 14 | 15,57 → 17,60 | 2,03 | B | Una mano retira el vaso, queda el fondo desenfocado y entra el título |
| 15 | 17,60 → 21,60 | 4,00 | Cierre | Mismo fondo oscurecido, logo de Instagram y @usuario |

- **A** = persona a cámara (hilo narrativo). **B** = producto / b-roll.
- Estructura: gancho (A, 3,0 s) → A/B alternados estrictamente (5–13) → plano de remate del producto → título → cierre.

## 2. Ritmo de cortes

- **14 cortes en 17,6 s**, sin contar el cierre.
- Duración media de plano: **1,26 s**. Mediana: **1,06 s**. Mínimo: **0,74 s**. Máximo: **2,47 s**.
- En la parte central (5,47–15,57 s), A dura **0,74–1,00 s** y B dura **0,93–1,33 s**. El b-roll se queda en pantalla un **~15 % más** que la persona.
- Los planos largos (≥ 1,9 s) solo aparecen en tres sitios: la apertura (plano 1), el primer b-roll (plano 3, que presenta el producto) y el remate (plano 14).
- **Cortes a ritmo de la música:** la música va a **~93,75 BPM**, con una corchea cada 0,32 s y un compás cada 2,61 s. **9 de 13 cortes** caen a ±0,1 s de una corchea de esa rejilla, y los cortes 1,90 / 5,47 / 7,40 / 9,53 / 12,30 coinciden con el golpe de bombo.
- Los cortes son **secos en todos los casos**, sin fundidos entre planos.

## 3. Subtítulos

- **El vídeo de referencia no tiene subtítulos ni voz.** Los valores siguientes los he deducido de su tipografía y son todos **[SUPOSICIÓN]**:
  - **Fuente:** display de palo grueso con remates abocinados, como la del título. En Google Fonts lo más parecido es **«Bowlby One»** [SUPOSICIÓN].
  - **Tamaño:** 88 px de altura de mayúscula sobre 1080x1920 (es la altura de «LAZY SUMMER») [SUPOSICIÓN].
  - **Caja de texto:** todo en mayúsculas, ancho máximo 900 px, centrado [SUPOSICIÓN].
  - **Posición:** centro del texto en **y = 1300 px** (68 % de la altura), para no tapar la cara, que en los planos A queda entre el 25 % y el 55 % [SUPOSICIÓN].
  - **Palabras por bloque:** **1–3** (máximo 3), siguiendo el ritmo de ~1 s por plano [SUPOSICIÓN].
  - **Color base:** **#F7D5BC**, el crema del título (medido). Contorno: 6 px en #1A1410 [SUPOSICIÓN].
  - **Palabra destacada:** en **#C0392B** (rojo del sombrero / sirope) y a escala 1,10. Solo se destaca **la palabra que se está diciendo**: karaoke palabra a palabra [SUPOSICIÓN].
  - **Animación de entrada:** escala 0,85 → 1,0 en 4 fotogramas, con un muelle sin rebote (damping 200). **Salida:** corte seco [SUPOSICIÓN].

## 4. Textos y gráficos en pantalla

- **Gráfico de apertura:** sombrero (icono de la marca) en rojo, de **#A04C4F** medido con antialias a **#C0392B** [SUPOSICIÓN] en el tono plano.
  - Tamaño **186x138 px**, en **x = 458–644, y = 879–1017**: más o menos en el centro, a la altura del pecho.
  - Visible **0,0–0,5 s** y desaparece con un **fundido de 0,3 s** (0,5–0,8 s).
- **Título:**
  - Contenido: «NOW SERVING» (pequeño, encima), «LAZY SUMMER» (grande) y el icono del sombrero (pequeño, debajo).
  - Color **#F7D5BC**.
  - Caja del bloque: **x = 153–926 (72 % del ancho), y = 858–1063**, centrado; el centro del texto queda en y ≈ 960 px (50 %).
  - «NOW SERVING» mide unos 30 px de alto.
  - **Entra con un fundido de 0,2 s** (16,30–16,50 s), sobre el fondo vacío y desenfocado, **0,9 s después** de que salga el producto.
- **Marca de agua** (icono de Instagram + @usuario, ~18 px de alto, blanco al 80 % [SUPOSICIÓN]):
  - **Arriba a la derecha** (x ≈ 1000, y ≈ 160–180) hasta los 8,5 s.
  - **Abajo a la izquierda** (x ≈ 30, y ≈ 1450) desde los 9,0 s hasta el cierre.
- **Cierre (17,60–21,60):**
  - Corte seco al mismo fondo con el brillo bajado un **58 %** (luma media de 68 a 29) y la saturación casi a 0 (2/128).
  - El título se queda en un ~25 % de opacidad.
  - **Logo de Instagram** de ~90 px, centrado en y ≈ 935, que aparece de golpe en blanco. En los primeros 0,2 s se oscurece el fondo y en 0,4 s aparece el **@usuario** debajo (y ≈ 1040, ~22 px).
  - Desde 0,6 s el logo pasa de blanco a degradado de Instagram (rosa → morado → naranja) y vuelve a blanco a los 2,9 s.

## 5. B-roll

- Ocupa **9 de 15 planos** y **11,2 s de 17,6 s** (64 %).
- Todo es del **producto en proceso**: sirope, vertido, tapa, pajita. Siempre en primer plano o plano detalle.
- Cámara **fija** (sin movimiento apreciable entre fotogramas), con fondo a poca profundidad de campo [SUPOSICIÓN: grabado con f/1.8–2.8].
- Cada plano B **avanza el proceso un paso**: el vaso está cada vez más lleno. Nunca se repite un estado.
- Sale del último plano B a un fondo vacío sin cortar: **la mano retira el vaso del encuadre** (15,6–16,1 s) y ese hueco se usa para el título.

## 6. Transiciones

- **13 cortes secos** entre planos.
- **1 transición dentro del plano:** sacar el producto del encuadre, sin efecto de edición.
- **1 corte seco al cierre**, que coincide con el silencio de la música.
- **0 fundidos cruzados, 0 barridos y 0 transiciones con zoom.**

## 7. Zooms y movimiento

- **Sin zoom digital** en ningún plano (el encuadre no cambia de tamaño dentro de cada plano) [SUPOSICIÓN: puede haber un zoom < 3 % que no se aprecie a 2 fps].
- Planos A grabados **cámara en mano en contrapicado**. La persona se acerca hasta llenar el 60–70 % del ancho.
- El cambio de tamaño entre plano 1 (general) y plano 2 (medio corto) se hace **con el corte, no con zoom**.

## 8. Color

| Medida (luma 8 bit) | Exterior A | Producto B | Cierre |
|---|---|---|---|
| Negro (YMIN) | 23–26 | 28–32 | 16 |
| Sombras (YLOW p10) | 31–51 | 51–52 | 25 |
| Media (YAVG) | 106–127 | 80–81 | 29 |
| Altas (YHIGH p90) | 214–226 | 111–124 | 32 |
| Blanco (YMAX) | 236 | 236 | 236 |
| Saturación media | 10–11 | 15,6–17,1 | 1,9 |

- **Negros levantados:** el mínimo es de 23–32 frente a 16 de un negro puro. Es un look «mate» con un **+10 de levantamiento**.
- **Blancos limitados a 236**, sin llegar a recortar.
- **Saturación:** los exteriores van **desaturados** (~10) con cielo turquesa. El producto va **+55 % más saturado** que los planos A, para que destaquen el rojo y el amarillo.
- Tonos: exteriores fríos (turquesa / beis); interiores cálidos (marrón, rojo, amarillo).
- [SUPOSICIÓN] LUT tipo «teal & orange suave» y grano fino.

## 9. Sonido

- **Solo música, sin voz.** No se aprecian formantes de voz en el espectrograma, aunque en el plano 4 se mueven los labios [SUPOSICIÓN].
- **0,0–1,9 s:** intro con un tono sostenido (~1,2 kHz) y un barrido ascendente (*riser*) de 1,1 a 1,9 s. **El beat entra a 1,92 s, justo en el corte 1→2.**
- **1,9–17,48 s:** beat de ~93,75 BPM con bombo doble (pares de golpes separados 0,30 s), con un patrón de compás cada 2,61 s.
- **17,48–17,97 s: silencio total de 0,49 s** (*drop*), alrededor del corte al cierre (17,60).
- **17,97–19,18 s:** golpe final con cola de reverb. Silencio de 19,8 a 21,6 s.
- **Sonoridad:** **−13,4 LUFS** integrados, **LRA 2,8 LU** (muy comprimido). Frecuencias por encima de **16 kHz cortadas** (paso bajo por la compresión).
- [SUPOSICIÓN] SFX: los clics y el barrido de la intro pueden ser efectos y no parte de la canción.

---

## Correcciones aprobadas

_(Aquí se añaden las correcciones que me hagas y te gusten, con fecha.)_
