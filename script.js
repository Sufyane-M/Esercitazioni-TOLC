let currentQuestion = 0;
const userAnswers = []; // Array per memorizzare le risposte dell'utente

const questions = [
    // Domande 1-6 esistenti
    {
        text: "La differenza fra un decimillesimo e \\(10^{-4}\\):",
        options: [
            "A: vale un decimo",
            "B: vale 0",
            "C: vale un centesimo",
            "D: vale un millesimo",
            "E: vale un numero negativo"
        ],
        correct: "B",
        explanation: `
            <p><strong>La risposta corretta è B.</strong></p>
            <p><strong>Definizione di Decimillesimo:</strong></p>
            <p>Un decimillesimo è definito come:</p>
            <p>\\[
                 \\text{decimillesimo} = \\frac{1}{10^4} = \\frac{1}{10000} = 0,0001
            \\]</p>
            <p><strong>Calcolo di \\(10^{-4}\\):</strong></p>
            <p>\\[
                10^{-4} = \\frac{1}{10^4} = \\frac{1}{10000} = 0,0001
            \\]</p>
            <p><strong>Determinazione della Differenza:</strong></p>
            <p>La differenza fra un decimillesimo e \\(10^{-4}\\) è:</p>
            <p>\\[
                0,0001 - 0,0001 = 0
            \\]</p>
            <p>Quindi, la differenza è zero, confermando che l'opzione <strong>B</strong> è corretta.</p>
        `
    },
    {
        text: "Il \\(2\\%\\) del \\(30\\%\\) di una certa quantità:",
        options: [
            "A: corrisponde al \\(60\\%\\) di quella quantità",
            "B: corrisponde al \\(6\\%\\) di quella quantità",
            "C: corrisponde al \\(32\\%\\) di quella quantità",
            "D: dipende dal valore della quantità",
            "E: corrisponde allo \\(0,6\\%\\) di quella quantità"
        ],
        correct: "E",
        explanation: `
            <p><strong>La risposta corretta è E.</strong></p>
            
            <p><strong>Calcolo di \\(2\\%\\) del \\(30\\%\\) di una certa quantità:</strong></p>
            
            <p>Per determinare quanto sia il 2% del 30% di una certa quantità, seguiamo questi passaggi:</p>
            
            <ol>
                <li>
                    <strong>Converti le percentuali in valori decimali:</strong>
                    <p>\\[
                        2\\% = 0,02
                    \\]</p>
                    <p>\\[
                        30\\% = 0,30
                    \\]</p>
                </li>
                <li>
                    <strong>Moltiplia i valori decimali:</strong>
                    <p>\\[
                        0,02 \\times 0,30 = 0,006
                    \\]</p>
                </li>
                <li>
                    <strong>Converti il risultato in percentuale:</strong>
                    <p>\\[
                        0,006 = 0,6\\%
                    \\]</p>
                </li>
            </ol>
            
            <p>Quindi, il 2% del 30% di una certa quantità è \\(0,6\\%\\), confermando che l'opzione <strong>E</strong> è corretta.</p>
        `
    },    
    {
        text: "Stabilire quale delle seguenti affermazioni è vera:",
        options: [
            "A: \\(x^2 - 7x + 12 = (x + 3)(x + 4)\\)",
            "B: \\(x^2 - 7x + 12 = (x - 3)(x + 4)\\)",
            "C: \\(x^2 - 7x + 12 = (x - 3)(x - 4)\\)",
            "D: \\(x^2 - 7x + 12 = (x + 3)(x - 4)\\)",
            "E: \\(x^2 - 7x + 12 = \\frac{3x + 1}{3x + 12}\\)"
        ],
        correct: "C",
        explanation: `
            <p><strong>La risposta corretta è C.</strong></p>
            
            <p><strong>Fattorizzazione del Trinomio:</strong></p>
            
            <p>Consideriamo il trinomio \\(x^2 - 7x + 12\\). Per fattorizzarlo, dobbiamo trovare due numeri che:</p>
            
            <ol>
                <li>
                    <strong>Si moltiplicano per ottenere il termine costante:</strong>
                    <p>\\[
                        12 = 3 \\times 4
                    \\]</p>
                </li>
                <li>
                    <strong>Si sommano per ottenere il coefficiente del termine di mezzo:</strong>
                    <p>\\[
                        3 + 4 = 7
                    \\]</p>
                </li>
            </ol>
            
            <p>Poiché stiamo cercando due numeri che si sommano a \\(-7\\), scegliamo \\(-3\\) e \\(-4\\), perché:</p>
            
            <ol>
                <li>
                    <p>\\[
                        (-3) \\times (-4) = 12
                    \\]</p>
                </li>
                <li>
                    <p>\\[
                        (-3) + (-4) = -7
                    \\]</p>
                </li>
            </ol>
            
            <p>Quindi, possiamo fattorizzare il trinomio come:</p>
            
            <p>\\[
                x^2 - 7x + 12 = (x - 3)(x - 4)
            \\]</p>
            
            <p>Verifichiamo espandendo i fattori:</p>
            
            <p>\\[
                (x - 3)(x - 4) = x(x - 4) - 3(x - 4) = x^2 - 4x - 3x + 12 = x^2 - 7x + 12
            \\]</p>
            
            <p>Poiché la fattorizzazione risulta corretta, confermiamo che l'opzione <strong>C</strong> è la risposta giusta.</p>
        `
    },    
    {
        text: "Carlo ha completato l’album delle figurine solo per il \\(75\\%\\), Giulio gli regala le \\(10\\) figurine mancanti. Quante figurine contiene l’album?",
        options: [
            "A: \\(40\\)",
            "B: \\(70\\)",
            "C: \\(100\\)",
            "D: \\(25\\)",
            "E: \\(85\\)"
        ],
        correct: "A",
        explanation: `
            <p><strong>La risposta corretta è A.</strong></p>
            
            <p><strong>Calcolo del Numero Totale di Figurine:</strong></p>
            
            <p>Carlo ha completato il <strong>75%</strong> dell'album, quindi il <strong>25%</strong> è ancora mancante. Giulio gli regala <strong>10 figurine</strong> che rappresentano questo <strong>25%</strong>.</p>
            
            <p>Per trovare il numero totale di figurine nell'album (indicato come <em>X</em>), possiamo impostare la seguente proporzione:</p>
            
            <p>\\[
                25\\% \\text{ di } X = 10
            \\]</p>
            
            <p>Convertiamo le percentuali in decimali:</p>
            
            <p>\\[
                0,25 \\times X = 10
            \\]</p>
            
            <p>Risolviamo per <em>X</em>:</p>
            
            <p>\\[
                X = \\frac{10}{0,25} = 40
            \\]</p>
            
            <p>Quindi, l'album contiene <strong>40 figurine</strong>.</p>
        `
    },    
    {
        text: "Se \\( f(x) = |5 - 3x| \\), allora \\( f(2) \\) è uguale a:",
        options: [
            "A: \\( f(-1) \\)",
            "B: \\( f\\left(\\dfrac{4}{3}\\right) \\)",
            "C: \\( f(-2) \\)",
            "D: \\( f(0) \\)",
            "E: \\( f(1) \\)"
        ],
        correct: "B",
        explanation: `
            <p><strong>La risposta corretta è B.</strong></p>
            <p><strong>Calcolo di \\( f(2) \\):</strong></p>
            <p>\\[
                f(2) = |5 - 3 \\times 2| = |5 - 6| = |-1| = 1
            \\]</p>
            <p><strong>Determinare per quali valori di \\( a \\) si ha \\( f(a) = 1 \\):</strong></p>
            <p>Dobbiamo risolvere l'equazione:</p>
            <p>\\[
                |5 - 3a| = 1
            \\]</p>
            <p>Questo si verifica quando:</p>
            <ol>
                <li>
                    \\( 5 - 3a = 1 \\)
                    <p>\\[
                        5 - 3a = 1
                    \\]</p>
                    <p>\\[
                        -3a = 1 - 5 = -4
                    \\]</p>
                    <p>\\[
                        a = \\dfrac{4}{3}
                    \\]</p>
                </li>
                <li>
                    \\( 5 - 3a = -1 \\)
                    <p>\\[
                        5 - 3a = -1
                    \\]</p>
                    <p>\\[
                        -3a = -1 - 5 = -6
                    \\]</p>
                    <p>\\[
                        a = 2
                    \\]</p>
                </li>
            </ol>
            <p>Quindi, \\( f\\left(\\dfrac{4}{3}\\right) = 1 \\) e \\( f(2) = 1 \\), quindi \\( f(2) = f\\left(\\dfrac{4}{3}\\right) \\). L'opzione B è quindi corretta.</p>
        `
    },
    {
        text: "Se \\(P(x)\\) e \\(Q(x)\\) sono espressioni definite per ogni \\(x\\) reale e tali che \\(P(x) \\geq 0\\) se e solo se \\(x \\geq 2\\) e \\(Q(x) \\geq 0\\) se e solo se \\(x \\leq 1\\), allora la disequazione \\(P(x) \\cdot Q(x) > 0\\) è verificata se:",
        options: [
            "A: le informazioni non sono sufficienti per rispondere",
            "B: \\(x \\geq 2\\)",
            "C: \\(1 < x < 2\\)",
            "D: \\(x < 1\\) oppure \\(x > 2\\)",
            "E: \\(x \\leq 1\\)"
        ],
        correct: "C",
        explanation: `
            <p><strong>La risposta corretta è C.</strong></p>
            
            <p><strong>Analisi delle Espressioni:</strong></p>
            
            <p>Dato che:</p>
            <ul>
                <li>\\(P(x) \\geq 0\\) se e solo se \\(x \\geq 2\\)</li>
                <li>\\(Q(x) \\geq 0\\) se e solo se \\(x \\leq 1\\)</li>
            </ul>
            
            <p>Vogliamo determinare per quali valori di \\(x\\) la disequazione \\(P(x) \\cdot Q(x) > 0\\) è verificata.</p>
            
            <p><strong>Condizioni per \\(P(x) \\cdot Q(x) > 0\\):</strong></p>
            <ol>
                <li>
                    <strong>Entrambi i fattori positivi:</strong>
                    <p>Questo richiederebbe che:</p>
                    <ul>
                        <li>\\(P(x) \\geq 0\\), cioè \\(x \\geq 2\\)</li>
                        <li>\\(Q(x) \\geq 0\\), cioè \\(x \\leq 1\\)</li>
                    </ul>
                    <p>Tuttavia, non esistono valori di \\(x\\) che soddisfano contemporaneamente \\(x \\geq 2\\) e \\(x \\leq 1\\). Quindi, questa condizione è impossibile.</p>
                </li>
                <li>
                    <strong>Entrambi i fattori negativi:</strong>
                    <p>Questo richiederebbe che:</p>
                    <ul>
                        <li>\\(P(x) < 0\\), cioè \\(x < 2\\)</li>
                        <li>\\(Q(x) < 0\\), cioè \\(x > 1\\)</li>
                    </ul>
                    <p>Quindi, dobbiamo trovare i valori di \\(x\\) tali che:</p>
                    <p>\\[
                        1 < x < 2
                    \\]</p>
                    <p>In questo intervallo, entrambi \\(P(x)\\) e \\(Q(x)\\) sono negativi, e quindi il loro prodotto è positivo.</p>
                </li>
            </ol>
            
            <p><strong>Conclusione:</strong></p>
            <p>La disequazione \\(P(x) \\cdot Q(x) > 0\\) è verificata solo quando \\(1 < x < 2\\), corrispondente all'opzione <strong>C</strong>.</p>
        `
    },    
    // Nuove Domande Aggiunte
    {
        text: "In un piano cartesiano, quale delle seguenti rette è parallela alla retta passante per i punti di coordinate \\((1;0)\\) e \\((0;1)\\)?",
        options: [
            "A: \\(x + y = 3\\)",
            "B: \\(x = y - 1\\)",
            "C: \\(x = 2\\)",
            "D: \\(y = 1\\)",
            "E: \\(2x + 3y = 0\\)"
        ],
        correct: "A",
        explanation: `
            <p><strong>La risposta corretta è A.</strong></p>
            
            <p><strong>Determinazione del Coefficiente Angolare della Retta Data:</strong></p>
            
            <p>Consideriamo i punti \((1;0)\) e \((0;1)\).</p>
            
            <p>Il coefficiente angolare (\(m\)) di una retta passante per due punti \((x_1, y_1)\) e \((x_2, y_2)\) si calcola con la formula:</p>
            
            <p>\\[
                m = \\frac{y_2 - y_1}{x_2 - x_1}
            \\]</p>
            
            <p>Sostituendo i valori dei punti dati:</p>
            
            <p>\\[
                m = \\frac{1 - 0}{0 - 1} = \\frac{1}{-1} = -1
            \\]</p>
            
            <p>Quindi, la retta data ha coefficiente angolare \(m = -1\).</p>
            
            <p><strong>Analisi delle Opzioni:</strong></p>
            
            <ol>
                <li><strong>Opzione A: \\(x + y = 3\\)</strong>
                    <p>Riscriviamo in forma esplicita \(y = mx + b\):</p>
                    <p>\\[
                        y = -x + 3
                    \\]</p>
                    <p>Il coefficiente angolare è \(m = -1\).</p>
                    <p>Questo corrisponde al coefficiente angolare della retta data, quindi è parallela.</p>
                </li>
                <li><strong>Opzione B: \\(x = y - 1\\)</strong>
                    <p>Riscriviamo in forma esplicita \(y = mx + b\):</p>
                    <p>\\[
                        y = x + 1
                    \\]</p>
                    <p>Il coefficiente angolare è \(m = 1\).</p>
                    <p>Questo non corrisponde al coefficiente angolare della retta data.</p>
                </li>
                <li><strong>Opzione C: \\(x = 2\\)</strong>
                    <p>Questa è una retta verticale con coefficiente angolare non definito.</p>
                    <p>Non può essere parallela alla retta data.</p>
                </li>
                <li><strong>Opzione D: \\(y = 1\\)</strong>
                    <p>Questa è una retta orizzontale con coefficiente angolare \(m = 0\).</p>
                    <p>Non corrisponde al coefficiente angolare della retta data.</p>
                </li>
                <li><strong>Opzione E: \\(2x + 3y = 0\\)</strong>
                    <p>Riscriviamo in forma esplicita \(y = mx + b\):</p>
                    <p>\\[
                        y = - \\frac{2}{3}x
                    \\]</p>
                    <p>Il coefficiente angolare è \\(m = - \\frac{2}{3} \\).</p>
                    <p>Questo non corrisponde al coefficiente angolare della retta data.</p>
                </li>
            </ol>
            
            <p>Solo l'opzione <strong>A: \\(x + y = 3\\)</strong> ha lo stesso coefficiente angolare (\(m = -1\)) della retta data, quindi è parallela.</p>
        `
    },    
    {
        text: "In un piano cartesiano, quale dei seguenti punti è interno al triangolo racchiuso tra le tre rette:<br>\\(r_1: y = 0\\)<br>\\(r_2: y = 2x\\)<br>\\(r_3: y = -x + 7\\)?",
        options: [
            "A: \\(P = (1; -3)\\)",
            "B: \\(P = (3; 5)\\)",
            "C: \\(P = (4; 4)\\)",
            "D: \\(P = (-3; 2)\\)",
            "E: \\(P = (3; 3)\\)"
        ],
        correct: "E",
        explanation: `
            <p><strong>La risposta corretta è E.</strong></p>
            
            <p><strong>Determinazione del Punto Interno al Triangolo:</strong></p>
            
            <p>Per verificare quale punto è interno al triangolo delimitato dalle tre rette date, dobbiamo determinare l'intersezione delle rette e analizzare la posizione dei punti rispetto ai lati del triangolo.</p>
            
            <p><strong>Trovare i Vertici del Triangolo:</strong></p>
            
            <ol>
                <li>
                    <strong>Intersezione di \\(r_1\\) e \\(r_2\\):</strong>
                    <p>Rette: \\(y = 0\\) e \\(y = 2x\\)</p>
                    <p>Uguagliamo le equazioni:</p>
                    <p>\\[
                        0 = 2x \\Rightarrow x = 0
                    \\]</p>
                    <p>Quindi, il vertice è \\((0; 0)\\).</p>
                </li>
                <li>
                    <strong>Intersezione di \\(r_1\\) e \\(r_3\\):</strong>
                    <p>Rette: \\(y = 0\\) e \\(y = -x + 7\\)</p>
                    <p>Uguagliamo le equazioni:</p>
                    <p>\\[
                        0 = -x + 7 \\Rightarrow x = 7
                    \\]</p>
                    <p>Quindi, il vertice è \\((7; 0)\\).</p>
                </li>
                <li>
                    <strong>Intersezione di \\(r_2\\) e \\(r_3\\):</strong>
                    <p>Rette: \\(y = 2x\\) e \\(y = -x + 7\\)</p>
                    <p>Uguagliamo le equazioni:</p>
                    <p>\\[
                        2x = -x + 7 \\Rightarrow 3x = 7 \\Rightarrow x = \\dfrac{7}{3}
                    \\]</p>
                    <p>Calcoliamo \\(y\\):</p>
                    <p>\\[
                        y = 2 \\times \\dfrac{7}{3} = \\dfrac{14}{3}
                    \\]</p>
                    <p>Quindi, il vertice è \\(\\left(\\dfrac{7}{3}; \\dfrac{14}{3}\\right)\\).</p>
                </li>
            </ol>
            
            <p><strong>Analisi dei Punti:</strong></p>
            
            <p>Ora, esaminiamo ciascun punto per determinare se è interno al triangolo:</p>
            
            <ol>
                <li><strong>Opzione A: \\(P = (1; -3)\\)</strong>
                    <p>Questo punto si trova al di sotto della retta \\(r_1: y = 0\\), quindi è al di fuori del triangolo.</p>
                </li>
                <li><strong>Opzione B: \\(P = (3; 5)\\)</strong>
                    <p>Verifichiamo se soddisfa tutte le disuguaglianze:</p>
                    <ul>
                        <li>\\(y > 0\\) (soddisfatto)</li>
                        <li>\\(y < 2x  \\Rightarrow  5 < 6\\) (soddisfatto)</li>
                        <li>\\(y < -x + 7  \\Rightarrow  5 < 4\\) (non soddisfatto)</li>
                    </ul>
                    <p>Non soddisfa tutte le condizioni, quindi è al di fuori del triangolo.</p>
                </li>
                <li><strong>Opzione C: \\(P = (4; 4)\\)</strong>
                    <p>Verifichiamo le disuguaglianze:</p>
                    <ul>
                        <li>\\(y > 0 \\Rightarrow 4 > 0\\) (soddisfatto)</li>
                        <li>\\(y < 2x \\Rightarrow 4 < 8\\) (soddisfatto)</li>
                        <li>\\( y < -x + 7 &nbsp; \\Rightarrow 4 < 3 \\) (non soddisfatto)</li>
                    </ul>
                    <p>Non soddisfa tutte le condizioni, quindi è al di fuori del triangolo.</p>
                </li>
                <li><strong>Opzione D: \\(P = (-3; 2)\\)</strong>
                    <p>Questo punto si trova a sinistra dell'intersezione delle rette, quindi è al di fuori del triangolo.</p>
                </li>
                <li><strong>Opzione E: \\(P = (3; 3)\\)</strong>
                    <p>Verifichiamo le disuguaglianze:</p>
                    <ul>
                        <li>\\(y > 0 \\Rightarrow 3 > 0\\) (soddisfatto)</li>
                        <li>\\(y < 2x \\Rightarrow 3 < 6\\) (soddisfatto)</li>
                        <li>\\(y < -x + 7 \\Rightarrow 3 < 4\\) (soddisfatto)</li>
                    </ul>
                    <p>Il punto soddisfa tutte le condizioni, quindi è interno al triangolo.</p>
                </li>
            </ol>
            
            <p><strong>Conclusione:</strong></p>
            <p>Solo il punto <strong>E: \\(P = (3; 3)\\)</strong> si trova all'interno del triangolo delimitato dalle rette date.</p>
        `
    },    
    {
        text: "A parità di tutte le altre condizioni (materiale, rugosità, stato di pulizia, etc.) serve meno quantità di pittura per tinteggiare:",
        options: [
            "A: una piramide avente tutte le facce che sono triangoli equilateri (tetraedro) di lato 1 metro",
            "B: un cubo di lato 1 metro",
            "C: un cilindro (circolare retto) di raggio 1 metro e di altezza 1 metro",
            "D: una sfera di raggio 1 metro",
            "E: un cono (circolare retto) di altezza 1 metro e base di raggio 1 metro"
        ],
        correct: "A",
        explanation: `
            <p><strong>La risposta corretta è A.</strong></p>
            
            <p><strong>Determinazione della Quantità di Pittura Necessaria:</strong></p>
            
            <p>Per tinteggiare un oggetto, la quantità di pittura necessaria dipende dalla sua superficie totale. Pertanto, dobbiamo confrontare le superfici dei diversi solidi elencati.</p>
            
            <p><strong>Calcolo delle Superfici:</strong></p>
            
            <ol>
                <li><strong>Opzione A: Tetraedro (Piramide con facce triangolari equilateri)</strong>
                    <p>Un tetraedro ha 4 facce triangolari equilateri. La superficie totale (\(S\)) è:</p>
                    <p>\\[
                        S = 4 \\times \\text{Area di una faccia}
                    \\]</p>
                    <p>Area di un triangolo equilatero di lato \\(a = 1\\) metro:</p>
                    <p>\\[
                        \\text{Area} = \\frac{\\sqrt{3}}{4} a^2 = \\frac{\\sqrt{3}}{4} \\times 1^2 = \\frac{\\sqrt{3}}{4} \\approx 0,433 \\text{ m}^2
                    \\]</p>
                    <p>Superficie totale:</p>
                    <p>\\[
                        S = 4 \\times 0,433 \\approx 1,732 \\text{ m}^2
                    \\]</p>
                </li>
                <li><strong>Opzione B: Cubo di lato 1 metro</strong>
                    <p>Un cubo ha 6 facce quadrate. La superficie totale (\(S\)) è:</p>
                    <p>\\[
                        S = 6 \\times \\text{Area di una faccia} = 6 \\times 1^2 = 6 \\text{ m}^2
                    \\]</p>
                </li>
                <li><strong>Opzione C: Cilindro (raggio 1 m, altezza 1 m)</strong>
                    <p>La superficie totale (\(S\)) di un cilindro è la somma delle superfici laterale e delle due basi:</p>
                    <p>\\[
                        S = 2\\pi r h + 2\\pi r^2
                    \\]</p>
                    <p>Con \\(r = 1\\) m e \(h = 1\) m:</p>
                    <p>\\[
                        S = 2\\pi \\times 1 \\times 1 + 2\\pi \\times 1^2 = 2\\pi + 2\\pi = 4\\pi \\approx 12,566 \\text{ m}^2
                    \\]</p>
                </li>
                <li><strong>Opzione D: Sfera di raggio 1 metro</strong>
                    <p>La superficie totale (\(S\)) di una sfera è:</p>
                    <p>\\[
                        S = 4\\pi r^2 = 4\\pi \\times 1^2 = 4\\pi \\approx 12,566 \\text{ m}^2
                    \\]</p>
                </li>
                <li><strong>Opzione E: Cono (raggio 1 m, altezza 1 m)</strong>
                    <p>La superficie totale (\(S\)) di un cono è la somma della superficie laterale e della base:</p>
                    <p>\\[
                        S = \\pi r \\sqrt{r^2 + h^2} + \\pi r^2
                    \\]</p>
                    <p>Con \\(r = 1\) m e \(h = 1\) m:</p>
                    <p>\\[
                        S = \\pi \\times 1 \\times \\sqrt{1^2 + 1^2} + \\pi \\times 1^2 = \\pi \\times \\sqrt{2} + \\pi \\approx 4,443 \\text{ m}^2
                    \\]</p>
                </li>
            </ol>
            
            <p><strong>Riepilogo delle Superfici Totali:</strong></p>
            <ul>
                <li>Tetraedro: <em>~1,732 m²</em></li>
                <li>Cubo: <em>6 m²</em></li>
                <li>Cilindro: <em>~12,566 m²</em></li>
                <li>Sfera: <em>~12,566 m²</em></li>
                <li>Cono: <em>~4,443 m²</em></li>
            </ul>
            
            <p><strong>Conclusione:</strong></p>
            <p>Il <strong>tetraedro</strong> ha la superficie totale più piccola tra i solidi elencati, quindi richiede la minor quantità di pittura.</p>
            <p>Pertanto, l'opzione <strong>A</strong> è corretta.</p>
        `
    },    
    {
        text: "Si ha:<br>\\(\\sqrt[3]{x^3 + 8} < 0\\) se e solo se:",
        options: [
            "A: \\(x < 0\\)",
            "B: \\(x < 1\\)",
            "C: per nessun valore reale di \\(x\\)",
            "D: \\(x < -2\\)",
            "E: \\(x < -1\\)"
        ],
        correct: "D",
        explanation: `
            <p><strong>La risposta corretta è D.</strong></p>
            
            <p><strong>Soluzione Semplificata:</strong></p>
            
            <p>Consideriamo l'inequazione:</p>
            
            <p>\\[
                \\sqrt[3]{x^3 + 8} < 0
            \\]</p>
            
            <p>Per risolvere questa inequazione, seguiamo questi passaggi:</p>
            
            <ol>
                <li>
                    <strong>Isolare l'espressione all'interno della radice cubica:</strong>
                    <p>Poiché la radice cubica è una funzione crescente, l'inequazione è soddisfatta se e solo se:</p>
                    <p>\\[
                        x^3 + 8 < 0
                    \\]</p>
                </li>
                <li>
                    <strong>Risolvere l'inequazione:</strong>
                    <p>\\[
                        x^3 + 8 < 0 \\Rightarrow x^3 < -8
                    \\]</p>
                </li>
                <li>
                    <strong>Trovare il valore di \(x\):</strong>
                    <p>Prendiamo la radice cubica di entrambi i lati:</p>
                    <p>\\[
                        x < \\sqrt[3]{-8} = -2
                    \\]</p>
                </li>
            </ol>
            
            <p>Quindi, l'inequazione \\(\\sqrt[3]{x^3 + 8} < 0\\) è verificata per tutti i valori di \(x\) tali che:</p>
            
            <p>\\[
                x < -2
            \\]</p>
            
            <p>Pertanto, l'opzione <strong>D: \(x < -2\)</strong> è corretta.</p>
        `
    }    
];

function initializeQuiz() {
    generateQuestionNav();
    showQuestion();
}

function generateQuestionNav() {
    const navContainer = document.getElementById('question-nav');
    navContainer.innerHTML = ''; // Resetta il contenuto

    questions.forEach((question, index) => {
        const button = document.createElement('button');
        button.classList.add('nav-button');
        button.textContent = index + 1;
        button.setAttribute('data-index', index);
        button.setAttribute('aria-label', `Vai alla domanda ${index + 1}`);
        button.setAttribute('title', `Vai alla domanda ${index + 1}`);

        // Aggiungi classi per completare la navigazione
        if (userAnswers[index]) {
            button.classList.add('completed');
            button.classList.add(userAnswers[index] === question.correct ? 'correct' : 'incorrect');
        }

        // Evidenzia la domanda corrente
        if (index === currentQuestion) {
            button.classList.add('active');
        }

        // Aggiungi un gestore di eventi per la navigazione
        button.addEventListener('click', () => {
            currentQuestion = index;
            showQuestion();
            scrollToQuestion();
        });

        navContainer.appendChild(button);
    });
}

function updateQuestionNav() {
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach((button, index) => {
        // Rimuovi la classe 'active' da tutti i bottoni
        button.classList.remove('active');

        // Aggiungi la classe 'active' al bottone della domanda corrente
        if (index === currentQuestion) {
            button.classList.add('active');
        }

        // Aggiungi o rimuovi la classe 'completed' in base alla risposta
        if (userAnswers[index]) {
            button.classList.add('completed');
            button.classList.remove('correct', 'incorrect');
            button.classList.add(userAnswers[index] === questions[index].correct ? 'correct' : 'incorrect');
        } else {
            button.classList.remove('completed', 'correct', 'incorrect');
        }
    });
}

function scrollToQuestion() {
    const questionSection = document.getElementById('question-section');
    questionSection.scrollIntoView({ behavior: 'smooth' });
}

function showQuestion() {
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const explanation = document.getElementById('explanation');

    explanation.style.display = 'none';
    const current = questions[currentQuestion];

    // Reabilita il pulsante "Correggi"
    const checkButton = document.querySelector('.btn');
    checkButton.disabled = false;

    // Utilizziamo innerHTML per interpretare le espressioni matematiche e la formattazione HTML
    questionText.innerHTML = current.text;
    let optionsHTML = '';

    current.options.forEach((option, index) => {
        const id = `option${index}`;
        optionsHTML += `
            <div class="option">
                <input type="radio" id="${id}" name="options" value="${option[0]}" aria-labelledby="${id}-label" ${userAnswers[currentQuestion] === option[0] ? 'checked' : ''}>
                <label for="${id}" id="${id}-label">${option}</label>
            </div>
        `;
    });

    optionsContainer.innerHTML = optionsHTML;

    // Aggiorna la barra di navigazione
    updateQuestionNav();

    // Chiamata a MathJax per processare le nuove espressioni
    MathJax.typesetPromise();

    if (userAnswers[currentQuestion]) {
        explanation.style.display = 'block';
        explanation.className =
            `explanation ${userAnswers[currentQuestion] === current.correct ? 'correct' : 'incorrect'}`;
        explanation.innerHTML = userAnswers[currentQuestion] === current.correct ?
            `<strong>✔️ Corretto!</strong> ${current.explanation}` :
            `<strong>❌ Errato.</strong> ${current.explanation}`;
        MathJax.typesetPromise();
    }
}

// Funzione per mostrare il toast di errore
function showErrorToast() {
    const toast = document.getElementById('toast');
    toast.classList.remove('hidden');
    
    // Nascondi il toast dopo 3 secondi
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// Modifica la funzione checkAnswer per usare il toast invece dell'alert
function checkAnswer() {
    const selected = document.querySelector('input[name="options"]:checked');
    const explanation = document.getElementById('explanation');
    const checkButton = document.querySelector('.btn');
    
    if (!selected) {
        // Mostra il toast di errore invece dell'alert
        showErrorToast();
        return;
    }
    
    userAnswers[currentQuestion] = selected.value;
    checkButton.disabled = true; // Disabilita il pulsante dopo la selezione
    
    const current = questions[currentQuestion];
    explanation.style.display = 'block';
    if (selected.value === current.correct) {
        explanation.className = 'explanation correct';
        explanation.innerHTML = `<strong>✔️ Corretto!</strong> ${current.explanation}`;
    } else {
        explanation.className = 'explanation incorrect';
        explanation.innerHTML = `<strong>❌ Errato.</strong> ${current.explanation}`;
    }
    
    // Chiamata a MathJax per processare le nuove espressioni
    MathJax.typesetPromise();
}


function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showSummary();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function showSummary() {
    // Nascondi la sezione delle domande e mostra la sezione del resoconto
    document.getElementById('question-section').style.display = 'none';
    const summarySection = document.getElementById('summary-section');
    summarySection.style.display = 'block';

    let correctAnswers = 0;
    let summaryHTML = `
        <div class="summary-header">
            <h2>Resoconto delle Risposte</h2>
            <p>Di seguito trovi il riepilogo delle tue risposte e il punteggio totale.</p>
        </div>
    `;

    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index] ? userAnswers[index] : 'Nessuna risposta';
        const isCorrect = userAnswer === question.correct;
        if (isCorrect) {
            correctAnswers++;
        }

        summaryHTML += `
            <div class="summary-item">
                <div class="summary-header">
                    <p>Domanda ${index + 1}: ${question.text}</p>
                    <span class="icon ${isCorrect ? 'icon-correct' : 'icon-incorrect'}">
                        ${isCorrect ? '✔️' : '❌'}
                    </span>
                </div>
                <p><strong>Risposta data:</strong> <span class="${isCorrect ? 'correct' : 'incorrect'}">${userAnswer !== 'Nessuna risposta' ? userAnswer : 'Nessuna risposta'}</span></p>
                <p><strong>Risposta corretta:</strong> ${question.correct}</p>
            </div>
        `;
    });

    // Calcola la metà delle domande
    const totalQuestions = questions.length;
    const halfQuestions = totalQuestions / 2;

    // Determina la classe in base al punteggio
    const scoreClass = correctAnswers >= halfQuestions ? 'summary-total-pass' : 'summary-total-fail';

    summaryHTML += `
        <div class="summary-total ${scoreClass}">
            <h3>Punteggio totale: ${correctAnswers} / ${totalQuestions}</h3>
            <button class="btn" onclick="restartQuiz()">🔄 Ricomincia Quiz</button>
        </div>
    `;

    summarySection.innerHTML = summaryHTML;

    // Chiamata a MathJax per processare le nuove espressioni
    MathJax.typesetPromise();
}

function restartQuiz() {
    currentQuestion = 0;
    userAnswers.length = 0; // Reset delle risposte

    // Nascondi il resoconto e mostra la sezione delle domande
    document.getElementById('summary-section').style.display = 'none';
    document.getElementById('question-section').style.display = 'block';

    // Nascondi eventuali spiegazioni residue
    document.getElementById('explanation').style.display = 'none';

    // Reabilita il pulsante "Correggi"
    const checkButton = document.querySelector('.btn');
    checkButton.disabled = false;

    // Resetta la barra di navigazione
    generateQuestionNav();

    // Riporta la pagina all'inizio
    window.scrollTo(0, 0);

    // Mostra la prima domanda
    showQuestion();
}
