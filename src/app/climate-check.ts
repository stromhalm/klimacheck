export class ClimateCheck {

    public static get scores(): Array<{minPercent: number, title: string, text: string}> {
        return [
                    {
                        minPercent: 71,
                        title: 'Klimafüchse',
                        text: 'Ihr redet nicht nur über Umwelt- und Klimaschutz, sondern handelt auch dementsprechend – von euch können die meisten viel lernen. Auch, wenn ihr schon gut dabei seid: Gab es Bereiche, in denen "nein" angeklickt wurde? Dann sind das Bereiche, in denen ihr noch weiter kreativ für den Schutz unseres Planeten aktiv werden könnt.'
                    },
                    {
                        minPercent: 41,
                        title: 'Klima-Aufsteiger*innen',
                        text: 'Ihr habt bereits einige Klimaschutz-Aktivitäten umgesetzt, aber da ist noch Luft nach oben. Die Bereiche, in denen ihr mit _nein_ geantwortet habt, könnt ihr dabei als Anreiz nehmen, um noch mehr für unseren Planeten zu tun - schon wenig Aufwand kann große Wirkung entfalten!'
                    },
                    {
                        minPercent: 0,
                        title: 'Klima-Einsteiger*innen',
                        text: 'Ihr seid noch Klima-Einsteiger*innen. Bestimmt habt ihr aber schon einige Ideen, was ihr zum Schutz unseres Planeten unternehmen könnt. Die gute Nachricht: Schon mit kleinen Veränderungen könnt ihr eine Menge erreichen, also ran ans Werk!'
                    }
                ];
    }

    public static get topics(): Array<any> {
        return [
            {
                menuName: 'Energie & Gebäude',
                fullName: 'Energie in Geschäfts-/ Bildungsstätten',
                icon: 'lightbulb_outline',
                primaryColor: '#d0b539',
                secondaryColor: '#f3e872',
                pattern: 'ravenna.png',
                questions: [
                    {
                        points: 3,
                        category: 'Energie in Geschäftstätten',
                        question: 'Bezieht ihr Ökostrom oder nutzt eine alternative Strom- und Wärmegewinnung vor Ort (z.B. Photovoltaik)?',
                        true: 'Indem ihr Ökostrom bezieht, seid ihr Teil der Energiewende und leistet einen wichtigen gesellschaftlichen Beitrag für eine lebenswerte Zukunft! Wer Ökostrom nutzt, kann die Klimawirkung seiner Elektrogeräte schnell und dauerhaft reduzieren: Im Schnitt fallen dabei statt 633 Gramm CO2 pro Kilowattstunde nur 150 g/kWh an (also nur knapp ein Viertel!).',
                        false: 'Klimaschutz aktiv unterstützen: das geht sehr gut über den Wechsel zu einem Ökostrom-Anbieter. Seid Teil der Energiewende und unterstützt den Ausbau der Erneuerbaren Energiequellen! Stromerzeugung hat einen Anteil von 21,3 % am globalen CO2-Ausstoß. Wer Ökostrom nutzt, kann die Klimawirkung seiner Elektrogeräte schnell und dauerhaft reduzieren: Im Schnitt fallen dabei statt 633 Gramm CO2 pro Kilowattstunde nur 150 g/kWh an (also nur knapp ein Viertel!).  Zu einem Ökostrom-Anbieter wechseln geht ganz einfach: Anbieter aussuchen, Vertrag ausfüllen, abschicken. Fertig! Der neue Anbieter kümmert sich um die Kündigung des alten Vertrages. Der Wechsel zu Ökostrom lohnt sich oft auch finanziell: Ökostrom wird immer wettbewerbsfähiger, da er immer effizienter erzeugt werden kann. Achtet bei der Auswahl des Anbieters auf das „Grüner Strom Label“, denn auch hier gibt es Mogelpackungen.  Dieser Stromcheck zeigt euch, wie viel Ökostrom bei den einzelnen Anbietern für euch kostet:  http://www.klima-sucht-schutz.de/service/energiesparchecks/oekostromcheck/'
                    },
                    {
                        points: 2,
                        category: 'Energie in Geschäftstätten',
                        question: 'Habt ihr (vorwiegend oder ausschließlich) LEDs oder Energiesparlampen?',
                        true: 'Durch die Nutzung von LEDs spart ihr ca. 80% Strom gegenüber Glühlampen ein. Vorbildlich.',
                        false: 'LEDs sind rund 80% stromsparender als Glühlampen. Ihr spart beim Ersetzten von bereits einer 60-Watt-Glühbirne durch eine 11-Watt-LED-Lampe umgerechnet 26 Euro pro Jahr. Außerdem sind LEDs beim Einschalten sofort hell und damit auch gut für Räume geeignet, in denen das Licht oft an- und ausgemacht wird. Worauf ihr beim Kauf achten könnt, erfahrt ihr hier: http://www.be-smergy.de/energiespar-spezial/energiesparen-im-herbst-und-winter/es-werde-licht/'
                    },
                    {
                        points: 1,
                        category: 'Energie in Geschäftstätten',
                        question: 'Wird das Licht beim (längeren) Verlassen des Raumes ausgemacht?',
                        false: 'Schon wieder brennt das Licht, obwohl keiner im Raum ist? Tipp: Schreibt kleine Erinnerungszettel (z.B. „Licht aus?“), die auf oder über den Lichtschaltern anbringt.'
                    },
                    {
                        points: 1,
                        category: 'Energie in Geschäftstätten',
                        question: 'Werden im Büro Steckerleisten mit Ausschaltknopf genutzt?',
                        true: 'Super, dass ihr ausschaltbare Steckerleisten benutzt, denn: Mit dem, was wir im Stand-by-Modus in Deutschland pro Jahr verbrauchen, könnte der Strombedarf von Berlin für ein Jahr gedeckt werden.',
                        false: 'Es lohnt sich, ausschaltbare Steckdosenleisten zu verwenden, da viele Geräte im Standby-Modus große Stromfresser sind (das gilt auch für Handyladekabel oder PC-Netzteile, die nicht von der Steckdose genommen werden.). Daher spart ihr bares Geld, indem ihr elektrische Geräte mit einem Knopfdruck an der Leiste komplett ausschaltet. Schon gewusst? Mit dem, was wir im Stand-by-Modus in Deutschland pro Jahr verbrauchen, könnte der Strombedarf von Berlin für ein Jahr gedeckt werden.'
                    },
                    {
                        points: 2,
                        category: 'Energie in Geschäftstätten',
                        question: 'Haben eure Geräte eine hohe Energie-Effizienzklasse? (z.B. Kühlschrank, Spülmaschine, Waschmaschine - ab A++ effizient)',
                        false: 'Beim Kauf von neuen Elektrogeräten solltet ihr auf die Energieeffizienzklasse achten: Neue Geräte werden je nach Leistung in die Kategorien A+++ bis G eingeteilt, wobei A+++ die beste Energieeffizienzklasse ist. A ist mittlerweile schon Standard, also: Wenn du wirklich was für‘s Klima tun willst, geht es bei A++ los!  Auch wenn diese Geräte bei der Anschaffung mehr kosten, sparen sie diese Mehrkosten über ihren geringen Stromverbrauch wieder ein. Mit der kostenlosen App ecogator (http://www.ecogator.de/app/die-app-ecogator/) findet ihr im Handumdrehen ein neues energieeffizientes Gerät.'
                    },
                    {
                        points: 1,
                        category: 'Energie in Geschäftstätten',
                        question: 'Ist euer Kühlschrank auf die optimale Temperatur eingestellt, also nicht zu kalt? (7°C bzw. niedrige Reglerstufe, meist 1 oder 2: Wenn die Butter nicht streichfähig ist, ist der Kühlschrank zu kalt)',
                        false: 'Strom sparen ist der beste Klimaschutz. Bei der Nutzung von großen Geräten ist dies von besonderer Bedeutung: es lohnt sich, Spül- oder Waschmaschinen je nach Verschmutzung auf eine niedrigere Stufe zu stellen. Auch beim Kühlschrank reicht meist Stufe 1 oder 2 aus und er sollte nicht neben Hitzequellen (Herd/ Heizungen) stehen.'
                    },
                    {
                        points: 3,
                        category: 'Energie in Geschäftstätten',
                        question: 'Heizt ihr mit einem der folgenden Brennstoffe: Gas, Fernwärme, Biomasse (Pellets, …) oder Erdwärme?'
                    },
                    {
                        points: 3,
                        category: 'Energie in Geschäftstätten',
                        question: 'Sind eure Gebäude gedämmt und Fenster isoliert?',
                        true: 'Gebäude sind im Energiesektor ein „schlafender Riese“: Ihr Anteil am Energieverbrauch in Deutschland beträgt ca. 40 % - damit sind sie die größten Energieschlucker. Das müsste nicht so sein: Über 80 Prozent der Heizungen sowie der Gebäudetechnik in Deutschland sind nicht auf dem Stand der Technik.  Wie wäre es mit einem Energiecheck für euer Gebäude? Bei diesem Angebot der Verbraucherzentrale erfahrt ihr individuell, wie ihr Energie und bares Geld sparen könnt und gleichzeitig das Klima schützt: Ein Energieberater macht eine Bestandsaufnahme, beurteilt euren Strom- und Heizenergieverbrauch und identifiziert wichtige Stellschrauben für Einsparungen. Zusätzlich werden die Gebäudehülle (Außenwände, Fenster, Türen, Dach) sowie die Heizungsanlage (Wärmeerzeuger und Verteilsystem) unter energetischen Aspekten begutachtet. Dabei wird auch geprüft, ob prinzipiell der Einsatz erneuerbarer Energien möglich und sinnvoll ist.  Als Ergebnis erhaltet ihr einen Kurzbericht mit Handlungsempfehlungen. Dank der Förderung der Bundesregierung kostet der Check nur 20 €, die euch die Klima-Challenge erstatten kann. https://www.verbraucherzentrale-energieberatung.de/energiechecks_gebaeudecheck.php',
                        false: 'Gebäude sind im Energiesektor ein „schlafender Riese“: Ihr Anteil am Energieverbrauch in Deutschland beträgt ca. 40 % - damit sind sie die größten Energieschlucker. Das müsste nicht so sein: Über 80 Prozent der Heizungen sowie der Gebäudetechnik in Deutschland sind nicht auf dem Stand der Technik. Wie wäre es mit einem Energiecheck für euer Gebäude? Bei diesem Angebot der Verbraucherzentrale erfahrt ihr individuell, wie ihr Energie und bares Geld sparen könnt und gleichzeitig das Klima schützt: Ein Energieberater macht eine Bestandsaufnahme, beurteilt euren Strom- und Heizenergieverbrauch und identifiziert wichtige Stellschrauben für Einsparungen. Zusätzlich werden die Gebäudehülle (Außenwände, Fenster, Türen, Dach) sowie die Heizungsanlage (Wärmeerzeuger und Verteilsystem) unter energetischen Aspekten begutachtet. Dabei wird auch geprüft, ob prinzipiell der Einsatz erneuerbarer Energien möglich und sinnvoll ist.  Als Ergebnis erhaltet ihr einen Kurzbericht mit Handlungsempfehlungen. Dank der Förderung der Bundesregierung kostet der Check nur 20 €, die euch die Klima-Challenge erstatten kann. https://www.verbraucherzentrale-energieberatung.de/energiechecks_gebaeudecheck.php'
                    }
                ],
                scores: [
                    {
                        minPoints: 14,
                        text: 'Ihr seid helle Köpfe und verhaltet euch schon sehr klimafreundlich im Bereich Energie! Damit seid ihr echte Vorbilder. Erzählt auch anderen von eurem Verhalten.'
                    },
                    {
                        minPoints: 11,
                        text: 'Toll! In euren Geschäftsstellen/Bildungsstätten wird auf Energie geachtet, wodurch ihr bereits eine recht gute Energiebilanz vorweisen könnt! Es kann sein, dass ihr über manche Dinge im Bereich Energie nicht direkt entscheiden könnt, z.B. bei der Dämmung oder beim Heizen. Dennoch gibt es Einflussmöglichkeiten: Du könntest z.B. den Entscheidungsträger_innen diesen Klima-Check zeigen und (erste) Diskussionen anregen.'
                    },
                    {
                        minPoints: 7,
                        text: 'Ihr seid auf dem richtigen Weg. Mit den folgenden Tipps könnt ihr noch eins draufsetzen und im Klimaschutz ganz vorn dabei sein! Es kann sein, dass ihr über manche Dinge im Bereich Energie nicht direkt entscheiden könnt, z.B. bei der Dämmung oder beim Heizen. Dennoch gibt es Einflussmöglichkeiten: Du könntest z.B. den Entscheidungsträger_innen diesen Klima-Check zeigen und (erste) Diskussionen anregen.'
                    },
                    {
                        minPoints: 0,
                        text: 'In Sachen Energiesparen schneidet eurer Verband noch nicht so gut ab. Keine Sorge, das könnt ihr schnell ändern und schon mit einfachen Maßnahmen kinderleicht das Klima entlasten. Nur Mut, Veränderungen gehen leichter als gedacht. Es kann sein, dass ihr über manche Dinge im Bereich Energie nicht direkt entscheiden könnt, z.B. bei der Dämmung oder beim Heizen. Dennoch gibt es Einflussmöglichkeiten: Du könntest z.B. den Entscheidungsträger_innen diesen Klima-Check zeigen und (erste) Diskussionen anregen.'
                    }

                ]

            },
            {
                menuName: 'Verhalten',
                fullName: 'Verhalten im Büro',
                icon: 'accessibility',
                primaryColor: '#32a781',
                secondaryColor: '#3debb4',
                pattern: 'gplay.png',
                questions: [
                    {
                        points: 1,
                        category: 'Technische Geräte in Büro/Geschäftsstelle',
                        question: 'Schaltet ihr den Bildschirm am PC in der Pause aus? Bzw. schaltet ihr den Laptop in den Ruhezustand?',
                        true: 'Ihr wollt noch mehr Strom sparen? Dann könnten hier neue Tipps dabei sein: http://www.klima-sucht-schutz.de/energie-sparen/strom-sparen/strom-sparen-stromspartipps/strom-sparen-tipps-und-tricks/',
                        false: 'Achtet beim Arbeiten am PC/Laptop darauf, dass er sich schon bei kürzeren Denk- oder Arbeitspausen automatisch in den Standby-Modus schaltet. (siehe Systemeinstellungen). Nicht vergessen: Bei längeren Pausen (spätestens ab 1 Stunde) bitte komplett herunterfahren.'
                    },
                    {
                        points: 3,
                        category: 'Technische Geräte in Büro/Geschäftsstelle',
                        question: 'Prüft ihr vor der Neuanschaffung von elektronischen Geräten, ob alte Geräte repariert werden können?',
                        true: 'Tipp: Wenn das nächste Gerät seinen Geist aufgibt: Was haltet ihr davon, ein Repair-Café zu organisieren? Eine Checkliste und hilfreiche Tipps findet ihr hier: http://www.bund.net/uploads/media/Best-Practice-Repair_Cafe_01.pdf',
                        false: 'Tipp: Wenn das nächste Gerät seinen Geist aufgibt: Was haltet ihr davon, ein Repair-Café zu organisieren? Eine Checkliste und hilfreiche Tipps findet ihr hier: http://www.bund.net/uploads/media/Best-Practice-Repair_Cafe_01.pdf'
                    },
                    {
                        points: 2,
                        category: 'Technische Geräte in Büro/Geschäftsstelle',
                        question: 'Achtet ihr beim Neukauf auf ökologische Aspekte wie Effizienz und Öko-Siegel?',
                        true: 'Schön, dass ihr euch Gedanken über die Ökobilanz von Elektrogeräten macht. Zuverlässige Siegel sind z.B. der blaue Engel, der Energy Star und das TCO-Label.',
                        false: 'Beim Neukauf von Geräten lohnt es sich für Klima und Geldbeutel, auf Effizienz und Umweltfreundlichkeit zu achten. Eine gute Orientierung bieten Siegel wie der blaue Engel, der Energy Star und das TCO-Label.'
                    },
                    {
                        points: 2,
                        category: 'Heizung in Büro/Geschäftsstelle',
                        question: 'Achtet ihr in der kalten Jahreszeit auf eine klimafreundliche Temperatur in den Büroräumen? (nicht über 20 Grad)',
                        true: 'Super, dass ihr möglichst wenig heizt: Jedes Grad weniger spart etwa sechs Prozent der Heizenergie.',
                        false: 'Es lohnt sich, bewusst möglichst wenig zu heizen, denn Heizen ist eine wesentliche Quelle für die Klimaerwärmung. Heizen und Kochen verursachen 8% der globalen Treibhausgase. Dabei könnt ihr mit wenig Aufwand viel erreichen: Pro Grad weniger spart ihr etwa sechs Prozent der Heizenergie.'
                    },
                    {
                        points: 1,
                        category: 'Heizung in Büro/Geschäftsstelle',
                        question: 'Lüftet ihr stoßweise, statt die Fenster auf Kipp zu stellen (und schaltet dabei die Heizung aus)?',
                        true: 'Euer Lüftverhalten ist vorbildlich – und wichtig, denn: Ein Haushalt kann durch Stoßlüften (statt Fenster auf Kipp zu stellen) jährlich bis zu einer halben Tonne CO2 und bis zu 125 Euro sparen. Im Büro sieht das ähnlich aus!',
                        false: 'Stoßlüftung ist im Winter am besten fürs Klima. Das Kippen der Fenster sorgt kaum für Luftaustausch, sondern kühlt nur die Wände aus. Ein Haushalt kann durch Stoßlüften jährlich bis zu einer halben Tonne CO2 und bis zu 125 Euro sparen. Dafür am besten 3-4 mal täglich die Fenster komplett öffnen. Wichtig: Dabei die Heizung ausdrehen.  Hier gibt’s weitere (Spar)Tipps zum Heizen: http://www.klima-sucht-schutz.de/energie-sparen/heizenergie-sparen/heizkosten-sparen/richtig-heizen-die-10-besten-tipps/'
                    },
                    {
                        points: 1,
                        category: 'Müll/Plastikverbrauch in Büro/Geschäftsstelle',
                        question: 'Wird Müll konsequent getrennt? (d.h. Altpapier, Gelber Sack, Glas, Restmüll und idealerweise auch Biomüll werden separat gesammelt)',
                        true: 'Toll, dass ihr durch Mülltrennung Recycling ermöglicht, denn bei der Wiederverwendung der Rohstoffe wird viel Energie eingespart: Recyceltes Aluminium beispielsweise benötigt nur 5% der Herstellungsenergie für neu gewonnenes Aluminium. Noch besser für die Energiebilanz: Abfall ganz vermeiden ;)',
                        false: 'Recycling lohnt sich, denn bei der Wiederverwendung der Rohstoffe wird viel Energie eingespart: Recyceltes Aluminium beispielsweise benötigt nur 5% der Herstellungsenergie für neu gewonnenes Aluminium. Noch besser für die Energiebilanz: Abfall ganz vermeiden ;)'
                    },
                    {
                        points: 2,
                        category: 'Papier in Büro/Geschäftsstelle',
                        question: 'Versucht ihr, eure Ausdrucke auf ein notwendiges Minimum zu reduzieren und druckt standardmäßig beidseitig?',
                        false: 'Muss das sein? In Deutschland werden pro Jahr schätzungsweise 800.000 Tonnen Papier verbraucht. Ein Turm aus diesen Blättern (DIN A 4) wäre etwa 16.000 km hoch. Zum Vergleich: Die internationale Raumstation ISS fliegt in einer Höhe von ca. 400 km. Doppelseitiges Drucken lässt sich ganz einfach einstellen:  Für Windows: http://www.nachhaltigkeitsblock.de/punktum-beidseitig-drucken-windows/  Für Mac: http://www.nachhaltigkeitsblock.de/punktum-doppelseitung-drucken-mac/'
                    },
                    {
                        points: 2,
                        category: 'Papier in Büro/Geschäftsstelle',
                        question: 'Nutzt ihr Recycling-Papier?',
                        true: 'Ökologisch ist Recyclingpapier deshalb besser, weil die Papierfasern so sechsmal wiederverwendet werden können. Gegenüber Frischfaser-Papier müssen dabei keine Wälder abgeholzt und auch keine Zellstoffe schadstoff- und energiereich gewonnen werden. Auch Wasserverbrauch und -belastung sind deutlich geringer.',
                        false: 'Ökologisch ist Recyclingpapier deshalb besser, weil die Papierfasern so sechsmal wiederverwendet werden können. Gegenüber Frischfaser-Papier müssen dabei keine Wälder abgeholzt und auch keine Zellstoffe schadstoff- und energiereich gewonnen werden. Auch Wasserverbrauch und -belastung sind deutlich geringer.   Recycling-Papier kann heute einen so hohen Weißgrad haben, dass es nicht mehr von »neuem« Papier unterschieden werden kann. Dennoch ist Recyclingpapier nicht gleich Recyclingpapier. Am verlässlichsten ist hier das Siegel „Blauer Engel“, die (unterschiedlichen!) FSC-Siegel sind weniger streng. Mehr Infos: http://www.gruene-helden.de/wissen/oekopapiersiegel/'
                    },
                    {
                        points: 2,
                        category: 'Büromaterial in Büro/Geschäftsstelle',
                        question: 'Kauft ihr recycelte Gegenstände für das Büro (wie z.B. Toilettenpapier, Stifte, etc.) und/ oder benutzt wiederbefüllbare Verbrauchsutensilien? (z.B. Stifte, Seifenspender, Toner- und Tintenpatronen)?',
                        false: 'Beim Schul- und Bürobedarf gibt Produkte mit sehr unterschiedlicher Klimabilanz. Plastikprodukte beispielsweise sind umweltschädlich und oft von schlechter Qualität. Oft rechnet sich der höhere Kaufpreis durch die längere Lebensdauer der Produkte. Ökologische Büromaterialien gibt es mittlerweile in vielen Geschäften. Ein Versand, der sich auf ökologische Büromaterialien spezialisiert hat, ist memo: http://www.memo.de'
                    },
                    {
                        points: 2,
                        category: 'Büromaterial in Büro/Geschäftsstelle',
                        question: 'Achtet ihr beim Kauf von Produkten auf Umweltsiegel wie den Blauen Engel? (z.B. bei Büroartikeln, Möbeln)'
                    },
                    {
                        points: 2,
                        category: 'Werbung in Büro/Geschäftsstelle',
                        question: 'Vermeidet ihr Printprodukte wie Flyer, sofern möglich?'
                    },
                    {
                        points: 2,
                        category: 'Werbung in Büro/Geschäftsstelle',
                        question: 'Falls vorhanden, lasst ihr eure Printprodukte ökologisch drucken?',
                        true: 'Mit der Wahl einer Öko-Druckerei seid ihr schon sehr gut dabei, weiter so!',
                        false: 'Es gibt bereits einige Ökodruckereien, die Recycling-Papier und pflanzenbasierter Farbe - statt mineralölbasierter - verwenden: http://www.lokay.de/ http://www.dieumweltdruckerei.de/'
                    },
                    {
                        points: 2,
                        category: 'Werbung in Büro/Geschäftsstelle',
                        question: 'Versendet ihr Informationen (wie z.B. eine Verbandszeitung) per Mail statt per Post? Oder achtet darauf, sie nur selten per Post zu schicken? ',
                    },
                    {
                        points: 2,
                        category: 'Büromaterial in Büro/Geschäftsstelle',
                        question: 'Vermeidet ihr bewusst Give-Aways (z.B. für Stände) oder reduziert sie zugunsten nützlicher, nachhaltiger Gebrauchsgegenstände?',
                        false: 'Falls ihr auf Give-aways nicht verzichten wollt, nutzt doch nachhaltige Gebrauchsgegenstände?! Tipps gibt’s hier: http://oeko-werbeartikel.eu/'
                    }
                ],
                scores: [
                    {
                        minPoints: 26,
                        text: 'Herzlichen Glückwunsch! Ihr geht bewusst mit den technischen Geräten in eurem Büro/eurer Geschäftsstelle um und verhaltet euch sehr klimafreundlich! Weiter so! Erzählt auch anderen von eurem Verhalten.'
                    },
                    {
                        minPoints: 20,
                        text: 'Toll! In euren Geschäftsstellen/Bildungsstätten achtet ihr schon auf Energieverbrauch und handelt in vielen Punkten klimafreundlich! Wie ihr in Zukunft noch eins draufsetzen könnt, erfahrt ihr hier:'
                    },
                    {
                        minPoints: 16,
                        text: 'Im Büroalltag macht ihr euch bereits Gedanken über umweltfreundliches Verhalten und seid auf einem guten Weg. Der Klima-Challenge gefällt das! Wir haben ein paar Tipps für euch, wie ihr das weiter ausbauen könnt, damit euer Verband noch klimafreundlicher – und damit zum echten Vorreiter – wird:'
                    },
                    {
                        minPoints: 8,
                        text: 'Im Büroalltag agiert ihr in einigen Punkten schon sehr klimabewusst - ihr seid auf dem richtigen Weg! Mit den folgenden Tipps könnt ihr noch eins draufsetzen und im Klimaschutz ganz vorn dabei sein!'
                    },
                    {
                        minPoints: 0,
                        text: 'In Sachen klimafreundliches Verhalten im Büro schneidet eurer Verband noch nicht so gut ab, wodurch das Klima mehr als notwendig belastet wird. Keine Sorge, das könnt ihr schnell ändern und schon mit einfachen Maßnahmen kinderleicht das Klima entlasten.'
                    }
                ]
            },
            {
                menuName: 'Veranstaltungen',
                fullName: 'Veranstaltungen (z.B. Zeltlager, Seminare)',
                icon: 'event',
                primaryColor: '#246dcc',
                secondaryColor: '#5196f0',
                pattern: 'wov.png',
                questions: [
                    {
                        points: 3,
                        category: 'Verpflegung bei Veranstaltungen',
                        question: 'Gibt es rein vegetarische oder sogar vegane Mahlzeiten (ganz ohne tierische Produkte wie Milch oder Eier)?',
                        true: 'Mit eurem vegetarischen/ veganen Angebot entastet ihr das Klima enorm: Die Landwirtschaft trägt mit 14 Prozent erheblich zu dem von Menschen verursachten Klimawandel bei. Wusstet ihr, dass die CO2-Emissionen von vegetarischer Ernährung ca. halb so groß sind wie die bei Ernährung mit Fleisch? Vegane Ernährung verursacht im Vergleich zu vegetarischer Ernährung noch mal 75% weniger CO2-Emissionen.',
                        false: 'Die Landwirtschaft trägt mit ca. 14 Prozent erheblich zu dem von Menschen verursachten Klimawandel bei (sogar mehr als der Transportsektor!). Wusstet ihr, dass die CO2-Emissionen von vegetarischer Ernährung ungefähr halb so groß sind, wie die bei Ernährung mit Fleisch? Vegane Ernährung verursacht im Vergleich zu vegetarischer Ernährung noch mal 75% weniger CO2-Emissionen. Vegane Gerichte sind auch in anderer Hinsicht praktisch: Auch Teilnehmer_innen, die z.B. aus religiösen Gründen kein (Schweine-)Fleisch oder Menschen mit Laktoseintoleranz können sie essen.'
                    },
                    {
                        points: 2,
                        category: 'Verpflegung bei Veranstaltungen',
                        question: 'Werden Bio-Zutaten verwendet?'
                    },
                    {
                        points: 2,
                        category: 'Verpflegung bei Veranstaltungen',
                        question: 'Wird darauf geachtet, Lebensmittel möglichst saisonal (Obst, Gemüse) und regional zu kaufen?',
                        true: 'Was kann man mit dem Gemüse der aktuellen Saison kochen? Hier gibt’s Rezepte: http://www.regional-saisonal.de/',
                        false: 'Was kann man mit dem Gemüse der aktuellen Saison kochen? Hier gibt’s Rezepte: http://www.regional-saisonal.de/'
                    },
                    {
                        points: 2,
                        category: 'Verpflegung bei Veranstaltungen',
                        question: 'Wird Übriggebliebenes weiter verwendet, z.B. mitgegeben, statt es wegzuschmeißen?',
                        true: 'Weitere Tipps zu einer klimafreundlichen Ernährung: http://www.be-smergy.de/energiespar-spezial/klimafreundliche-ernaehrung/10-tipps-fuer-eine-klimafreundliche-ernaehrung/',
                        false: 'Weiter Tipps zu einer klimafreundlichen Ernährung: http://www.be-smergy.de/energiespar-spezial/klimafreundliche-ernaehrung/10-tipps-fuer-eine-klimafreundliche-ernaehrung/'
                    },
                    {
                        points: 2,
                        category: 'Müll/Plastikverbrauch bei Veranstaltungen',
                        question: 'Versucht ihr, unnötige Verpackung und Portionspackungen, insbesondere aus Plastik, zu vermeiden (z.B. Trinkpäckchen, einzeln verpackte Süßigkeiten etc.)',
                        true: 'Sehr gut, dass ihr Plastik vermeidet, denn Plastik ist sehr beständig und wird Jahrhunderte lang nicht zersetzt – lediglich zu Mikroplastik zerkleinert, woran sich viele giftige Chemikalien binden, welche Fische und im zweiten Schritt auch wir aufnehmen. Außerdem gibt es in den Ozeanen gigantische Plastik-Müllstrudel. Jedes Jahr tötet der Müll im Meer mehrere hunderttausend Meerestiere, die sich daran verheddern oder ihn fressen.',
                        false: 'Es gibt gute Gründe, den Plastikverbrauch auf ein Minimum zu reduzieren, z.B.: Plastik ist sehr beständig und wird Jahrhunderte lang nicht zersetzt – lediglich zu Mikroplastik zerkleinert, daran binden sich viele giftige Chemikalien, die Fische und im zweiten Schritt damit auch wir aufnehmen. Außerdem gibt es in den Ozeanen mittlerweile gigantische Müllstrudel aus Plastik. Jedes Jahr tötet der Müll im Meer mehrere hunderttausend Meerestiere, die sich daran verheddern oder ihn fressen. Die beste Verpackung für das Klima ist keine Verpackung. Ansonsten gilt grundsätzlich, dass größere Verpackungseinheiten ökologisch sinnvoller sind. Natürlich muss man natürlich auch immer darauf achten, ob die Mengen aufgebraucht werden können, bevor sie schlecht werden. Wo dies möglich ist, sollte auf Mehrweg-Glasverpackungen zurückgegriffen werden, z.B. bei Getränken.'
                    },
                    {
                        points: 1,
                        category: 'Müll/Plastikverbrauch bei Veranstaltungen',
                        question: 'Wird bei Veranstaltungen Müll konsequent getrennt?',
                    },
                    {
                        points: 2,
                        category: 'Tagungshaus bei Veranstaltungen',
                        question: 'Achtet ihr bei der Wahl des Tagungshauses auf eine klimafreundliche und ökologische Ausrichtung bzw. macht ihr eure Ansprechpartner_innen dort darauf aufmerksam, dass euch das wichtig ist?',
                        true: 'Weitere Tipps zu einer klimafreundlichen Ernährung: http://www.be-smergy.de/energiespar-spezial/klimafreundliche-ernaehrung/10-tipps-fuer-eine-klimafreundliche-ernaehrung/',
                        false: 'Wenn ihr nächstes Mal ein Tagungshaus auswählt könntet ihr zusätzlich auf folgende Kriterien achten: Wird das Haus mit Ökostrom versorgt? Gibt es Vorrichtungen für einen geringeren Wasserverbrauch? Bietet das Haus vegetarische/vegane Verpflegungen mit regionalen, saisonalen Bio-Zutaten an? Wenn diese Punkte nicht erfüllt sind und ihr euch trotzdem für das Haus entscheidet, regt doch an, dass das Tagungshaus dies ändert – Wünsche der Gäste stoßen oft auf offene Ohren!'
                    },
                    {
                        points: 3,
                        category: 'Anreise bei Veranstaltungen',
                        question: 'Reist ihr zu Veranstaltungen mit dem Rad/zu Fuß an, oder wenn das nicht geht mit Bus oder Bahn?',
                        true: 'Ihr tut sehr gut daran, euch über die Anreise Gedanken zu machen: Bei durchschnittlicher Auslastung ist das Auto gegenüber Zug und Reisebus ein vielfach klimaschädlicheres Verkehrsmittel: pro zurückgelegtem Kilometer verursacht eine Person mit dem Auto 142 g, mit dem Reisebus 32 g und mit dem Zug 41 g Kohlenstoffdioxid (CO2).',
                        false: 'Bei durchschnittlicher Auslastung ist das Auto gegenüber Zug und Reisebus ein viel klimaschädlicheres Verkehrsmittel: pro zurückgelegtem Kilometer verursacht eine Person mit dem Auto 142 g, mit dem Reisebus 32 g und mit dem Zug 41 g Kohlenstoffdioxid (CO2).'
                    },
                    {
                        points: 2,
                        category: 'Anreise bei Veranstaltungen',
                        question: 'Wenn ihr mit dem Auto anreisen müsst, bildet ihr Fahrgemeinschaften?'
                    },
                    {
                        points: 2,
                        category: 'Anreise bei Veranstaltungen',
                        question: 'Belohnt ihr die ökologische Anreise in euren Fahrtkosten-Erstattungsrichtlinien? (z.B. durch Besserstellung Bahn vs. Auto)',
                        false: 'Ihr könntet z.B. über die Erstattung der Fahrtkosten die Bahnfahrer_innen begünstigen – oder die Anfangszeit des Seminars so legen, dass es den Teilnehmer_innen möglich ist, mit Bus und Bahn anzureisen. Unter Umständen ist es notwendig, dass ihr einen Abholservice für die Teilnehmer-innen anbietet (manchmal bieten auch große Tagungshäuser einen an).'
                    },
                    {
                        points: 1,
                        category: 'Anreise bei Veranstaltungen',
                        question: 'Prüft ihr die Erreichbarkeit des Hauses mit öffentlichen Verkehrsmitteln, bevor ihr euch für ein Tagungshaus entscheidet und fordert die Teilnehmenden auf, mit diesen anzureisen?',
                        false: 'Falls das Tagungshaus abgelegen ist, dann könntest du als Veranstalter_in , wenn alle einverstanden sind, die Teilnahmeliste an alle verschicken, so dass Fahrgemeinschaften gebildet werden können.'
                    },
                    {
                        points: 1,
                        category: 'Anreise bei Veranstaltungen',
                        question: 'Achtet ihr bei Einkaufsfahrten oder Materialtransporten darauf, Fahrten zusammenzulegen, um unnötige Wege zu sparen?',
                        true: 'Wenn ihr mal etwas transportieren müsst: Leiht euch doch ein Lastenrad aus! Macht Spaß, hält fit und schont das Klima. Hier bieten Privatpersonen (kostenlos oder gegen kleinen Preis) ihre Räder zum Leihen an: http://www.velogistics.net/de/ Oder ihr bestellt einen Radkurier! Z.B. hier für Hannover: http://www.tretwerk-fahrradkurier.de/',
                        false: 'Wenn ihr mal etwas transportieren müsst: Leiht euch doch ein Lastenrad aus! Macht Spaß, hält fit und schont das Klima. Hier bieten Privatpersonen (kostenlos oder gegen kleinen Preis) ihre Räder zum Leihen an: http://www.velogistics.net/de/ Oder ihr bestellt einen Radkurier! Z.B. hier für Hannover: http://www.tretwerk-fahrradkurier.de/'
                    }
                ],
                scores: [
                    {
                        minPoints: 20,
                        text: 'Gratulation! Euer Veranstaltungen sind sehr klimafreundlich! Macht weiter so und erzählt auch gerne anderen Verbänden davon! So werdet ihr zum Vorbild und stoßt auch außerhalb eures Verbandes Veränderungen an!'
                    },
                    {
                        minPoints: 13,
                        text: 'Super! Viele Aspekte eurer Veranstaltungen sind bereits klimafreundlich. Weiter so! Wie ihr noch andere Bereiche klimafreundlicher gestalten könnt, erfahrt ihr hier.'
                    },
                    {
                        minPoints: 7,
                        text: 'Im Bereich "Veranstaltungen" schneidet eurer Verband noch nicht so gut ab. Keine Sorge, das könnt ihr schnell ändern und schon mit einfachen Maßnahmen kinderleicht das Klima entlasten.'
                    },
                    {
                        minPoints: 0,
                        text: 'Noch sind eure Veranstaltungen nicht so klimafreundlich. Nur Mut, es gibt bereits einfache Maßnahmen mit großer Wirkung.'
                    }
                ]
            },
            {
                menuName: 'Verband',
                fullName: 'Verankerung im Verband',
                icon: 'group',
                primaryColor: '#e93d2a',
                secondaryColor: '#ff6161',
                pattern: 'asanoha.png',
                questions: [
                    {
                        points: 2,
                        category: 'Verankerung im Verband',
                        question: 'Informiert ihr eure Mitglieder über umwelt- und klimafreundliches Verhalten? (z.B. in eurer Zeitschrift, per Mail oder bei Veranstaltungen?)'
                    },
                    {
                        points: 3,
                        category: 'Verankerung im Verband',
                        question: 'Gibt es Workshops oder Veranstaltungen zum Thema für die Verbandsmitglieder?',
                        true: 'Möchtet ihr noch mehr über Klimawandel und Klimaschutz lernen? Bucht einen Klima-Workshop mit viel Bewegung, Ratespaß und voller Aha-Effekte über den Klimawandel und wie jede_r einzelne aktiv werden kann. Unsere Teamer_innen kommen gerne zu euch! (Ob bei der Juleica-Schulung, der Landesversammlung oder im Zeltlager: Dauer & Schwerpunkte nach Absprache) Die Klima-Challenge hält auch noch weitere Angebote für euch bereit, wie eine Solar-Handyladestation und eine Geocaching-Tour.',
                        false: 'Möchtet ihr mehr über Klimawandel und Klimaschutz lernen? Bucht einen Klima-Workshop mit viel Bewegung, Ratespaß und voller Aha-Effekte über den Klimawandel und wie jede_r einzelne aktiv werden kann. Unsere Teamer_innen kommen gerne zu euch! (Ob bei der Juleica-Schulung, der Landesversammlung oder im Zeltlager: Dauer & Schwerpunkte nach Absprache) Die Klima-Challenge hält auch noch weitere Angebote für euch bereit, wie eine Solar-Handyladestation und eine Geocaching-Tour.'
                    },
                    {
                        points: 2,
                        category: 'Verankerung im Verband',
                        question: 'Gibt es in eurem Verband/ eurer Gruppe Empfehlungen zur klimafreundlichen Gestaltung von Jugendarbeit in Richtlinien oder Satzung bzw. als Leitfaden/Checkliste?',
                    },
                    {
                        points: 3,
                        category: 'Verankerung im Verband',
                        question: 'Macht ihr bei der Klima-Challenge mit?',
                        true: 'Toll, dass auch ihr bei der Klima-Challenge dabei seid und somit gemeinsam mit anderen jungen Menschen ein Zeichen für mehr Klimaschutz setzt! Weiter so!',
                        false: 'Bei der Klima-Challenge mitzumachen ist ganz einfach: klimafreundliche Aktion ausdenken oder buchen, durchführen, auf der Website eintragen (klima-challenge.de) und Klima-Punkte sammeln. Dabei könnt ihr tolle Preise gewinnen und tragt dazu bei, dass der niedersächsische Umweltminister seinen nächsten Einsatz einlösen muss, z.B. mit Jugendlichen eine „Schnippeldisko“ durchführen oder beim Poetry Slam für das Klima slammen.'
                    },
                ],
                scores: [
                    {
                        minPoints: 0,
                        text: 'Ihr seid an unseren Angeboten interessiert oder habt noch Fragen? Dann wendet euch gerne an anna-maria@janun.de! Denkt dran: Wenn euch dieser Klima-Check dazu angeregt hat, klimafreundliche Veränderungen durchzuführen, tragt sie doch gleich ins Punktesystem ein, sammelt dafür Klimapunkte und sichert eure Chance auf tolle Preise! :) http://klimachallenge.de/mitmachen'
                    }
                ]
            }
        ];
    }
}
